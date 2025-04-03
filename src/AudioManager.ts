import * as THREE from 'three'; // Import THREE for Vector3 type

/**
 * Manages audio playback for the game using the Web Audio API.
 * Handles background music and positional sound effects.
 */
export class AudioManager {
    // Audio context and nodes for Web Audio API
    private audioContext: AudioContext | null = null;
    private backgroundMusicSource: AudioBufferSourceNode | null = null; // Store the source node
    private backgroundMusicBuffer: AudioBuffer | null = null; // Store the decoded buffer
    private backgroundMusicGain: GainNode | null = null; // Gain node for background music volume
    private effectsGain: GainNode | null = null; // Master gain node for all sound effects
    
    // Sound effect buffers
    private soundBuffers: Map<string, AudioBuffer> = new Map();
    
    private isInitialized: boolean = false;
    private defaultMusicVolume: number = 0.05; // Default volume for music
    private defaultEffectsVolume: number = 0.8; // Default volume for sound effects
    private isMusicPlaying: boolean = false; // Track if music should be playing
    private areEffectsEnabled: boolean = true; // Track if effects should be playing
    private musicPath: string;

    // Positional audio settings
    private readonly refDistance = 10; // Distance where volume is 1 (in world units)
    private readonly rolloffFactor = 1; // How quickly volume drops off (1 = linear)
    private readonly maxDistance = 10000; // Max distance for hearing the sound

    /**
     * Creates a new AudioManager instance.
     * @param {string} musicPath Path to the background music file.
     */
    constructor(musicPath: string = '/audio/spaceman_showdown.mp3') {
        this.musicPath = musicPath;
        console.log('AudioManager created');
    }

    /**
     * Initializes the audio system. Needs to be called after user interaction.
     * Creates the AudioContext and loads all audio files.
     */
    public async initialize(): Promise<void> {
        if (this.isInitialized) return;

        try {
            // Create AudioContext after user interaction (e.g., a click)
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            console.log('AudioContext created.');

            // Create gain nodes for volume control
            this.backgroundMusicGain = this.audioContext.createGain();
            this.backgroundMusicGain.gain.value = this.defaultMusicVolume;
            this.backgroundMusicGain.connect(this.audioContext.destination); // Connect music gain to output

            this.effectsGain = this.audioContext.createGain();
            this.effectsGain.gain.value = this.areEffectsEnabled ? this.defaultEffectsVolume : 0;
            this.effectsGain.connect(this.audioContext.destination); // Connect effects gain to output

            // Load background music and sound effects
            // Use Promise.all to load concurrently
            await Promise.all([
                this.loadAudioBuffer(this.musicPath).then(buffer => {
                    this.backgroundMusicBuffer = buffer;
                    console.log('Background music loaded.');
                }),
                this.loadSoundEffect('laserShoot', '/audio/laser_shoot.mp3'),
                this.loadSoundEffect('ufoHit', '/audio/loud-thud.mp3'),
                this.loadSoundEffect('ufoCrash', '/audio/explosion.mp3')
            ]);

            this.isInitialized = true;
            console.log('AudioManager initialized successfully.');

            // If music was intended to play before initialization, start it now
            if (this.isMusicPlaying) {
                this.playBackgroundMusic();
            }

        } catch (error) {
            console.error('Error initializing AudioManager or loading audio:', error);
            // Handle initialization failure (e.g., show a message to the user)
            this.isInitialized = false; // Ensure it's marked as not initialized
            // We can't use audio features if the context failed to create
            this.audioContext = null; 
            this.backgroundMusicGain = null;
            this.effectsGain = null;
        }
    }
    
    /**
     * Loads an audio file from the given URL and decodes it into an AudioBuffer.
     * @param {string} url Path to the audio file.
     * @returns {Promise<AudioBuffer>} A promise that resolves with the decoded AudioBuffer.
     * @private
     */
    private async loadAudioBuffer(url: string): Promise<AudioBuffer> {
        if (!this.audioContext) {
             throw new Error("AudioContext not initialized.");
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for ${url}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            // Decode the audio data into a buffer
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            return audioBuffer;
        } catch (error) {
            console.error(`Failed to load or decode audio from ${url}:`, error);
            throw error; // Re-throw the error to be caught by the caller
        }
    }

    /**
     * Loads a sound effect and stores its buffer.
     * @param {string} name The key name to store the sound buffer under.
     * @param {string} url The path to the sound effect file.
     * @private
     */
    private async loadSoundEffect(name: string, url: string): Promise<void> {
         try {
             const buffer = await this.loadAudioBuffer(url);
             this.soundBuffers.set(name, buffer);
             console.log(`Sound effect '${name}' loaded from ${url}`);
         } catch (error) {
             // Error is logged in loadAudioBuffer, just note which sound failed
             console.error(`Could not load sound effect: ${name}`);
         }
    }

    // --- Background Music Controls ---

    /**
     * Starts playing the background music loop.
     * @private
     */
    private playBackgroundMusic(): void {
        if (!this.audioContext || !this.backgroundMusicGain || !this.backgroundMusicBuffer || this.backgroundMusicSource) {
            // Not ready or already playing
            return;
        }

        // Create a buffer source for the music
        this.backgroundMusicSource = this.audioContext.createBufferSource();
        this.backgroundMusicSource.buffer = this.backgroundMusicBuffer;
        this.backgroundMusicSource.loop = true; // Ensure music loops
        
        // Connect source to gain node, then gain node to destination
        this.backgroundMusicSource.connect(this.backgroundMusicGain);
        
        this.backgroundMusicSource.start(); // Start playback now
        console.log('Background music started.');

         // Handle disposal of the source node once it finishes playing
         // This is good practice, though less critical for looping sounds unless explicitly stopped
         this.backgroundMusicSource.onended = () => {
             if (this.backgroundMusicSource) {
                 this.backgroundMusicSource.disconnect();
                 this.backgroundMusicSource = null;
                 // If it ended but should still be playing (e.g., manually stopped), restart logic might be needed
                 // For now, assumes onended means it was stopped intentionally or the loop was turned off.
                 console.log('Background music source ended and disconnected.');
             }
         };
    }

    /**
     * Stops the background music playback.
     * @private
     */
    private stopBackgroundMusic(): void {
        if (this.backgroundMusicSource) {
            this.backgroundMusicSource.stop(); // Stop playback immediately
            // The onended handler will take care of disconnecting and nullifying
            console.log('Background music stopped.');
        }
    }

    /**
     * Sets the volume of the background music.
     * @param {number} volume Volume level between 0 and 1.
     */
    public setMusicVolume(volume: number): void {
        if (!this.backgroundMusicGain) return;
        // Ensure volume is within valid range [0, 1]
        volume = Math.max(0, Math.min(1, volume));
        // Use setTargetAtTime for smoother volume changes (optional but good practice)
        this.backgroundMusicGain.gain.setTargetAtTime(volume, this.audioContext!.currentTime, 0.01); 
        console.log(`AudioManager: Music volume set to ${volume}`);
    }

    /**
     * Enables or disables the background music based on the provided state.
     * @param {boolean} enabled True to play/resume music, false to pause.
     */
    public setMusicEnabled(enabled: boolean): void {
        console.log(`AudioManager: Setting music enabled state to: ${enabled}`);
        this.isMusicPlaying = enabled; // Store the desired state

        if (!this.isInitialized || !this.audioContext) {
            console.warn("AudioManager: Cannot change music state, not initialized yet.");
            return;
        }

        if (enabled) {
             // Start music if it's not already playing
             if (!this.backgroundMusicSource && this.backgroundMusicBuffer) {
                 this.playBackgroundMusic();
             } else if (this.audioContext.state === 'suspended') {
                 // If context was suspended (e.g., due to inactivity), resume it
                 this.audioContext.resume().then(() => {
                     console.log("AudioContext resumed for music.");
                     // Ensure music starts if it wasn't playing
                     if (!this.backgroundMusicSource && this.backgroundMusicBuffer) {
                         this.playBackgroundMusic();
                     }
                 }).catch(e => console.error("Error resuming AudioContext:", e));
             } else {
                 // If already playing, ensure volume is correct (might have been muted)
                 this.setMusicVolume(this.backgroundMusicGain?.gain.value ?? this.defaultMusicVolume);
             }
        } else {
            // Stop music if it is playing
            this.stopBackgroundMusic();
        }
    }

    // --- Sound Effect Controls ---

     /**
      * Plays a sound effect by its loaded name.
      * This is a general non-positional playback method.
      * @param {string} name The key name of the loaded sound effect.
      * @param {number} [volume=1] Optional volume multiplier (0 to 1).
      * @private
      */
     private playSound(name: string, volume: number = 1): void {
         if (!this.audioContext || !this.effectsGain || !this.areEffectsEnabled) return;

         const buffer = this.soundBuffers.get(name);
         if (!buffer) {
             console.warn(`Sound effect '${name}' not found or not loaded.`);
             return;
         }

          // Resume context if suspended (important for effects after user inactivity)
          if (this.audioContext.state === 'suspended') {
             this.audioContext.resume().catch(e => console.error("Error resuming AudioContext for effect:", e));
          }

         // Create a source node for this specific playback instance
         const source = this.audioContext.createBufferSource();
         source.buffer = buffer;

         // Create a gain node for individual effect volume adjustment (optional)
         const individualGain = this.audioContext.createGain();
         individualGain.gain.value = Math.max(0, Math.min(1, volume)); // Clamp volume

         // Connect: Source -> Individual Gain -> Master Effects Gain -> Destination
         source.connect(individualGain);
         individualGain.connect(this.effectsGain);

         source.start(); // Play the sound immediately

         // Clean up the source node once it finishes playing
         source.onended = () => {
             source.disconnect();
             individualGain.disconnect();
             // console.log(`Sound effect '${name}' finished playing.`);
         };
     }

     /**
      * Plays a sound effect with 3D positioning.
      * @param {string} name The key name of the loaded sound effect.
      * @param {THREE.Vector3} position The world position where the sound originates.
      * @param {number} [volume=1] Optional volume multiplier (e.g., 2.0 for 2x louder).
      * @private
      */
     private playPositionalSound(name: string, position: THREE.Vector3, volume: number = 1): void {
         if (!this.audioContext || !this.effectsGain || !this.areEffectsEnabled) return;

         const buffer = this.soundBuffers.get(name);
         if (!buffer) {
             console.warn(`Positional sound effect '${name}' not found or not loaded.`);
             return;
         }

         // Resume context if suspended
         if (this.audioContext.state === 'suspended') {
             this.audioContext.resume().catch(e => console.error("Error resuming AudioContext for positional effect:", e));
         }

         // Create a source node
         const source = this.audioContext.createBufferSource();
         source.buffer = buffer;

         // Create a PannerNode for 3D audio effects
         const panner = this.audioContext.createPanner();

         // Configure the PannerNode for distance-based attenuation and 3D positioning
         panner.panningModel = 'HRTF'; // More realistic 3D audio (can use 'equalpower' if issues arise)
         panner.distanceModel = 'inverse'; // Volume decreases realistically with distance (1/distance)
         panner.refDistance = this.refDistance;       // Distance at which volume is 1
         panner.maxDistance = this.maxDistance;     // Maximum distance to hear the sound
         panner.rolloffFactor = this.rolloffFactor; // How quickly the sound attenuates
         panner.coneInnerAngle = 360; // Sound radiates equally in all directions
         panner.coneOuterAngle = 360;
         panner.coneOuterGain = 0;

         // Set the position of the sound source in 3D space
         // Note: Web Audio API uses Y-up coordinate system. Ensure THREE.js coords are compatible or convert.
         // Assuming THREE.js coordinates match Web Audio:
         panner.positionX.setValueAtTime(position.x, this.audioContext.currentTime);
         panner.positionY.setValueAtTime(position.y, this.audioContext.currentTime);
         panner.positionZ.setValueAtTime(position.z, this.audioContext.currentTime);

         // Create a gain node for individual volume control before the master effects gain
         const individualVolumeGain = this.audioContext.createGain();
         // Allow boosting, but maybe clamp reasonably high, e.g., 5x max? Let's start without upper clamp.
         individualVolumeGain.gain.value = Math.max(0, volume); 

         // Connect: Source -> Panner -> Individual Volume -> Master Effects Gain -> Destination
         source.connect(panner);
         panner.connect(individualVolumeGain);
         individualVolumeGain.connect(this.effectsGain);

         source.start(); // Play the sound

         // Clean up the nodes once the sound finishes playing
         source.onended = () => {
             source.disconnect();
             panner.disconnect();
              // console.log(`Positional sound effect '${name}' finished playing.`);
         };
     }


     // --- Public Play Methods ---

     /**
      * Plays the laser shooting sound effect from the listener's position (non-positional).
      */
     public playLaserShoot(): void {
          this.playSound('laserShoot', 0.7); // Play at 70% of master effects volume
     }

     /**
      * Plays the UFO hit sound effect at the specified world position.
      * @param {THREE.Vector3} position The world position of the impact.
      */
     public playUfoHit(position: THREE.Vector3): void {
         // Play UFO hit sound 2.5x louder than base
         this.playPositionalSound('ufoHit', position, 2.5);
     }

     /**
      * Plays the UFO crash/explosion sound effect at the specified world position.
      * @param {THREE.Vector3} position The world position of the crash.
      */
     public playUfoCrash(position: THREE.Vector3): void {
         // Play UFO crash sound 2.5x louder than base
         this.playPositionalSound('ufoCrash', position, 2.5);
     }


    // --- Listener Position (Crucial for Positional Audio) ---

    /**
     * Updates the position and orientation of the listener (usually the camera or player).
     * Required for positional audio calculations. Call this every frame.
     * @param {THREE.Vector3} position The listener's world position.
     * @param {THREE.Vector3} forwardDirection The direction the listener is facing (unit vector).
     * @param {THREE.Vector3} upDirection The listener's upward direction (unit vector).
     */
    public updateListenerPosition(position: THREE.Vector3, forwardDirection: THREE.Vector3, upDirection: THREE.Vector3): void {
        if (!this.audioContext || !this.isInitialized) return;

        const listener = this.audioContext.listener;

        // Set position
        // Use setTargetAtTime for smoother updates if needed, but direct setValueAtTime is often fine for listener
        if (listener.positionX) { // Check if new AudioListener properties are available
             listener.positionX.setValueAtTime(position.x, this.audioContext.currentTime);
             listener.positionY.setValueAtTime(position.y, this.audioContext.currentTime);
             listener.positionZ.setValueAtTime(position.z, this.audioContext.currentTime);
             // Set orientation
             listener.forwardX.setValueAtTime(forwardDirection.x, this.audioContext.currentTime);
             listener.forwardY.setValueAtTime(forwardDirection.y, this.audioContext.currentTime);
             listener.forwardZ.setValueAtTime(forwardDirection.z, this.audioContext.currentTime);
             listener.upX.setValueAtTime(upDirection.x, this.audioContext.currentTime);
             listener.upY.setValueAtTime(upDirection.y, this.audioContext.currentTime);
             listener.upZ.setValueAtTime(upDirection.z, this.audioContext.currentTime);
        } else {
            // Fallback for older implementations (less common now)
            listener.setPosition(position.x, position.y, position.z);
            listener.setOrientation(forwardDirection.x, forwardDirection.y, forwardDirection.z, upDirection.x, upDirection.y, upDirection.z);
        }
    }

    // --- General Controls ---

    /**
     * Sets the master volume for all sound effects.
     * @param {number} volume Volume level between 0 and 1.
     */
    public setEffectsVolume(volume: number): void {
        if (!this.effectsGain) return;
        // Ensure volume is within valid range [0, 1]
        volume = Math.max(0, Math.min(1, volume));
        this.defaultEffectsVolume = volume; // Store setting
         // Apply immediately only if effects are enabled
         if (this.areEffectsEnabled) {
            this.effectsGain.gain.setTargetAtTime(volume, this.audioContext!.currentTime, 0.01);
         }
        console.log(`AudioManager: Effects volume set to ${volume}`);
    }

    /**
     * Enables or disables all sound effects playback.
     * @param {boolean} enabled True to enable sound effects, false to mute them.
     */
    public setSoundEffectsEnabled(enabled: boolean): void {
        console.log(`AudioManager: Setting sound effects enabled state to: ${enabled}`);
        this.areEffectsEnabled = enabled;

        if (!this.isInitialized || !this.effectsGain || !this.audioContext) {
            console.warn("AudioManager: Cannot change effects state, not initialized yet.");
            return;
        }

        // Mute or unmute by setting gain to 0 or the default volume
        const targetVolume = enabled ? this.defaultEffectsVolume : 0;
        this.effectsGain.gain.setTargetAtTime(targetVolume, this.audioContext.currentTime, 0.01);
         console.log(`AudioManager: Effects master gain set to ${targetVolume}`);
    }

    /**
     * Cleans up resources, stopping audio and disconnecting nodes.
     * Should be called when the game is closing or the audio manager is no longer needed.
     */
    public dispose(): void {
        console.log('Disposing AudioManager...');
        if (this.audioContext) {
             // Stop all sounds
            this.stopBackgroundMusic(); // Will disconnect source node
            // Note: Individual effect sources clean themselves up onended

            // Disconnect gain nodes
            if (this.backgroundMusicGain) {
                this.backgroundMusicGain.disconnect();
                this.backgroundMusicGain = null;
            }
            if (this.effectsGain) {
                this.effectsGain.disconnect();
                this.effectsGain = null;
            }

            // Close the AudioContext
            this.audioContext.close().then(() => {
                console.log('AudioContext closed.');
            }).catch(e => console.error('Error closing AudioContext:', e));
            this.audioContext = null;
        }

        // Clear buffers
        this.backgroundMusicBuffer = null;
        this.soundBuffers.clear();

        this.isInitialized = false;
        this.isMusicPlaying = false;
        console.log('AudioManager disposed.');
    }
} 
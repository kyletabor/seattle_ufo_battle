import * as THREE from 'three';

// Declare the global function type we expect to find
declare global {
    function toggleUserPause(): void;
}

/**
 * Manages user input for controlling the plane and camera.
 */
export class InputController {
    // Key state tracking
    private keysPressed: { [key: string]: boolean } = {};

    // Output values (normalized -1 to 1, or 0/1 for toggles)
    public pitch: number = 0;
    public roll: number = 0;
    public accelerate: number = 0; // Using 0 or 1 for simplicity
    public decelerate: number = 0; // Using 0 or 1 for simplicity
    public toggleCamera: boolean = false; // Will be true for one frame on key press
    public shoot: boolean = false; // Will be true for one frame when space is pressed
    public toggleDebug: boolean = false; // Will be true for one frame on key press

    // Add a flag to prevent input processing while paused
    private isPaused: boolean = false;
    
    // Store pre-pause input state
    private pausedInputState: {
        pitch: number,
        roll: number,
        accelerate: number,
        decelerate: number
    } | null = null;

    constructor() {
        // Add event listeners for keydown and keyup
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
        console.log('InputController initialized');
    }

    /**
     * Handles key down events.
     * @param {KeyboardEvent} event The keyboard event.
     */
    private handleKeyDown(event: KeyboardEvent): void {
        // Ignore all game input if the controller is paused
        if (this.isPaused) {
            // console.log("InputController is paused, ignoring keydown: ", event.key);
            return;
        }

        const key = event.key.toLowerCase();
        // console.log(`Key pressed: ${key}`);
        this.keysPressed[key] = true;
        
        // Handle camera toggle specifically on key down to make it event-based
        if (key === 'c') {
            // console.log("Camera toggle triggered");
            this.toggleCamera = true; // Set flag for one update cycle
        }
        // Handle pause toggle on key down using 'p' key
        if (key === 'p') {
            // We don't need preventDefault for 'p'
            // Directly call the global toggle function instead of setting a flag
            // Ensure the global function exists before calling
            if (typeof toggleUserPause === 'function') {
                // console.log("Pause toggle triggered in InputController, calling global toggleUserPause()");
                toggleUserPause();
            } else {
                console.error("toggleUserPause function not found on global scope!");
            }
        }
        // Handle shooting on key down using spacebar
        if (key === ' ') {
            event.preventDefault(); // Prevent spacebar from scrolling the page
            // console.log("Shooting triggered");
            this.shoot = true; // Set flag for one update cycle
        }
        // Handle debug toggle on key down using 'b' key
        if (key === 'b') {
            // console.log("Debug toggle triggered");
            this.toggleDebug = true;
        }
    }

    /**
     * Handles key up events.
     * @param {KeyboardEvent} event The keyboard event.
     */
    private handleKeyUp(event: KeyboardEvent): void {
        this.keysPressed[event.key.toLowerCase()] = false;
    }

    /**
     * Sets the pause state of the input controller.
     * When paused, stores current input state.
     * When unpaused, can optionally restore previous input state.
     * 
     * @param {boolean} paused Whether the game is paused
     */
    public setPaused(paused: boolean): void {
        // If we're pausing
        if (!this.isPaused && paused) {
            // Store current input state
            this.pausedInputState = {
                pitch: this.pitch,
                roll: this.roll,
                accelerate: this.accelerate,
                decelerate: this.decelerate
            };
            console.log("Input controller paused, stored input state");
        }
        // If we're unpausing
        else if (this.isPaused && !paused) {
            // Don't automatically restore state - let the update method read from keys
            // This prevents problems with "stuck" keys if they were released during pause
            console.log("Input controller unpaused");
        }
        
        this.isPaused = paused;
    }

    /**
     * Updates the input state based on currently pressed keys.
     * Should be called once per frame before physics update.
     */
    public update(): void {
        // For debugging
        let haveInput = false;
        
        // Reset single-frame flags
        // toggleCamera is handled differently (set in keydown, reset after check)

        // Pitch control (W/S or ArrowUp/ArrowDown)
        this.pitch = 0;
        if (this.keysPressed['w'] || this.keysPressed['arrowup']) {
            this.pitch = 1;
            haveInput = true;
        }
        if (this.keysPressed['s'] || this.keysPressed['arrowdown']) {
            this.pitch = -1;
            haveInput = true;
        }

        // Roll control (A/D or ArrowLeft/ArrowRight)
        this.roll = 0;
        if (this.keysPressed['a'] || this.keysPressed['arrowleft']) {
            this.roll = 1; // Roll left
            haveInput = true;
        }
        if (this.keysPressed['d'] || this.keysPressed['arrowright']) {
            this.roll = -1; // Roll right
            haveInput = true;
        }

        // Speed control (Q/E)
        this.accelerate = this.keysPressed['e'] ? 1 : 0;
        if (this.accelerate) haveInput = true;
        
        this.decelerate = this.keysPressed['q'] ? 1 : 0;
        if (this.decelerate) haveInput = true;
        
        // Log when any key is actively pressed
        if (haveInput) {
            // console.log(`Input values: pitch=${this.pitch}, roll=${this.roll}, accel=${this.accelerate}, decel=${this.decelerate}`);
        }

        // Note: The actual sensitivity application (pitch=0.8, turn=1.5, roll=2.0)
        // will happen in the Physics engine when it consumes these normalized values.
    }

    /**
     * Checks if the camera toggle key was pressed and resets the flag.
     * @returns {boolean} True if the camera toggle key was pressed this frame.
     */
    public didToggleCamera(): boolean {
        const toggled = this.toggleCamera;
        this.toggleCamera = false; // Reset after checking
        return toggled;
    }

    /**
     * Checks if the shoot key (' ') was pressed and resets the flag.
     * @returns {boolean} True if the shoot key was pressed this frame.
     */
    public didShoot(): boolean {
        const fired = this.shoot;
        this.shoot = false; // Reset after checking
        return fired;
    }

    /**
     * Checks if the debug toggle flag is set, and resets it if it was.
     * @returns {boolean} True if the debug toggle was requested in the last update.
     */
    public didToggleDebug(): boolean {
        const toggled = this.toggleDebug;
        this.toggleDebug = false; // Reset after checking
        return toggled;
    }

    /**
     * Checks if any key was pressed down in the last cycle.
     * Note: This is a simple check, it doesn't track specific keys for this purpose.
     * It relies on the keydown event setting flags immediately.
     * A more robust implementation might track a dedicated 'anyKeyPressed' flag.
     * We will use a simple check for now.
     * @returns {boolean} True if any key is currently considered pressed down.
     */
    public anyKeyPressed(): boolean {
        // Check if any of the relevant game keys are pressed, or just return true
        // if *any* key press should trigger restart. For simplicity, let's check
        // if the internal keysPressed object has *any* true values.
        for (const key in this.keysPressed) {
            if (this.keysPressed[key]) {
                // If a key is pressed, consume it (set to false) to avoid multiple triggers
                // and return true. 
                // NOTE: This might interfere slightly if holding down movement keys 
                // during the crash screen, but is simple for now.
                this.keysPressed[key] = false;
                return true;
            }
        }
        return false;
    }

    /**
     * Cleans up event listeners when the controller is no longer needed.
     */
    public dispose(): void {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
        console.log('InputController disposed');
    }
} 
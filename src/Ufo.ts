import * as THREE from 'three';
import { SmokeEmitter } from './Smoke'; // UNCOMMENTED
import { SpaceNeedle } from './SpaceNeedle1'; // Import the SpaceNeedle class for targeting

// Define possible states for the UFO
type UfoState = 'flying' | 'hit' | 'falling' | 'crashed';

/**
 * UFO class responsible for creating and managing UFO objects in the scene.
 * Creates UFOs that match the wireframe model in the reference image.
 */
export class Ufo {
    // The main 3D mesh representing the UFO
    public mesh: THREE.Group;
    public state: UfoState = 'flying'; // Initial state
    public needsCrashEffect: boolean = false; // Flag to trigger crash effects once
    private sceneRef: THREE.Scene; // Reference to the main scene
    
    // Movement properties
    private speed: number = 3.0;
    private rotationSpeed: number = 0.005;
    private hoverAmplitude: number = 0.1;
    private hoverFrequency: number = 1.5;
    private pathRadius: number = 50;
    private pathHeight: number = 30;
    private pathAngle: number = 0;
    
    // Reference to the initial position for path calculation
    private initialPosition: THREE.Vector3;

    // Light for visibility
    private ufoLight: THREE.PointLight = new THREE.PointLight(0x00ffff, 2, 50, 1.5);

    // Falling physics properties
    private verticalVelocity: number = 0;
    private static readonly GRAVITY = -9.8 * 2; // A bit stronger gravity for effect

    // Smoke Emitter
    private smokeEmitter: SmokeEmitter | null = null; // UNCOMMENTED
    
    // Laser beam properties
    private laserBeam: THREE.Line | null = null;
    private laserMaterial: THREE.LineBasicMaterial | null = null;
    private laserGeometry: THREE.BufferGeometry | null = null;
    private laserActive: boolean = false;
    private laserDuration: number = 0.5; // Duration of laser in seconds
    private laserTimer: number = 0;
    private laserCooldown: number = 0;
    private nextLaserTime: number = 0;
    
    // Reference to the Space Needle for targeting
    private spaceNeedle: SpaceNeedle | null = null;
    
    // Raycaster for laser hits
    private raycaster: THREE.Raycaster = new THREE.Raycaster();
    
    /**
     * Creates a new UFO instance.
     * @param scene The main scene object.
     * @param position Initial position for the UFO.
     * @param spaceNeedle Optional reference to the Space Needle for targeting.
     */
    constructor(scene: THREE.Scene, position: THREE.Vector3 = new THREE.Vector3(0, 30, 0), spaceNeedle: SpaceNeedle | null = null) {
        this.sceneRef = scene; // Store scene reference
        this.initialPosition = position.clone();
        this.mesh = new THREE.Group();
        this.spaceNeedle = spaceNeedle; // Store reference to Space Needle
        
        this.createUfoModel();
        this.mesh.position.copy(position);

        // Create the smoke emitter, but don't start it yet
        this.smokeEmitter = new SmokeEmitter(this.mesh, this.sceneRef);
        
        // Initialize laser properties
        this.initializeLaser();
        
        // Set random initial cooldown for staggered firing
        this.nextLaserTime = Math.random() * 5;
    }
    
    /**
     * Sets the reference to the Space Needle for targeting
     * @param spaceNeedle The Space Needle instance to target
     */
    public setSpaceNeedle(spaceNeedle: SpaceNeedle): void {
        this.spaceNeedle = spaceNeedle;
    }
    
    /**
     * Initializes the laser beam components
     */
    private initializeLaser(): void {
        // Create a bright green material for the laser
        this.laserMaterial = new THREE.LineBasicMaterial({ 
            color: 0x00ff00, // Bright green color for the laser
            linewidth: 1,    // Keep line thin
            opacity: 0.8,    // Slightly transparent
            transparent: true
        });
        
        // Create initial geometry (empty, will be updated when firing)
        this.laserGeometry = new THREE.BufferGeometry();
        
        // Create the laser line and add to scene but make it invisible initially
        this.laserBeam = new THREE.Line(this.laserGeometry, this.laserMaterial);
        this.laserBeam.visible = false;
        this.sceneRef.add(this.laserBeam);
    }
    
    /**
     * Creates the UFO 3D model that matches the wireframe reference.
     * The model consists of a main saucer disc and a dome on top.
     */
    private createUfoModel(): void {
        // Create materials with enhanced visibility
        const bodyMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xcccccc, // Lighter gray for better visibility
            specular: 0xffffff,
            shininess: 100,
            flatShading: false
        });
        
        // Create main saucer shape - DOUBLED SIZE
        const saucerGeometry = new THREE.CylinderGeometry(24, 24, 4, 24, 1, false); // Doubled from 12 to 24
        // Modify the geometry to create the saucer shape
        const saucerPositions = saucerGeometry.attributes.position;
        
        for (let i = 0; i < saucerPositions.count; i++) {
            const x = saucerPositions.getX(i);
            const y = saucerPositions.getY(i);
            const z = saucerPositions.getZ(i);
            
            // Calculate distance from center (horizontal only)
            const distance = Math.sqrt(x * x + z * z);
            
            // Leave center vertices at original height
            if (distance > 0) {
                // Create the tapered edge shape
                if (y > 0) {
                    // Top vertices - create upward tapering
                    saucerPositions.setY(i, y - (distance * 0.1));
                } else {
                    // Bottom vertices - create downward tapering
                    saucerPositions.setY(i, y + (distance * 0.05));
                }
            }
        }
        
        // Create the dome on top
        const domeGeometry = new THREE.SphereGeometry(12, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2); // Doubled from 6 to 12
        const dome = new THREE.Mesh(domeGeometry, bodyMaterial);
        dome.position.y = 2.0; // Doubled from 1.0 to 2.0
        
        // Create the bottom rim/indentation
        const rimGeometry = new THREE.TorusGeometry(24, 2, 8, 32); // Doubled size
        const rim = new THREE.Mesh(rimGeometry, bodyMaterial);
        rim.rotation.x = Math.PI / 2;
        rim.position.y = -2.0; // Doubled from -1.0 to -2.0
        
        // Create the saucer and add all parts to the group
        const saucer = new THREE.Mesh(saucerGeometry, bodyMaterial);
        
        // Add a glowing light underneath for visibility
        this.ufoLight = new THREE.PointLight(0x00ffff, 2, 100, 1.5); // Doubled light range from 50 to 100
        this.ufoLight.position.set(0, -4, 0); // Doubled Y position from -2 to -4
        
        // Add a small glowing sphere to represent the light source
        const lightSphereGeometry = new THREE.SphereGeometry(6, 16, 8); // Doubled from 3 to 6
        const lightSphereMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x00ffff, 
            transparent: true,
            opacity: 0.7
        });
        const lightSphere = new THREE.Mesh(lightSphereGeometry, lightSphereMaterial);
        lightSphere.position.set(0, -4, 0); // Doubled Y position from -2 to -4
        
        // Add all parts to the group
        this.mesh.add(saucer);
        this.mesh.add(dome);
        this.mesh.add(rim);
        this.mesh.add(this.ufoLight);
        this.mesh.add(lightSphere);
        
        // Add a slight rotation to match the reference image angle
        this.mesh.rotation.z = 0.1;
    }
    
    /**
     * Called when the UFO is hit by a projectile.
     * Initiates the falling sequence.
     */
    public hit(): void {
        if (this.state === 'flying') { 
            this.state = 'hit';
            console.log('UFO Hit! Transitioning to falling state.');
            this.verticalVelocity = 0; 
            
            if (this.ufoLight) {
                this.ufoLight.intensity = 0;
            }
            
            // Start smoke emitter
            this.smokeEmitter?.start(); // UNCOMMENTED
            
            this.state = 'falling'; 
        }
    }
    
    /**
     * Updates the UFO's position and rotation based on its current state.
     * @param deltaTime Time elapsed since last frame in seconds.
     */
    public update(deltaTime: number): void {
        switch (this.state) {
            case 'flying':
                this.updateFlying(deltaTime);
                this.updateLaser(deltaTime);
                break;
            case 'falling':
                this.updateFalling(deltaTime);
                // Update smoke emitter only when falling
                this.smokeEmitter?.update(deltaTime); // UNCOMMENTED
                break;
            case 'hit':
                 // Short state, might transition immediately to falling in hit()
                break;
            case 'crashed':
                // Do nothing once crashed
                break;
        }
    }

    /**
     * Update logic for the normal 'flying' state.
     */
    private updateFlying(deltaTime: number): void {
        // Update path angle based on speed and delta time
        this.pathAngle += this.speed * deltaTime * 0.2;
        
        // Calculate new position on circular path
        const x = this.initialPosition.x + Math.cos(this.pathAngle) * this.pathRadius;
        const z = this.initialPosition.z + Math.sin(this.pathAngle) * this.pathRadius;
        
        // Add hover effect
        const hoverOffset = Math.sin(Date.now() * 0.001 * this.hoverFrequency) * this.hoverAmplitude;
        
        // Update position
        this.mesh.position.set(
            x,
            this.initialPosition.y + this.pathHeight + hoverOffset,
            z
        );
        
        // Always face toward the center of the path
        this.mesh.lookAt(this.initialPosition.x, this.mesh.position.y, this.initialPosition.z);
        
        // Add a slight rotation to make it look more dynamic
        this.mesh.rotation.y += this.rotationSpeed;
        
        // Flicker the light intensity slightly for a more dynamic effect
        if (this.ufoLight) {
            this.ufoLight.intensity = 1.5 + Math.sin(Date.now() * 0.005) * 0.5;
        }
    }

    /**
     * Update logic for the 'falling' state.
     */
    private updateFalling(deltaTime: number): void {
        // Apply gravity
        this.verticalVelocity += Ufo.GRAVITY * deltaTime;
        this.mesh.position.y += this.verticalVelocity * deltaTime;
        
        // Add erratic rotation while falling
        this.mesh.rotation.x += (Math.random() - 0.5) * 0.1;
        this.mesh.rotation.z += (Math.random() - 0.5) * 0.1;

        // Check for ground collision
        // TODO: Get actual terrain height instead of assuming 0
        if (this.mesh.position.y <= 0) {
            this.mesh.position.y = 0; // Place exactly on ground
            this.state = 'crashed';
            this.needsCrashEffect = true; // Signal that effects should be played
            console.log('UFO crashed!');
            
            // Stop smoke emitter
            this.smokeEmitter?.stop(); // UNCOMMENTED
            
            // Optional: Flatten the mesh slightly on impact
            this.mesh.scale.y = 0.8;
            
            // Cleanup? Or leave wreckage?
        }
    }
    
    /**
     * Updates the laser beam state and appearance
     * @param deltaTime Time elapsed since last frame in seconds
     */
    private updateLaser(deltaTime: number): void {
        // Update laser cooldown timer
        this.laserCooldown -= deltaTime;
        
        // Check if it's time to fire a new laser
        if (this.laserCooldown <= 0 && !this.laserActive) {
            // Only fire if past the next laser time
            this.nextLaserTime -= deltaTime;
            if (this.nextLaserTime <= 0) {
                this.fireLaser();
                // Set random time for next laser (between 2-6 seconds)
                this.nextLaserTime = 2 + Math.random() * 4;
            }
        }
        
        // If laser is active, update its timer
        if (this.laserActive) {
            this.laserTimer -= deltaTime;
            
            // Deactivate laser if timer has elapsed
            if (this.laserTimer <= 0) {
                this.deactivateLaser();
                
                // Set a cooldown before firing again (0.5-2 seconds)
                this.laserCooldown = 0.5 + Math.random() * 1.5;
            }
        }
    }
    
    /**
     * Fires a laser beam toward the Space Needle
     */
    private fireLaser(): void {
        if (!this.laserGeometry || !this.laserBeam) return;
        
        // Start position (bottom of the UFO)
        const startPosition = new THREE.Vector3(0, -4, 0);
        startPosition.applyMatrix4(this.mesh.matrixWorld);
        
        // Target position (Space Needle or initialPosition if Space Needle not set)
        let targetPosition: THREE.Vector3;
        
        if (this.spaceNeedle) {
            // Target the Space Needle's position with slight randomness
            targetPosition = new THREE.Vector3().copy(this.spaceNeedle.mesh.position);
            targetPosition.y += 100 + (Math.random() * 50); // Target upper part of Space Needle
            targetPosition.x += (Math.random() * 30 - 15); // Add horizontal randomness
            targetPosition.z += (Math.random() * 30 - 15);
        } else {
            // Fallback to initial position if Space Needle not set
            targetPosition = new THREE.Vector3(
                this.initialPosition.x + (Math.random() * 10 - 5),
                this.initialPosition.y + (Math.random() * 10),
                this.initialPosition.z + (Math.random() * 10 - 5)
            );
        }
        
        // Create points array for the line
        const points = [startPosition, targetPosition];
        
        // Update the laser geometry
        this.laserGeometry.setFromPoints(points);
        
        // Make the laser visible
        this.laserBeam.visible = true;
        this.laserActive = true;
        this.laserTimer = this.laserDuration;
        
        // Check for hits on the Space Needle using raycaster
        if (this.spaceNeedle) {
            // Calculate direction vector
            const direction = new THREE.Vector3().subVectors(targetPosition, startPosition).normalize();
            
            // Set up raycaster
            this.raycaster.set(startPosition, direction);
            
            // Get distance to target
            const distance = startPosition.distanceTo(targetPosition);
            
            // Check for intersection with Space Needle
            this.spaceNeedle.mesh.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    const intersects = this.raycaster.intersectObject(object, false);
                    
                    if (intersects.length > 0 && intersects[0].distance <= distance) {
                        // Laser hit the Space Needle!
                        console.log("UFO laser hit the Space Needle!");
                        
                        // Damage the Space Needle
                        this.spaceNeedle?.takeDamage(0.5);
                    }
                }
            });
        }
    }
    
    /**
     * Deactivates the laser beam
     */
    private deactivateLaser(): void {
        if (this.laserBeam) {
            this.laserBeam.visible = false;
            this.laserActive = false;
        }
    }
    
    /**
     * Sets a new flight path radius.
     * @param radius The radius of the circular flight path.
     */
    public setPathRadius(radius: number): void {
        this.pathRadius = radius;
    }
    
    /**
     * Sets the height of the UFO flight path.
     * @param height The height above the initial y-position.
     */
    public setPathHeight(height: number): void {
        this.pathHeight = height;
    }
    
    /**
     * Sets the flight speed of the UFO.
     * @param speed The new speed value.
     */
    public setSpeed(speed: number): void {
        this.speed = speed;
    }

    /**
     * Sets the initial position for the UFO's orbit.
     * @param position The position to orbit around.
     */
    public setInitialPosition(position: THREE.Vector3): void {
        this.initialPosition = position;
    }

    /**
     * Sets the initial angle in the UFO's orbit path.
     * @param angle The initial angle in radians.
     */
    public setPathAngle(angle: number): void {
        this.pathAngle = angle;
    }

    /**
     * Cleans up the UFO's resources (geometry, materials, light, smoke).
     * Should be called when the UFO is removed from the scene.
     */
    public dispose(): void {
        // Dispose of geometry and materials for all child meshes
        this.mesh.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                if (object.geometry) {
                    object.geometry.dispose();
                }
                if (object.material) {
                    // If the material is an array, dispose each element
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        // Otherwise, dispose the single material
                        (object.material as THREE.Material).dispose();
                    }
                }
            }
        });

        // Dispose of the point light specifically if it exists
        if (this.ufoLight) {
            this.ufoLight.dispose(); // PointLight has its own dispose method
        }
        
        // Dispose smoke emitter and remove its points object
        if (this.smokeEmitter) {
            this.sceneRef.remove(this.smokeEmitter.points); // Remove from scene
            this.smokeEmitter.dispose(); // Dispose resources
        }
        
        // Dispose of laser resources
        if (this.laserBeam) {
            this.sceneRef.remove(this.laserBeam);
            if (this.laserGeometry) this.laserGeometry.dispose();
            if (this.laserMaterial) this.laserMaterial.dispose();
        }

        // Note: The group itself (this.mesh) is typically removed from the scene elsewhere
    }
} 
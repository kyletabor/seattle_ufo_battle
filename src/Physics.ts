import * as THREE from 'three';

/**
 * Handles the physics simulation for the plane.
 */
export class PhysicsEngine {
    // TODO: Add references to plane object, constants for limits, sensitivities
    private plane: THREE.Object3D; // Reference to the plane object to apply physics

    // Physics parameters
    public speed: number = 30; // Initial speed
    private minSpeed: number = 10;
    private maxSpeed: number = 100; // Doubled from 50 to 100 for faster plane movement
    private speedChangeRate: number = 10; // Units per second

    // Control Sensitivity & Smoothing
    private pitchSensitivity: number = 1.0; // Rate of pitch change per second at full input
    private rollSensitivity: number = 1.2;  // DECREASED: Rate of roll change per second at full input (was 1.5)
    private bankingTurnFactor: number = 1.0; // How much yaw is induced by roll (rad/s per rad of roll)
    private inputSmoothingFactor: number = 0.1; // Lower values = more smoothing

    private maxPitchAngle: number = THREE.MathUtils.degToRad(60);
    private maxRollAngle: number = THREE.MathUtils.degToRad(45);

    private autoLevelFactor: number = 2.0; // INCREASED: Faster auto-leveling (was 0.5)

    // Internal State
    private currentPitchRate: number = 0;
    private currentRollRate: number = 0;
    private rotationQuaternion: THREE.Quaternion;
    private moveDirection: THREE.Vector3;
    private initialSpeed: number;
    private enabled: boolean = true;

    constructor(plane: THREE.Object3D) {
        this.plane = plane;
        this.speed = 25;
        this.initialSpeed = this.speed;
        this.rotationQuaternion = new THREE.Quaternion();
        this.moveDirection = new THREE.Vector3(0, 0, -1);
        this.rotationQuaternion.copy(plane.quaternion);
        console.log('PhysicsEngine initialized');
    }

    /**
     * Updates the plane's physics based on inputs and delta time.
     * @param {object} inputs Current normalized input values { pitch, roll, yaw, accelerate, decelerate }.
     * @param {number} deltaTime Time elapsed since the last frame.
     */
    public update(inputs: { pitch: number; roll: number; accelerate: number; decelerate: number }, deltaTime: number): void {
        if (!this.enabled) return;

        // --- Speed Control ---
        if (inputs.accelerate > 0) {
            this.speed += this.speedChangeRate * deltaTime;
        } else if (inputs.decelerate > 0) {
            this.speed -= this.speedChangeRate * deltaTime;
        }
        this.speed = THREE.MathUtils.clamp(this.speed, this.minSpeed, this.maxSpeed);

        // --- Rotation Calculation (Euler Approach) ---
        
        // 1. Smooth the input controls
        // Target rates based on input (-1 to 1) and sensitivity
        const targetPitchRate = inputs.pitch * this.pitchSensitivity;
        // REMOVING Inversion again, based on user feedback that this state felt correct
        const targetRollRate = inputs.roll * this.rollSensitivity;
        
        // Apply smoothing (Lerp towards target rates)
        this.currentPitchRate = THREE.MathUtils.lerp(this.currentPitchRate, targetPitchRate, this.inputSmoothingFactor);
        this.currentRollRate = THREE.MathUtils.lerp(this.currentRollRate, targetRollRate, this.inputSmoothingFactor);

        // 2. Calculate target Euler angles for this frame
        const currentEuler = new THREE.Euler().setFromQuaternion(this.rotationQuaternion, 'YXZ');

        // Calculate yaw rate based on current roll angle (Z-axis Euler angle)
        const targetYawRate = currentEuler.z * this.bankingTurnFactor; // Note: currentEuler.z is negative for left roll

        // Calculate change in angles for this frame
        const deltaPitch = this.currentPitchRate * deltaTime;
        const deltaRoll = this.currentRollRate * deltaTime;
        const deltaYaw = targetYawRate * deltaTime;

        // Apply changes to current Euler angles
        const nextEuler = new THREE.Euler(
            currentEuler.x + deltaPitch,
            currentEuler.y + deltaYaw,
            currentEuler.z + deltaRoll,
            'YXZ' // IMPORTANT: Maintain YXZ order
        );

        // 3. Apply Auto-leveling (if no input)
        if (inputs.pitch === 0 && inputs.roll === 0) {
            // Auto-level pitch and roll towards 0, keeping yaw
            nextEuler.x = THREE.MathUtils.lerp(nextEuler.x, 0, this.autoLevelFactor * deltaTime);
            nextEuler.z = THREE.MathUtils.lerp(nextEuler.z, 0, this.autoLevelFactor * deltaTime);
        }

        // 4. Limit Pitch and Roll
        nextEuler.x = THREE.MathUtils.clamp(nextEuler.x, -this.maxPitchAngle, this.maxPitchAngle);
        nextEuler.z = THREE.MathUtils.clamp(nextEuler.z, -this.maxRollAngle, this.maxRollAngle);

        // 5. Set final rotation from the calculated Euler angles
        this.rotationQuaternion.setFromEuler(nextEuler);

        // Apply the final rotation to the plane object
        this.plane.quaternion.copy(this.rotationQuaternion);

        // --- Movement Calculation ---
        this.moveDirection = new THREE.Vector3(0, 0, -1); // Base forward direction
        this.moveDirection.applyQuaternion(this.plane.quaternion); // Orient direction
        this.plane.position.addScaledVector(this.moveDirection, this.speed * deltaTime);
    }

    /**
     * Enables or disables the physics simulation.
     * @param {boolean} enabled Whether physics should be enabled (true) or disabled (false).
     */
    public setEnabled(enabled: boolean): void {
        this.enabled = enabled;
        console.log(`PhysicsEngine ${enabled ? 'enabled' : 'disabled'}`);
    }

    /**
     * Returns whether physics simulation is currently enabled.
     * @returns {boolean} Whether physics is enabled.
     */
    public isEnabled(): boolean {
        return this.enabled;
    }

    /**
     * Resets the physics state (speed, rotation, etc.) to initial values.
     * Uses predefined defaults or initial state values if available.
     */
    public reset(): void {
        console.log("Resetting PhysicsEngine");
        this.speed = this.initialSpeed;
        this.rotationQuaternion.identity();
        this.plane.quaternion.copy(this.rotationQuaternion);
        this.currentPitchRate = 0;
        this.currentRollRate = 0;
    }

    /**
     * Gets the current speed of the plane.
     * @returns {number} The current speed.
     */
    public getCurrentSpeed(): number {
        return this.speed;
    }
} 
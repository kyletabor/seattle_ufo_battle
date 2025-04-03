import * as THREE from 'three';
// Import OrbitControls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Define Camera Modes
enum CameraMode {
    Follow,
    Orbit
}

/**
 * Manages the game camera, including follow-cam and orbit modes.
 */
export class CameraController {
    // TODO: Add camera instance, target object (plane), modes
    public camera: THREE.PerspectiveCamera;
    private target: THREE.Object3D | null = null;
    private mode: CameraMode = CameraMode.Follow; // Default mode
    private isOrbitMode: boolean = false; // To disable physics updates in orbit
    private orbitControls: OrbitControls;
    private rendererDomElement: HTMLElement;

    // Follow Camera settings
    private followOffset = new THREE.Vector3(0, 15, 30); // MODIFIED: Higher up and further back
    private lerpFactor = 0.05; // Smoothing factor for camera movement

    // Crash Camera state
    private isCrashViewActive: boolean = false;
    private crashTargetPosition = new THREE.Vector3();
    private crashCameraPosition = new THREE.Vector3();

    constructor(camera: THREE.PerspectiveCamera, rendererDomElement: HTMLElement) {
        this.camera = camera;
        this.rendererDomElement = rendererDomElement;
        console.log('CameraController initialized');

        // Initialize OrbitControls
        this.orbitControls = new OrbitControls(this.camera, rendererDomElement);
        this.orbitControls.enabled = false; // Start with orbit controls disabled
        this.orbitControls.target.set(0, 0, 0); // Initialize target, will be updated
        this.orbitControls.enableDamping = true; // Optional: adds inertia
        this.orbitControls.dampingFactor = 0.1;
    }

    /**
     * Sets the target object for the camera to follow.
     * @param {THREE.Object3D} target The object to follow.
     */
    public setTarget(target: THREE.Object3D): void {
        this.target = target;
        // Set initial orbit target near the plane if we switch immediately
        if (this.target) {
            this.orbitControls.target.copy(this.target.position);
        }
    }

    /**
     * Toggles between follow-camera and orbit-camera modes.
     */
    public toggleMode(): void {
        this.isOrbitMode = !this.isOrbitMode;
        console.log(`Camera mode toggled: ${this.isOrbitMode ? 'Orbit' : 'Follow'}`);

        // Enable/disable OrbitControls
        this.orbitControls.enabled = this.isOrbitMode;

        if (this.isOrbitMode && this.target) {
            // When switching TO orbit mode, set the target to the plane's current position
            this.orbitControls.target.copy(this.target.position);
            // Optional: Reset camera position slightly to avoid being inside the plane
            // this.camera.position.copy(this.target.position).add(new THREE.Vector3(0, 2, 8));
        }

        // No need to explicitly disable follow cam logic, the update loop handles it
    }

    /**
     * Returns whether the camera is currently in orbit mode.
     * @returns {boolean} True if in orbit mode, false otherwise.
     */
    public getIsOrbitMode(): boolean {
        return this.isOrbitMode;
    }

    /**
     * Sets the camera mode directly.
     * @param {string} modeName The camera mode to set: 'follow' or 'orbit'
     */
    public setCameraMode(modeName: string): void {
        const newIsOrbitMode = modeName.toLowerCase() === 'orbit';
        
        // Only change mode if it's different from current
        if (this.isOrbitMode !== newIsOrbitMode) {
            this.isOrbitMode = newIsOrbitMode;
            console.log(`Camera mode set to: ${this.isOrbitMode ? 'Orbit' : 'Follow'}`);
            
            // Enable/disable OrbitControls
            this.orbitControls.enabled = this.isOrbitMode;
            
            if (this.isOrbitMode && this.target) {
                // When switching TO orbit mode, set the target to the plane's current position
                this.orbitControls.target.copy(this.target.position);
                // Optional: Position camera at a good starting point for orbit view
                this.camera.position.copy(this.target.position).add(new THREE.Vector3(0, 100, 200));
            }
        }
    }

    /**
     * Sets the camera to the specific crash view orientation.
     * @param {THREE.Vector3} cameraPosition The desired world position for the camera.
     * @param {THREE.Vector3} lookAtPosition The world position the camera should look at.
     */
    public setCrashView(cameraPosition: THREE.Vector3, lookAtPosition: THREE.Vector3): void {
        this.isCrashViewActive = true;
        this.crashCameraPosition.copy(cameraPosition);
        this.crashTargetPosition.copy(lookAtPosition);
        // Disable orbit controls if they were active
        if (this.isOrbitMode) {
            this.orbitControls.enabled = false;
            this.isOrbitMode = false; // Ensure internal state is consistent
        }
    }

    /**
     * Resets the camera state, typically after a crash or game restart.
     * Reverts to the default follow mode if a target is set.
     */
    public reset(): void {
        console.log("Resetting CameraController");
        this.isCrashViewActive = false;
        this.crashTargetPosition.set(0, 0, 0);
        this.crashCameraPosition.set(0, 0, 0);
        // Revert to follow mode if target exists, otherwise maybe default orbit?
        if (this.target) {
             this.mode = CameraMode.Follow;
             this.orbitControls.enabled = false;
             this.isOrbitMode = false;
             // Trigger an immediate update to snap back
             this.updateFollowCamera(1.0); // Use lerp factor 1 for instant snap
        } else {
            // Default to orbit mode if no target was ever set (edge case)
            this.mode = CameraMode.Orbit;
            this.orbitControls.enabled = true;
            this.isOrbitMode = true;
            this.orbitControls.target.set(0, 0, 0);
            this.orbitControls.update();
        }
    }

    /**
     * Updates the camera position and orientation based on the current mode and target.
     * @param {number} deltaTime Time elapsed since the last frame.
     */
    public update(deltaTime: number): void {
        // If crash view is active, handle it exclusively
        if (this.isCrashViewActive) {
            this.camera.position.copy(this.crashCameraPosition);
            this.camera.lookAt(this.crashTargetPosition);
            // No lerping in crash view
            return;
        }
        
        // Handle normal modes (Follow/Orbit)
        if (this.mode === CameraMode.Follow && this.target) {
            this.updateFollowCamera(this.lerpFactor * (deltaTime * 60)); // Adjust lerp factor based on frame rate
        } else if (this.mode === CameraMode.Orbit) {
            this.orbitControls.update(); // Let OrbitControls handle the camera
        }
    }

    private updateFollowCamera(lerpAlpha: number): void {
        if (!this.target) {
            console.warn("UpdateFollowCamera called but no target is set!");
            return;
        }

        // Calculate desired camera position based on plane's orientation and offset
        const desiredPosition = this.followOffset.clone();
        desiredPosition.applyQuaternion(this.target.quaternion); // Rotate offset by plane's rotation
        desiredPosition.add(this.target.position); // Add plane's position
        
        // Calculate desired look-at point
        const lookAtPosition = this.target.position.clone().add(new THREE.Vector3(0, 0.5, -2));

        // Smoothly interpolate camera position and lookAt
        this.camera.position.lerp(desiredPosition, lerpAlpha);
        
        // For lookAt, we might want a faster interpolation or direct set
        // Using a temporary vector to lerp the lookAt target smoothly
        const currentLookAt = new THREE.Vector3(); // Should ideally store and lerp this target
        // For now, let's just make it look directly but smoothly
        const tempLookAtTarget = this.camera.position.clone().add(this.camera.getWorldDirection(new THREE.Vector3()));
        tempLookAtTarget.lerp(lookAtPosition, lerpAlpha * 2); // Look slightly faster

        this.camera.lookAt(lookAtPosition); // Use the lerped or direct lookAt position

        // Ensure camera's up vector aligns with the plane's up vector for stability
        // This prevents weird rolling during bank maneuvers
        const planeUp = new THREE.Vector3(0, 1, 0);
        planeUp.applyQuaternion(this.target.quaternion);
        this.camera.up.copy(planeUp);
    }
} 
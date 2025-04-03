import * as THREE from 'three';
import { Projectile } from './Projectile'; // Import the Projectile class

/**
 * Manages the plane object, including its creation and updates.
 * The plane has been scaled up to match other game elements and 
 * given a flashy appearance with metallic red body and blue accents.
 */
export class Plane {
    public mesh: THREE.Group; // The main group containing all parts of the plane
    private propellerGroup: THREE.Group; // Reference to the propeller group for animation
    private engineGlow: THREE.PointLight; // Glow effect for the engine
    private scaleFactor: number = 5; // Scale factor to make the plane larger

    constructor() {
        this.mesh = new THREE.Group();
        this.propellerGroup = new THREE.Group(); // Initialize here
        this.engineGlow = new THREE.PointLight(0x00ffff, 2, 10); // Blue engine glow
        this.createModel();
        
        // Add name and userData for identification
        this.mesh.name = 'plane';
        this.mesh.userData = { isPlane: true };
    }

    /**
     * Creates the 3D model of the plane.
     */
    private createModel(): void {
        // Flashy metallic red material for the main body
        const planeMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xff1a1a,    // Bright red
            shininess: 100,     // High shininess for metallic look
            specular: 0xffffff  // White specular highlights
        });
        
        // Blue material for accents
        const accentMaterial = new THREE.MeshPhongMaterial({
            color: 0x0066ff,    // Bright blue
            shininess: 120,
            specular: 0xaaaaff
        });

        // Fuselage - scaled up
        const fuselageGeometry = new THREE.CylinderGeometry(
            0.2 * this.scaleFactor, 
            0.2 * this.scaleFactor, 
            1.5 * this.scaleFactor, 
            8
        );
        fuselageGeometry.rotateX(Math.PI / 2);
        const fuselage = new THREE.Mesh(fuselageGeometry, planeMaterial);
        this.mesh.add(fuselage);

        // Nose cone - scaled up
        const noseGeometry = new THREE.CylinderGeometry(
            0.2 * this.scaleFactor, 
            0.15 * this.scaleFactor, 
            0.5 * this.scaleFactor, 
            8
        );
        noseGeometry.rotateX(Math.PI / 2);
        const nose = new THREE.Mesh(noseGeometry, planeMaterial);
        nose.position.set(0, 0, -1 * this.scaleFactor); // Position at front of fuselage
        this.mesh.add(nose);

        // Propeller Group setup - scaled up
        this.propellerGroup.position.set(0, 0, -1.3 * this.scaleFactor); // Position at front of nose

        // Propeller blades with blue accent color
        const propBlade1Geometry = new THREE.BoxGeometry(
            0.5 * this.scaleFactor, 
            0.05 * this.scaleFactor, 
            0.05 * this.scaleFactor
        );
        const propBlade1 = new THREE.Mesh(propBlade1Geometry, accentMaterial);
        this.propellerGroup.add(propBlade1);

        const propBlade2Geometry = new THREE.BoxGeometry(
            0.5 * this.scaleFactor, 
            0.05 * this.scaleFactor, 
            0.05 * this.scaleFactor
        );
        const propBlade2 = new THREE.Mesh(propBlade2Geometry, accentMaterial);
        propBlade2.rotation.z = Math.PI / 2;
        this.propellerGroup.add(propBlade2);

        this.mesh.add(this.propellerGroup);

        // Main wings - scaled up and with swept-back design
        const mainWingsGeometry = new THREE.BoxGeometry(
            3 * this.scaleFactor, 
            0.05 * this.scaleFactor, 
            0.7 * this.scaleFactor
        );
        const mainWings = new THREE.Mesh(mainWingsGeometry, planeMaterial);
        mainWings.position.set(0, 0, 0.2 * this.scaleFactor); // Slightly backward
        
        // Add blue wingtips
        const leftWingtipGeometry = new THREE.BoxGeometry(
            0.3 * this.scaleFactor,
            0.1 * this.scaleFactor,
            0.5 * this.scaleFactor
        );
        const leftWingtip = new THREE.Mesh(leftWingtipGeometry, accentMaterial);
        leftWingtip.position.set(-1.5 * this.scaleFactor, 0, 0.1 * this.scaleFactor);
        mainWings.add(leftWingtip);
        
        const rightWingtipGeometry = new THREE.BoxGeometry(
            0.3 * this.scaleFactor,
            0.1 * this.scaleFactor,
            0.5 * this.scaleFactor
        );
        const rightWingtip = new THREE.Mesh(rightWingtipGeometry, accentMaterial);
        rightWingtip.position.set(1.5 * this.scaleFactor, 0, 0.1 * this.scaleFactor);
        mainWings.add(rightWingtip);
        
        this.mesh.add(mainWings);

        // Tail wing (horizontal stabilizer) - scaled up
        const tailWingGeometry = new THREE.BoxGeometry(
            1 * this.scaleFactor, 
            0.05 * this.scaleFactor, 
            0.3 * this.scaleFactor
        );
        const tailWing = new THREE.Mesh(tailWingGeometry, planeMaterial);
        tailWing.position.set(0, 0, 0.9 * this.scaleFactor); // At the back
        this.mesh.add(tailWing);
        
        // Vertical stabilizer (tail fin)
        const tailFinGeometry = new THREE.BoxGeometry(
            0.05 * this.scaleFactor,
            0.4 * this.scaleFactor,
            0.4 * this.scaleFactor
        );
        const tailFin = new THREE.Mesh(tailFinGeometry, accentMaterial); // Blue accent
        tailFin.position.set(0, 0.2 * this.scaleFactor, 0.9 * this.scaleFactor);
        this.mesh.add(tailFin);

        // Antenna - scaled up
        const antennaGeometry = new THREE.CylinderGeometry(
            0.03 * this.scaleFactor, 
            0.03 * this.scaleFactor, 
            0.2 * this.scaleFactor, 
            8
        );
        const antenna = new THREE.Mesh(antennaGeometry, accentMaterial); // Blue accent
        antenna.position.set(0, 0.3 * this.scaleFactor, 0); // On top
        this.mesh.add(antenna);
        
        // Add engine glow point light at the back of the plane
        this.engineGlow.position.set(0, 0, 1.2 * this.scaleFactor);
        this.mesh.add(this.engineGlow);
        
        // Add a small glowing sphere to visualize the engine exhaust
        const exhaustGeometry = new THREE.SphereGeometry(0.15 * this.scaleFactor, 16, 8);
        const exhaustMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x00ffff, 
            transparent: true,
            opacity: 0.7
        });
        const exhaustSphere = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
        exhaustSphere.position.set(0, 0, 1.2 * this.scaleFactor);
        this.mesh.add(exhaustSphere);
    }

    /**
     * Updates the plane's state, like propeller animation and engine glow.
     * @param {number} deltaTime Time since last frame.
     */
    public update(deltaTime: number): void {
        // Animate the propeller
        const propellerSpeed = 50; // Radians per second
        this.propellerGroup.rotation.z += propellerSpeed * deltaTime;
        
        // Animate engine glow intensity for a pulsing effect
        if (this.engineGlow) {
            this.engineGlow.intensity = 2 + Math.sin(Date.now() * 0.01) * 0.5;
        }
    }

    /**
     * Sets the initial position and orientation of the plane.
     * @param {THREE.Vector3} position Initial position vector.
     * @param {THREE.Quaternion} orientation Initial orientation quaternion.
     */
    public setInitialState(position: THREE.Vector3, orientation: THREE.Quaternion): void {
        this.mesh.position.copy(position);
        this.mesh.quaternion.copy(orientation);
    }

    /**
     * Creates and returns a new Projectile fired from the front of the plane.
     * @returns {Projectile} The newly created projectile instance.
     */
    public shoot(): Projectile {
        // 1. Calculate starting position:
        // Start slightly ahead of the plane's nose, adjusted for new scale
        const startOffset = new THREE.Vector3(0, 0, -1.5 * this.scaleFactor);
        const startPosition = this.mesh.localToWorld(startOffset.clone());

        // 2. Calculate direction:
        // The direction the plane is facing (negative Z-axis in local space).
        const direction = new THREE.Vector3(0, 0, -1);
        direction.applyQuaternion(this.mesh.quaternion); // Transform local direction to world direction
        direction.normalize();

        // 3. Create the projectile
        const projectile = new Projectile(startPosition, direction);

        return projectile;
    }
} 
import * as THREE from 'three';

/**
 * Represents a single projectile (rainbow laser) fired from the plane.
 * Scaled up to match the larger UFOs and plane size.
 */
export class Projectile {
    public mesh: THREE.Mesh;
    private velocity: THREE.Vector3;
    private lifespan: number; // Time in seconds before the projectile disappears
    private timeAlive: number = 0;
    private flowSpeed: number = 2.0; // How fast the colors flow along the laser
    private material: THREE.ShaderMaterial;
    private scaleFactor: number = 5; // Scale factor to match other game elements

    // Constants for projectile appearance and behavior
    private static readonly PROJECTILE_SPEED = 300; // Speed in units per second
    private static readonly PROJECTILE_LIFESPAN = 4.0; // Max lifetime in seconds
    private static readonly PROJECTILE_RADIUS = 0.2 * 5; // Scaled up by factor of 5
    private static readonly PROJECTILE_LENGTH = 15.0 * 5; // Scaled up by factor of 5

    /**
     * Creates a new projectile instance.
     * @param startPosition The initial position vector of the projectile.
     * @param direction The normalized direction vector the projectile should travel in.
     */
    constructor(startPosition: THREE.Vector3, direction: THREE.Vector3) {
        // Create the geometry for the laser beam (longer cylinder)
        const geometry = new THREE.CylinderGeometry(
            Projectile.PROJECTILE_RADIUS,
            Projectile.PROJECTILE_RADIUS,
            Projectile.PROJECTILE_LENGTH,
            16, // More radial segments for smoother appearance
            8,  // More height segments to better show the color gradient
            false
        );

        // Custom shader material for rainbow laser effect
        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 },  // Time uniform for flowing effect
                length: { value: Projectile.PROJECTILE_LENGTH } // Laser length for color calculation
            },
            vertexShader: `
                // Variables passed from vertex to fragment shader
                varying vec2 vUv;
                varying float vRelativePos;
                
                void main() {
                    // Pass UV coordinates to fragment shader
                    vUv = uv;
                    
                    // Calculate and pass relative position along the laser (0 to 1)
                    // Y component of uv goes from 0 at bottom to 1 at top
                    vRelativePos = uv.y;
                    
                    // Standard vertex position calculation 
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform float length;
                
                varying vec2 vUv;
                varying float vRelativePos;
                
                // Function to convert HSV to RGB color
                vec3 hsv2rgb(vec3 c) {
                    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
                    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
                    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
                }
                
                void main() {
                    // Create flowing rainbow effect based on position and time
                    float hue = mod(vRelativePos * 3.0 - time, 1.0); // Full rainbow cycle
                    
                    // Create some variation in the rainbow pattern
                    float sinEffect = sin(vRelativePos * 15.0 - time * 5.0) * 0.1;
                    hue = mod(hue + sinEffect, 1.0);
                    
                    // Brightness falloff towards the end of the beam
                    float brightness = 1.0 - (vRelativePos * 0.5);
                    
                    // Edge glow effect
                    float edge = 0.5 - distance(vUv.x, 0.5);
                    float glow = pow(edge * 2.0, 3.0);
                    
                    // Generate rainbow color
                    vec3 rgbColor = hsv2rgb(vec3(hue, 1.0, brightness));
                    
                    // Add some white core for intensity
                    float core = pow(edge * 2.0, 8.0) * 0.8;
                    rgbColor += vec3(core);
                    
                    gl_FragColor = vec4(rgbColor, 1.0);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending // Makes the laser beam glow brightly
        });

        this.material = shaderMaterial;
        this.mesh = new THREE.Mesh(geometry, this.material);

        // Set initial position - moved back half the length so it starts at the plane
        const positionOffset = direction.clone().multiplyScalar(-Projectile.PROJECTILE_LENGTH / 2);
        this.mesh.position.copy(startPosition).add(positionOffset);

        // Align the cylinder geometry to the direction vector
        // The cylinder geometry is initially aligned with the Y axis
        const alignmentQuaternion = new THREE.Quaternion();
        alignmentQuaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
        this.mesh.quaternion.copy(alignmentQuaternion);

        // Set velocity based on direction and speed
        this.velocity = direction.clone().multiplyScalar(Projectile.PROJECTILE_SPEED);

        // Set lifespan
        this.lifespan = Projectile.PROJECTILE_LIFESPAN;
    }

    /**
     * Updates the projectile's position based on its velocity and updates shader uniforms.
     * @param deltaTime Time elapsed since the last frame in seconds.
     * @returns {boolean} True if the projectile is still active, false if it has expired.
     */
    public update(deltaTime: number): boolean {
        // Update position
        const displacement = this.velocity.clone().multiplyScalar(deltaTime);
        this.mesh.position.add(displacement);

        // Update time alive
        this.timeAlive += deltaTime;
        
        // Update shader uniform for flowing effect
        this.material.uniforms.time.value += deltaTime * this.flowSpeed;

        // Return true if still alive, false otherwise
        return this.timeAlive < this.lifespan;
    }

    /**
     * Cleans up the projectile's resources (geometry, material).
     * Should be called when the projectile is removed from the scene.
     */
    public dispose(): void {
        if (this.mesh) {
            if (this.mesh.geometry) {
                this.mesh.geometry.dispose();
            }
            if (this.mesh.material) {
                (this.mesh.material as THREE.Material).dispose();
            }
        }
    }
}
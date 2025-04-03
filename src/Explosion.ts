import * as THREE from 'three';

/**
 * Creates and manages a particle explosion effect.
 */
export class ParticleExplosion {
    public points: THREE.Points;
    private geometry: THREE.BufferGeometry;
    private material: THREE.PointsMaterial;
    private velocities: THREE.Vector3[] = [];
    private lifespan: number; // How long the explosion lasts
    private timeElapsed: number = 0;

    // Configuration constants
    private static readonly PARTICLE_COUNT = 100;
    private static readonly EXPLOSION_SPEED = 40;
    private static readonly EXPLOSION_LIFESPAN = 0.8; // seconds
    private static readonly START_COLOR = new THREE.Color(0xffd700); // Gold/Yellow
    private static readonly END_COLOR = new THREE.Color(0xff4500); // OrangeRed

    /**
     * Creates an explosion effect at a given position.
     * @param position The world position where the explosion originates.
     */
    constructor(position: THREE.Vector3) {
        this.lifespan = ParticleExplosion.EXPLOSION_LIFESPAN;

        // --- Geometry Setup ---
        this.geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(ParticleExplosion.PARTICLE_COUNT * 3);
        const colors = new Float32Array(ParticleExplosion.PARTICLE_COUNT * 3);

        for (let i = 0; i < ParticleExplosion.PARTICLE_COUNT; i++) {
            // Initial positions are at the center (will be moved by update)
            positions[i * 3] = 0;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = 0;

            // Initial color (will fade)
            colors[i * 3] = ParticleExplosion.START_COLOR.r;
            colors[i * 3 + 1] = ParticleExplosion.START_COLOR.g;
            colors[i * 3 + 2] = ParticleExplosion.START_COLOR.b;

            // Random velocity for each particle
            const velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 2, // -1 to 1
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 2
            );
            velocity.normalize().multiplyScalar(ParticleExplosion.EXPLOSION_SPEED * (0.5 + Math.random() * 0.5)); // Add some speed variation
            this.velocities.push(velocity);
        }

        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // --- Material Setup ---
        this.material = new THREE.PointsMaterial({
            size: 0.5,
            vertexColors: true,      // Use the color attribute
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending, // Good for explosions
            sizeAttenuation: true,   // Particles shrink with distance
            depthWrite: false,       // Avoid particles obscuring each other weirdly
        });

        // --- Points Object ---
        this.points = new THREE.Points(this.geometry, this.material);
        this.points.position.copy(position); // Set the explosion's origin
    }

    /**
     * Updates the explosion animation (particle movement, fading).
     * @param deltaTime Time since the last frame.
     * @returns {boolean} True if the explosion is still active, false if it has finished.
     */
    public update(deltaTime: number): boolean {
        this.timeElapsed += deltaTime;
        if (this.timeElapsed >= this.lifespan) {
            return false; // Explosion finished
        }

        const positions = this.geometry.attributes.position as THREE.BufferAttribute;
        const colors = this.geometry.attributes.color as THREE.BufferAttribute;
        const progress = this.timeElapsed / this.lifespan; // 0 to 1

        for (let i = 0; i < ParticleExplosion.PARTICLE_COUNT; i++) {
            // Update position based on velocity
            const velocity = this.velocities[i];
            positions.setX(i, positions.getX(i) + velocity.x * deltaTime);
            positions.setY(i, positions.getY(i) + velocity.y * deltaTime);
            positions.setZ(i, positions.getZ(i) + velocity.z * deltaTime);

            // Update color (lerp from start to end color)
            const currentColor = ParticleExplosion.START_COLOR.clone().lerp(ParticleExplosion.END_COLOR, progress);
            colors.setXYZ(i, currentColor.r, currentColor.g, currentColor.b);
        }

        // Fade out opacity
        this.material.opacity = 1.0 - progress;
        this.material.needsUpdate = true; // Important for opacity changes

        positions.needsUpdate = true; // Mark attributes as needing GPU update
        colors.needsUpdate = true;

        return true; // Explosion still active
    }

    /**
     * Cleans up resources (geometry, material).
     */
    public dispose(): void {
        if (this.geometry) {
            this.geometry.dispose();
        }
        if (this.material) {
            this.material.dispose();
        }
        // Note: The Points object itself is removed from the scene elsewhere
    }
} 
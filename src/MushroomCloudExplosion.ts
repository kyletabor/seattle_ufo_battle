import * as THREE from 'three';

interface MushroomParticle {
    position: THREE.Vector3;
    velocity: THREE.Vector3;
    lifespan: number;
    initialLifespan: number;
    size: number;
    initialSize: number;
    baseColor: THREE.Color;
    targetColor: THREE.Color;
    index: number; // Index in the geometry attributes
}

/**
 * Creates and manages a mushroom cloud explosion effect using particles.
 */
export class MushroomCloudExplosion {
    public points: THREE.Points;
    private geometry: THREE.BufferGeometry;
    private material: THREE.PointsMaterial;
    
    private particles: MushroomParticle[] = [];
    private maxParticles: number = 800; // Increased from 500
    private lifespan: number; // How long the main effect lasts
    private timeElapsed: number = 0;

    // Configuration constants
    private static readonly EXPLOSION_LIFESPAN = 4.0; // Increased from 2.5 seconds
    // Stem config
    private static readonly STEM_PARTICLE_COUNT_RATIO = 0.3; // 30% for stem
    private static readonly STEM_HEIGHT = 25;
    private static readonly STEM_RADIUS = 3;
    private static readonly STEM_SPEED = 15;
    // Cap config
    private static readonly CAP_CENTER_Y_OFFSET = 20;
    private static readonly CAP_RADIUS = 25; // Increased from 15
    private static readonly CAP_SPEED = 35; // Increased from 25
    // Particle appearance
    private static readonly PARTICLE_START_SIZE = 1.0;
    private static readonly PARTICLE_MID_SIZE = 5.0; // Slightly larger peak size
    private static readonly PARTICLE_END_SIZE = 0.5;
    private static readonly START_COLOR_FIRE = new THREE.Color(0xfff59e); // Bright Yellow
    private static readonly MID_COLOR_FIRE = new THREE.Color(0xff5722); // Deep Orange
    private static readonly END_COLOR_SMOKE = new THREE.Color(0x222222); // Dark Grey

    // Geometry attributes - we'll update these directly
    private positions: Float32Array;
    private colors: Float32Array;
    private sizes: Float32Array;

    /**
     * Creates a mushroom cloud explosion effect at a given position.
     * @param position The world position where the explosion originates (ground level).
     */
    constructor(position: THREE.Vector3) {
        this.lifespan = MushroomCloudExplosion.EXPLOSION_LIFESPAN;

        // --- Geometry Setup ---
        this.geometry = new THREE.BufferGeometry();
        this.positions = new Float32Array(this.maxParticles * 3);
        this.colors = new Float32Array(this.maxParticles * 3);
        this.sizes = new Float32Array(this.maxParticles);

        // --- Particle Creation ---
        const stemCount = Math.floor(this.maxParticles * MushroomCloudExplosion.STEM_PARTICLE_COUNT_RATIO);
        const capCount = this.maxParticles - stemCount;

        for (let i = 0; i < this.maxParticles; i++) {
            let pVelocity: THREE.Vector3;
            let pPosition = position.clone(); // Start at ground zero
            let pLifespan = MushroomCloudExplosion.EXPLOSION_LIFESPAN * (0.7 + Math.random() * 0.6); // Random variation
            let pStartSize = MushroomCloudExplosion.PARTICLE_START_SIZE * (0.8 + Math.random() * 0.4);
            
            if (i < stemCount) {
                // --- Stem Particle --- 
                pVelocity = new THREE.Vector3(
                    (Math.random() - 0.5) * MushroomCloudExplosion.STEM_RADIUS * 0.2, // Narrow horizontal spread
                    MushroomCloudExplosion.STEM_SPEED * (0.9 + Math.random() * 0.2), // Strong upward velocity
                    (Math.random() - 0.5) * MushroomCloudExplosion.STEM_RADIUS * 0.2
                );
            } else {
                // --- Cap Particle --- 
                // Start slightly higher
                pPosition.y += MushroomCloudExplosion.CAP_CENTER_Y_OFFSET * Math.random() * 0.5;
                // Velocity outwards from cap center
                pVelocity = new THREE.Vector3(
                    (Math.random() - 0.5),
                    (Math.random() - 0.5) * 0.5, // Less vertical spread for cap
                    (Math.random() - 0.5)
                );
                pVelocity.normalize().multiplyScalar(MushroomCloudExplosion.CAP_SPEED * (0.5 + Math.random()));
                // Add some upward bias to the cap expansion
                pVelocity.y = Math.abs(pVelocity.y) * 0.5 + 2.0; 
            }

            const particle: MushroomParticle = {
                position: pPosition,
                velocity: pVelocity,
                lifespan: pLifespan,
                initialLifespan: pLifespan,
                size: pStartSize,
                initialSize: pStartSize,
                baseColor: MushroomCloudExplosion.START_COLOR_FIRE, // Initial color
                targetColor: MushroomCloudExplosion.MID_COLOR_FIRE, // Color to lerp towards first
                index: i,
            };
            this.particles.push(particle);

            // Initialize attributes
            this.positions[i * 3] = pPosition.x;
            this.positions[i * 3 + 1] = pPosition.y;
            this.positions[i * 3 + 2] = pPosition.z;
            this.sizes[i] = pStartSize;
            this.colors[i * 3] = particle.baseColor.r;
            this.colors[i * 3 + 1] = particle.baseColor.g;
            this.colors[i * 3 + 2] = particle.baseColor.b;
        }

        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
        this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

        // --- Material Setup ---
        this.material = new THREE.PointsMaterial({
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending, // Fiery look
            sizeAttenuation: true,
            depthWrite: false, 
        });

        // --- Points Object ---
        this.points = new THREE.Points(this.geometry, this.material);
        // Position is handled per-particle, main object at origin (or doesn't matter)
    }

    /**
     * Updates the explosion animation (particle movement, color, size, opacity).
     * @param deltaTime Time since the last frame.
     * @returns {boolean} True if the explosion is still active, false if it has finished.
     */
    public update(deltaTime: number): boolean {
        this.timeElapsed += deltaTime;
        if (this.timeElapsed >= this.lifespan) {
            return false; // Explosion finished
        }
        
        const overallProgress = this.timeElapsed / this.lifespan; // 0 to 1

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.lifespan -= deltaTime;

            if (p.lifespan > 0) {
                // Update position
                p.position.addScaledVector(p.velocity, deltaTime);
                // Apply slight downward drift (gravity/drag)
                p.velocity.y -= 1.5 * deltaTime;

                // Calculate individual progress (0 = start, 1 = end)
                const progress = 1.0 - (p.lifespan / p.initialLifespan);

                // Update size: Grow then shrink
                const peakTime = 0.3; 
                if (progress < peakTime) {
                    p.size = THREE.MathUtils.lerp(p.initialSize, MushroomCloudExplosion.PARTICLE_MID_SIZE, progress / peakTime);
                } else {
                    p.size = THREE.MathUtils.lerp(MushroomCloudExplosion.PARTICLE_MID_SIZE, MushroomCloudExplosion.PARTICLE_END_SIZE, (progress - peakTime) / (1.0 - peakTime));
                }
                
                // Update color: Fire -> Smoke
                const smokeStartTime = 0.5; // Increased from 0.4
                let currentColor: THREE.Color;
                if (progress < smokeStartTime) {
                     // Yellow to OrangeRed
                    currentColor = p.baseColor.clone().lerp(MushroomCloudExplosion.MID_COLOR_FIRE, progress / smokeStartTime);
                } else {
                    // OrangeRed to Dark Grey (Smoke)
                    currentColor = MushroomCloudExplosion.MID_COLOR_FIRE.clone().lerp(MushroomCloudExplosion.END_COLOR_SMOKE, (progress - smokeStartTime) / (1.0 - smokeStartTime));
                }
                
                 // Update opacity (using color intensity - fade slower at the end)
                const opacity = Math.max(0, Math.pow(1.0 - progress, 0.25)); // Changed exponent from 0.5 to 0.25
                currentColor.multiplyScalar(opacity);

                // Update geometry attributes
                this.positions[p.index * 3] = p.position.x;
                this.positions[p.index * 3 + 1] = p.position.y;
                this.positions[p.index * 3 + 2] = p.position.z;
                this.sizes[p.index] = Math.max(0, p.size); // Ensure size doesn't go negative
                this.colors[p.index * 3] = currentColor.r;
                this.colors[p.index * 3 + 1] = currentColor.g;
                this.colors[p.index * 3 + 2] = currentColor.b;

            } else {
                // Particle is dead, hide it
                if (this.sizes[p.index] !== 0) { // Avoid unnecessary updates
                    this.sizes[p.index] = 0;
                    // Optional: Could remove from particles array, but reusing indices is okay
                    this.particles.splice(i, 1); // Remove dead particle
                } 
            }
        }

        // Tell Three.js to update the attributes on the GPU
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.size.needsUpdate = true;
        this.geometry.attributes.color.needsUpdate = true;

        return true; // Still active
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
    }
} 
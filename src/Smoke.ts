import * as THREE from 'three';

interface SmokeParticle {
    position: THREE.Vector3;
    velocity: THREE.Vector3;
    lifespan: number;
    initialLifespan: number;
    size: number;
    initialSize: number;
    baseColor: THREE.Color;
    index: number; // Index in the geometry attributes
}

/**
 * Creates and manages a smoke particle emitter attached to an object.
 */
export class SmokeEmitter {
    public points: THREE.Points;
    private geometry: THREE.BufferGeometry;
    private material: THREE.PointsMaterial;
    private parentMesh: THREE.Object3D; // The object to attach the smoke to

    private particles: SmokeParticle[] = [];
    private maxParticles: number = 200; // Max particles at once
    private emissionRate: number = 50; // Particles per second
    private timeSinceLastEmit: number = 0;
    private isActive: boolean = false;

    // Particle behavior constants
    private static readonly PARTICLE_LIFESPAN = 2.0; // seconds
    private static readonly PARTICLE_START_SIZE = 1.5;
    private static readonly PARTICLE_END_SIZE = 4.0;
    private static readonly PARTICLE_START_OPACITY = 0.6;
    private static readonly PARTICLE_END_OPACITY = 0.0;
    private static readonly PARTICLE_BASE_COLOR = new THREE.Color(0x333333);
    private static readonly PARTICLE_RISE_SPEED = 2.0;
    private static readonly PARTICLE_SPREAD = 1.5;

    // Geometry attributes - we'll update these directly
    private positions: Float32Array;
    private colors: Float32Array;
    private sizes: Float32Array;
    private particleIndexCounter: number = 0; // To cycle through buffer positions

    /**
     * Creates a smoke emitter.
     * @param parentMesh The mesh the smoke should emit from.
     * @param scene The scene to add the smoke points object to.
     */
    constructor(parentMesh: THREE.Object3D, scene: THREE.Scene) {
        this.parentMesh = parentMesh;

        // --- Geometry Setup ---
        this.geometry = new THREE.BufferGeometry();
        this.positions = new Float32Array(this.maxParticles * 3);
        this.colors = new Float32Array(this.maxParticles * 3);
        this.sizes = new Float32Array(this.maxParticles);

        // Initialize attributes (positions don't matter yet, size/color set on emit)
        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
        this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

        // --- Material Setup ---
        // TODO: Consider using a texture for smoke particles later
        this.material = new THREE.PointsMaterial({
            // size: this.particleStartSize, // Size is now per-vertex
            vertexColors: true,
            transparent: true,
            opacity: 1.0, // Opacity is handled by vertex colors alpha (implicitly)
            blending: THREE.NormalBlending,
            sizeAttenuation: true,
            depthWrite: false, // Important for transparency
        });

        // --- Points Object ---
        this.points = new THREE.Points(this.geometry, this.material);
        // Smoke should exist in world space, not relative to the UFO's rotation/scale
        scene.add(this.points); 
    }

    /** Starts emitting smoke particles. */
    public start(): void {
        this.isActive = true;
        this.timeSinceLastEmit = 1 / this.emissionRate; // Emit one immediately
    }

    /** Stops emitting new smoke particles. Existing ones fade out. */
    public stop(): void {
        this.isActive = false;
    }

    /**
     * Updates the smoke emitter: emits new particles and updates existing ones.
     * @param deltaTime Time since the last frame.
     */
    public update(deltaTime: number): void {
        // 1. Emit new particles if active
        if (this.isActive) {
            this.timeSinceLastEmit += deltaTime;
            const emitInterval = 1 / this.emissionRate;
            while (this.timeSinceLastEmit >= emitInterval) {
                this.emitParticle();
                this.timeSinceLastEmit -= emitInterval;
            }
        }

        // 2. Update existing particles
        const currentParticles = this.particles.length;
        let aliveParticles = 0;
        for (let i = currentParticles - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.lifespan -= deltaTime;

            if (p.lifespan > 0) {
                // Update position
                p.position.addScaledVector(p.velocity, deltaTime);

                // Calculate progress (0 = start, 1 = end)
                const progress = 1.0 - (p.lifespan / p.initialLifespan);

                // Update size (interpolate)
                p.size = THREE.MathUtils.lerp(p.initialSize, SmokeEmitter.PARTICLE_END_SIZE, progress);

                // Update opacity/color (fade out alpha)
                // We use the color attribute's RGB for color and Size attribute for visual size.
                // For opacity, we can fade the color towards black or adjust alpha if material supported.
                // Since PointsMaterial doesn't directly support per-particle alpha, we fade color.
                const currentOpacity = THREE.MathUtils.lerp(SmokeEmitter.PARTICLE_START_OPACITY, SmokeEmitter.PARTICLE_END_OPACITY, progress);
                const currentColor = p.baseColor.clone().multiplyScalar(currentOpacity); // Fade color intensity

                // Update geometry attributes for this particle
                this.positions[p.index * 3] = p.position.x;
                this.positions[p.index * 3 + 1] = p.position.y;
                this.positions[p.index * 3 + 2] = p.position.z;

                this.sizes[p.index] = p.size;

                this.colors[p.index * 3] = currentColor.r;
                this.colors[p.index * 3 + 1] = currentColor.g;
                this.colors[p.index * 3 + 2] = currentColor.b;

                aliveParticles++;
            } else {
                // Particle is dead, hide it by setting size to 0 and remove from active list
                this.sizes[p.index] = 0;
                this.particles.splice(i, 1);
            }
        }

        // Tell Three.js to update the attributes on the GPU
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.size.needsUpdate = true;
        this.geometry.attributes.color.needsUpdate = true;

        // Important: Update draw range to only draw active particles
        // This is complex if we remove particles from the middle. Re-using indices is better.
        // For simplicity now, we rely on size=0 to hide dead particles until their buffer slot is reused.
        // this.geometry.setDrawRange(0, aliveParticles); 
    }

    /** Emits a single smoke particle. */
    private emitParticle(): void {
        if (this.particles.length >= this.maxParticles) {
             // Optional: Remove the oldest particle if max capacity is reached
            const oldestParticle = this.particles.shift();
            if (oldestParticle) {
                this.sizes[oldestParticle.index] = 0; // Hide it immediately
            }
            if (this.particles.length >= this.maxParticles) return; // Still full, skip emit
        }

        const lifespan = SmokeEmitter.PARTICLE_LIFESPAN * (0.8 + Math.random() * 0.4); // Random variation
        const startSize = SmokeEmitter.PARTICLE_START_SIZE * (0.8 + Math.random() * 0.4);

        // Get emission position from parent mesh (world space)
        const emitPosition = new THREE.Vector3();
        this.parentMesh.getWorldPosition(emitPosition);
        // Optional: Add a slight random offset from the parent's center
        emitPosition.x += (Math.random() - 0.5) * 2;
        emitPosition.z += (Math.random() - 0.5) * 2;

        const velocity = new THREE.Vector3(
            (Math.random() - 0.5) * SmokeEmitter.PARTICLE_SPREAD,
            SmokeEmitter.PARTICLE_RISE_SPEED * (0.8 + Math.random() * 0.4),
            (Math.random() - 0.5) * SmokeEmitter.PARTICLE_SPREAD
        );

        // Determine which index in the buffer attributes to use
        const bufferIndex = this.particleIndexCounter % this.maxParticles;
        this.particleIndexCounter++;

        const particle: SmokeParticle = {
            position: emitPosition,
            velocity: velocity,
            lifespan: lifespan,
            initialLifespan: lifespan,
            size: startSize,
            initialSize: startSize,
            baseColor: SmokeEmitter.PARTICLE_BASE_COLOR,
            index: bufferIndex,
        };

        // Add to active particles list
        this.particles.push(particle);

        // Initialize attributes for the new particle (it will be updated visually in the next update call)
        this.positions[bufferIndex * 3] = particle.position.x;
        this.positions[bufferIndex * 3 + 1] = particle.position.y;
        this.positions[bufferIndex * 3 + 2] = particle.position.z;
        this.sizes[bufferIndex] = particle.size;
        this.colors[bufferIndex * 3] = particle.baseColor.r;
        this.colors[bufferIndex * 3 + 1] = particle.baseColor.g;
        this.colors[bufferIndex * 3 + 2] = particle.baseColor.b;
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
        // Note: The Points object needs to be removed from the scene externally if needed
        // For example, in main.ts when the UFO is removed.
    }
} 
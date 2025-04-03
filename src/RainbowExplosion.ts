import * as THREE from 'three';

/**
 * Creates and manages a super vibrant rainbow-colored particle explosion effect.
 * Used when lasers hit UFOs to create a spectacular colorful display.
 * Scaled up to match the larger UFOs and plane.
 */
export class RainbowExplosion {
    public points: THREE.Points;
    private geometry: THREE.BufferGeometry;
    private material: THREE.PointsMaterial;
    private velocities: THREE.Vector3[] = [];
    private particleColors: THREE.Color[] = [];
    private particleSizes: number[] = [];
    private lifespan: number; // How long the explosion lasts
    private timeElapsed: number = 0;
    private scaleFactor: number = 5; // Scale factor to match other game elements

    // Configuration constants
    private static readonly PARTICLE_COUNT = 500; // Increased for more spectacular effect
    private static readonly EXPLOSION_SPEED = 45 * 5; // Scaled up speed
    private static readonly EXPLOSION_LIFESPAN = 2.5; // Slightly longer lifespan (seconds)
    private static readonly PARTICLE_SIZE_MIN = 4.0; // Larger particle size
    private static readonly PARTICLE_SIZE_MAX = 10.0; // Larger max particle size
    
    // Expanded array of super vibrant rainbow colors
    private static readonly RAINBOW_COLORS = [
        new THREE.Color(0xff0000), // Red
        new THREE.Color(0xff2000), // Red-Orange
        new THREE.Color(0xff4000), // Orange-Red
        new THREE.Color(0xff7f00), // Orange
        new THREE.Color(0xffaa00), // Amber
        new THREE.Color(0xffff00), // Yellow
        new THREE.Color(0xaaff00), // Lime
        new THREE.Color(0x00ff00), // Green
        new THREE.Color(0x00ffaa), // Spring Green
        new THREE.Color(0x00ffff), // Cyan
        new THREE.Color(0x00aaff), // Sky Blue
        new THREE.Color(0x0088ff), // Azure
        new THREE.Color(0x0000ff), // Blue
        new THREE.Color(0x4b0082), // Indigo
        new THREE.Color(0x7700ff), // Violet
        new THREE.Color(0x9400d3), // Purple
        new THREE.Color(0xff00ff), // Magenta
        new THREE.Color(0xff00aa), // Hot Pink
        new THREE.Color(0xff0055)  // Deep Pink
    ];

    /**
     * Creates a spectacular rainbow explosion effect at a given position.
     * @param position The world position where the explosion originates.
     */
    constructor(position: THREE.Vector3) {
        this.lifespan = RainbowExplosion.EXPLOSION_LIFESPAN;

        // --- Geometry Setup ---
        this.geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(RainbowExplosion.PARTICLE_COUNT * 3);
        const colors = new Float32Array(RainbowExplosion.PARTICLE_COUNT * 3);
        const sizes = new Float32Array(RainbowExplosion.PARTICLE_COUNT);

        for (let i = 0; i < RainbowExplosion.PARTICLE_COUNT; i++) {
            // Initial positions are at the center (will be moved by update)
            // Increased initial spread for larger explosions
            positions[i * 3] = (Math.random() - 0.5) * 10; 
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

            // Assign a random rainbow color to each particle with enhanced brightness
            const colorIndex = Math.floor(Math.random() * RainbowExplosion.RAINBOW_COLORS.length);
            const particleColor = RainbowExplosion.RAINBOW_COLORS[colorIndex].clone();
            
            // Boost color vibrancy (careful not to exceed 1.0)
            particleColor.r = Math.min(1.0, particleColor.r * 1.2);
            particleColor.g = Math.min(1.0, particleColor.g * 1.2);
            particleColor.b = Math.min(1.0, particleColor.b * 1.2);
            
            this.particleColors.push(particleColor);
            
            colors[i * 3] = particleColor.r;
            colors[i * 3 + 1] = particleColor.g;
            colors[i * 3 + 2] = particleColor.b;

            // Random particle size for added visual interest - scaled up
            const particleSize = RainbowExplosion.PARTICLE_SIZE_MIN + 
                Math.random() * (RainbowExplosion.PARTICLE_SIZE_MAX - RainbowExplosion.PARTICLE_SIZE_MIN);
            this.particleSizes.push(particleSize);
            sizes[i] = particleSize;

            // Create more interesting explosion patterns
            // Mix of standard explosion with spiral/fountain elements
            let velocity: THREE.Vector3;
            
            if (Math.random() < 0.7) {
                // Standard explosion pattern with upward bias
                const theta = Math.random() * Math.PI * 2; // Random angle around y-axis
                const phi = Math.random() * Math.PI * 0.7; // Angle from y-axis (biased upward)
                
                velocity = new THREE.Vector3(
                    Math.sin(phi) * Math.cos(theta),
                    Math.cos(phi) + Math.random() * 0.5, // More positive Y values with extra upward boost
                    Math.sin(phi) * Math.sin(theta)
                );
            } else {
                // Spiral pattern particles
                const spiralAngle = Math.random() * Math.PI * 10; // Multiple revolutions
                const radius = 0.2 + Math.random() * 0.8;
                const height = 0.5 + Math.random() * 1.5;
                
                velocity = new THREE.Vector3(
                    Math.cos(spiralAngle) * radius,
                    height,
                    Math.sin(spiralAngle) * radius
                );
            }
            
            // Normalize and scale by random speed with wider variation
            // Apply scale factor for larger explosions
            velocity.normalize().multiplyScalar(
                RainbowExplosion.EXPLOSION_SPEED * (0.4 + Math.random() * 1.2)
            );
            
            this.velocities.push(velocity);
        }

        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // --- Material Setup ---
        this.material = new THREE.PointsMaterial({
            size: 5.0, // Scaled up base size
            vertexColors: true,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending, // Creates bright, glowing effect
            sizeAttenuation: true,
            depthWrite: false,
        });

        // Enable size attribute for varied particle sizes
        this.material.sizeAttenuation = true;
        
        // --- Points Object ---
        this.points = new THREE.Points(this.geometry, this.material);
        this.points.position.copy(position); // Set the explosion's origin
    }

    /**
     * Updates the rainbow explosion animation with enhanced effects.
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
        const sizes = this.geometry.attributes.size as THREE.BufferAttribute;
        const progress = this.timeElapsed / this.lifespan; // 0 to 1

        // Add gravity effect to make particles fall like sparks
        // Scaled up for larger explosions
        const gravity = new THREE.Vector3(0, -12 * this.scaleFactor, 0);

        // Add wind effect that changes over time for more organic movement
        const windAngle = this.timeElapsed * 2;
        const windStrength = 2.0 * this.scaleFactor; // Stronger wind, scaled up
        const wind = new THREE.Vector3(
            Math.sin(windAngle) * windStrength,
            0,
            Math.cos(windAngle) * windStrength * 0.5
        );

        for (let i = 0; i < RainbowExplosion.PARTICLE_COUNT; i++) {
            // Apply different physics to different particles
            const velocity = this.velocities[i];
            
            // Apply gravity with some randomization
            const gravityEffect = gravity.clone().multiplyScalar(deltaTime * (0.8 + Math.random() * 0.4));
            velocity.add(gravityEffect);
            
            // Apply wind effect differently to particles based on their size
            // Smaller particles are affected more by wind
            if (this.particleSizes[i] < RainbowExplosion.PARTICLE_SIZE_MIN + 2) {
                velocity.add(wind.clone().multiplyScalar(deltaTime * 1.5));
            } else {
                velocity.add(wind.clone().multiplyScalar(deltaTime * 0.8));
            }
            
            // Add slight drag/resistance
            velocity.multiplyScalar(0.99);
            
            // Update position based on velocity
            positions.setX(i, positions.getX(i) + velocity.x * deltaTime);
            positions.setY(i, positions.getY(i) + velocity.y * deltaTime);
            positions.setZ(i, positions.getZ(i) + velocity.z * deltaTime);

            // Color transition effects
            let currentColor;
            const baseColor = this.particleColors[i];
            
            if (progress < 0.4) {
                // First 40%: Intensify the color
                const brightnessFactor = 1.0 + (0.4 - progress) * 1.5;
                currentColor = baseColor.clone().multiplyScalar(brightnessFactor);
            } else if (progress < 0.8) {
                // Next 40%: Maintain the color
                currentColor = baseColor.clone();
            } else {
                // Last 20%: Fade to white, then transparent
                const whiteFactor = (progress - 0.8) / 0.2;
                currentColor = baseColor.clone().lerp(new THREE.Color(1, 1, 1), whiteFactor);
                
                // Also reduce size as particles fade
                let currentSize = sizes.getX(i);
                currentSize *= (1.0 - (progress - 0.8) * 2);
                sizes.setX(i, Math.max(0.1, currentSize));
            }
            
            // Apply color
            colors.setXYZ(i, currentColor.r, currentColor.g, currentColor.b);
            
            // Add flickering effect based on noise
            // This would give a little "sparkle" to the particles
            if (Math.random() > 0.9) {
                colors.setXYZ(i, 1, 1, 1); // Occasional white flicker
            }
        }
        
        // Mark attributes as needing update
        positions.needsUpdate = true;
        colors.needsUpdate = true;
        sizes.needsUpdate = true;
        
        // Update material opacity for fade-out near the end
        if (progress > 0.8) {
            this.material.opacity = 1.0 - (progress - 0.8) / 0.2;
        }
        
        return true; // Explosion still active
    }

    /**
     * Cleans up resources when the explosion is removed.
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
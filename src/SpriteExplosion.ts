import * as THREE from 'three';

/**
 * Creates and manages an explosion effect using an animated sprite sheet.
 */
export class SpriteExplosion {
    public mesh: THREE.Mesh;
    private material: THREE.MeshBasicMaterial;
    private texture: THREE.Texture;
    private clock: THREE.Clock;
    private lifespan: number;
    private timeElapsed: number = 0;
    private rows: number;
    private columns: number;
    private totalFrames: number;
    private frameDuration: number;
    private currentFrame: number = 0;

    // Configuration
    private static readonly EXPLOSION_SIZE = 30; // World units size of the explosion plane
    private static readonly EXPLOSION_LIFESPAN = 0.8; // seconds - should match animation length
    private static readonly TEXTURE_PATH = 'assets/textures/explosion_sheet.png';
    private static readonly SPRITE_ROWS = 4;
    private static readonly SPRITE_COLS = 4;

    /**
     * Creates a sprite sheet explosion.
     * @param position The world position where the explosion occurs.
     * @param scene The scene to add the explosion mesh to.
     */
    constructor(position: THREE.Vector3, scene: THREE.Scene) {
        this.clock = new THREE.Clock();
        this.rows = SpriteExplosion.SPRITE_ROWS;
        this.columns = SpriteExplosion.SPRITE_COLS;
        this.totalFrames = this.rows * this.columns;
        this.lifespan = SpriteExplosion.EXPLOSION_LIFESPAN;
        this.frameDuration = this.lifespan / this.totalFrames;

        // --- Texture Loading ---
        // NOTE: Assumes texture exists at the specified path!
        const textureLoader = new THREE.TextureLoader();
        this.texture = textureLoader.load(SpriteExplosion.TEXTURE_PATH);
        this.texture.wrapS = this.texture.wrapT = THREE.RepeatWrapping;
        this.texture.repeat.set(1 / this.columns, 1 / this.rows);
        // Initial offset (first frame)
        this.texture.offset.set(0, (this.rows - 1) / this.rows);

        // --- Material Setup ---
        this.material = new THREE.MeshBasicMaterial({
            map: this.texture,
            transparent: true,
            blending: THREE.AdditiveBlending, // Good for fiery explosions
            depthWrite: false,
            side: THREE.DoubleSide, // Make sure it's visible from both sides
        });

        // --- Geometry Setup ---
        const geometry = new THREE.PlaneGeometry(SpriteExplosion.EXPLOSION_SIZE, SpriteExplosion.EXPLOSION_SIZE);

        // --- Mesh Setup ---
        this.mesh = new THREE.Mesh(geometry, this.material);
        this.mesh.position.copy(position);
        // Rotate the plane to face the camera more often (optional)
        // this.mesh.rotation.x = -Math.PI / 4;
        scene.add(this.mesh);
    }

    /**
     * Updates the sprite animation frame.
     * @param deltaTime Time since last frame.
     * @returns {boolean} True if the explosion is still active, false otherwise.
     */
    public update(deltaTime: number): boolean {
        this.timeElapsed += deltaTime;
        if (this.timeElapsed >= this.lifespan) {
            return false; // Animation finished
        }

        // Calculate which frame should be displayed
        const frameIndex = Math.floor(this.timeElapsed / this.frameDuration);

        // Update texture offset only if the frame has changed
        if (frameIndex !== this.currentFrame && frameIndex < this.totalFrames) {
            this.currentFrame = frameIndex;
            const col = frameIndex % this.columns;
            const row = Math.floor(frameIndex / this.columns);

            // Texture offsets are calculated from bottom-left in UV space
            const offsetX = col / this.columns;
            // Row offset needs to be calculated from the top row (UV Y=1)
            const offsetY = (this.rows - 1 - row) / this.rows;
            
            this.texture.offset.set(offsetX, offsetY);
        }
        
        // Optional: Make the plane always face the camera (billboarding)
        // Requires camera reference passed to constructor or update
        // this.mesh.lookAt(camera.position);

        return true; // Still active
    }

    /**
     * Cleans up resources (geometry, material, texture).
     */
    public dispose(): void {
        if (this.mesh.geometry) {
            this.mesh.geometry.dispose();
        }
        if (this.material) {
            this.material.dispose();
        }
        if (this.texture) {
            this.texture.dispose();
        }
        // Mesh removed from scene externally
    }
} 
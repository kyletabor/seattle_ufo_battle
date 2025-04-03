# Seattle UFO Battle: 3D Shooter Game

A dynamic 3D shooter game set in Seattle! Pilot a plane through a realistic cityscape generated from Digital Elevation Models (DEM) and defend the iconic Space Needle from invading UFOs. Engage in aerial combat, firing vibrant rainbow lasers to take down the extraterrestrial threat.

## Requirements

*   A modern web browser that supports WebGL (e.g., Chrome, Firefox, Safari, Edge)
*   Node.js and npm (or yarn) for development and running the project locally.

## Tech Stack

*   **3D Engine:** Three.js
*   **Language:** TypeScript
*   **Markup:** HTML
*   **Styling:** CSS
*   **Bundler/Development Server:** Vite

## Features

*   **Realistic Seattle Terrain:** Explore a 3D representation of Seattle based on actual elevation data.
*   **Iconic Landmark:** Defend the Space Needle, rendered in detail (multiple versions available via URL parameters).
*   **UFO Combat:** Engage waves of attacking UFOs.
*   **Plane Controls:** Fly your plane using intuitive keyboard controls.
*   **Rainbow Lasers:** Equip your plane with colorful laser projectiles.
*   **Physics Engine:** Experience basic flight and projectile physics.
*   **Dynamic Environment:** Features lighting, basic city structures, particle explosions, and sound effects.
*   **Multiple Modes:** Includes different modes (e.g., 'game', 'layout', 'battle') accessible via URL parameters for debugging and viewing variations.

## Development Milestones

1.  **Create Plane Model:** Design and import a basic 3D model for the player's airplane.
2.  **Build City Environment:** Create a simple city landscape using basic 3D shapes (cubes for buildings, planes for ground).
3.  **Set Up Plane Controls:** Implement controls to allow the player to fly the plane around the environment (e.g., using keyboard or mouse).
4.  **Add UFOs, Shooting, and Explosions:**
    *   Create UFO models and place them in the scene.
    *   Implement shooting mechanics for the plane.
    *   Add collision detection and explosion effects when UFOs are hit.
5.  **Add Finishing Touches:**
    *   Integrate background music and sound effects (shooting, explosions).
    *   Create start, victory, and game over screens/states. 
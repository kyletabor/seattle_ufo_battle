/**
 * Declaration file for proj4.js library
 * This provides minimal TypeScript type definitions for the library.
 */

declare module 'proj4' {
    /**
     * Main function that can be used to transform coordinates between projection systems.
     * @param source Source projection definition.
     * @param destination Destination projection definition.
     * @param coordinates Coordinates to transform [x, y].
     * @returns Transformed coordinates [x, y].
     */
    function proj4(source: string, destination: string, coordinates: [number, number]): [number, number];
    
    /**
     * Define a new projection.
     * @param name Name or identifier for the projection.
     * @param projection Proj4 projection string.
     */
    namespace proj4 {
        function defs(name: string, projection: string): void;
    }
    
    export = proj4;
} 
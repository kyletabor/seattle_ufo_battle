import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base path to match your repository name
  // For a repository named 'seattle_ufo_battle', the base would be '/seattle_ufo_battle/'
  base: '/seattle_ufo_battle/',
  
  // Build configuration
  build: {
    // Output directory (default is 'dist')
    outDir: 'dist',
    
    // Generate source maps for debugging
    sourcemap: true,
    
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  
  // Server configuration for development
  server: {
    port: 3000,
    open: true,
  },
}); 
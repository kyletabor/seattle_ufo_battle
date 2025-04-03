// audio-paths.js - Dynamically adjusts audio paths for GitHub Pages deployment

(function() {
  // Function to rewrite audio paths based on current location
  function adjustAudioPaths() {
    // Check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    if (isGitHubPages) {
      console.log('GitHub Pages detected - adjusting audio paths');
      
      // Create a global variable that can be used by the AudioManager
      window.AUDIO_BASE_PATH = './audio';
      
      console.log(`Audio base path set to: ${window.AUDIO_BASE_PATH}`);
      
      // Also patch any fetch requests to audio files
      const originalFetch = window.fetch;
      window.fetch = function(url, options) {
        if (typeof url === 'string' && url.startsWith('/audio/')) {
          // Replace /audio/ with ./audio/
          const newUrl = url.replace('/audio/', './audio/');
          console.log(`Rewriting audio URL from ${url} to ${newUrl}`);
          return originalFetch(newUrl, options);
        }
        return originalFetch(url, options);
      };
    }
  }
  
  // Run the adjustment function when the page loads
  window.addEventListener('DOMContentLoaded', adjustAudioPaths);
})();

// audio-paths.js - Dynamically adjusts audio paths for GitHub Pages deployment

(function() {
  // Function to rewrite audio paths based on current location
  function adjustAudioPaths() {
    // Check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');

    if (isGitHubPages) {
      console.log('GitHub Pages detected - adjusting audio paths');

      // Extract repository name from URL to use as the base path
      const pathParts = window.location.pathname.split('/');
      const repoName = pathParts[1]; // Second part of path is the repo name
      const basePath = repoName ? `/${repoName}` : '';

      console.log(`Repository name detected: ${repoName}`);
      console.log(`Base path set to: ${basePath}`);

      // Set a global variable for the audio path
      window.AUDIO_BASE_PATH = `${basePath}/audio`;
      console.log(`Audio base path set to: ${window.AUDIO_BASE_PATH}`);

      // Monkey patch the fetch API to rewrite audio URLs
      const originalFetch = window.fetch;
      window.fetch = function(url, options) {
        if (typeof url === 'string') {
          // Check for absolute audio paths that need to be rewritten
          if (url.startsWith('/audio/')) {
            const newUrl = `${basePath}/audio/${url.substring(7)}`;
            console.log(`Audio URL rewritten: ${url} → ${newUrl}`);
            return originalFetch(newUrl, options);
          }

          // Also handle without leading slash
          if (url.startsWith('audio/')) {
            const newUrl = `${basePath}/audio/${url.substring(6)}`;
            console.log(`Audio URL rewritten: ${url} → ${newUrl}`);
            return originalFetch(newUrl, options);
          }
        }
        return originalFetch(url, options);
      };

      // Also create a utility function for direct use
      window.resolveAudioUrl = function(audioPath) {
        if (audioPath.startsWith('/audio/')) {
          return `${basePath}/audio/${audioPath.substring(7)}`;
        }
        if (audioPath.startsWith('audio/')) {
          return `${basePath}/audio/${audioPath.substring(6)}`;
        }
        return audioPath;
      };

      // Set a hook for when audio files are loaded
      document.addEventListener('audioLoading', function(e) {
        console.log('Audio loading event detected, path fixing enabled');
      });
    }
  }

  // Run the adjustment function immediately
  adjustAudioPaths();

  // Also run when the DOM is loaded (as a backup)
  document.addEventListener('DOMContentLoaded', adjustAudioPaths);
})();

/**
 * pathResolver.ts
 * 
 * Utility to help resolve file paths that work in both development and production.
 */

/**
 * Attempts to load a resource from multiple possible paths
 * @param paths Array of possible paths to try
 * @returns Promise with the response from the first successful fetch
 */
export async function resolveResourcePath(paths: string[]): Promise<Response> {
  // Create a unique ID for this resource load attempt
  const loadAttemptId = Math.random().toString(36).substring(2, 8);
  console.log(`[PathResolver ${loadAttemptId}] Attempting to load resource from ${paths.length} paths: ${paths.join(', ')}`);
  
  // Try each path in sequence
  for (let i = 0; i < paths.length; i++) {
    try {
      console.log(`[PathResolver ${loadAttemptId}] Attempt ${i+1}/${paths.length}: ${paths[i]}`);
      const response = await fetch(paths[i]);
      if (response.ok) {
        console.log(`[PathResolver ${loadAttemptId}] ✅ Successfully loaded resource from: ${paths[i]}`);
        return response;
      }
      console.log(`[PathResolver ${loadAttemptId}] ❌ Failed to load from ${paths[i]} - Status: ${response.status} ${response.statusText}`);
    } catch (error) {
      console.log(`[PathResolver ${loadAttemptId}] 🚫 Error loading from path ${paths[i]}:`, error);
      // Continue to the next path
    }
  }
  
  // If all paths fail, throw an error
  const errorMsg = `[PathResolver ${loadAttemptId}] ⚠️ Failed to load resource from all paths: ${paths.join(', ')}`;
  console.error(errorMsg);
  throw new Error(errorMsg);
}

/**
 * Gets paths for a data file, ordered by most likely to succeed first
 * @param developmentPath Path to use in development
 * @param productionPath Path to use in production
 * @returns Array of paths to try
 */
export function getDataPaths(developmentPath: string, productionPath: string): string[] {
  console.log(`[PathResolver] Getting paths for: DEV=${developmentPath}, PROD=${productionPath}`);
  
  // First determine if we're running on GitHub Pages or localhost
  const isGitHubPages = window.location.hostname.includes('github.io');
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  console.log(`[PathResolver] Environment detection: isGitHubPages=${isGitHubPages}, isDev=${isDev}, hostname=${window.location.hostname}`);
  
  // For GitHub Pages, we need to prefix paths with repository name if it exists in the URL
  const basePath = isGitHubPages ? getGitHubPagesBasePath() : '';
  
  // For GitHub Pages deployment, prioritize the production path with the correct base
  if (isGitHubPages) {
    const adjustedProductionPath = basePath + productionPath.replace(/^\.\//, '');
    console.log(`[PathResolver] GitHub Pages detected. Using base path: ${basePath}`);
    console.log(`[PathResolver] Adjusted production path: ${adjustedProductionPath}`);
    
    // Generate multiple possible paths to try
    const paths = [
      adjustedProductionPath,
      productionPath,
      // Also try without ./ prefix
      productionPath.replace(/^\.\//, ''),
      // Try just the filename
      productionPath.split('/').pop() || '',
      // Try with just a / prefix
      '/' + (productionPath.replace(/^\.\//, '')),
      // Try the development path as last resort
      developmentPath
    ];
    
    console.log(`[PathResolver] Generated ${paths.length} paths to try: ${paths.join(', ')}`);
    return paths;
  }
  
  // For development, prioritize the development path
  const paths = isDev ? 
    [developmentPath, productionPath] : 
    [productionPath, developmentPath];
    
  console.log(`[PathResolver] Generated ${paths.length} paths to try: ${paths.join(', ')}`);
  return paths;
}

/**
 * Determines the base path for GitHub Pages based on the current URL
 * @returns The base path for GitHub Pages (typically the repository name)
 */
function getGitHubPagesBasePath(): string {
  const pathname = window.location.pathname;
  console.log(`[PathResolver] Analyzing pathname: ${pathname}`);
  
  // Check if we have a path like /reponame/ or /reponame/index.html
  const match = pathname.match(/^\/([^\/]+)(?:\/|\/index\.html)?$/);
  
  if (match && match[1]) {
    const basePath = '/' + match[1] + '/';
    console.log(`[PathResolver] Extracted base path: ${basePath}`);
    return basePath; // Return with leading and trailing slash
  }
  
  console.log(`[PathResolver] No repository name found in pathname, using root path /`);
  return '/'; // Default to root if no repo name detected
} 
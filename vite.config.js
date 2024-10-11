// vite.config.js
export default {
  // Configuration for the build output directory
  build: {
    outDir: 'dist/client',  // Ensure this matches the directory Netlify is looking for
  },
  
  // Exclude certain dependencies from Vite's optimization
  optimizeDeps: {
    exclude: [
      'three-mesh-bvh',
      'three/addons/renderers/webgl/nodes/WebGLNodes.js',
      'three-subdivide',
      'web-ifc-three',
      'web-ifc',
      'three-bvh-csg',
      'three-gpu-pathtracer',
      'flow',
      'three/addons/loaders/IFCLoader.js',
    ],
  },
  
  // Define server options for local development
  server: {
    port: 3000,  // Change the port if needed
    open: true,  // Opens the browser when the server starts
  },
  
  // Base URL path for your project
  base: './',  // Ensures relative paths for deployment
};

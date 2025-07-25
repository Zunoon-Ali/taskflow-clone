// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'
// import compression from 'vite-plugin-compression'
// import { visualizer } from 'rollup-plugin-visualizer'

// export default defineConfig({
//   plugins: [
//     react(),

//     // Progressive Web App plugin
//     VitePWA({
//       registerType: 'autoUpdate',
//       includeAssets: ['faviconTaskFLow.png', 'task-flow-logo.png'],
//       manifest: {
//         name: 'TaskFlow',
//         short_name: 'TaskFlow',
//         description: 'Task Management UI Clone',
//         theme_color: '#ffffff',
//         icons: [
//           {
//             src: '/task-flow-logo.png',
//             sizes: '192x192',
//             type: 'image/png'
//           },
//           {
//             src: '/task-flow-logo.png',
//             sizes: '512x512',
//             type: 'image/png'
//           }
//         ]
//       },
//       workbox: {
//         maximumFileSizeToCacheInBytes: 5 * 1024 * 1024 // 5MB
//       }
//     }),

//     // Compression plugin (both gzip and brotli)
//     compression({ algorithm: 'gzip' }),
//     compression({ algorithm: 'brotliCompress', ext: '.br' }),

//     // Optional: Visualize your final bundle size (opens after build)
//     visualizer({ open: true })
//   ],

//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             const directories = id.toString().split('node_modules/')[1].split('/');
//             return directories[0] === '@' ? directories.slice(0, 2).join('/') : directories[0];
//           }
//         }
//       }
//     }
//   }
// })
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: '모르는개산책',
        short_name: '모르는개산책',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/images/logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    ,
    react(),
  ],
  define: {
    BASE_URL: process.env.VITE_APP_BASE_URL,
    'process.env': {
      REACT_APP_KAKAO_REST_API_KEY:
        process.env.VITE_REACT_APP_KAKAO_REST_API_KEY,
      REACT_APP_KAKAO_JAVASCRIPT_KEY:
        process.env.VITE_REACT_APP_KAKAO_JAVASCRIPT_KEY,
    },
  },
});

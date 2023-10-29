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
      REACT_APP_FIREBASE_API_KEY:
        process.env.VITE_REACT_APP_FIREBASE_API_KEY,
      REACT_APP_FIREBASE_AUTH_DOMAIN:
        process.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
      REACT_APP_FIREBASE_PROJECT_ID:
        process.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
      REACT_APP_FIREBASE_STORAGE_BUCKET:
        process.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID:
        process.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      REACT_APP_FIREBASE_APP_ID:
        process.env.VITE_REACT_APP_FIREBASE_APP_ID,
      REACT_APP_FIREBASE_MEASUREMENT_ID:
        process.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID,
    },
  },
});

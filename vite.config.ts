import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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

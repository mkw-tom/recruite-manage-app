import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // ローカル開発用のポート
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL, // 環境変数からAPI URLを指定
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    'process.env': process.env, // process.envで環境変数を使用可能に
  },
});

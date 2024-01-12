import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: /^@\//, replacement: `${path.resolve(__dirname, './src')}/` }],
  },
  server: {
    port: 9906,
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        // target: 'http://120.46.36.244:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

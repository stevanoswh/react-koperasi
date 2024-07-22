import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom', // Ensuring that JSDOM is used
    setupFiles: './src/setupTests.js', // Path to your setup file
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      exclude: ['**/node_modules/**', '**/tests/**'],
    },
  },
});

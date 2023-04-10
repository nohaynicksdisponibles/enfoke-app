import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      'process.env.REACT_APP_THEMOVIEDB_API': JSON.stringify(process.env.REACT_APP_THEMOVIEDB_API),
      'process.env.REACT_APP_API_BASE_URL': JSON.stringify(process.env.REACT_APP_API_BASE_URL),
    }),],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@config': '/src/config',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@context': '/src/context',
      '@hooks': '/src/hooks',
      '@interfaces': '/src/interfaces',
      '@screens': '/src/screens',
      '@services': '/src/services',
    },
  }
})

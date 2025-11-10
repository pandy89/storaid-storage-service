import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@elements': path.resolve(__dirname, 'src/components/elements'),
      '@sections': path.resolve(__dirname, 'src/components/sections'),
      '@pages': path.resolve(__dirname, 'src/pages')
    }
  },
  base: 'storaid-storage-service'
})

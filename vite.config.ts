import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
    allowedHosts: ['ecb3-144-124-192-241.ngrok-free.app'],
  },
})

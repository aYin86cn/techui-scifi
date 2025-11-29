import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  optimizeDeps: {
    include:['echarts'],
    exclude: ['@techui/scifi']
  },
  plugins: [
    vue(),
  ],
  
})

import vue from '@vitejs/plugin-vue'
import path from "path"
import { defineConfig } from 'vite'
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias:{
      "@":path.resolve(__dirname,"src"),
      "@static": path.resolve(__dirname, "static"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@mixins": path.resolve(__dirname, "src/mixins"),
      "@comps": path.resolve(__dirname, "src/components"),
      "@view": path.resolve(__dirname, "src/view"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@router": path.resolve(__dirname, "src/router"),
      "@api": path.resolve(__dirname, "src/api"),
      '@core': '@techui/scifi'
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData:`
          @import "${path.resolve(__dirname, './node_modules/@techui/lessmixins/index.less')}";
          @import "${path.resolve(__dirname, './node_modules/@techui/colors/base.less')}";
          @import "${path.resolve(__dirname, './node_modules/@techui/colors/extended.less')}";
          `
      }
    }
  },
  optimizeDeps: {
    include:['echarts'],
    exclude: ['@techui/scifi']
  },
  plugins: [
    vue()
  ],
  build: {
    minify: true,
  }
})

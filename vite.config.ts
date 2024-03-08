import { fileURLToPath, URL } from 'node:url'

import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/variables.scss" as *;' // 添加公共样式
      }
    }
  },
  plugins: [
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    vue(),
    viteCompression(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@datasets': fileURLToPath(new URL('./src/datasets', import.meta.url)),
      '@directives': fileURLToPath(new URL('./src/directives', import.meta.url)),
      '@interface': fileURLToPath(new URL('./src/interface', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url))
    }
  },
  server: {
    host: '127.0.0.1',
    port: 8205,
    strictPort: true,
    open: 'https://local-turnip-price.triangleclub.top',
    proxy: {
      '/api': {
        secure: false,
        changeOrigin: true,
        target: 'https://local-api.triangleclub.top'
      }
    },
    hmr: {
      host: 'local-turnip-price.triangleclub.top',
      port: 8205,
      clientPort: 443,
      protocol: 'wss'
    }
  }
})

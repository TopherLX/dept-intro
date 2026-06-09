import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/dept-intro/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: ['vue',
        { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})

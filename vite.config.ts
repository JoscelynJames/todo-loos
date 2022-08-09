import { fileURLToPath, URL } from "node:url";
import svgLoader from 'vite-svg-loader'

import { defineConfig } from "vite";
import { createStyleImportPlugin, AndDesignVueResolve } from "vite-plugin-style-import";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import vue from "@vitejs/plugin-vue";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    createStyleImportPlugin({
      resolves: [ 
        AndDesignVueResolve()
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      '~' : path.resolve(__dirname, './node_modules'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        //https://github.com/vueComponent/ant-design-vue/blob/main/components/style/themes/default.less
        modifyVars: {
          'border-radius-base': '4px',
          'body-background': '#161826',
          'modal-content-bg': '#24283F',
          'modal-header-bg': '#24283F',
          'dropdown-selected-bg': '#303654',
          'picker-bg': '#24283F',
          'picker-basic-cell-hover-color': '#24283F',
          'primary-color': '#6366f1',
          'link-color': '#06b6d4',
          'success-color': '#10b981',
          'warning-color': '#eab308',
          'error-color': '#f43f5e',
        }
      },
    }
  }
});

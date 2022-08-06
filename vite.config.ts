import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import {  createStyleImportPlugin,
  AndDesignVueResolve, } from "vite-plugin-style-import";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import vue from "@vitejs/plugin-vue";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
      // "~": fileURLToPath(new URL("./node_modules", import.meta.url)),
      '~' : path.resolve(__dirname, './node_modules'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  }
});

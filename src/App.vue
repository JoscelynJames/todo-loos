<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout,
    RouterView
  }
};
</script>

<template>
  <MainLayout />
  <RouterView />
</template>

<style lang="less">
@import './styles/theme.less';
@import './styles/global.less';
</style>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HomeView from "@/components/views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
    RouterView
  }
};
</script>

<template>
  <RouterView />
  <HomeView />
</template>

<style lang="less">
@import './styles/theme.less';
@import './styles/global.less';
</style>

<script lang="ts">

export default {
  name: "Hint",
  props: {
    text: String
  }
};
</script>

<template>
  <h6 class="hint--text">{{ text }}</h6>
</template>

<style lang="less">
  .hint--text {
    margin: 8px;
  }
</style>

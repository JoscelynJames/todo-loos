<script lang="ts">

export default {
  name: "Label",
  props: {
    text: String
  }
};
</script>

<template>
  <h5 class="label--text">{{ text }}</h5>
</template>

<style lang="less">
</style>

<script lang="ts">

export default {
  name: "EffortScale"
};
</script>

<template>
  <div class="effort-to-complete--chips-container">
    <Chip text="xs" color="purple"></Chip>
    <Chip text="s" color="green"></Chip>
    <Chip text="m" color="yellow"></Chip>
    <Chip text="l" color="orange"></Chip>
    <Chip text="xl" color="red"></Chip>
  </div>
</template>

<style lang="less">
  .hint--text {
    margin: 8px;
  }
</style>

<script lang="ts">

export default {
  name: "StyledInput",
  props: {
    showLabel: Boolean,
    labelValue: String,
    placeholder: String,
    inputValue: String,
    hintValue: String,
  }
};
</script>

<template>
  <div class="styled-input--container">
    <Label v-if="showLabel" :text="labelValue"></Label>
    <a-input size="large" class="styled-input--input" :value="inputValue" :placeholder="placeholder" />
    <Hint :text="hintValue"></Hint>
  </div>
</template>

<style lang="less">
  .styled-input--input {
    border-radius: 12px;
    // height: 48px;
  }
</style>

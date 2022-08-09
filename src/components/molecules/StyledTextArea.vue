<script lang="ts">

export default {
  name: "StyledTextArea",
  props: {
    showLabel: Boolean,
    labelValue: String,
    placeholder: String,
    textareaValue: String,
    hintValue: String,
    autoSize: Object || Boolean,
  }
};
</script>

<template>
  <div class="styled-input--container">
    <Label v-if="showLabel" :text="labelValue"></Label>
    <a-textarea
      size="large"
      :value="textareaValue"
      :placeholder="placeholder"
      :auto-size="autoSize"
    />
    <Hint :text="hintValue"></Hint>
  </div>
</template>

<style lang="less">
  .styled-input--input {
    border-radius: 12px;
    height: 48px;
  }
</style>

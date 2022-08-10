<script lang="ts">

export default {
  name: "RepeaterSelect",
  props: {
    labelText: {
      type: String,
      default: 'Repeat every'
    },
    scheduledTaskDueByDateString: String,
    scheduledTaskRepeaterValue: String,
  },
  emits: ['category-changed'],
  setup(props, { emit }) {
    const handleChange = (option) => {
      emit('category-changed', option)
    }
    return { handleChange }
  },
};
</script>

<template>
  <div>
    <Label :text="labelText"></Label>
      <a-select
        size="large"
        ref="select"
        v-model:value="scheduledTaskRepeaterValue"
        style="width: 260px"
        @change="handleChange($event)"
      >
        <a-select-option value="daily">daily</a-select-option>
        <a-select-option value="weekly">weekly</a-select-option>
        <a-select-option value="monthly">monthly</a-select-option>
        <a-select-option value="yearly">yearly</a-select-option>
      </a-select>
  </div>
</template>

<style lang="less">
</style>

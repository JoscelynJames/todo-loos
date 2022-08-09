<script lang="ts">
import { onMounted, ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

const dateFormat = 'YYYY/MM/DD';

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
    // const scheduledTaskDueByDate = ref<Dayjs>(dayjs('', dateFormat));

    // onMounted(() => {
    //   scheduledTaskDueByDate.value = dayjs(props.scheduledTaskDueByDateString, dateFormat)
    // })

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
        style="width: 120px"
        @focus="handleFocus"
        @change="handleChange"
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

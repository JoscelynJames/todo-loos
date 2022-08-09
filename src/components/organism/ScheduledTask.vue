<script lang="ts">
import { ref, onMounted } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
const dateFormat = 'YYYY/MM/DD';

export default {
  name: "ScheduledTask",
  props: {
    scheduledTaskRepeaterValue: String,
    scheduledTaskDueByDateString: String
  },
  setup(props, { emit }) {
    const scheduledTaskDueByDate = ref<Dayjs>(dayjs('', dateFormat));

    onMounted(() => {
      scheduledTaskDueByDate.value = dayjs(props.scheduledTaskDueByDateString, dateFormat)
    })

    return {
      scheduledTaskDueByDate,
    };
  },
};
</script>

<template>
  <section>
    <h4>Scheduled Tasks</h4>
    <RepeaterSelect
      :scheduledTaskRepeaterValue="scheduledTaskRepeaterValue"
      :scheduledTaskDueByDateString="scheduledTaskDueByDateString"
    ></RepeaterSelect>

    <br />

    <StyledDatePicker
      :scheduledTaskDueByDateString="scheduledTaskDueByDateString"
    ></StyledDatePicker>
  </section>
</template>

<style lang="less">

</style>

<script lang="ts">
import { ref, onMounted } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

const dateFormat = 'YYYY/MM/DD';

export default {
  name: "StyledDatePicker",
  props: {
    labelValue: {
      type: String,
      default: 'Due by Date'
    },
    scheduledTaskDueByDateString: String
  },
  setup(props, { emit }) {
    const scheduledTaskDueByDate = ref<Dayjs>(dayjs("", dateFormat));
    onMounted(() => {
        scheduledTaskDueByDate.value = dayjs(props.scheduledTaskDueByDateString, dateFormat);
    });
    return {
        scheduledTaskDueByDate,
    };
  }
};
</script>

<template>
  <div>
    <Label :text="labelValue"></Label>
    <a-date-picker 
      style="width: 260px"
      size="large" 
      :value="scheduledTaskDueByDate" />
  </div>
</template>

<style lang="less">

</style>

<script lang="ts">
import { watch, ref } from 'vue';
import DetailsSection from '@/components/organism/DetailsSection.vue';
import EffortSection from '@/components/organism/EffortSection.vue';
import SelectCategories from '@/components/organism/SelectCategories.vue';
import ScheduledTask from '@/components/organism/ScheduledTask.vue';
import StyledDatePicker from '../molecules/StyledDatePicker.vue';
import RepeaterSelect from '../molecules/RepeaterSelect.vue';

export default {
  name: "AddColumnDialog",
  components: { DetailsSection, EffortSection, SelectCategories, ScheduledTask, StyledDatePicker, RepeaterSelect },
  props: {
    show: Boolean
  },
  emits: ['close-dialog'],
  setup(props, { emit }) {
    const visible = ref<boolean>(false);
    const titleInput = ref<string>('');
    const descriptionInput = ref<string>('');
    const selectedCategories = ref<string[]>([]);
    const scheduledTaskRepeaterValue = ref<string>('daily');
    const scheduledTaskDueByDateString = ref<string>('2015/01/01');

    watch(
      () => props.show,
      (show) => {
        visible.value = show
      }
    )

    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const showDialog = () => visible.value = true;
    const closeDialog = () => emit('close-dialog')
    const createColumn = () => {
      // create the column
        closeDialog()
      }

    return {
      visible,
      showDialog,
      titleInput,
      descriptionInput,
      filterOption,
      scheduledTaskRepeaterValue,
      scheduledTaskDueByDateString,
      selectedCategories,
      closeDialog,
      createColumn
    };
  },
};
</script>

<template>
  <a-modal ref="add-column-dialog" wrap-class-name="full-height-modal" :visible="visible" title="Add Column" @cancel="closeDialog" @ok="createColumn">
    <DetailsSection
      detailsHeader="Column Details"
      titleLabel="Column"
      :titleInput="titleInput"
      titleInputHint="The name of the column that best describes it's contents"
      descriptionLabel="Description"
      :descriptionInput="descriptionInput"
      descriptionInputHint="Add notes or context here for this column. Markdown supported."
    ></DetailsSection>
    <a-divider></a-divider>
      <SelectCategories :selectedCategories="selectedCategories"></SelectCategories>
      <RepeaterSelect
        :scheduledTaskRepeaterValue="scheduledTaskRepeaterValue"
        :scheduledTaskDueByDateString="scheduledTaskDueByDateString"
      ></RepeaterSelect>
      <StyledDatePicker
        :scheduledTaskDueByDateString="scheduledTaskDueByDateString"
      ></StyledDatePicker>
  </a-modal>
</template>

<style lang="less">
.effort-to-complete--chips-container, 
.added-categories---chip-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.added-categories---chip-container {
  justify-content: start;
}
</style>

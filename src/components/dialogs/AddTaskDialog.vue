<script lang="ts">
import { watch, ref } from 'vue';
import DetailsSection from '@/components/organism/DetailsSection.vue';
import EffortSection from '@/components/organism/EffortSection.vue';
import SelectCategories from '@/components/organism/SelectCategories.vue';
import ScheduledTask from '@/components/organism/ScheduledTask.vue';

export default {
  name: "AddTaskDialog",
  components: { DetailsSection, EffortSection, SelectCategories, ScheduledTask },
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
    const createTask = () => {
      // create the task
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
      createTask
    };
  },
};
</script>

<template>
  <a-modal ref="add-task-dialog" wrap-class-name="full-height-modal" :visible="visible" title="Add Task" @cancel="closeDialog" @ok="createTask">
    <DetailsSection
      detailsHeader="Task Details"
      titleLabel="Task"
      :titleInput="titleInput"
      titleInputHint="A breif description of the task. Tip - break up tasks so they don't take more than 1 day to complete"
      descriptionLabel="Description"
      :descriptionInput="descriptionInput"
      descriptionInputHint="Add any sub tasks or context to help complete the tasks. Markdown supported."
    ></DetailsSection>
    <a-divider></a-divider>
      <EffortSection></EffortSection>
    <a-divider></a-divider>
      <SelectCategories :selectedCategories="selectedCategories"></SelectCategories>
    <a-divider></a-divider>
      <ScheduledTask
        :scheduledTaskRepeaterValue="scheduledTaskRepeaterValue"
        :scheduledTaskDueByDateString="scheduledTaskDueByDateString"
      ></ScheduledTask>
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

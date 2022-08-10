<script lang="ts">
import { watch, ref } from 'vue';
import DetailsSection from '@/components/organism/DetailsSection.vue';
import EffortSection from '@/components/organism/EffortSection.vue';
import SelectCategories from '@/components/organism/SelectCategories.vue';
import ScheduledTask from '@/components/organism/ScheduledTask.vue';

export default {
  name: "AddHabitDialog",
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
    const createHabit = () => {
      // create the habit
        closeDialog()
      }

    return {
      visible,
      showDialog,
      titleInput,
      descriptionInput,
      filterOption,
      selectedCategories,
      closeDialog,
      createHabit
    };
  },
};
</script>

<template>
  <a-modal ref="add-habit-dialog" wrap-class-name="full-height-modal" :visible="visible" title="Add Habit" @cancel="closeDialog" @ok="createHabit">
    <DetailsSection
      detailsHeader="Habit Details"
      titleLabel="Habit"
      :titleInput="titleInput"
      titleInputHint="A brief description of the habit"
      descriptionLabel="Description"
      :descriptionInput="descriptionInput"
      descriptionInputHint="Add any sub tasks or context to help complete the habit. Markdown supported."
    ></DetailsSection>
    <a-divider></a-divider>
      <EffortSection></EffortSection>
    <a-divider></a-divider>
      <SelectCategories :selectedCategories="selectedCategories"></SelectCategories>
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

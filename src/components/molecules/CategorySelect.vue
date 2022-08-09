<script lang="ts">
import { ref } from 'vue';

export default {
  name: "CategorySelect",
  props: {
    labelText: {
      type: String,
      default: 'Category'
    }
  },
  emits: ['category-changed'],
  setup(props, { emit }) {
    const categories = ref([
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'tom', label: 'Tom' },
    ]);
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const handleChange = (input: string, option: any) => {
      emit('category-changed', option)
    };

    return {
      handleChange,
      filterOption,
      categories,
    };
  },
};
</script>

<template>
  <div>
    <Label :text="labelText"></Label>
    <a-select
      :value="value"
      show-search
      placeholder="Select a category"
      size="large"
      style="width: 100%"
      :options="categories"
      :filter-option="filterOption"
      @change="handleChange"
    ></a-select>
  </div>
</template>

<style lang="less">
</style>

<script lang="ts">
import Column from "@/components/atoms/Column.vue";
import type { Category } from "@/assets/types/category";
import type Task from "@/assets/types/task";

export default {
    name: "TodaysTasksColumn",
    props: { 
      tasks: {
        type: Array as () => Task[]
      }
    },
    setup() { },
    components: { Column }
};
</script>

<template>
  <ul class="check-list">
    <li v-for="task in tasks" :key="task._id" class="check-list--item">
      <a-checkbox 
        class="check-list--item--checkbox" 
        :checked="checked"
      >
      {{ task.name }}
      <h5 class="check-list--item---description">{{ task.description }}</h5>
      </a-checkbox>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.check-list {
  list-style: none;
  padding: 16px;

  &--item {
    padding: 8px;
  }

  &--checkbox {
    .ant-checkbox-inner {
      height: 20px;
      width: 20px;
    }
  }

  .check-list--item---description {
    color: #ffffff80;
  }
  
}
</style>

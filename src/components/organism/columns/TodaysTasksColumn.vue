<script lang="ts">
import Column from "@/components/atoms/Column.vue";
import { tasks } from '@/assets/mockData/tasks'
import CheckList from '../../molecules/CheckList.vue'

export default {
    name: "TodaysTasksColumn",
    props: { },
    setup() {
      return { tasks }
    },
    components: { Column, CheckList }
};
</script>

<template>
  <Column title="Today's Tasks" :showAddIcon="true" :showRefreshIcon="true">
    <section >
      <CheckList :tasks="tasks"></CheckList>
    </section>
  </Column>
</template>

<style lang="less" scoped>
</style>

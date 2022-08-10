<script lang="ts">
import MainLayout from "@/components/layouts/MainLayout.vue";
import TodaysTasksColumn from "../organism/columns/TodaysTasksColumn.vue";
import BrainDumpColumn from "../organism/columns/BrainDumpColumn.vue";
import ScheduledTasksColumn from "../organism/columns/ScheduledTasksColumn.vue";
import HabitsColumn from "../organism/columns/HabitsColumn.vue";
import RewardsColumn from "../organism/columns/RewardsColumn.vue";

export default {
  name: "HomeView",
  components: { MainLayout, TodaysTasksColumn, BrainDumpColumn, ScheduledTasksColumn, HabitsColumn, RewardsColumn }
};
</script>

<template>
  <MainLayout>
    <section class="columns--container">
      <div class="columns--container--scroll">
        <TodaysTasksColumn></TodaysTasksColumn>
        <BrainDumpColumn></BrainDumpColumn>
        <ScheduledTasksColumn></ScheduledTasksColumn>
        <HabitsColumn></HabitsColumn>
        <RewardsColumn></RewardsColumn>
      </div>
    </section>
  </MainLayout>
</template>

<style lang="less">
.columns--container {
  overflow: scroll;
  width: 100%;

  &--scroll {
    display: inline-flex;
  }
}
</style>

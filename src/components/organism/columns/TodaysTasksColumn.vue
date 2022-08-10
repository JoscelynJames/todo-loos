<script lang="ts">
import Column from "@/components/atoms/Column.vue";

export default {
    name: "TodaysTasksColumn",
    props: { },
    setup() { },
    components: { Column }
};
</script>

<template>
  <Column title="Today's Tasks" :showAddIcon="true" :showRefreshIcon="true"></Column>
</template>

<style lang="less">

</style>

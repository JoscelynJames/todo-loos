<script lang="ts">
import Column from "@/components/atoms/Column.vue";

export default {
    name: "HabitsColumn",
    props: { },
    setup() { },
    components: { Column }
};
</script>

<template>
  <Column title="Habits" :showAddIcon="true"></Column>
</template>

<style lang="less">

</style>

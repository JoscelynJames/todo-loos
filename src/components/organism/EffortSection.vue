<script lang="ts">
import Chip from "../atoms/Chip.vue";

export default {
  name: "EffortSection",
  components: {
    Chip
},
  emits: ['chip-clicked'],
  setup(props, { emit }) {
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    return {
      filterOption,
    };
  },
};
</script>

<template>
    <section>
      <h4>Effort to Complete</h4>
      <p>Estimate the effort it will take the task to complete based off time, mental and physical effort, boundry pushing, and other factors. </p>

      <EffortScale></EffortScale>
    </section>
</template>

<style lang="less">

</style>

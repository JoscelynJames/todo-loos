<script lang="ts">
import { ref } from 'vue';
import CategorySelect from '../molecules/CategorySelect.vue';

export default {
    name: "SelectCategories",
    setup() {
        return {};
    },
    components: { CategorySelect }
};
</script>

<template>
  <section>
    <h4>Add Categories</h4>
      <CategorySelect labelText="Category"></CategorySelect>
      
      <div class="added-categories---chip-container">
        <Chip rounded class="yellow" text="cleaning"></Chip>
        <Chip rounded class="orange" text="bedroom"></Chip>
        <Chip rounded class="blue" text="chores"></Chip>
      </div>
  </section>
</template>

<style lang="less">

</style>

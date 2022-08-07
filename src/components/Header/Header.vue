<script>
import { defineComponent, ref } from 'vue'
import { SearchOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: "Header",
  components: { SearchOutlined, RightOutlined, LeftOutlined },
  props: {
    drawerIsOpen: Boolean
  },
  emits: ['toggleDrawer'],
  setup: (props, { emit }) => {
    const searchValue = ref('')

    return { searchValue, emit }
  }
});
</script>

<template>
  <header>
    <right-outlined v-if="!drawerIsOpen" class="nav-toggle" @click="emit('toggleDrawer')"/>
    <left-outlined v-if="drawerIsOpen" class="nav-toggle" @click="emit('toggleDrawer')"/>
    <a-input v-model:value="searchValue" placeholder="Search" class="global-search">
      <template #prefix>
        <search-outlined />
      </template>
    </a-input>
    <TotalRubies></TotalRubies>
  </header>
</template>

<style scoped lang="less">
header {
  display: grid;
  grid-template-columns: .1fr 5fr .3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 5px;

  .nav-toggle {
    margin: auto;
  }

  .global-search {
    width: 40%;
    min-width: 250px;
    height: 36px;
    margin: auto 0;
  }

  .anticon {
    font-size: 22px;
  }
}

</style>

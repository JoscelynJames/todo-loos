<script>
import { defineComponent, ref } from 'vue';
import Header from '@/components/organism/Header.vue';
import AddTaskDialog from '@/components/dialogs/AddTaskDialog.vue';

export default defineComponent({
  name: "MainLayout",
  components: { Header, AddTaskDialog },
  setup: () => {
    const drawerIsOpen = ref(false)
    const showAddTaskDialog = ref(false)
    const showAddHabitDialog = ref(false)
    const showAddColumnDialog = ref(false)

    const toggleDrawer = () => {
      drawerIsOpen.value = !drawerIsOpen.value
    }

    return { drawerIsOpen, toggleDrawer, showAddTaskDialog, showAddHabitDialog, showAddColumnDialog }
  }
});
</script>

<template>
  <a-layout class="main-layout--container">
    <a-layout-sider v-if="drawerIsOpen">
      <SliderNav @open-add-task-dialog="showAddTaskDialog = true" @open-add-habit-dialog="showAddHabitDialog = true" @open-add-column-dialog="showAddColumnDialog = true"></SliderNav>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Header :drawerIsOpen="drawerIsOpen" @toggle-drawer="toggleDrawer"></Header>
      </a-layout-header>
      <a-layout-content>
        <AddColumnDialog v-if="drawerIsOpen" :show="showAddColumnDialog" @close-dialog="showAddColumnDialog = false"></AddColumnDialog>
        <AddTaskDialog v-if="drawerIsOpen" :show="showAddTaskDialog" @close-dialog="showAddTaskDialog = false"></AddTaskDialog>
        <AddHabitDialog v-if="drawerIsOpen" :show="showAddHabitDialog" @close-dialog="showAddHabitDialog = false"></AddHabitDialog>
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.main-layout--container {
  height: 100vh;

  .ant-layout-sider {
    box-shadow: 0px 0px 14px 0px #00000040;
    background: #1E2235;
    width: 250px !important;
    min-width: 250px !important;
    max-width: 250px !important;
  }

  .ant-layout-header {
    background: #1A1D2E;
    padding: 0 15px;
  }

}
</style>

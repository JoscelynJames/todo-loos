<script>
import { defineComponent } from 'vue'
import { UserOutlined, PlusOutlined } from '@ant-design/icons-vue';

const actionNavLinks = [
  { id: 1, icon: 'plus-outlined', title: 'Add new Column'},
  { id: 2, icon: 'plus-outlined', title: 'Add new Task'},
  { id: 3, icon: 'plus-outlined', title: 'Add new Habit'}
]
const pagesNavLinks = [
  { id: 4, icon: 'brain-svg', title: 'Brain Dumps'},
  { id: 5, icon: 'infinity-svg', title: 'Habits'},
  { id: 6, icon: 'book-outlined', title: 'Journal'},
  { id: 7, icon: 'calendar-outlined', title: 'Calendar'},
  { id: 8, icon: 'gift-outlined', title: 'Rewards'},
]
const statsNavLinks = [
  { id: 9, icon: 'sketch-outlined', title: 'Rubies'},
  { id: 10, icon: 'rise-outlined', title: 'Habit Trends'},
  { id: 11, icon: 'check-outlined', title: 'Completed Tasks'},
  { id: 12, icon: 'camera-outlined', title: 'Monthly Snapshot'},
]

export default defineComponent({
  name: "SliderNav",
  components: { UserOutlined, PlusOutlined },
  emits: ['toggle-drawer', 'open-add-column-dialog', 'open-add-task-dialog', 'open-add-habit-dialog'],
  setup: (props, { emit }) => {
    const handleListActionItemClicked = (listItem) => {
      if (listItem.id === 1) emit('open-add-column-dialog')
      if (listItem.id === 2) emit('open-add-task-dialog')
      if (listItem.id === 3) emit('open-add-habit-dialog')
    }

    return { handleListActionItemClicked, actionNavLinks, pagesNavLinks, statsNavLinks }
  }
});
</script>

<template>
  <aside class="slider-nav--container">
    <header>
      <a-avatar :size="{ xs: 56, sm: 56, md: 100, lg: 100, xl: 124, xxl: 132 }">
      <template #icon>
        <user-outlined />
      </template>
      </a-avatar>
      <h4 class="slider-nave--header-title">Good Morning, Missy</h4>
    </header>
    
    <a-divider dashed />
    
    <section>
      <List 
        :listItems="actionNavLinks" 
        listName="actions" 
        @list-item-clicked="handleListActionItemClicked($event)">
      </List>
      <a-divider dashed />
      <List :listItems="pagesNavLinks" listName="pages"></List>
      <a-divider dashed />
      <List :listItems="statsNavLinks" listName="pages"></List>
    </section>
  </aside>
</template>

<style scoped lang="less">
.slider-nav--container {
  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
  }

  .slider-nave--header-title {
    margin: 12px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { PlusOutlined, CheckOutlined, CameraOutlined, RiseOutlined, SketchOutlined, CalendarOutlined, BookOutlined, GiftOutlined } from '@ant-design/icons-vue';
import BrainSvg from '@/assets/icons/brain.svg?component'
import InfinitySvg from '@/assets/icons/infinity.svg?component'

export interface ListItem {
  id: number
  icon: string
  title: string
}

export default defineComponent({
  name: "List", // rename this to NavList
  components: { 
    PlusOutlined,
    CheckOutlined,
    CameraOutlined,
    RiseOutlined,
    SketchOutlined,
    CalendarOutlined,
    BookOutlined,
    GiftOutlined,
    BrainSvg,
    InfinitySvg
  },
  emits: ['list-item-clicked'],
  props: {
    listItems: {
      type: Array as () => ListItem[],
      default: []
    },
    listName: String
  },
  setup: (props, { emit }) => {
    const handleListItemClick = (item) => {
      emit('list-item-clicked', item)
    }

    return { handleListItemClick }
  }
});
</script>

<template>
  <ul>
    <h5 class="list-group--list-name">{{ listName }}</h5>
    <li v-for="item in listItems" :key="item.id" class="pointer" @click="handleListItemClick(item)">
      <aside class="icon--container">
        <component :is="item.icon" />
      </aside>
      <span class="list-item--title">{{ item.title }}</span>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import '../../styles/theme.less';

section {
  .list-group--list-name {
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: unset !important;

    li {
      display: flex;
      transition: background 400ms ease-out 100ms;
      will-change: background;

      &:hover {
        background: @hover-state;
      }
    }

    .list-group--list-name {
      margin-left: 16px;
    }

    .icon--container, .list-item--title {
      margin: 8px;
    }

    .icon--container {
      margin-left: 24px;
    }

    .icon--container > span {
      font-size: 22px;
    }
  }
}
</style>

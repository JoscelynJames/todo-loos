<script lang="ts">
import { RedoOutlined, PlusOutlined } from '@ant-design/icons-vue';

export default {
  name: "Column",
  components: { RedoOutlined, PlusOutlined },
  emits: [ 'refresh-icon-clicked', 'add-icon-clicked' ],
  props: {
    title: String,
    showRefreshIcon: Boolean,
    showAddIcon: Boolean
  },
  setup: (props, { emit }) => {
    return { emit }
  }
};
</script>

<template>
  <div class="column--container">
    <section class="column--header">
      <span class="column--header-title">{{ title }}</span>
      <aside>
        <plus-outlined v-if="showAddIcon" class="pointer" @click="emit('add-icon-clicked')"/>
        <redo-outlined v-if="showRefreshIcon" class="pointer" @click="emit('refresh-icon-clicked')"/>
      </aside>
    </section>
    <section class="column--content">
      <slot></slot>
    </section >
    <section class="column--footer"></section>
    </div>
</template>

<style lang="less">
  .column--container {
    background: #1A1D2E;
    height: 85vh;
    margin: 36px;
    max-width: 452px;
    border-radius: 12px;

    .column--header {
      background-color: #1C1F32;
      box-shadow: 0px 4px 2px #15192c;
      overflow: hidden;
      display: flex;
      width: 450px;
      align-items: center;
      justify-content: space-between;
      border-radius: 12px 12px 2px 2px;

    .column--header-title {
      font-size: 24px;
      margin: 16px;
    }
     
    aside {
      display: flex;
      flex-direction: row-reverse;
      margin: 16px;

      .anticon {
        font-size: 24px;
        margin: 16px;
      }
    }
  }
  }
</style>

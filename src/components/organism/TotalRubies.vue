<script>
import { defineComponent, ref } from 'vue'
import { SketchOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: "TotalRubies",
  components: { SketchOutlined },
  setup: () => {
    const rubies = ref(432)

    return { rubies }
  }
});
</script>

<template>
  <div class="total-rubies--container">
    <sketch-outlined height="1.5" width="1.5"/>
    <h4>{{ rubies }}</h4>
  </div>
</template>

<style scoped lang="less">
.total-rubies--container {
  display: flex;
  justify-content: center;

  h4, .anticon {
    margin: auto;
  }

  .anticon {
    font-size: 22px;
  }
}
</style>

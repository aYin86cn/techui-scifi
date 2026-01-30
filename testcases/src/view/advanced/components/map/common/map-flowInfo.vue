<template>
  <div 
    class="map-flow-info"
    :class="timeLine.show ? 'show' : 'hide'"
    :style="{ 
      left: `calc(${posX}px)`, 
      top: `calc(${posY}px)` 
    }"
    ref="el"
  >
    <div class="block-title">
      {{ timeLine.dataGroup?.name || '' }}
    </div>
    <div class="block-content">
      <div 
        class="item" 
        v-for="(item, index) in timeLine.dataGroup?.data" 
        :key="index"
      >
        <span class="label">{{ item.name }}</span>
        <span class="value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  timeLine: {
    type: Object,
    required: true,
    default: () => ({
      show: false,
      x: 120,
      y: 120,
      dataGroup: {
        name: '',
        data: [],
      },
    }),
  },
});

const el = ref(null);
let hideTimer = null;

// 计算弹窗位置 - 不做水平调整
const posX = computed(() => {
  return props.timeLine.x;
});

// 计算弹窗位置 - 垂直显示
const posY = computed(() => {
  return props.timeLine.y;
});

// 隐藏信息框
const hideFlowInfo = () => {
  if (hideTimer) {
    clearTimeout(hideTimer);
  }
  hideTimer = setTimeout(() => {
    props.timeLine.show = false;
  }, 8000);
};

// 监听 show 状态变化
watch(
  () => props.timeLine.show,
  (val) => {
    if (val) {
      hideFlowInfo();
    }
  }
);

// 监听 dataGroup.name 变化
watch(
  () => props.timeLine.dataGroup?.name,
  () => {
    hideFlowInfo();
  }
);

onMounted(() => {
  if (props.timeLine.show) {
    hideFlowInfo();
  }
});

onBeforeUnmount(() => {
  if (hideTimer) {
    clearTimeout(hideTimer);
  }
});
</script>

<style lang="less" scoped>
.map-flow-info {
  min-width: 180px;
  height: 200px;
  background-color: var(--popup-bg);
  box-shadow: var(--popup-bg);
  border: var(--popup-bd);
  position: fixed;
  pointer-events: none;
  border-radius: 5px;
  left: 0;
  top: 0;
  z-index: 10;
  transition: opacity 0.3s ease;
  transform: translate(-50%, -50%);

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

  .block-title {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    color: var(--font-strong);
    background-color: var(--popup-bg-light);
    font-size: 18px;
    border-bottom: 1px solid var(--popup-bd);
  }

  .block-content {
    padding: 10px;

    .item {
      display: flex;
      align-items: center;
      line-height: 34px;

      .label {
        flex: 0 0 60%;
        color: var(--font-normal);
        word-break: break-all;
      }

      .value {
        flex: 0 0 40%;
        text-align: right;
        color: var(--font-strong);
        font-size: 16px;
      }
    }
  }
}
</style>
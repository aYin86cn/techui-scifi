<template>
  <div class="change-view">
    <TuiButton 
      :config="buttonConfig" 
      appearance="A1"
      decoType="B"
      :type="item.value === view.current ? 'primary' : 'default'"
      class="tabs-btn-wrap"
      v-for="(item, index) in view.data"
      :key="index"
      @click="handleItemClick(item)"
    >
      {{ item.label }}
    </TuiButton>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({
  view: {
    type: Object,
    required: true,
    default: () => ({
      data: [],
      current: '',
    }),
  },
});

const emit = defineEmits(['changeView']);

const buttonConfig = reactive({
  subType: 'B',
  height: 46,
  backgroundOpacity: 1,
});

const handleItemClick = (item) => {
  emit('changeView', item);
};
</script>

<style lang="less">
.change-view { position: absolute; z-index: 10; cursor: pointer; 
  .flex; flex-direction: column; gap:10px;
  .tui-button{margin:0;}
}

</style>
<script setup>
defineOptions({
  name: 'TTuiRadio',
})
const props = defineProps({
  modelValue: { type: [String, Number], default: null },
  hideDot: { type:Boolean, default:true, },
  data: { type: Array, required: true, default: () => [] }
})
const emit = defineEmits(['update:modelValue','change'])
const handleSelect = (value) => {
  emit('update:modelValue', value)
  emit('change', value)
}
</script>
<template>
  <div class="radio-group">
    <div 
      v-for="item in data" 
      :key="item.value"
      class="radio-item"
      :class="{ active: modelValue === item.value }"
      @click="handleSelect(item.value)"
    >
      <div class="radio-circle" v-if="!hideDot">
        <div v-if="modelValue === item.value" class="radio-dot"></div>
      </div>
      <span class="radio-label">{{ item.label }}</span>
    </div>
  </div>
</template>
<style lang="less">
.radio-group { display: flex; .bdra(5px); overflow: hidden; .bd(var(--button-bd)); 
  .radio-item { display: flex; align-items: center; gap: 8px; padding: 4px 12px; cursor: pointer; transition: all 0.2s ease; user-select: none;
    .bgc(var(--button-bg));
    &:hover { .bgc(var(--button-bg_hov)); }
    &.active {.bgc(var(--primary-base)); .fc(var(--font-weakest)); 
      .radio-circle { }
    }
    .radio-circle { width: 16px; height: 16px; border: 2px solid #d9d9d9; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; 
      .radio-dot { width: 8px; height: 8px; background-color: #1890ff; border-radius: 50%; }
    }
    .radio-label { font-size: 14px; line-height: 1.4; }
  }
}


</style>
<script setup>
defineOptions({
  name: 'TTuiToggle',
})
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  activeIcon: { type: [String, Object], default: null },
  inactiveIcon: { type: [String, Object], default: null },
  activeLabel: { type: String, default: '开启' },
  inactiveLabel: { type: String, default: '关闭' },
  showLabel: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  size: { type: String, default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const handleToggle = () => {
  if (props.disabled) return
  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>
<template>
  <div class="toggle-container">
    <div 
      class="toggle-switch"
      :class="{ 'active': modelValue }"
      @click="handleToggle"
    >
      <div class="toggle-slider">
        <div 
          class="toggle-icon active-icon"
          :class="{ 'show': modelValue }"
        >
          <slot name="activeIcon" v-if="$slots.activeIcon"></slot>
          <component v-else-if="activeIcon" :is="activeIcon"></component>
          <span v-else>✓</span>
        </div>
        
        <div 
          class="toggle-icon inactive-icon"
          :class="{ 'show': !modelValue }"
        >
          <slot name="inactiveIcon" v-if="$slots.inactiveIcon"></slot>
          <component v-else-if="inactiveIcon" :is="inactiveIcon"></component>
          <span v-else>✕</span>
        </div>
      </div>
    </div>
    
    <span v-if="showLabel" class="toggle-label">
      {{ modelValue ? activeLabel : inactiveLabel }}
    </span>
  </div>
</template>
<style lang="less" scoped>
.toggle-container { display: inline-flex; align-items: center; gap: 8px;
  .toggle-switch { position: relative; display: inline-block; width: 50px; height: 24px;
    background-color: #ccc; border-radius: 12px; cursor: pointer; transition: all 0.3s ease;
    &:hover { opacity: 0.8; }
    &.active { background-color: #4CAF50;
      .toggle-slider { transform: translateX(26px); }
    }
    
    &.disabled { cursor: not-allowed; opacity: 0.5;
      &:hover { opacity: 0.5; }
    }
    
    .toggle-slider { position: absolute; top: 2px; left: 2px; width: 20px; height: 20px;
      border-radius: 50%; transition: transform 0.3s ease; display: flex; align-items: center; justify-content: center;
      background-color: white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      
      .toggle-icon { position: absolute; font-size: 12px; opacity: 0; transition: opacity 0.2s ease;
        color: #666;
        &.show { opacity: 1; }
        &.active-icon { color: #4CAF50; }
        &.inactive-icon { color: #999; }
      }
    }
  }
  
  .toggle-label { font-size: 14px; color: #666; user-select: none; }
  
  &.small {
    .toggle-switch { width: 36px; height: 18px; border-radius: 9px;
      &.active {
        .toggle-slider { transform: translateX(18px); }
      }
      .toggle-slider { width: 14px; height: 14px;
        .toggle-icon { font-size: 10px; }
      }
    }
  }
  &.large {
    .toggle-switch { width: 64px; height: 32px; border-radius: 16px;
      &.active {
        .toggle-slider { transform: translateX(32px); }
      }
      .toggle-slider { width: 28px; height: 28px;
        .toggle-icon { font-size: 14px; }
      }
    }
  }
}
</style>
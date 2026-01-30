<script setup>
import { ref } from 'vue';

import button from "./sub/button.vue";
import checkbox from "./sub/checkbox.vue";
import empty from "./sub/empty.vue";
import input from "./sub/input.vue";
import radio from "./sub/radio.vue";
import select from "./sub/select.vue";
import tagDemo from "./sub/tag.vue";
import toggle from "./sub/toggle.vue";

const activeTab = ref('button');

const components={
  button,
  checkbox,
  radio,
  input,
  select,
  tag:tagDemo,
  toggle,
  empty,
}

const tabList = [
  { label: 'Tui按钮', value: 'button' },
  { label: '复选框', value: 'checkbox' },
  { label: '单选框', value: 'radio' },
  { label: '输入框', value: 'input' },
  { label: '下拉框', value: 'select' },
  { label: '标签', value: 'tag' },
  { label: '切换按钮', value: 'toggle' },
  { label: '空提示', value: 'empty' },
  
];

const tabConfigH={ 
  active:0, 
  appearance:"simple", 
  size:"large",
  faceTo:"up",
  scrollable:true,
  scrollOffset:50, 
}

const tabCallBack=(value)=>{
  console.log("tabCallBack",value);
}

</script>
<template>
  <div class="general-comps-container">
    <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTab" v-bind="tabConfigH" itemMaxWidth="100%" >
      <TuiTab :count="item.count" :tagType="item.tagType" :icon="item.icon" :value="item.value" v-for="(item,index) in tabList">{{ item.label }}</TuiTab>
    </TuiTabs>
    <div class="tabs-comps-content">
      <component :is="components[activeTab]"></component>
    </div>
  </div>
</template>

<style lang='less'>
.general-comps-container{.flex; flex-direction: column; height:100%; .bgc(var(--common-bg_layer));
  .tab-demo-top{.bgc(var(--common-bg));}
  .tabs-comps-content{flex:1;.por; overflow-y: auto;overflow-x: hidden;}
  .scifi-tabs-nav{.por; z-index: 10; }
}
</style>
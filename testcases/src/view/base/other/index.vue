<script setup>
import { ref } from 'vue';

import grid from "./sub/grid.vue";
import login from "./sub/login/index-demo.vue";
import rowCol from "./sub/rowCol.vue";
import stepScroller from "./sub/scroller/step.vue";
import virtualScroller from "./sub/scroller/virtual.vue";
import textGradient from "./sub/textGradient.vue";
import typed from "./sub/typed.vue";

const activeTab = ref('textGradient');

const components={
  grid,
  rowCol,
  textGradient,
  typed,
  stepScroller,
  virtualScroller,
  login,
}

const tabList = [
  { label: '文字渐变', value: 'textGradient' },
  { label: '类型面板', value: 'typed' },
  { label: '栅格', value: 'rowCol' },
  { label: '网格', value: 'grid' },
  { label: '登录', value: 'login' },
  { label: '步进滚动', value: 'stepScroller' },
  { label: '虚拟滚动', value: 'virtualScroller' },
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
  <div class="other-comps-container">
    <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTab" v-bind="tabConfigH" itemMaxWidth="100%" >
      <TuiTab :count="item.count" :tagType="item.tagType" :icon="item.icon" :value="item.value" v-for="(item,index) in tabList">{{ item.label }}</TuiTab>
    </TuiTabs>
    <div class="tabs-comps-content">
      <component :is="components[activeTab]"></component>
    </div>
  </div>
</template>

<style lang='less'>
.other-comps-container{.flex; flex-direction: column; height:100%; .bgc(var(--common-bg_layer));
  .tab-demo-top{.bgc(var(--common-bg));}
  .tabs-comps-content{flex:1;.por; overflow-y: auto;overflow-x: hidden;}
  .scifi-tabs-nav{.por; z-index: 10; }
}
</style>
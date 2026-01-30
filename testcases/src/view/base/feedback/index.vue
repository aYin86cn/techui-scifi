<script setup>
import { ref } from 'vue';

import attention from "./sub/attention.vue";
import curTip from "./sub/curTip.vue";
import dialog from "./sub/dialog.vue";
import drawer from "./sub/drawer.vue";
import menu from "./sub/menu.vue";
import popover from "./sub/popTip.vue";
import routerNav from "./sub/routerNav.vue";
import tab from "./sub/tab.vue";
import tabScroll from "./sub/tabScroll.vue";
import textTip from "./sub/textTip.vue";


const activeTab = ref('dialog');

const components={
  dialog,
  drawer,
  attention,
  menu,
  popover,
  curTip,
  textTip,
  routerNav,
  tab,
  tabScroll,
}

const tabList = [
  { label: '对话框', value: 'dialog' },
  { label: '抽屉', value: 'drawer' },
  { label: '通知', value: 'attention' },
  { label: '菜单', value: 'menu' },
  { label: '气泡提示', value: 'popover' },
  { label: '跟随提示', value: 'curTip' },
  { label: '文本溢出提示', value: 'textTip' },
  { label: '路由导航', value: 'routerNav' },
  { label: '标签页', value: 'tab' },
  { label: '滚动标签页', value: 'tabScroll' },
  
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
  <div class="feedback-comps-container">
    <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTab" v-bind="tabConfigH" itemMaxWidth="100%" >
      <TuiTab :count="item.count" :tagType="item.tagType" :icon="item.icon" :value="item.value" v-for="(item,index) in tabList">{{ item.label }}</TuiTab>
    </TuiTabs>
    <div class="tabs-comps-content">
      <component :is="components[activeTab]"></component>
    </div>
  </div>
</template>

<style lang='less'>
.feedback-comps-container{.flex; flex-direction: column; height:100%; .bgc(var(--common-bg_layer));
  .tab-demo-top{.bgc(var(--common-bg));}
  .tabs-comps-content{flex:1;.por; overflow-y: auto;overflow-x: hidden;}
  .scifi-tabs-nav{.por; z-index: 10; }
}
</style>
<script setup>
import { ref } from 'vue';

import adaptiveDemo from "./components/adaptive.vue";
import bar3dDemo from "./components/bar3D.vue";
import echartsDemo from "./components/echarts.vue";
import introDemo from "./components/intro.vue";
import echartsMapDemo from "./components/map/index.vue";
import panicAlertDemo from "./components/panicAlert.vue";
import pie3dDemo from "./components/pie3D.vue";
import t3DPanelDemo from "./components/t3DPanel.vue";


const activeTab = ref('intro');

const components={
  intro:introDemo,
  echarts:echartsDemo,
  echartsMap:echartsMapDemo,
  adaptive:adaptiveDemo,
  panicAlert:panicAlertDemo,
  t3DPanel:t3DPanelDemo,
  bar3D:bar3dDemo,
  pie3D:pie3dDemo,
}

const tabList = [
  { label: '高级组件简介', value: 'intro' },
  { label: '适配面板', value: 'adaptive' },
  { label: '恐慌告警', value: 'panicAlert' },
  { label: '3D面板', value: 't3DPanel' },
  { label: '3D柱图', value: 'bar3D' },
  { label: '3D饼图', value: 'pie3D' },
  { label: 'Echarts壳', value: 'echarts' },
  { label: 'EchartsMap壳', value: 'echartsMap' },
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
  <div class="adv-comps-container">
    <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTab" v-bind="tabConfigH" itemMaxWidth="100%" >
      <TuiTab :count="item.count" :tagType="item.tagType" :icon="item.icon" :value="item.value" v-for="(item,index) in tabList">{{ item.label }}</TuiTab>
    </TuiTabs>
    <div class="tabs-comps-content">
      <component :is="components[activeTab]"></component>
    </div>
  </div>
</template>

<style lang='less'>
.adv-comps-container{.flex; flex-direction: column; height:100%;.bgc(var(--common-bg_layer));
  .tab-demo-top{.bgc(var(--common-bg));}
  .tabs-comps-content{flex:1;.por; overflow-y: auto;overflow-x: hidden; }
  .scifi-tabs-nav{.por; z-index: 10; }
}
</style>
<script setup>
import { computed, inject, onMounted, reactive } from "vue";
import PortletCenter from "./portlet/portletCenter.vue";

const {$gTheme,$tState,themeToggle}= inject('$global');
const {config,type}= inject('adaptiveParams');

const components={
  PortletCenter
}

const state=reactive({
  portlets:[
    {
      label:"portletLT",
      slotName:"cell-0-0",
      panelName:"ScifiPanelA1",
      component:"portletLT",
      panelCfg:{rotate:'y',}
    },
    {
      label:"portletLC",
      slotName:"cell-1-0",
      panelName:"ScifiPanelA1",
      component:"portletLC",
      panelCfg:{rotate:'y',}
    },
    {
      label:"portletLB",
      slotName:"cell-2-0",
      panelName:"ScifiPanelA1",
      component:"portletLB",
      panelCfg:{rotate:'y',}
    },
    {
      label:"portletRT",
      slotName:"cell-0-2",
      panelName:"ScifiPanelA1",
      component:"portletRT",
      panelCfg:{}
    },
    {
      label:"portletRB",
      slotName:"cell-1-2",
      panelName:"ScifiPanelA1",
      component:"portletRB",
      panelCfg:{}
    },
    {
      label:"portletCenter",
      slotName:"cell-0-1",
      panelName:"ScifiPanelReactor",
      component:"PortletCenter",
      panelCfg:{rotate:'y',}
    },
  ]
})

const OpaCPT=computed(()=>$gTheme.value=='lightBlue'?1:.6)//根据主题动态调整透明度

onMounted(()=>{
  config.showPenetration=false;
})

</script>
<template>
  <ScifiHeaderA1 :width="500">TechUI Scifi Components</ScifiHeaderA1>
  <TuiGrid 
    class="dash-grid-layout-a"
    :gap="40"
    :rows="3"
    :cols="3"
    :colConfig="[
      { size: 1 },
      { size: 2 },
      { size: 1 }
    ]"
    :rowConfig="[
      { size: 1 }, 
      { size: 1.2 },
      { size: 1 }
    ]"
    :cellConfig="{
      '0-1': { rowSpan: 3,pointerEvent:'none' },
      '1-2': { rowSpan: 2},
    }"
  >
    <template v-for="item in state.portlets" :key="item.slotName" #[item.slotName]>
      <component :is="item.panelName" v-bind="{
        ...item.panelCfg,
        backgroundOpacity:OpaCPT
      }" :title="item.label">
        <component :is="components[item.component]"></component>
        <ScifiPanelTitleA1 class="" v-if="item.panelName=='ScifiPanelDV3'">
          {{ item.label }}
        </ScifiPanelTitleA1>
      </component>
    </template>
  </TuiGrid>
</template>
<style lang="less">
.dash-grid-layout-a{position: absolute; inset:110px 40px 40px 40px;
  --tui-grid-w:auto;
  --tui-grid-h:auto;
  --tui-grid-item-pd:0;
  --tui-grid-item-bg:transparent;
  --tui-grid-item-bd:transparent;
}
</style>
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
    //-------left
    {
      label:"portletL1",
      slotName:"cell-0-0",
      panelName:"ScifiPanelQuad",
      component:"portletL1",
      panelCfg:{}
    },
    {
      label:"portletL2",
      slotName:"cell-1-0",
      panelName:"ScifiPanelQuad",
      component:"portletL2",
      panelCfg:{directionAlt:true}
    },
    {
      label:"portletL3",
      slotName:"cell-2-0",
      panelName:"ScifiPanelVanguard",
      component:"portletL3",
      hideTitle:true,
      panelCfg:{decorationAlt:true,decoration:false}
    },
    {
      label:"portletL4",
      slotName:"cell-3-0",
      panelName:"ScifiPanelVanguard",
      component:"portletL4",
      hideTitle:true,
      panelCfg:{decorationAlt:true,decoration:false}
    },
    //-------right
    {
      label:"portletR1",
      slotName:"cell-0-3",
      panelName:"ScifiPanelReactor",
      component:"portletRT",
      panelCfg:{rotate:'y',}
    },
    {
      label:"portletR2",
      slotName:"cell-2-3",
      panelName:"ScifiPanelVanguard",
      component:"portletRB",
      hideTitle:true,
      panelCfg:{rotate:'y',decorationAlt:true,decoration:false}
    },
    {
      label:"portletR3",
      slotName:"cell-3-3",
      panelName:"ScifiPanelVanguard",
      component:"portletRB",
      hideTitle:true,
      panelCfg:{rotate:'y',decorationAlt:true,decoration:false}
    },
    //---------center
    {
      label:"portletCL",
      slotName:"cell-3-1",
      panelName:"ScifiPanelVeil",
      component:"portletCL",
      panelCfg:{rotate:'y',decoration:false}
    },
    {
      label:"portletCR",
      slotName:"cell-3-2",
      panelName:"ScifiPanelVeil",
      component:"portletCB",
      panelCfg:{decoration:false}
    },
  ]
})

const OpaCPT=computed(()=>$gTheme.value=='lightBlue'?1:.6)//根据主题动态调整透明度

onMounted(()=>{
  config.showPenetration=true;
})
</script>
<template>
  <ScifiHeaderA1 :width="500">TechUI Scifi Components</ScifiHeaderA1>
  <TuiGrid 
    class="dash-grid-layout-b"
    :gap="15"
    :rows="4"
    :cols="4"
    :colConfig="[
      { size: 1 },
      { size: 1 },
      { size: 1 },
      { size: 1 }
    ]"
    :rowConfig="[
      { size: 1 }, 
      { size: 1 },
      { size: 1 },
      { size: 1 }
    ]"
    :cellConfig="{
      '0-1': { rowSpan: 3, colSpan:2, pointerEvent:'none' },
      '0-3': { rowSpan: 2},
    }"
  >
    <template v-for="item in state.portlets" :key="item.slotName" #[item.slotName]>
      <component :is="item.panelName" v-bind="{
        ...item.panelCfg,
        backgroundOpacity:OpaCPT
      }" :title="item.label">
        <component :is="components[item.component]"></component>
        <ScifiPanelTitleA1 class="" v-if="!item.hideTitle">
          {{ item.label }}
        </ScifiPanelTitleA1>
      </component>
    </template>
  </TuiGrid>
</template>
<style lang="less">
.dash-grid-layout-b{position: absolute; inset:90px 40px 40px 40px;
  --tui-grid-w:auto;
  --tui-grid-h:auto;
  --tui-grid-item-pd:0;
  --tui-grid-item-bg:transparent;
  --tui-grid-item-bd:transparent;
}
</style>
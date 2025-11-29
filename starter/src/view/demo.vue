<script setup>
import { tTimer } from "@techui/utils";
import { computed, inject, onBeforeMount, onMounted, reactive } from "vue";

const {$gTheme,$tState,themeToggle}= inject('$global');

const state=reactive({
  adaptiveType:"flexible",//四种模式 fixed flexible stretch extension
  adptCfg:{
    userSelect:true,
    loading:true,
    shadow:true,
    monitorRatio:true,
  },
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
      panelName:"ScifiPanelDV3",
      component:"portletLB",
      panelCfg:{rotate:'y',}
    },
  ]

  // portlets:[
  //   {
  //     label:"portletLT",
  //     slotName:"cell-0-0",
  //     panelName:"ScifiPanelA1",
  //     component:"portletLT",
  //     panelCfg:{rotate:'y',}
  //   },
  //   {
  //     label:"portletLC",
  //     slotName:"cell-1-0",
  //     panelName:"ScifiPanelA1",
  //     component:"portletLC",
  //     panelCfg:{rotate:'y',directionAlt:true}
  //   },
  //   {
  //     label:"portletLB",
  //     slotName:"cell-2-0",
  //     panelName:"ScifiPanelA2",
  //     component:"portletLB",
  //     panelCfg:{rotate:'y',}
  //   },
  //   {
  //     label:"portletRT",
  //     slotName:"cell-0-2",
  //     panelName:"ScifiPanelB1",
  //     component:"portletRT",
  //     panelCfg:{}
  //   },
  //   {
  //     label:"portletRB",
  //     slotName:"cell-1-2",
  //     panelName:"ScifiPanelA1",
  //     component:"portletRB",
  //     panelCfg:{}
  //   },
  //   {
  //     label:"portletCenter",
  //     slotName:"cell-0-1",
  //     panelName:"ScifiPanelDV3",
  //     component:"portletLB",
  //     panelCfg:{rotate:'y',}
  //   },
  // ]
})

const OpaCPT=computed(()=>$gTheme.value=='lightBlue'?1:.6)//根据主题动态调整透明度

const hideLoading=()=>{
  tTimer.s("hideLoading",()=>{
    state.adptCfg.loading=false
  },1000)
}
onMounted(()=>{
  console.log("$gTheme",$gTheme.value);
  
  hideLoading()
})
onBeforeMount(() => {
  tTimer.c("hideLoading")
})
</script>
<template>
  <TuiAdaptive v-model:adaptiveType="state.adaptiveType" v-bind="state.adptCfg">
    <TuiThemeToggle></TuiThemeToggle>
    <ScifiHeaderA1 :width="500">TechUI Scifi Components</ScifiHeaderA1>
    <TuiGrid 
      class="dash-grid"
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
          <!-- <component :is="components[item.component]"></component> -->
          <ScifiPanelTitleA1 class="" v-if="item.panelName=='ScifiPanelDV3'">
            {{ item.label }}
          </ScifiPanelTitleA1>
        </component>
      </template>
    </TuiGrid>
  </TuiAdaptive>
</template>
<style lang="less">
.tui-theme-toggle{position: absolute; z-index: 10; right:20px; top:25px;}
.tui-grid-wrap{position: absolute; inset:110px 40px 40px 40px;
  --tui-grid-w:auto;
  --tui-grid-h:auto;
  --tui-grid-item-pd:0;
  --tui-grid-item-bg:transparent;
  --tui-grid-item-bd:transparent;
}
</style>
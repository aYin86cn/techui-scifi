<script setup>
import { tTimer } from "@techui/utils";
import { getCurrentInstance, onBeforeMount, onMounted, reactive } from "vue";
import layout from "./layout.vue";

const state=reactive({

  adaptiveType:"extension",// fixed flexible stretch extension
  adptCfg:{
    userSelect:true,
    loading:true,
    shadow:true,
    monitorRatio:true,
  }
})

const { proxy } = getCurrentInstance();
const hideLoading=()=>{
  tTimer.s("hideLoading",()=>{
    state.adptCfg.loading=false
  },1000)
}
onMounted(()=>{
  hideLoading()
})
// watch("adaptiveConfig.chartCounter",(val,old)=>{
//   console.log("chartCounter",val);
// })
onBeforeMount(() => {
  tTimer.c("hideLoading")
})
</script>
<template>
  <TuiAdaptive v-model:adaptiveType="state.adaptiveType" v-bind="state.adptCfg">
    <layout></layout>
  </TuiAdaptive>
</template>
<style lang="less">
</style>
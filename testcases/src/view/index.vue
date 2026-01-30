<script setup>
import { tTimer } from "@techui/utils";
import { getCurrentInstance, onBeforeMount, onMounted, provide, reactive } from "vue";
import layout from "./layout.vue";

const state=reactive({

  loading:true,
  adaptiveType:"extension",// fixed flexible stretch extension
  adaptiveConfig:{
    userSelect:true,
    shadow:true,
    monitorRatio:true,
    showPenetration:false,
  }
})

const { proxy } = getCurrentInstance();
const hideLoading=()=>{
  tTimer.s("hideLoading",()=>{
    state.adaptiveConfig.loading=false
  },1000)
}
onMounted(()=>{
  hideLoading()
})
// watch("adaptiveConfig.chartCounter",(val,old)=>{
//   console.log("chartCounter",val);
// })
provide('adaptiveParams',{
  adaptiveConfig:state.adaptiveConfig,
  adaptiveType:state.adaptiveType,
})

onBeforeMount(() => {
  tTimer.c("hideLoading")
})
</script>
<template>
  <TuiAdaptive v-model:adaptiveType="state.adaptiveType" v-model:loading="state.loading" v-bind="state.adaptiveConfig" >
    <layout></layout>
    <!-- <template #penetration v-if="state.adaptiveConfig.showPenetration">
      <div class="penetration-wrap">
        <TuiTag type="primary">内测功能</TuiTag>
        <h1>无缩放穿透容器</h1>
        <p>通常用于放置GIS地图</p>
        <p class="desc">开启穿透容器后，tui-adpt-container内的元素不再响应光标交互，如需光标交互的元素，需手动设置 PointEvent:All</p>
        <p><i class="tui-icon tis-info-square"></i>也可以用于放置动画背景</p>
      </div>
    </template> -->
  </TuiAdaptive>
</template>
<style lang="less">
.penetration-wrap{.centerFlex; .centerAbsolute; left:55.8%;  .bgc(@rel5); .bgc(var(--primary-base_op2)); .bd(var(--tone-strongest),1px); .bdra(10px); flex-direction: column;
  background-color: var(--common-bg); border: 1px solid var(--common-bd); margin:50px 0 0 0; border-radius: 10px; height: 200px; width: 500px; padding:50px; text-align: center;
  .tui-tag{position: absolute; right:10px; top:10px;}
  h1{margin: 0 0 10px 0;}
  p{margin: 10px 0 0 0; font-size: 18px; 
    .tui-icon{font-size: 18px; vertical-align: bottom; margin-right: 5px;}
  }
  .desc{font-size: 14px; color:var(--font-weak); }
}
</style>
<script setup>
import { tTimer } from "@techui/utils";
import { getCurrentInstance, onBeforeMount, onMounted, provide, reactive, watch } from "vue";
import { useRoute } from "vue-router";
const {proxy:{$tState,$tService}}=getCurrentInstance();

const route=useRoute();

const state=reactive({
  adaptiveType:"flexible",//四种模式 fixed flexible stretch extension
  adaptiveConfig:{
    userSelect:true,
    shadow:true,
    monitorRatio:true,
    showPenetration:true,
  },
  loading:true,
  routerNavConfig:{
    options:[
      {label:"布局A",path:"/layoutA"},
      {label:"布局B",path:"/layoutB"},
    ],
    triggerPosition:"center",
    triggerStyle:"react",
    triggerAni:true,
    buttonWidth:200,
    modal:true,
  },
})

provide('adaptiveParams',{
  config:state.adaptiveConfig,
  type:state.adaptiveType,
})

watch(()=>route.path,(path)=>{
  state.loading=true;
  console.log("path",path);
  hideLoading()
})

const hideLoading=()=>{
  tTimer.s("hideLoading",()=>{
    state.loading=false
  },2000)
}

onMounted(()=>{
  hideLoading()
})

onBeforeMount(() => {
  tTimer.c("hideLoading")
})

</script>

<template>
  <TuiProvider>
    <TuiAdaptive v-model:adaptiveType="state.adaptiveType" v-model:loading="state.loading" v-bind="state.adaptiveParams">
      <TuiThemeToggle></TuiThemeToggle>
      <TuiToggleControlPanel appearance="iconButton"/>
      <router-view></router-view>
      <template #penetration v-if="state.adaptiveConfig.showPenetration">
        <div class="penetration-wrap">
          <TuiTag type="primary">内测功能</TuiTag>
          <h1>无缩放穿透容器</h1>
          <p>通常用于放置GIS地图</p>
          <p class="desc">开启穿透容器后，tui-adpt-container内的元素不再响应光标交互，如需光标交互的元素，需手动设置 PointEvent:All</p>
          <p><i class="tui-icon tis-info-square"></i>也可以用于放置动画背景</p>
        </div>
      </template>
    </TuiAdaptive>
    <TuiRouterNav v-bind="state.routerNavConfig"/>
  </TuiProvider>
</template>

<style lang="less">
.tui-theme-toggle{position: absolute; z-index: 10; pointer-events: all; right:60px; top:25px;}
.tui-toggle-ctrlpanel{position: absolute; z-index: 10; pointer-events: all; right:20px; top:25px;}
.penetration-wrap{position: absolute; left:50%; top:40%; transform: translateX(-50%) translateY(-50%); display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 10; background-color: var(--common-bg); border: 1px solid var(--common-bd); margin:50px 0 0 0; border-radius: 10px; height: 200px; width: 500px; padding:50px; text-align: center;
  .tui-tag{position: absolute; right:10px; top:10px;}
  h1{margin: 0 0 10px 0;}
  p{margin: 10px 0 0 0; font-size: 18px; 
    .tui-icon{font-size: 18px; vertical-align: bottom; margin-right: 5px;}
  }
  .desc{font-size: 14px; color:var(--font-weak); 
  }
}
</style>

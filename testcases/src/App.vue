<script setup>
import { getCurrentInstance, onMounted, reactive } from "vue";
const {proxy:{$tState,$tService,isActAdminFeatures}}=getCurrentInstance();
const {$ADMIN}=$tService
const state=reactive({
  routerNavConfig:{
    options:[
      {label:"测试用例",path:"/"},
      {label:"DEMO布局A",path:"/demoLayout/layoutA"},
      {label:"DEMO布局B",path:"/demoLayout/layoutB"},
      
    ],
    triggerPosition:"right",
    triggerStyle:"react",
    triggerAni:true,
    buttonWidth:200,
    modal:true,
  },
  
})

onMounted(() => { })
</script>

<template>
  <TuiProvider>
    <router-view></router-view>
    <TuiRouterNav v-bind="state.routerNavConfig"/>
  </TuiProvider>
</template>

<style lang="less">
</style>

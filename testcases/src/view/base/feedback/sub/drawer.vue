<script setup>
import { onMounted, reactive } from 'vue';

const config=reactive({
  showClose:false,
  closeOnBackdrop:true,
  closeOnEsc:true,
  modal:true,
})

const state=reactive({
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],

  drawerGroup:[
    {label:"Top to Bottom",modelValue:false,config:{
      direction:"ttb",size:"50%",padding:40,zIndex:2024,
    }},
    {label:"Right to Left",modelValue:false,config:{
      direction:"rtl",size:300, padding:40,
    }},
    {label:"Bottom to Top",modelValue:false,config:{
      direction:"btt",size:"30%"
    }},
    {label:"Left to Right",modelValue:false,config:{
      direction:"ltr",size:"30%"
    }},
    
  ]
})

const toggleDrawer=(item)=>{
  console.log("toggleDrawer",item);
  item.modelValue=!item.modelValue
}
const drawerOpen=(value)=>{
  console.log("drawerOpen",value);
}
const drawerClose=(value)=>{
  console.log("drawerClose",value);
}

const mustClickModal=(val)=>{
  if(!val){
    config.modal=true;
    config.closeOnBackdrop=true;
  }
}

const mustShowClose=(val)=>{
  if(!val){
    config.showClose=true;
  }
}

onMounted(() => {
  
})
</script>
<template>
  <div class="drawer-demo-wrap">
    <div class="operat-bar">
      <div class="form-group">
        <div class="label">显示Close按钮</div>
        <TuiRadio v-bind="state.radioCfg" @change="mustClickModal" v-model="config.showClose" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">遮罩点击关闭</div>
        <TuiRadio v-bind="state.radioCfg" @change="mustShowClose" v-model="config.closeOnBackdrop" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">Esc关闭</div>
        <TuiRadio v-bind="state.radioCfg" @change="mustShowClose" v-model="config.closeOnEsc" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">遮罩</div>
        <TuiRadio v-bind="state.radioCfg" @change="mustShowClose" v-model="config.modal" :options="state.boolOpt"></TuiRadio>
      </div>
    </div>
    <div class="demo-inner">
      <div class="demo-desc">Drawer:</div>
      <template v-for="(drawer,index) in state.drawerGroup">
        <TuiButton v-tui-popover="{
          trigger:'hover',
          content:'config: '+JSON.stringify(drawer.config),
          maxWidth:300,
          placement:'bottom'
        }" :class="`pos-${drawer.label} state-${drawer.modelValue?'act':'nom'}`" @click="toggleDrawer(drawer)">{{ drawer.label }}</TuiButton>
        <TuiDrawer @open="drawerOpen" @close="drawerClose" v-bind="{
          ...drawer.config,
          ...config
        }" v-model="drawer.modelValue" >Slot Content</TuiDrawer>
      </template>
    </div>
  </div>
</template>
<style lang="less">
.drawer-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(30px); padding:0 20px;
    .form-group{
      .label{margin:10px 0;}
    }
  }
  .demo-inner{.flex(10px); padding:20px; flex-wrap: wrap; margin:0 0 50px 0; align-items: center;
    .tui-button{margin:0; }
  }
}
</style>

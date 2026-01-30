<script setup>
import { inject, onMounted, reactive } from 'vue';

const {adaptiveConfig}= inject('adaptiveParams');

const {$globalConfig,}= inject('$global');

const state=reactive({
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  adaptiveTypeOpt:[
    {label:"延伸",value:'extension'},
    {label:"弹性",value:'flexible'},
    {label:"固定",value:'fixed'},
    {label:"拉伸",value:'stretch'},
  ],
  bgInitOpt:[
    {label:"全部",value:'all'},
    {label:"前置",value:'view'},
    {label:"后置",value:'root'},
    {label:"无",value:'none'},
  ],
  
  demoLayoutAct:"fixed",
  demoLayoutOpt:[
    {label:"固定",value:'fixed'},
    {label:"自适应",value:'adaptive'},
    {label:"数据屏",value:'dataView'},
    {label:"瀑布流",value:'masonry'},
  ],
})


onMounted(() => {
  console.log("adaptiveParams",adaptiveConfig);
  
})


</script>
<template>
  <div class="adaptive-demo-wrap">
    <div class="operat-bar">
      <!-- v-if="!adptBase.disabled" -->
      <div class="form-group" >
        <div class="label">适配类型</div>
        <TuiRadio v-bind="state.radioCfg" v-model="$globalConfig.adaptive" :options="state.adaptiveTypeOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">全局背景</div>
        <TuiRadio v-bind="state.radioCfg" v-model="$globalConfig.background" :options="state.bgInitOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">阴影</div>
        <TuiRadio v-bind="state.radioCfg" v-model="adaptiveConfig.shadow" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">监测浏览器缩放</div>
        <TuiRadio v-bind="state.radioCfg" v-model="adaptiveConfig.monitorRatio" :options="state.boolOpt"></TuiRadio>
      </div>
      <!-- <div class="form-group">
        <div class="label">包含同步容器</div>
        <TuiRadio v-bind="state.radioCfg" v-model="adaptiveConfig.showPenetration" :options="state.boolOpt"></TuiRadio>
      </div> -->
    </div>
    
    <div class="grid-wrap">
      <div class="grid-item" v-for="(item,index) in 6"></div>
    </div>
  </div>
</template>
<style lang="less">
.adaptive-demo-wrap{ min-height:100%;margin:0 auto; padding:20px; .por;
  .operat-bar{.flex(30px); padding:0 20px; pointer-events: all; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
    }
  }
  .grid-wrap{ .poa; inset:20px; top:120px; .grid(3,2,30px); padding:20px; flex-wrap: wrap; 
    .grid-item{
      &:not(:nth-child(2),:nth-child(5)){.bgc(var(--primary-base_op2)); .bd(var(--tone-strongest),1px); .bdra(10px); .bgBlur;}
    }
  }
}
</style>

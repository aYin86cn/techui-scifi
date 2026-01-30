<script setup>
import { inject, reactive } from 'vue';
// import tempBG from "../_common/tempBG/index.vue";
const {$tPopover,$tVPopoverCloseAll,$tPopoverCloaseAll}=inject('$global');

const config=reactive({
  content: 'This is a Popover text!',
  disabled:false,
  transparent:true,
  backgroundBlur:true,
  tone:'base',
  caretSize:5,
  caretOffset:2,
  delay:100
})

const state=reactive({

  radioCfg:{ appearance:"button",  defaultIcon:false, },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  toneOpt:[
    {label:"淡",value:"weak"},
    {label:"基",value:"base"},
    {label:"强",value:"strong"},
    {label:"强反",value:"strongInvert"},
    {label:"极反",value:"extremeInvert"},
  ],
  
  groups:[
    {label:"Normal",
      children:[
        {label:"Top Start Normal",config:{placement:"top-start",type:"default"}},
        {label:"Top End Reverse",config:{placement:"top-end"}},
        {label:"Bottom Start Normal",config:{placement:"bottom-start",type:"default"}},
        {label:"Bottom End Reverse ",config:{placement:"bottom-end"}},
      ]
    },
    {label:"Advance",
      children:[
      {label:"Top Start Danger Delay:1s",config:{placement:"top-start",title:"Curtip Title",type:"danger", delay:1000}},
        {label:"Top End Success Delay:2s",config:{placement:"top-end",title:"Curtip Title",type:"success", delay:2000}},
        {label:"Bottom Start Emphasis",config:{placement:"bottom-start",title:"Curtip Title",type:"emphasis",}},
        {label:"Bottom End Primary",config:{placement:"bottom-end",title:"Curtip Title",type:"primary",}},
      ]
    },
    
  ]

})


</script>
<template>
  <div class="curTip-demo-wrap">
    <div class="demo-layout" >
      <!-- <tempBG/> -->
      <div class="operat-bar">
        <div class="form-group">
          <div class="label">禁用</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.disabled" :options="state.boolOpt"></TuiRadio>
        </div>
        <div class="form-group">
          <div class="label">Type色调</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.tone" :options="state.toneOpt"></TuiRadio>
        </div>
        <div class="form-group">
          <div class="label">半透明</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.transparent" :options="state.boolOpt"></TuiRadio>
        </div>
        <div class="form-group" v-if="config.transparent">
          <div class="label">背景模糊</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.backgroundBlur" :options="state.boolOpt"></TuiRadio>
        </div>
        <div class="form-group group-number">
          <div class="label">箭头大小</div>
          <TuiInput type="number" :min="3" v-model="config.caretSize"/>
        </div>
        <div class="form-group group-number">
          <div class="label">箭头Offset</div>
          <TuiInput type="number" :min="0" v-model="config.caretOffset"/>
        </div>
      </div>


      <div class="group-title">CursorTip 指令触发</div>
      <div class="group" v-for="(group,indexG) in state.groups" :key="group.label">
        <template v-for=" (item,index) in group.children" :key="item.label" >
          <div :class="`cur-item item-${item.config.placement}`" v-tui-cursor-tip="{
            ...config,
            ...group.config,
            ...item.config
          }">{{ item.label }}</div>
        </template>
        <div class="group-label">{{ group.label }} (指令触发)</div>
      </div>

      <div class="group-title">CursorTip 组件触发</div>
      <div class="group" v-for="(group,indexG) in state.groups" :key="group.label">
        <template v-for=" (item,index) in group.children" :key="item.label">
          <TuiCursorTip v-bind="{
            ...config,
            ...group.config,
            ...item.config
          }">
            <div :class="`cur-item item-${item.config.placement}`">{{ item.label }}</div>
          </TuiCursorTip>
        </template>
        <div class="group-label">{{ group.label }} (组件触发)</div>
      </div>

    </div>
  </div>
</template>
<style lang="less">
.curTip-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(30px); padding:0;
    .form-group{
      .label{margin:10px 0;}
      &.group-number{width: 100px;}
    }
  }
  .demo-layout{ .flex(40px); padding:20px; flex-wrap: wrap; .por; //justify-content: center;
    .group-title{width: 100%; .bdb(var(--common-bd)); font-size: 18px; padding:10px 0; font-weight: bold;}
    .group{ width:calc(50% - 20px); padding:10px; .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); height:320px; 

      .group-label{.centerAbsolute; pointer-events: none;}

      .cur-item{padding:15px 0; user-select: none; text-align: center; .centerFlex; .bd(var(--common-bd)); .bgc(var(--common-bg)); flex:1; .bdra(5px); .fc(var(--font-base)); 
        &.item-top-start,
        &.item-top-end,
        &.item-bottom-end,
        &.item-bottom-start{height:120px; width: 44%;.poa;}

        &.item-top-start{ right:20px; top:20px;}
        &.item-top-end{ top:20px; left:20px;}
        &.item-bottom-start{ bottom:20px; right:20px;}
        &.item-bottom-end{ left:20px; bottom:20px;}
      }
      
    }

    
  }
}
</style>

<script setup>
import { tArr } from "@techui/utils";
import { inject, reactive } from 'vue';
// import tempBG from "../_common/tempBG/index.vue";
import ColorSelect from "./colorSelect.vue";

const {$tPopover,$tPopoverDirectiveCloseAll,$tPopoverCloaseAll}=inject('$global');

const config=reactive({
  autoClose:true,
  disabled:false,
  content: 'This is a Popover text!',
  title:"Popinfo Title",
  trigger: 'click',
  enterable: false,
  disabled:false,
  transparent:true,
  backgroundBlur:true,
  tone:'base',
  // delay:100
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
  triggerOpt:[
    {label:"Click",value:"click"},
    {label:"Hover",value:'hover'},
  ],

  
  groups:[
    {label:"Poptip Normal",
      config:{appearance:"poptip"},
      children:[
        {label:"left",children:[
          {label:"Left Start",config:{placement:"left-start",defaultOn:false}},
          {label:"Left",config:{placement:"left"}},
          {label:"Left End",config:{placement:"left-end"}},
        ]},
        {label:"top",children:[
          {label:"Top Start",config:{placement:"top-start"}},
          {label:"Top",config:{placement:"top"}},
          {label:"Top End",config:{placement:"top-end"}},
        ]},
        {label:"bottom",children:[
          {label:"Bottom Start",config:{placement:"bottom-start"}},
          {label:"Bottom",config:{placement:"bottom"}},
          {label:"Bottom End",config:{placement:"bottom-end"}},
        ]},
        {label:"right",children:[
          {label:"Right Start",config:{placement:"right-start"}},
          {label:"Right",config:{placement:"right"}},
          {label:"Right End",config:{placement:"right-end"}},
        ]},
      ]
    },
    {label:"Poptip Advance",
      config:{appearance:"poptip"},
      children:[
        {label:"left",children:[
          {label:"Left Start",config:{placement:"left-start",type:"primary"}},
          {label:"Left",config:{placement:"left",type:"success"}},
          {label:"Left End",config:{placement:"left-end",type:"warning"}},
        ]},
        {label:"top",children:[
          {label:"Top Start",config:{placement:"top-start",type:"emphasis"}},
          {label:"Top",config:{placement:"top",type:"success"}},
          {label:"Top End",config:{placement:"top-end",type:"default"}},
        ]},
        {label:"bottom",children:[
          {label:"Bottom Start",config:{placement:"bottom-start",type:"emphasis"}},
          {label:"Bottom",config:{placement:"bottom",type:"success"}},
          {label:"Bottom End",config:{placement:"bottom-end",type:"danger"}},
        ]},
        {label:"right",children:[
          {label:"Right Start",config:{placement:"right-start",type:"info"}},
          {label:"Right",config:{placement:"right",type:"danger"}},
          {label:"Right End",config:{placement:"right-end",type:"warning"}},
        ]},
      ]
    },
    {label:"Popinfo Normal",
      config:{appearance:"popinfo",},
      children:[
        {label:"left",children:[
          {label:"Left Start",config:{titleIcon:"tui-icon tis-star",placement:"left-start"}},
          {label:"Left",config:{titleIcon:"tui-icon tis-star",placement:"left"}},
          {label:"Left End",config:{titleIcon:"tui-icon tis-star",placement:"left-end"}},
        ]},
        {label:"top",children:[
          {label:"Top Start",config:{titleIcon:"tui-icon tis-star",placement:"top-start"}},
          {label:"Top",config:{titleIcon:"tui-icon tis-star",placement:"top"}},
          {label:"Top End",config:{placement:"top-end"}},
        ]},
        {label:"bottom",children:[
          {label:"Bottom Start",config:{titleIcon:"tui-icon tis-star",placement:"bottom-start"}},
          {label:"Bottom",config:{titleIcon:"tui-icon tis-star",placement:"bottom"}},
          {label:"Bottom End",config:{titleIcon:"tui-icon tis-star",placement:"bottom-end"}},
        ]},
        {label:"right",children:[
          {label:"Right Start",config:{titleIcon:"tui-icon tis-star",placement:"right-start"}},
          {label:"Right",config:{titleIcon:"tui-icon tis-star",placement:"right"}},
          {label:"Right End",config:{titleIcon:"tui-icon tis-star",placement:"right-end"}},
        ]},
      ]
    },
    {label:"Popinfo Advance",
      config:{appearance:"popinfo",},
      children:[
      {label:"left",children:[
          {label:"Left Start",config:{titleIcon:"tui-icon tis-star",placement:"left-start",type:"primary"}},
          {label:"Left",config:{titleIcon:"tui-icon tis-star",placement:"left",type:"success"}},
          {label:"Left End",config:{titleIcon:"tui-icon tis-star",placement:"left-end",type:"warning"}},
        ]},
        {label:"top",children:[
          {label:"Top Start",config:{titleIcon:"tui-icon tis-star",placement:"top-start",type:"emphasis"}},
          {label:"Top",config:{titleIcon:"tui-icon tis-star",placement:"top",type:"success"}},
          {label:"Top End",config:{titleIcon:"tui-icon tis-star",placement:"top-end",type:"invert"}},
        ]},
        {label:"bottom",children:[
          {label:"Bottom Start",config:{placement:"bottom-start",type:"emphasis"}},
          {label:"Bottom",config:{placement:"bottom",type:"success"}},
          {label:"Bottom End",config:{placement:"bottom-end",type:"danger"}},
        ]},
        {label:"right",children:[
          {label:"Right Start",config:{placement:"right-start",type:"info"}},
          {label:"Right",config:{placement:"right",type:"danger"}},
          {label:"Right End",config:{placement:"right-end",type:"warning"}},
        ]},
      ]
    },
    
  ]

})

const poptipEvent=(event)=>{
  
  const options={
    ...config,
    event,
    type:tArr.rdmpk1(['default','invert','info','primary','success','warning','danger']),
    content:"this is poptip event !",
    showTrigger:true,

    // duration:5000,
    // duration:90000
    // offset:40,
    // transparent:false,
    // placement:"bottom"
    // showArrow:false,
  }
  $tPopover(options)
}


const popinfoEvent=(event)=>{
  const options={
    ...config,
    event,
    type:tArr.rdmpk1(['default','invert','info','primary','success','warning','danger']),
    title:"This is title",
    content:"this is poptinfo event ! this is poptinfo event !",
    showTrigger:true,
    appearance:"popinfo",
    
    // component:ColorSelect,
    // popinstSize:20,
    // duration:5000,
    // duration:90000
    // offset:40,
    // transparent:false,
    // placement:"bottom"
    // showArrow:false,
  }
  $tPopover(options)
}



const closeAll=()=>{
  $tPopoverCloaseAll()
}

const closeAllV=()=>{
  $tPopoverDirectiveCloseAll()
}


</script>
<template>
  <div class="popover-demo-wrap">
    <!-- <tempBG/> -->

    <div class="demo-layout" >
      <!--------------------------------------@click="poptipEvent" poptip place demo -------------------------------------->
      <div class="operat-bar">
        
        <div class="form-group">
          <div class="label">触发方式</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.trigger" :options="state.triggerOpt"></TuiRadio>
        </div>
        <div class="form-group">
          <div class="label">光标进入</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.enterable" :options="state.boolOpt"></TuiRadio>
        </div>
        <div class="form-group">
          <div class="label">自动关闭</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.autoClose" :options="state.boolOpt"></TuiRadio>
        </div>
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
        <div class="form-group">
          <div class="label">关闭</div>
          <TuiButton @click="closeAllV">关闭所有(指令)</TuiButton>
          <TuiButton @click="closeAll">关闭所有(事件)</TuiButton>
          <TuiPoptip content="组件方式不支持外部关闭！" type="danger">
            <TuiButton disabled>关闭所有(组件)</TuiButton>
          </TuiPoptip>

        </div>
        
      </div>

      <div class="group-title">Popover 指令触发</div>

      <!-- 指令触发 -->
      <div class="group" v-for="(group,indexG) in state.groups" :key="group.label">
        <div :class="`sub-group-`+subGroup.label" v-for=" (subGroup,indexSG) in group.children" :key="subGroup.label">
          <template v-for=" (item,index) in subGroup.children" :key="item.label" >
            <span v-tui-popover="{
              ...config,
              ...group.config,
              ...item.config
            }">{{ item.label }}</span>
          </template>
        </div>
        
        <TuiButton v-if="indexG==3" class=" button-trigger" v-tui-popover="{
          ...config,
          appearance:'popinfo',
          enterable: true,
          autoClose:false,
          component:ColorSelect
        }">组件</TuiButton>

        <div class="group-label">{{ group.label }} (指令触发)</div>
      </div>

      <div class="group-title">Popover 组件触发</div>
      <!-- 组件触发 -->
      <div class="group" v-for="(group,indexG) in state.groups" :key="group.label">
        <div :class="`sub-group-`+subGroup.label" v-for=" (subGroup,indexSG) in group.children" :key="subGroup.label">
          <template v-for=" (item,index) in subGroup.children" :key="item.label">
            <TuiPoptip v-if="group.config.appearance=='poptip'" v-bind="{...config,...group.config,...item.config}">
              <span>{{ item.label }}</span>
            </TuiPoptip>
            <TuiPopinfo v-if="group.config.appearance=='popinfo'" v-bind="{...config,...group.config,...item.config}">
              <span>{{ item.label }}</span>
            </TuiPopinfo>

          </template>
        </div>

        <!-- <i class="icon-trigger tui-icon tis-star" ></i> -->
        <TuiPopinfo v-if="indexG==3" v-bind="{
          ...config,
          enterable: true,
          autoClose:false,
        }">
          <TuiButton class="button-trigger">组件</TuiButton>
          <template #content>
            <ColorSelect/>
          </template>
        </TuiPopinfo>

        <div class="group-label">{{ group.label }} (组件触发)</div>
      </div>

      <div class="group-title">Popover 事件触发</div>
      <!-- 事件触发 -->
      <div class="group group-popinst" @click="poptipEvent">
        <div class="group-label">Poptip (事件触发)</div>
        <TuiButton class="close-all" @click="closeAll">Close All</TuiButton>
      </div>
      <div class="group group-popinst" @click="popinfoEvent">
        <div class="group-label">Popinfo (事件触发)</div>
        <TuiButton class="close-all" @click="closeAll">Close All</TuiButton>
      </div>

    </div>
  </div>
</template>
<style lang="less">
.popover-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(30px); padding:0 20px;
    .form-group{
      .label{margin:10px 0;}
    }
  }
  .demo-layout{ .flex(40px); padding:20px; flex-wrap: wrap; .por; //justify-content: center;
    .group-title{width: 100%; .bdb(var(--common-bd)); font-size: 18px; padding:10px 0; font-weight: bold;}
    .group{ width:calc(50% - 20px); padding:10px; .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); height:320px; 
      
      .sub-group-left,
      .sub-group-top,
      .sub-group-bottom,
      .sub-group-right{.flex(10px); .poa;}

      .sub-group-left{ flex-direction: column; width: 18%; left:10px; top:50%; .fixc("y");}
      
      .sub-group-top{width: 60%; top:10px; left:50%; .fixc("x");}

      .sub-group-bottom{ width: 60%; bottom:10px; left:50%; .fixc("x");}

      .sub-group-right{ flex-direction: column; width: 18%; right:10px; top:50%; .fixc("y");}
      
      .group-label{.centerAbsolute;pointer-events: none;}

      span{ user-select: none; padding:15px 0; cursor: pointer; text-align: center; .centerFlex; .bd(var(--button-bd)); .bgc(var(--button-bg)); flex:1; .bdra(5px); .fc(var(--font-base)); }
      
    }

    .group-popinst{.por;  width:calc(50% - 20px); 
      .popinst-item{.poa; cursor: pointer; width: 14px; height: 14px; .bdra(50%); //width:50px; height: 20px;//
        &.item-default{.bgc(var(--common-bd));}
        &.item-info{.bgc(var(--info-base));}
        &.item-primary{.bgc(var(--primary-base));}
        &.item-success{.bgc(var(--success-base));}
        &.item-warning{.bgc(var(--warning-base));}
        &.item-danger{.bgc(var(--danger-base));}
        &.item-0,
        &.item-1,
        &.item-2{width: 50px; height: 20px; .bdra(5px);}
      }

      .close-all{.poa; bottom:10px; right:10px;}
      .button-trigger{.poa; top:10px; right:10px;}
      .icon-trigger{.poa; top:12px; right:180px; font-size: 24px; cursor: pointer;}
    }
  }
}
</style>

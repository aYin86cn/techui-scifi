<script setup>
import { inject, onMounted, reactive } from 'vue';

const {$tPopover,$tPopoverCloaseAll}=inject('$global');

const config=reactive({
  transparent:false,
  backgroundBlur:false,
  hasShadow:true,
  type:"danger",
  tone:"strong",
  modal:true,
})

const state=reactive({
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  typeOpt:[
    {label:"Default",value:"default"},
    {label:"Invert",value:"invert"},
    {label:"Primary",value:'primary'},
    {label:"Success",value:'success'},
    {label:"Warning",value:'warning'},
    {label:"Danger",value:'danger'},
    {label:"Info",value:'info'},
    {label:"Emphasis",value:'emphasis'},
  ],
  toneOpt:[
    {label:"淡",value:"weak"},
    {label:"基",value:"base"},
    {label:"强",value:"strong"},
    {label:"强反",value:"strongInvert"},
    {label:"极反",value:"extremeInvert"},
  ],
  alertTypeAct:'intro',
  alertTypeOpt:[
    {label:"简介",value:"intro"},
    {label:"分辨率",value:"resolution"},
    {label:"设备",value:"device"},
    {label:"调试",value:"debug"},
    {label:"自定义",value:"custom"},
  ],
  showAlert:false,
  panicAlertCfg:{
    showClose:true,
  },

  group:{
    intro:{
      label:"恐慌报警 简介",
      desc:[
        "PanicAlert用于侦测特定条件，触发绝对强提醒并且拒绝服务！这是一个非常规的组件，并不用于业务开发。",
        "如在某些情况下，严重影响客户体验，或当系统无法正常运行时，可以调用此组件给出的强提醒功能并拒绝服务。",
        "恐慌报警可以设置4种检测模式，分别是：分辨率、设备、调试、自定义",
        "分辨率、设备恐慌报警后，可以关闭或者回退路由的上一级",
        "调试恐慌报警后，会把当前的重要Dom元素清空，并拒绝调试，也可以输入预设好的调试码跳过调试恐慌报警侦测。",
        "自定义恐慌报警，可以通过title，content，icon等参数手动修改需要展示的信息内容，并通过show参数开启，但请勿把此组件当成常规提示工具使用！"
      ],
      config:{
        showClose:true,
      },
    },
    resolution:{
      label:"分辨率 恐慌报警",
      desc:[
        "可以设置四个参数，横向分辨率最大最小值，纵向分辨率最大最小值，超出设定的范围则显示告警窗口",
        "无需四个参数同时设置，可单独设置某一个参数",
        "当前参数设置：resolutionH:{min:1280 ,max:1920}, resolutionV:{min:768 ,max:1080}",
        "请调整窗口尺寸来触发分辨率恐慌报警。"
      ],
      config:{
        showClose:true,
        silenceCondition:{
          resolutionH:{min:1280 ,max:1920},
          resolutionV:{min:768 ,max:1080},
        }
      },
      
    },
    device:{
      label:"设备 恐慌报警", 
      desc:[
        "设备参数有3个可选项：pc、pad、mobile，分别对应电脑，平板，手机三种设备",
        "可以同时设置多个参数，用逗号隔开",
        "当前参数设置：device:'pc,pad'",
        "可以通过浏览器的调试工具中的‘切换设备仿真’来模拟不同的设备，从而触发设备恐慌报警"
      ],
      config:{
        showClose:true,
        silenceCondition:{
          device:"pc,pad",//pad mobile pc
        }
      }
    },
    debug:{
      label:"调试 恐慌报警", 
      desc:[
        "调试参数有2个可选项：all、prod",
        "all：开发环境和生产环境均禁用调试（通常用于测试）",
        "pord：生产环境禁用调试",
        "注意！当调试拦截开启后，会消除页面中的主要dom元素，关闭调试工具后，会自动重载",
        "可以设置用于跳过调试拦截的MD5值，如果设置后，可以在被拦截后输入调试码来终止调试拦截。",
        "当前参数设置：rejectDebugEnv:'all',debugMD5:'66a142122bfb65e2544f8231d6258f27'(passw0rd123456)",
        "debugMD5参数是必须由至少12位的调试码通过MD5加密而获得的长度32位的字符串，如果不符合规范，则触发调试恐慌报警后无法正常输入调试码。",
        "在此模式下，可以通过打开调试工具，来触发调试恐慌报警，当前的调试码为： passw0rd123456",
        "如需移除输入的debugCode，可以关闭当前浏览器标签重新打开，或者通过清除sessionStorage（会话缓存）来达成。"
      ],
      config:{
        silenceCondition:{
          rejectDebugEnv:"all",//prod all
          debugMD5:"66a142122bfb65e2544f8231d6258f27",//passw0rd123456
        }
      }
    },
    custom:{
      label:"自定义 恐慌报警", 
      desc:[
        "自定义模式，可以通过设定title、content两个参数后，通过show参数手工开启PanicAlert组件。用于一些自定义信息的展示。",
        "可以通过clearDom参数手动开启清空dom元素的功能，当开启此项后并触发自定义恐慌报警后，关闭报警时会重载当前页面。",
        "清空dom是非常激进的措施，请谨慎使用！",
        "请勿滥用恐慌报警的自定义功能，恐慌报警应该仅仅用于 无法正常服务或 者 拒绝服务 的情况。"
      ],
      config:{
        // showClose:true,
        // clearDom:true,
        icon:"tui-icon ti-alert-triangle",
        title: "Panic Alert !",
        content: "这是一个自定义的PanicAlert内容,通过show参数来触发。默认情况无法关闭此提示且只能通过操作路由返回上层，如需关闭需要开启showClose参数。",
      }
    },
  },

})

const alertChange=(value)=>{
  state.panicAlertCfg=state.group[value].config;
  console.log("triggerPanicAlert",state.panicAlertCfg);
  
}

const openAlert=()=>{
  state.showAlert=true;
}

const panicAlertOpen=(val)=>{
  console.log("panicAlertOpen",val);
}
const panicAlertClose=(val)=>{
  console.log("panicAlertClose",val);
}

const goBack=()=>{
  console.log("goBack");
  state.showAlert=false;
}

onMounted(() => {
})

</script>
<template>
  <div class="panicAlert-demo-wrap">
    <div class="operat-bar">
      <div class="form-group">
        <div class="label">Alert模式</div>
        <TuiRadio @change="alertChange" v-bind="state.radioCfg" v-model="state.alertTypeAct" :options="state.alertTypeOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">提示Type</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.type" :options="state.typeOpt"></TuiRadio>
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
        <div class="label">遮罩</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.modal" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group" v-if="state.alertTypeAct=='custom'">
        <div class="label">自定义Alert</div>
        <TuiButton @click="openAlert">手动开启</TuiButton>
      </div>
    </div>

    <div class="demo-layout" @click="poptipEvent">
      <div class="group-title">Panic Alert</div>
      <div class="group">
        
        <div class="group-title">
          {{ state.group[state.alertTypeAct].label }}
        </div>
        <div class="desc">
          <p v-for="(item,index) in state.group[state.alertTypeAct].desc"> {{ item }} </p>
        </div>
      </div>
      <TuiPanicAlert 
        @open="panicAlertOpen" 
        @close="panicAlertClose" 
        @back="goBack" 
        v-model="state.showAlert" 
        v-bind="{...state.panicAlertCfg,...config}"
      />
      



    </div>
  </div>
</template>
<style lang="less">
.panicAlert-demo-wrap{  min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(30px); padding:0 20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
      .tui-radio{--tui-radio-pd:0 12px!important;}
    }
  }
  .demo-layout{ .flex(20px); padding:20px; flex-wrap: wrap; .por;
    .group-title{width: 100%; font-size: 18px; padding:10px 0; font-weight: bold;}
    .group{ width:100%;  padding:20px; .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); 
      .tab-demo{margin:0 auto;}
    }
    
  }
}
</style>

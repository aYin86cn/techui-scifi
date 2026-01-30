<script setup>
import { $c } from "@techui/colors";
import { onMounted, reactive, toRefs } from 'vue';

const config=reactive({
  draggable:true,
  positionType:"transform",
  destroyOnClose:false,
  modal:true,
  typedConfig:{
    transparent:false,
    tone:'weak',
  }
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
  positionOpt:[
    {label:"Transform",value:'transform'},
    {label:"Absolute",value:'absolute'},
    {label:"Fixed",value:'fixed'},
  ],

  group:[
    {label:"常规",show:false,config:{}},
    {label:"含分割线",show:false,config:{divider:true}},
    {label:"无关闭图标",show:false,config:{showClose:false}},
    {label:"全屏展示",show:false,config:{fullscreen:true}},
    {label:"自定义宽度%",show:false,config:{width:'40%'}},
    {label:"自定义宽度px",show:false,config:{width:300}},
    {label:"自定义top",show:false,config:{top:200}},
    {label:"自定义top%",show:false,config:{top:'30%'}},
    {label:"居中显示",show:false,config:{alignCenter:true}},
    {label:"内容居中",show:false,config:{center:true}},
    {label:"关闭不重置拖拽",show:false,config:{resetDragOnClose:false}},
    {label:"Invert",show:false,config:{type:'invert'}},
    {label:"Info",show:false,config:{type:'info'}},
    {label:"Primary",show:false,config:{type:'primary'}},
    {label:"Success",show:false,config:{type:'success'}},
    {label:"Warning",show:false,config:{type:'warning'}},
    {label:"Danger",show:false,config:{type:'danger'}},
    {label:"Emphasis",show:false,config:{type:'emphasis'}},
    {label:"Custom",show:false,config:{customColor:$c.vil5,}},
    // {label:"无遮罩",show:false,config:{modal:false}},
    // {label:"可拖拽",show:false,config:{draggable:true}},
  ],

  multGroup:{label:"多弹出", children:[
    {show:false, config:{title:"titleA",width:"20%"},},//,modal:false
    {show:false, config:{title:"titleB",width:"20%"},}
  ]},

})

const {multGroup}=toRefs(state);

const openDialog=(item)=>{
  item.show=true;
}

onMounted(() => {

})

const dialogOpen=()=>{console.log("dialogOpen"); }
const dialogOpened=()=>{console.log("dialogOpened"); }
const dialogClose=()=>{console.log("dialogClose"); }
const dialogClosed=()=>{console.log("dialogClosed"); }
const dialogconfirm=()=>{console.log("dialogconfirm"); }


</script>
<template>
  <div class="dialog-demo-wrap">
    
    <div class="operat-bar">
      
      <div class="form-group">
        <div class="label">可拖拽</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.draggable" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">定位类型</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.positionType" :options="state.positionOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">关闭时销毁</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.destroyOnClose" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">Type色调</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.typedConfig.tone" :options="state.toneOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">半透明</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.typedConfig.transparent" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group" v-if="config.transparent">
        <div class="label">背景模糊</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.typedConfig.backgroundBlur" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">遮罩</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.modal" :options="state.boolOpt"></TuiRadio>
      </div>
      
    </div>
    <div class="demo-inner">

      <div class="trigger-item" v-for="(item,index) in state.group">
        <div class="item-title">{{ item.label }}</div>
        <TuiButton @click="openDialog(item)">打开</TuiButton>
        <TuiDialog :title="item.label" v-model="item.show" v-bind="{
            ...config,
            ...item.config, 
            typedConfig:{
              ...config.typedConfig,
              ...item.config.typedConfig,
            }
        }">
          <div class="dialog-content">Content</div>
        </TuiDialog>
      </div>
      <div class="trigger-item">
        <div class="item-title">多弹窗</div>
        <TuiButton @click="openDialog(multGroup.children[0])">打开</TuiButton>
        <TuiDialog v-model="multGroup.children[0].show" v-bind="{
          ...multGroup.children[0].config, 
          ...config
        }"
          @open="dialogOpen"
          @opened="dialogOpened"
          @close="dialogClose"
          @closed="dialogClosed"
          @confirm="dialogconfirm"
        >
          <div class="dialog-content">
            <TuiButton @click="openDialog(multGroup.children[1])">打开DialogB</TuiButton>
          </div>
        </TuiDialog>
        <TuiDialog v-model="multGroup.children[1].show" v-bind="{
          ...multGroup.children[1].config,
          ...config
        }">
          <div class="dialog-content">ContentB</div>
        </TuiDialog>
      </div>
      
    </div>
  </div>
</template>
<style lang="less">
.dialog-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(30px); padding:0 20px;
    .form-group{
      .label{margin:10px 0;}
    }
  }
  .demo-inner{.flex(20px); padding:20px; flex-wrap: wrap;  margin:0 0 50px 0; 
    .trigger-item{.centerFlex; flex-direction: column; width:calc(10% - 18px);
      .item-title{text-align: center; padding:10px 0;}
    }
  }
}
</style>

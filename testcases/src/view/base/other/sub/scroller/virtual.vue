<script setup>
import { onMounted, onUnmounted, reactive } from 'vue';
const config=reactive({
  direction:"h",
  ctrlType:"scrollbar",
  buttonPosition:"both",
  buttonSize:"default",
  scrollbarSize:"small",
  scrollSpeed:1,
})

const state=reactive({
  height:300,
  col:3,
  itemLen:20,
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  apperaOpt:[
    {label:"无边框",value:"borderless"},
    {label:"整体",value:"unity"},
  ],
  directionOpt:[
    {label:"水平",value:"h"},
    {label:"垂直",value:"v"},
  ],
  ctrlTypeOpt:[
    {label:"滚动条",value:"scrollbar"},
    {label:"按钮",value:"button"},
    {label:"无",value:"none"},
  ],
  btnPosOpt:[
    {label:"两侧",value:"both"},
    {label:"开始",value:"start"},
    {label:"结尾",value:"end"},
    {label:"浮动",value:"float"},
  ],
  btnSizeOpt:[
    {label:"大",value:"large"},
    {label:"默认",value:"default"},
    {label:"小",value:"small"},
  ],
  scrollbarSizeOpt:[
    {label:"极小",value:"mini"},
    {label:"小",value:"small"},
    {label:"默认",value:"default"},
    {label:"大",value:"large"},
    {label:"较大",value:"xlarge"},
  ],
  adptByOpt:[
    {label:"外部",value:"outer"},
    {label:"内部",value:"inner"},
  ],
  
  scrollerItems:[
    { 
      title:"常规 {border:none}",
      className:"demo-label label-default",
      config:{border:"none",}
    },
    { 
      title:"紧凑外观 {border:always}",
      className:"demo-label label-small",
      config:{border:"always",}
    },
    // { 
    //   title:"常规",
    //   itemClass:"demo-label label-large",
    //   itemLength:15,
    //   config:{}
    // },
    
  ],
  
  radioCfg:{ active:0,size:"large", className:"def-radio", appearance:"button",defaultIcon:false,itemMaxWidth:200, },
  radioActive:null,
  ckboxCfg:{ active:0,size:"large", className:"def-ckbox", appearance:"button",defaultIcon:false,itemMaxWidth:200, },
  ckboxActive:[],
})


onMounted(()=>{
})
onUnmounted(()=>{
})
</script>
<template>
  <div class="virtual-scroller-demo-wrap">
    <TuiForm class="operat-bar" :model="config" inline labelPosition="top">
      <TuiFormItem label="滚动方向" prop="direction">
        <TuiRadio v-bind="state.radioCfg" v-model="config.direction" :options="state.directionOpt"></TuiRadio>
      </TuiFormItem>
      <TuiFormItem label="控制类型" prop="ctrlType">
        <TuiRadio v-bind="state.radioCfg" v-model="config.ctrlType" :options="state.ctrlTypeOpt"></TuiRadio>
      </TuiFormItem>
      <TuiFormItem label="控制按钮位置" prop="buttonPosition" v-if="config.ctrlType=='button'">
        <TuiRadio v-bind="state.radioCfg" v-model="config.buttonPosition" :options="state.btnPosOpt"></TuiRadio>
      </TuiFormItem>
      <TuiFormItem label="控制按钮尺寸" prop="buttonSize" v-if="config.ctrlType=='button'">
        <TuiRadio v-bind="state.radioCfg" v-model="config.buttonSize" :options="state.btnSizeOpt"></TuiRadio>
      </TuiFormItem>
      <TuiFormItem label="滚动条尺寸" prop="scrollbarSize" v-if="config.ctrlType=='scrollbar'">
        <TuiRadio v-bind="state.radioCfg" v-model="config.scrollbarSize" :options="state.scrollbarSizeOpt"></TuiRadio>
      </TuiFormItem>
      <TuiFormItem label="滚动速度" prop="scrollSpeed" style="width:120px;">
        <TuiInput type="number" :min="1" :max="100" :step="5" v-model="config.scrollSpeed"/>
      </TuiFormItem>

      <TuiFormItem label="高度" prop="height" style="width:120px;">
        <TuiInput type="number" :min="200" :max="500" :step="50" v-model="state.height"/>
      </TuiFormItem>
      <TuiFormItem label="列" prop="col" style="width:120px;">
        <TuiInput type="number" :min="3" :max="6"  v-model="state.col"/>
      </TuiFormItem>
      <TuiFormItem label="元素数量" prop="itemLen" style="width:120px;">
        <TuiInput type="number" :min="2" :max="50" :step="1" v-model="state.itemLen"/>
      </TuiFormItem>

    </TuiForm>
    <div class="demo-inner">
      <div 
        :class="[
          'demo-box',
          `demo-col-${state.col}`,
        ]" 
        :style="`--box-height:${state.height}px`"
        v-for="(item,index) in state.scrollerItems"
      >
        <div class="demo-title">{{ item.title }}</div>
        <div class="demo-item">
          <TuiVirtualScroller v-bind="{...config,...item.config}">
            <div v-for="i in state.itemLen" :key="i" :class="item.className" > {{ i }} </div>
          </TuiVirtualScroller>
        </div>
      </div>

      <div :class="[ 'demo-box', `demo-col-${state.col}`, ]" :style="`--box-height:${state.height}px`" >
        <div class="demo-title">Radio {border:auto}</div>
        <div class="demo-item">
          <TuiVirtualScroller 
            v-bind="{
              ...config,
              border:'auto',
            }"
          >
            <TuiRadio v-model="state.radioActive" v-bind="state.radioCfg" :direction="config.direction" size="large">
              <TuiRadioItem v-for="i in state.itemLen" :key="i" :value="i">Radio{{ i }}</TuiRadioItem>
            </TuiRadio>
          </TuiVirtualScroller>
        </div>
      </div>
      
      <div :class="[ 'demo-box', `demo-col-${state.col}`, ]" :style="`--box-height:${state.height}px`" >
        <div class="demo-title">Radio {border:none}</div>
        <div class="demo-item">
          <TuiVirtualScroller 
            v-bind="{
              ...config,
              border:'none',
            }"
          >
            <TuiRadio v-model="state.radioActive" v-bind="state.radioCfg" :direction="config.direction" size="large">
              <TuiRadioItem v-for="i in state.itemLen" :key="i" :value="i">Radio{{ i }}</TuiRadioItem>
            </TuiRadio>
          </TuiVirtualScroller>
        </div>
      </div>

      <div :class="[ 'demo-box', `demo-col-${state.col}`, ]" :style="`--box-height:${state.height}px`" >
        <div class="demo-title">Checkbox {border:auto}</div>
        <div class="demo-item">
          <TuiVirtualScroller 
            v-bind="{
              ...config,
              border:'auto',
            }"
          >
            <TuiCheckbox v-model="state.ckboxActive" v-bind="state.ckboxCfg" :direction="config.direction" size="large">
              <TuiCheckboxItem v-for="i in state.itemLen" :key="i" :value="i">Checkbox{{ i }}</TuiCheckboxItem>
            </TuiCheckbox>
          </TuiVirtualScroller>
        </div>
      </div>

      <div :class="[ 'demo-box', `demo-col-${state.col}`, ]" :style="`--box-height:${state.height}px`" >
        <div class="demo-title">Checkbox {border:none}</div>
        <div class="demo-item">
          <TuiVirtualScroller 
            v-bind="{
              ...config,
              border:'none',
            }"
          >
            <TuiCheckbox v-model="state.ckboxActive" v-bind="state.ckboxCfg" :direction="config.direction" size="large">
              <TuiCheckboxItem v-for="i in state.itemLen" :key="i" :value="i">Checkbox{{ i }}</TuiCheckboxItem>
            </TuiCheckbox>
          </TuiVirtualScroller>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style lang="less">
.virtual-scroller-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(20px); padding:0 20px; margin-bottom:20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
      &.group-number{width: 120px;}
    }
  }
  .demo-inner{.flex(40px); padding:20px; flex-wrap: wrap; margin:0 0 50px 0; 
    .demo-box{ .centerFlex; .por; 
      .bgc(var(--common-bg));.bd(var(--common-bd)); height:var(--box-height);  .bdra(10px); min-height:100px; padding:70px 20px 40px 20px; 

      .demo-title{.poa; left:10px; top:10px;}
      .demo-item{width: 100%; height: 100%; .centerFlex;}
      &.demo-col-2{width:calc(50% - 20px);}
      &.demo-col-3{width:calc(33.3333% - 27px);}
      &.demo-col-4{width:calc(25% - 30px);}
      &.demo-col-5{width:calc(20% - 32px);}
      &.demo-col-6{width:calc(15% - 32px);}

      .tui-border-none{
        .tui-scroller-inner{gap:10px;
          .demo-label{.bdra(5px); }
        }
        &.is-horizontal {
          .demo-label{ }
        }
        &.is-vertical {
          .demo-label{ width: 100%; text-align: center;}
        }
      }
      .tui-border-always,
      .tui-border-auto{
        &.is-horizontal {
          .demo-label{border:none; .bdr(var(--common-bd));}
        }
        &.is-vertical {
          .demo-label{border:none; .bdb(var(--common-bd)); width: 100%; text-align: center;}
        }
      }
      .demo-label{ .bd(var(--common-bd)); padding:10px 20px; .centerFlex;
        &.label-large{}
        &.label-small{}
        &.label-default{}
      }
      .def-ckbox{ --tui-ckbox-fw:auto; --tui-ckbox-justCont:center;}
      .def-radio{ --tui-radio-fw:auto; --tui-radio-justCont:center;}
    }
  }
}
</style>

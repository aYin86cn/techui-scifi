<script setup>
import { onMounted, reactive } from 'vue';

const config=reactive({
  appearance:"poptip",
  type:"invert",
  backgroundBlur:true,
  transparent:true,
  placement:"bottom",
  tone:'base'
})
const state=reactive({
  cnText:"这是一个用于测试的中文文本。我们希望这段文本能够包含各种常见的汉字、标点符号以及数字，以确保在不同的显示环境下都能正确显示。同时，我们也希望这段文本能够有一定的长度，以便测试文本的自动换行和滚动效果。请注意，这段文本仅用于测试目的，不代表任何实际意义。 ",
  enText:"This is an English text for testing purposes. We aim to include various common English words, punctuation marks, and numbers to ensure proper display across different environments. Additionally, we want this text to be of sufficient length to test text wrapping and scrolling functionalities. Please note that this text is solely for testing and does not represent any real content.",
  
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
  appearanceOpt:[
    {label:"Poptip",value:"poptip"},
    {label:"Curtip",value:"curtip"},
  ],
  curPlacOpt:[
    {label:"top-start",value:"top-start"},
    {label:"top-end",value:'top-end'},
    {label:"bottom-start",value:'bottom-start'},
    {label:"bottom-end",value:'bottom-end'},
  ],
  popPlacOpt:[
    {label:"top",value:"top"},
    {label:"top-start",value:'top-start'},
    {label:"top-end",value:'top-end'},
    {label:"right",value:'right'},
    {label:"right-start",value:'right-start'},
    {label:"right-end",value:'right-end'},
    {label:"bottom",value:'bottom'},
    {label:"bottom-start",value:'bottom-start'},
    {label:"bottom-end",value:'bottom-end'},
    {label:"left",value:'left'},
    {label:"left-start",value:'left-start'},
    {label:"left-end",value:'left-end'},
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


})

const appeaChange=(val)=>{
  if(val=='poptip'){
    config.placement="bottom"
  }else if(val=='curtip'){
    config.placement="bottom-start"

  }
}


onMounted(() => {
})


</script>
<template>
  <div class="textTip-demo-wrap">
    <div class="operat-bar">
      <div class="form-group">
        <div class="label">Tip外观</div>
        <TuiRadio v-bind="state.radioCfg" @change="appeaChange" v-model="config.appearance" :options="state.appearanceOpt"></TuiRadio>
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
        <div class="label">提示Type</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.type" :options="state.typeOpt"></TuiRadio>
      </div>
      <div class="form-group" v-if="config.type!='default'">
        <div class="label">Type色调</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.tone" :options="state.toneOpt"></TuiRadio>
      </div>
      <div class="form-group" v-if="config.appearance=='curtip'">
        <div class="label">Curtip位置</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.placement" :options="state.curPlacOpt"></TuiRadio>
      </div>
      <div class="form-group" v-if="config.appearance=='poptip'">
        <div class="label">Poptip位置</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.placement" :options="state.popPlacOpt"></TuiRadio>
      </div>

    </div>
    <div class="demo-layout" @click="poptipEvent">
      
      <div class="group-wrap">
        <div class="group-title">单行文字提示</div>
        <div class="group-content">
          <div class="fixed-cont" v-for="(item,index) in 2">
            <TuiTextTip v-bind="config">{{ index % 2 === 0?state.cnText:state.enText }}</TuiTextTip>
          </div>
        </div>
      </div>
      
      <div class="group-wrap">
        <div class="group-title">多行文本</div>
        <div class="group-content">
          <div class="fixed-cont" v-for="(item,index) in 5">
            <TuiTextTip v-bind="config" :lines="index+2">{{ index % 2 === 0?state.cnText:state.enText }}</TuiTextTip>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="less">
.textTip-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 200px 20px; .por;
  .operat-bar{.flex(30px); padding:0 20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
      .tui-radio{--tui-radio-pd:0 12px!important;}
    }
  }
  .demo-layout{ .flex(20px); padding:20px; .por; flex-direction: column; 
    .group-wrap{.flex(30px); align-items: start; flex-direction: column; flex:1; 
      .group-title{width: 100%; .bdb(var(--common-bd)); font-size: 18px; padding:10px 0; font-weight: bold;}
      .group-content{ width: 100%; .flex(40px); padding:20px; .bdra(10px); .bgc(var(--common-bg)); .bd(var(--common-bd));
        .fixed-cont{flex:1; overflow: hidden; margin:10px 0; 
          .tui-text-single{width: 100%;
          }
        }
      }
      
    }
  }
}
</style>

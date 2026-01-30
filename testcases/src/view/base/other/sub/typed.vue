<script setup>
import { $c } from "@techui/colors";
import { tStr } from "@techui/utils";
import { onMounted, reactive } from 'vue';

const config=reactive({
  appearance:"background",
  tone:"base",
  lineThickness:5,
  linePosition:"top",
  backgroundBlur:true,
  transparent:true,
  hasShadow:false,
  shadowColor:"weak",
})

const state=reactive({
  
  cnText:"这是一个用于测试的中文文本。我们希望这段文本能够包含各种常见的汉字、标点符号以及数字，以确保在不同的显示环境下都能正确显示。同时，我们也希望这段文本能够有一定的长度，以便测试文本的自动换行和滚动效果。请注意，这段文本仅用于测试目的，不代表任何实际意义。",
  enText:"This is an English text for testing purposes. We aim to include various common English words, punctuation marks, and numbers to ensure proper display across different environments. Additionally, we want this text to be of sufficient length to test text wrapping and scrolling functionalities. Please note that this text is solely for testing and does not represent any real content.",
  showBG:false,

  radioCfg:{ appearance:"button",  defaultIcon:false, },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  shadowOpt:[
    {label:"最淡",value:"weakest"},
    {label:"较淡",value:"weaker"},
    {label:"淡",value:"weak"},
    {label:"基础",value:"base"},
    {label:"强",value:"strong"},
    {label:"较强",value:"stronger"},
    {label:"最强",value:"strongest"},
    {label:"匹配类型",value:"match"},
  ],

  toneOpt:[
    {label:"淡",value:"weak"},
    {label:"基",value:"base"},
    {label:"强",value:"strong"},
    {label:"强反",value:"strongInvert"},
    {label:"极反",value:"extremeInvert"},
  ],

  appearOpt:[
    {label:"背景",value:"background"},
    {label:"线条",value:"line"},
    {label:"文字",value:"text"},
  ],
  lineDirOpt:[
    {label:"上",value:"top"},
    {label:"右",value:"right"},
    {label:"下",value:"bottom"},
    {label:"左",value:"left"},
  ],
  typed:[
    {type:"invert"},
    {type:"default"},
    {type:'primary'},
    {type:'success'},
    {type:'warning'},
    {type:'danger'},
    {type:'info'},
    {type:'emphasis'},
    {customColor:$c.vil4},
    {customColor:$c.orl4},
    {customColor:$c.aql4},
    {customColor:$c.pul4},
  ],
})

const apperChange=(val)=>{
  if(val!="background"){
    state.toneOpt[3].disabled=true;
    state.toneOpt[4].disabled=true;
  }else{
    state.toneOpt[3].disabled=false;
    state.toneOpt[4].disabled=false;
  }
}

onMounted(() => {
})


</script>
<template>
  <div class="typed-demo-wrap">
    <div class="operat-bar">
      <div class="form-group">
        <div class="label">测试背景</div>
        <TuiRadio v-bind="state.radioCfg" v-model="state.showBG" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">外观</div>
        <TuiRadio @change="apperChange" v-bind="state.radioCfg" v-model="config.appearance" :options="state.appearOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">Type色调</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.tone" :options="state.toneOpt"></TuiRadio>
      </div>
      <!-- background -->
      <template v-if="config.appearance=='background'">
        
        <div class="form-group" >
          <div class="label">半透明</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.transparent" :options="state.boolOpt"></TuiRadio>
        </div>
        <div class="form-group" v-if="config.transparent">
          <div class="label">背景模糊</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.backgroundBlur" :options="state.boolOpt"></TuiRadio>
        </div>
        <div class="form-group">
          <div class="label">有阴影</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.hasShadow" :options="state.boolOpt"></TuiRadio>
        </div>
        <div class="form-group" v-if="config.hasShadow">
          <div class="label">阴影颜色</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.shadowColor" :options="state.shadowOpt"></TuiRadio>
        </div>
      </template>

      <!-- line -->
      <template v-if="config.appearance=='line'">
        <div class="form-group">
          <div class="label">线条方向</div>
          <TuiRadio v-bind="state.radioCfg" v-model="config.linePosition" :options="state.lineDirOpt"></TuiRadio>
        </div>
        <div class="form-group">
          <div class="label">线条粗细</div>
          <TuiInput type="number" :min="1" :max="10" :step="1" v-model="config.lineThickness"/>
        </div>
      </template>
      
    </div>
    <div class="demo-layout" @click="poptipEvent">
      
      <div class="group-wrap">
        <div class="group-title">多行文本</div>
        <div :class="`group-content ${state.showBG?'show-bg':''}`">
          <div class="fixed-cont" v-for="(item,index) in state.typed">
            <TuiTyped v-bind="{
              ...config,
              ...item
            }" >
              <h3>{{ tStr.upper1st(item.type||'custom') }}</h3>
              <p>{{ state.cnText }}</p>
            </TuiTyped>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="less">
.typed-demo-wrap{  min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  
  .operat-bar{.flex(30px); padding:0 20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
      .tui-radio{--tui-radio-pd:0 12px!important;}
    }
  }
  .demo-layout{ .flex(20px); padding:20px; .por; flex-direction: column; 
    .group-wrap{.flex(10px); align-items: start; flex-direction: column; flex:1; 
      
      .group-title{width: 100%; .bdb(var(--common-bd)); font-size: 18px; padding:10px 0; font-weight: bold;}
      .group-content{ width: 100%; .flex(20px); flex-wrap: wrap; 
        &.show-bg{ .bgi("../_common/tempBG/pattern.png"); background-size: 100px 60px; padding:40px; .bd(@bk,3px); .bdra(10px);}
        .fixed-cont{ margin:10px 0; width:calc(25% - 15px);
          .tui-typed{--tui-type-bdw:2px; }
        }
      }
      
    }
  }
  .tui-typed-text{ padding:10px;
    &.tui-type-invert{.bgc(var(--tone-strongest_op8));}
  }
  .tui-typed-line{ padding:10px; 
    h3{margin:5px;}
    &.tui-type-invert{.bgc(var(--tone-strongest_op8)); .fc(var(--font-weakest));}
  }
}
</style>

<script setup>
import { inject, onMounted, reactive } from 'vue';
const {$themePalette}= inject('$global');
const {primary,success,warning,danger,emphasis}=$themePalette.value
const config=reactive({
  gradientType:"linear",
  colors:[primary.base,emphasis.base],
  angle:90,
  fontSize:24,
  fontWeight:"bold"
})
const state=reactive({
  cnText:"这是一个用于测试的中文文本。 ",
  enText:"English text for testing purposes.",
  
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  gradTypeOpt:[
    {label:"线性",value:"linear"},
    {label:"径向",value:"radial"},
    {label:"锥形",value:"conic"},
  ],
  gradArrAct:0,
  gradArrOpt:[
    {label:"蓝青",colors:[primary.base,emphasis.base,]},
    {label:"绿黄",colors:[success.base,warning.base,]},
    {label:"橙红",colors:[danger.base,warning.base,]},
    {label:"蓝绿橙红",colors:[primary.base,emphasis.base,danger.base,warning.base,]},
  ],
})


const gradArrChange=(val)=>{
  config.colors=state.gradArrOpt[val].colors
}


onMounted(() => {
  
})


</script>
<template>
  <div class="textGrad-demo-wrap">
    <div class="operat-bar">

      <div class="form-group">
        <div class="label">渐变类型</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.gradientType" :options="state.gradTypeOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">测试渐变</div>
        <TuiRadio @change="gradArrChange" v-bind="state.radioCfg" v-model="state.gradArrAct" :options="state.gradArrOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">角度</div>
        <TuiInput type="number" :min="0" :max="360" :step="60" v-model="config.angle"/>
      </div>
      <div class="form-group">
        <div class="label">字体大小</div>
        <TuiInput type="number" :min="14" :max="64" :step="10" v-model="config.fontSize"/>
      </div>

    </div>
    <div class="demo-layout" @click="poptipEvent">
      
      <div class="group-wrap">
        <div class="group-title">
          <span class="text">传参改变属性</span>
        </div>
        <div class="group-content">
          <TuiTextGradient v-bind="config">{{ state.cnText }}</TuiTextGradient>
        </div>
      </div>
      
      <div class="group-wrap">
        <div class="group-title">
          <span class="text">CSS改变属性 完整渐变</span>
          <span class="desc">CSS参数: --tui-txtg-bg:radial-gradient(circle, var(--danger-base),var(--emphasis-base))</span>
        </div>
        <div class="group-content">
          <TuiTextGradient class="change-by-css-base linear-grad" :fontSize="config.fontSize">{{ state.cnText }}</TuiTextGradient>
        </div>
      </div>
      <div class="group-wrap">
        <div class="group-title">
          <span class="text">CSS改变属性 仅颜色</span>
          <span class="desc">CSS参数:--tui-txtg-c1:var(--danger-base); --tui-txtg-c2:var(--warning-base); --tui-txtg-deg:180deg;</span>
        </div>
        <div class="group-content">
          <TuiTextGradient class="change-by-css-base only-color" :fontSize="config.fontSize">{{ state.cnText }}</TuiTextGradient>
        </div>
      </div>
      

    </div>
  </div>
</template>
<style lang="less">
.textGrad-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(30px); padding:0 20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
      .tui-radio{--tui-radio-pd:0 12px!important;}
    }
  }
  .demo-layout{ .flex(40px); padding:20px; .por; flex-direction: column; 
    .group-wrap{.flex(30px); align-items: start; flex-direction: column; flex:1; 
      .group-title{width: 100%; .bdb(var(--common-bd)); padding:10px 0; 
        .text{font-size: 18px; padding:10px 0; font-weight: bold;}
        .desc{font-size: 12px; .fc(var(--font-weak)); margin:0 0 0 10px;}
      }
      .group-content{ width: 100%; .flex(20px);  .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); padding:20px;
        .fixed-cont{flex:1; overflow: hidden; margin:10px 0; 
        }
        .change-by-css-base{
          --tui-txtg-ff:'cn0';
          --tui-txtg-fz:28px;
          --tui-txtg-fw:normal;
        }
        .linear-grad{
          --tui-txtg-bg:radial-gradient(circle, var(--danger-base),var(--emphasis-base))
        }
        .only-color{
          --tui-txtg-c1:var(--danger-base);
          --tui-txtg-c2:var(--warning-base);
          --tui-txtg-deg:180deg;
        }
      }
      
    }
  }
}
</style>

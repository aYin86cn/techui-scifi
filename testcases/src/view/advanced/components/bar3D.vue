<script setup>
import { tInterval } from "@techui/utils";

import { $c } from "@techui/colors";
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
const config=reactive({
  shape:'cylinder',
  baseSpacing:20,
  viewDeep:15,//15
  gap:30,
  showBase:false,
  showTrack:true,
  baseColorRatio:1,
  baseColorWeakened:false,
  barColorRatio:15,
  resizeObserver:'global',
  barBlur:3,
  baseBlur:1,
  trackBlur:0
})

const thresholdsPct={
  critical:0,
  danger:20,
  warning:39,
  normal:49,
  success:79
}
const thresholdsVal={
  critical:0,
  danger:59,
  warning:120,
  normal:180,
  success:260
}

const state=reactive({
  height:300,
  col:5,
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  directionOpt:[
    {label:"横向",value:"h"},
    {label:"纵向",value:'v'},
  ],
  
  shapeOpt:[
    {label:"圆柱",value:"cylinder"},
    {label:"方柱",value:"cube"},
  ],
  resizeObsOpt:[
    {label:"自身",value:"self"},
    {label:"全局",value:"global",},//disabled:true
    {label:"无",value:"none"},
  ],

  instArry:[
    {title:"阈值 百分比",
      config:{
        label:"实例标题A",
        value:0,
        thresholds:thresholdsPct,
      }
    },
    {title:"阈值 非百分比",
      config:{
        label:"实例标题B",
        value:1,
        maxValue:280,
        thresholds:thresholdsVal,
        unit:"万吨",
        displayValue:"all",
        precision:2,
      }
    },
    
    {title:"含最大值无单位",colMark:"varColor",
      config:{
        label:"自定义颜色I",
        value:199,
        maxValue:300,
        displayValue:"all",
        barColor:$c.vil5,
        baseColor:$c.vil4
      }
    },
    {title:"含最大值和单位 显示所有值",colMark:"varColor",
      config:{
        label:"自定义颜色J",
        value:199,
        maxValue:300,
        unit:"万吨",
        displayValue:"all",
        barColor:$c.pul5,
      }
    },
    {title:"含最大值和单位 反转主次值 精度2",colMark:"varColor",
      config:{
        label:"自定义颜色K含最大值和单位 反转主次值 精度2",
        value:199.21,
        maxValue:300.54,
        precision:2,
        unit:"万吨",
        displayValue:"allReverse",
        barColor:$c.cbl5,
        baseColor:$c.cyl5
      }
    },
    {title:"基础 32% 状态Danger",colMark:"varColor",
      config:{label:"实例标题E",value:32,status:'danger'}
    },
    {title:"基础 99% 状态Warning",colMark:"varColor",
      config:{label:"实例标题G",value:99,status:'warning',}
    },
    {title:"基础 100% 状态emphasis",colMark:"varColor",
      config:{label:"实例标题H",value:100,status:'success',}
    },
    {title:"基础 1% 主值置顶 显示图标",
      config:{label:"实例标题D",value:10,mainValuePosition:'top',iconsSymbol:"ed2b"}
    },
    {title:"基础 0%",
      config:{label:"实例标题C",value:0}
    },
    
  ],

  groupDataPct:[
    {label:"元素B",value:15},
    {label:"元素C",value:33},
    {label:"元素D",value:47},
    {label:"元素E",value:69},
    {label:"元素G较长的标题测试",value:96},
  ],
  groupDataVal:[
    {label:"元素B",value:55},
    {label:"元素C",value:83},
    {label:"元素D",value:167},
    {label:"元素E",value:229},
    {label:"元素G较长的标题测试",value:266},
  ],
  
})

const ppgAConfig=computed(()=>{
  return {
    progress3DBarConfig:{
      thresholds:thresholdsPct,
      viewDeep:10,
      gap:15,
      aniDelay:5000,
      showBase:true,
      baseSpacing:10,
      resizeObserver:computed(()=>config.resizeObserver).value
    }
  }
})

const ppgBConfig=computed(()=>{
  return {
    queueInit:false,
    progress3DBarConfig:{
      thresholds:thresholdsVal,
      viewDeep:10,
      maxValue:229,
      unit:"万吨",
      displayValue:"all",
      shape:"cube",
      gap:15,
      aniDelay:5000,
      showBase:true,
      baseSpacing:10,
      resizeObserver:computed(()=>config.resizeObserver).value
    }
  }
})


const pctVal=ref(0)
const nomVal=ref(0)

watch(()=>nomVal.value,(val)=>{
  state.instArry[1].config.value=val
})
watch(()=>pctVal.value,(val)=>{
  state.instArry[0].config.value=val
})

onMounted(() => {
  tInterval.s('progress3dT32',() => {
    pctVal.value = (pctVal.value % 100) + 10
    nomVal.value = (nomVal.value % 300) + 31.32
  }, 3000)
  
})

onUnmounted(()=>{
  tInterval.c('progress3dT32')
})

</script>
<template>
  <div class="progress-3d-demo-wrap">
    <div class="operat-bar">
      <div class="form-group">
        <div class="label">监测自适应</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.resizeObserver" :options="state.resizeObsOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">柱体形状</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.shape" :options="state.shapeOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">显示底座</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.showBase" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">显示轨道</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.showTrack" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group group-number">
        <div class="label">高度</div>
        <TuiInput type="number" :min="150" :max="500" :step="50" v-model="state.height"/>
      </div>
      <div class="form-group group-number">
        <div class="label">列</div>
        <TuiInput type="number" :min="3" :max="6" v-model="state.col"/>
      </div>
      <div class="form-group group-number">
        <div class="label">视图深度</div>
        <TuiInput type="number" :min="0" :max="50" :step="5" v-model="config.viewDeep"/>
      </div>
      <div class="form-group group-number" v-if="config.showBase">
        <div class="label">基座边距</div>
        <TuiInput type="number" :min="10" :max="50" :step="5" v-model="config.baseSpacing"/>
      </div>
      <div class="form-group group-number" v-if="config.showBase">
        <div class="label">底座颜色系数</div>
        <TuiInput type="number" :min="-5" :max="5" :step="0.5" :precision="2" v-model="config.baseColorRatio"/>
      </div>
      <div class="form-group" v-if="config.showBase">
        <div class="label">底座弱化</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.baseColorWeakened" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group group-number" v-if="config.showTrack">
        <div class="label">柱体间隙</div>
        <TuiInput type="number" :min="0" :max="50" :step="5" v-model="config.gap"/>
      </div>
      <div class="form-group group-number">
        <div class="label">渐变差值系数</div>
        <TuiInput type="number" :min="0" :max="100" :step="10" v-model="config.barColorRatio"/>
      </div>
      
      <div class="form-group group-number">
        <div class="label">柱体模糊</div>
        <TuiInput type="number" :min="0" :max="6" v-model="config.barBlur"/>
      </div>
      <div class="form-group group-number" v-if="config.showBase">
        <div class="label">基座模糊</div>
        <TuiInput type="number" :min="0" :max="6" v-model="config.baseBlur"/>
      </div>
      <div class="form-group group-number" v-if="config.showTrack">
        <div class="label">轨道模糊</div>
        <TuiInput type="number" :min="0" :max="6" v-model="config.trackBlur"/>
      </div>
      

    </div>
    <div class="demo-inner">
      
      <div :class="[
          'demo-box',
          `demo-box-col${state.col}`,
          item.colMark&&`demo-box-mark-${item.colMark}`,
          
        ]" v-for="(item,index) in state.instArry">
        <div class="demo-title">{{ item.title }}</div>
        <div class="demo-item" :style="`height:${state.height}px`" >
          
          <TuiBar3D v-bind="{
            ...config,
            ...item.config
          }"/>
        </div>
      </div>

    </div>

    <div class="demo-inner">
      <div class="demo-box demo-box-col2 demo-box-group">
        <div class="demo-title">圆柱体 队列初始化 (延时5秒播放)</div>
        <div class="demo-item" >
          <TuiBar3DGroup :items="state.groupDataPct" v-bind="ppgAConfig"/>
        </div>
      </div>

      <div class="demo-box demo-box-col2 demo-box-group">
        <div class="demo-title">方柱体 非队列初始化 (延时5秒播放)</div>
        <div class="demo-item" >
          <TuiBar3DGroup :items="state.groupDataVal" v-bind="ppgBConfig"/>
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="less">
.progress-3d-demo-wrap{  min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(20px); padding:0 20px; margin-bottom:20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
      &.group-number{width: 120px;}
    }
  }
  .demo-inner{ .flex(40px); padding:20px; flex-wrap: wrap; margin:0 0 50px 0; 
    .demo-box{ .centerFlex; .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); min-height:100px; padding:70px 20px 40px 20px;
      .demo-title{.poa; left:10px; top:10px;}
      .demo-item{width: 100%;  .centerFlex;}
      &.demo-box-mark-varColor{
        --tui-pgspol-gad_A:@pul5;
        --tui-pgspol-gad_B:@vil3;
      }
      &.demo-box-col2{width:calc(50% - 27px); }
      &.demo-box-col3{width:calc(33.3333% - 27px); }
      &.demo-box-col4{width:calc(25% - 30px); }
      &.demo-box-col5{width:calc(20% - 32px); }
      &.demo-box-col6{width:calc(16.666% - 34px); }
      &.demo-box-group{ height:350px;
        .demo-item{height: 100%;}
      }

      
    }
  }
}
</style>

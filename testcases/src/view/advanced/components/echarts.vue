<script setup>
import { inject, reactive, ref } from 'vue';
import chartBar from "./charts/bar.vue";
import chartLine from "./charts/line.vue";
import chartPie from "./charts/pie.vue";
import chartRadar from "./charts/radar.vue";

const active=ref(false);

const {$data}= inject('$global');

const config=reactive({
  initT3DShadow:true,
  dataOpacity:1,
  dataBlur:0,
  resizeObserver:'global',
})

const state=reactive({
  height:300,
  col:3,
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  resizeObsOpt:[
    {label:"自身",value:"self"},
    {label:"全局",value:"global",},//disabled:true
    {label:"无",value:"none"},
  ],
})

const t3dCfg=reactive({
  // mode:"matrix",
  // mode:"static",
  view3d:false,
  mode:"matrix",
  showShadow:false,
  shadowCoeff:.2,
  thicknessCoeff:.3,
  shadowBlur:1,
  coeff:1,
  thicknessFixGap:true,
  thicknessBlur:.8,
  initialRotate:{ x:-10,y:10, }
  // initialRotate:{x:40,y:0,z:0},
  // showThickness:false,
  // rotateMax:70,
  // rotateMin:-70,
})

const t3dStaCfg=reactive({
  view3d:true,
  mode:"static",
  showShadow:true,
  shadowCoeff:.2,
  thicknessCoeff:.3,
  shadowBlur:1,
  coeff:1,
  thicknessFixGap:true,
  thicknessBlur:.8,
  initialRotate:{ x:30,y:0, },
  // transformOrigin:"top"
})
const t3dHovCfg=reactive({

  view3d:true,
  mode:"hover",
  showShadow:true,
  shadowCoeff:.2,
  thicknessCoeff:.3,
  shadowBlur:1,
  coeff:1,
  thicknessFixGap:true,
  thicknessBlur:.8,
  hoverMask:true,
  initialRotate:{ x:30,y:0, },
  hoverDelay:300,
  // transformOrigin:"top"
})

const shadowChange=(val)=>{
  if(!val){
    config.dataOpacity=1
    config.dataBlur=0
  }
}

</script>
<template>
  <div class="echartsInit-demo-wrap">
    <div class="tip"><i class="tui-icon tis-alert-hexagon"></i>3D化图表 使用SVG渲染</div>
    <div class="operat-bar">
      
      <div class="form-group">
        <div class="label">显示3D阴影</div>
        <TuiRadio @change="shadowChange" v-bind="state.radioCfg" v-model="config.initT3DShadow" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">监测自适应</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.resizeObserver" :options="state.resizeObsOpt"></TuiRadio>
      </div>
      <div class="form-group group-number">
        <div class="label">高度</div>
        <TuiInput type="number" :min="200" :max="500" :step="50" v-model="state.height"/>
      </div>
      
      <div class="form-group group-number">
        <div class="label">列</div>
        <TuiInput type="number" :min="2" :max="3"  v-model="state.col"/>
      </div>

      <div class="form-group group-number" v-if="config.initT3DShadow">
        <div class="label">数据透明度</div>
        <TuiInput type="number" :min="0" :max="1" :step=".2" :precision="2" v-model="config.dataOpacity"/>
      </div>
      <div class="form-group group-number" v-if="config.initT3DShadow">
        <div class="label">数据模糊</div>
        <TuiInput type="number" :min="0" :max="10" :step="1" v-model="config.dataBlur"/>
      </div>

      <div class="form-group">
        <div class="label">3D面板</div>
        <TuiRadio v-bind="state.radioCfg" v-model="t3dCfg.view3d" :options="state.boolOpt"></TuiRadio>
      </div>

    </div>
    
    <!-- <div class="demo-layout  t3d-parent-inner">
      <div class="group-title">Bar</div>
      <div class="group">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartPie/>
        </Tui3DPanel>
      </div>
      <div class="group">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartLine/>
        </Tui3DPanel>
      </div>
      <div class="group">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartBar/>
        </Tui3DPanel>
      </div>
      <div class="group">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartRadar/>
        </Tui3DPanel>
      </div>
    </div> -->


    <div :class="`demo-layout  t3d-parent-idpt demo-col-${state.col}`" :style="`--box-height:${state.height}px`">

      <div class="group ">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartPie v-bind="config"/>
        </Tui3DPanel>
      </div>
      <div class="group ">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartLine v-bind="config"/>
        </Tui3DPanel>
      </div>
      <div class="group ">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartBar v-bind="config"/>
        </Tui3DPanel>
      </div>
      <div class="group ">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartRadar v-bind="config"/>
        </Tui3DPanel>
      </div>
      <div class="group ">
        <Tui3DPanel v-bind="t3dStaCfg" class="t3d-panel">
          <chartPie v-bind="config"/>
        </Tui3DPanel>
      </div>
      <div class="group ">
        <Tui3DPanel v-bind="t3dHovCfg" class="t3d-panel">
          <chartPie v-bind="config"/>
        </Tui3DPanel>
      </div>
      <!-- <div class="group ">
        <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
          <chartRadar v-bind="config"/>
        </Tui3DPanel>
      </div> -->

    </div>


    <!-- <div class="demo-layout  t3d-parent-inner">
      <Tui3DPanel v-bind="t3dCfg" class="t3d-panel">
        <div class="group">
          <chartPie/>
        </div>
        <div class="group">
          <chartLine/>
        </div>
        <div class="group">
          <chartBar/>
        </div>
        <div class="group">
          <chartRadar/>
        </div>
      </Tui3DPanel>
    </div> -->
    
  </div>
</template>
<style lang="less">
.echartsInit-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px; .por;
  .tip{.poa; right:20px; top:20px; .centerFlex; line-height: 20px; .fc(@rel5);
    .tui-icon{font-size: 18px; margin:0 5px 0 0; }
  }
  .operat-bar{.flex(20px); padding:0 20px; margin-bottom:20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
      &.group-number{width: 120px;}
    }
  }
  .color-grid{.flex(10px); flex-wrap: wrap;
    .item-color{flex:1; min-width:30px; height:30px; opacity: .3; cursor: pointer; .bdra(5px); 
      &.is-active{opacity: 1;}
    }
  }
  .demo-layout{ .flex(30px); padding:20px; flex-wrap: wrap;
    .group-title{width: 100%; .bdb(var(--common-bd)); font-size: 18px; padding:10px 0; font-weight: bold;}
    .group{ padding:10px; .por;  .bdra(10px); min-height:200px; .flex(10px); .bd(var(--common-bd)); .bgc(var(--common-bg));
      .echart-wrap{flex:1;}
    }
    
    &.t3d-parent-unity{
      
      .t3d-panel{width:100%; height: 100%;
        .tui-3d-panel-inner{.flex(40px); flex-wrap: wrap; }
      }
      .group{width:calc(33.3333% - 27px); }
    }
    &.t3d-parent-idpt{
      &.demo-col-2{.group{width:calc(50% - 20px);}}
      &.demo-col-3{.group{width:calc(33.3333% - 27px);}}
      &.demo-col-4{.group{width:calc(25% - 30px);}}
      &.demo-col-5{.group{width:calc(20% - 32px);}}
      .t3d-panel{height:100%; width: 100%;
        .tui-3d-panel-inner{ }
      }
      .group{ height:var(--box-height); .flex(40px); flex-wrap: wrap; }
    }
    &.t3d-parent-inner{
      .t3d-panel{width:100%; height:350px;
        .tui-3d-panel-inner{.flex(40px); flex-wrap: wrap; }
      }
      .group{width:calc(50% - 20px); height:350px; }
    }
  }
}
</style>

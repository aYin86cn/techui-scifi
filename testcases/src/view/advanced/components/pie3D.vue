<script setup>
import { tInterval, tNum } from "@techui/utils";
import { onMounted, onUnmounted, reactive, ref } from 'vue';

const config=reactive({
  innerRadiusPercent:55,
  cornerRadius: 10,
  gapSize: 7, // Controls expansion and translation
  useGradient: true,
  showCenterText: true,
  // chartTitle: '总量',
  unit: '个',
  centerTextOffset:10,
  transform3D:{x:50,y:0,z:0},
  legendPosition:"bottom",
  // pieOffset:-70,
  t3DConfig:{
    shadowCoeff:.1,
    // thicknessCoeff:.15,
    // coeff:2
  },
  resizeObserver:'global',
})

const pieData = ref([
  { label: '类别A', value: 10 },
  { label: '类别B', value: 20 },
  { label: '类别C', value: 30},
  { label: '类别D', value: 45},
  { label: '类别E', value: 90},
  { label: '类别F', value: 90},
  { label: '类别G', value: 90},
  { label: '类别H', value: 90},
]);

const state=reactive({
  height:350,
  col:3,
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  legendPosOpt:[
    {label:"上",value:'top'},
    {label:"右",value:'right'},
    {label:"下",value:'bottom'},
    {label:"左",value:'left'},
  ],
  resizeObsOpt:[
    {label:"自身",value:"self"},
    {label:"全局",value:"global",},//disabled:true
    {label:"无",value:"none"},
  ],
})


onMounted(() => {
  tInterval.s('tuiPieX321',() => {
    
    // if(pieData.value.length==5){
    //   pieData.value=[
    //     { label: '类别A', value: 10, color: '#ff6384' },
    //     { label: '类别B', value: 20, color: '#36a2eb' },
    //     { label: '类别C', value: 30, color: '#ffce56' },
    //     { label: '类别D', value: 45, color: '#4bc0c0' },
    //   ]
    // }else{
    //   pieData.value=[
    //     { label: '类别A', value: 10, color: '#ff6384' },
    //     { label: '类别B', value: 20, color: '#36a2eb' },
    //     { label: '类别C', value: 30, color: '#ffce56' },
    //     { label: '类别D', value: 45, color: '#4bc0c0' },
    //     { label: '类别E', value: 55, color: $c.rel4 },
    //   ]
    // }

    const data=tNum.rdma({ 
      min:30, 
      max:300, 
      length:8, 
      group:1
    })[0]
    pieData.value.forEach((item,index)=>item.value=data[index])

  }, 8000);
});

onUnmounted(()=>{
  tInterval.c('tuiPieX321')
})


</script>
<template>
  <div class="pie-demo-wrap">
    <div class="operat-bar">
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
      
      <div class="form-group group-number">
        <div class="label">俯视角度</div>
        <TuiInput type="number" :min="0" :max="60" :step="5" v-model="config.transform3D.x"/>
      </div>

      <div class="form-group">
        <div class="label">图例位置</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.legendPosition" :options="state.legendPosOpt"></TuiRadio>
      </div>

    </div>
    
    

    <div :class="`demo-layout demo-col-${state.col}`" :style="`--box-height:${state.height}px`">

      <div class="group ">
        <TuiPie3D 
          v-bind="config"
          :data="pieData"
        />
      </div>
      <div class="group ">
        <TuiPie3D 
          v-bind="config"
          :data="pieData"
        />
      </div>

    </div>


    
  </div>
</template>
<style lang="less">
.pie-demo-wrap{  min-height:100%; width:1400px; margin:0 auto; padding:20px;
  .operat-bar{.por; z-index: 10; .flex(20px); padding:0 20px; margin-bottom:20px; flex-wrap: wrap;
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
  .demo-layout{ .flex(40px); padding:20px; flex-wrap: wrap;
    .group-title{width: 100%; .bdb(var(--common-bd)); font-size: 18px; padding:10px 0; font-weight: bold;}
    .group{ padding:10px; .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); min-height:200px; .flex(10px);
      .echart-wrap{flex:1;}
    }
    
    &.demo-col-2{.group{width:calc(50% - 20px);}}
    &.demo-col-3{.group{width:calc(33.3333% - 27px);}}
    &.demo-col-4{.group{width:calc(25% - 30px);}}
    &.demo-col-5{.group{width:calc(20% - 32px);}}
    .t3d-panel{height:100%; width: 100%;
      .tui-3d-panel-inner{ }
    }
    .group{ height:var(--box-height); }

  }
}
</style>

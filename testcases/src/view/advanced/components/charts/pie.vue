<script setup>
import { $c } from "@techui/colors";
import { tInterval, tNum, tTimer } from "@techui/utils";
import { onMounted, onUnmounted, reactive } from "vue";
const props = defineProps({
  dataOpacity:Number,
  dataBlur:Number,
  initT3DShadow: { type: Boolean, default: false },
});

const state=reactive({
  chartData:{
    legend:['数据A','数据B','数据C','数据D','数据E','数据F'],
    // colors:[$c.bll5,$c.inl3,$c.aql3,$c.yel3,$c.orl3,$c.rel3],
    data:[325,252,323,183,120,43]
  },
  counter:{title:"费用总量",num:1723},
  chartOption:{}
})


const processData=async ()=>{
  let {legend,data}=state.chartData,
      processedData=[]
  legend.forEach((item,i)=>{
    processedData.push({
      value:data[i],
      name:legend[i],
      itemStyle:{
        // color:colors[i],
        borderWidth:0.0358,  //358，三才（天地人）、五行、八卦
        opacity:.7,

        // shadowColor:"cyan",
        // shadowOffsetX:1,
        // shadowOffsetY:0,
      },
    })
  })
  state.chartOption.series[0].data=processedData;
  state.chartOption.legend.data=legend;
  await tTimer.w(1000);
  state.ready=true;
}

const processOption=()=>{
  state.chartOption={
    update:false,
    title:{
      show:false,
      text:"",
      x:'center',
      top:'32%',
      textStyle:{
        color:$c.bll5,
        fontSize:24,
        fontWeight:"bold",
        lineHeight:30
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      // orient: 'vertical',//horizontal
      // show:false,
      bottom:0,
      padding:0,
      itemGap: 15,
      data:[],
      formatter:(name)=>{
        let target;
        for(let i=0;i<state.chartData.data.length;i++){
          if(state.chartData.legend[i]==name){
            target=state.chartData.data[i]
          }
        }
        
        return "{a|"+name+"}"+" "+"{b|"+target+"}"
      },
      textStyle:{
        rich:{
          a:{
              fontSize:14,
              // color:$c.bll5,
              padding:0
          },
          b:{
              fontSize:16,
              color:$c.bll5
          }
        }
      }
    },
    series: [
      {
        name:'数据类别',
        type:'pie',
        radius: ['50%', '75%'],
        center: ['50%', '40%'],
        //roseType: 'radius',
        padAngle: 5,
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'outside',
        },
        itemStyle: {
          borderRadius: 8,
          // borderColor: $c.wh,
          // borderWidth: 5,
            
        },
        emphasis: {
          label:{
            show: false,
            fontSize: '20',
            color:$c.gyd5,
          }
        },
        labelLine: {
          show: false
        },
        data:[]
      }
    ]
  }
  processData()
}

const onChartReady = (chart) => {
  chart.resize()
}

onMounted(() => {
  tInterval.s('echartPieX343',() => {
    state.chartData.data=tNum.rdma({ 
      min:0, 
      max:999, 
      length:6, 
      group:1
    })[0]
    processData()
    
  }, 5000);
  processOption()
})
onUnmounted(()=>{
  tInterval.c('echartPieX343')
})
</script>
<template>
  <div class="echart-wrap">
    <TuiEcharts 
      t3DShadowUpdate="rendered"
      :ready="state.ready"
      :chartOption="state.chartOption" 
      @chartReady="onChartReady" 
      v-bind="props"
    > 
      <div class="total-digital" >
        <span class="desc">{{state.counter.title}}</span>
        <span class="counter">{{ state.counter.num }}</span>
      </div>
    </TuiEcharts>
  </div>
</template>
<style lang="less">
.echart-wrap{height: 100%;
  .total-digital{.fc(@bll5); text-align: center; width: 100px;  .poa; z-index: 10; top:42%; left:50%; .fixc("xy");
    .desc{display:block; font-size: 22px; margin:0 0 10px 0;}
    .counter{display:block; .ff("en0"); font-size: 24px; font-weight: bold;}
  }
}
</style>

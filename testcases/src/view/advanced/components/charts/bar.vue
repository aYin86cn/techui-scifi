<script setup>
import { $c } from "@techui/colors";
import { tInterval, tNum, tTimer } from "@techui/utils";
import { onMounted, onUnmounted, reactive } from 'vue';
const props = defineProps({
  dataOpacity:Number,
  dataBlur:Number,
  initT3DShadow: { type: Boolean, default: false },
});

const state = reactive({
  total: 0,
  chartData: {
    legend: ['实力排名', '库存排名'],
    xAxis: ['辽宁', '河北', '北京', '湖北'],
    // colors: [$c.aql4, $c.bll5],
    data: [
      [100, 200, 420, 500],
      [1200, 2200, 3300, 4100]
    ]
  },
  chartOption: {},
  ready:false,
  loading:true,
});

const processData =async () => {
  const { legend, xAxis, data } = state.chartData;
  const processedData = [];

  legend.forEach((item, i) => {
    processedData.push({
      name: legend[i],
      type: 'bar',
      barWidth: '30',
      label: {
        show: false,
        position: 'insideRight'
      },
      itemStyle: {
        // color: colors[i],
        borderRadius: 3,
        borderWidth: 0.0000358,
        opacity: 1,
        borderColor: "white",
      },
      data: data[i] || [],
      // yAxisIndex: i,
    });
  });

  if (state.chartOption.legend) state.chartOption.legend.data = legend;
  if (state.chartOption.xAxis) state.chartOption.xAxis.data = xAxis;
  state.chartOption.series = processedData;
  await tTimer.w(1000);
  state.ready=true;
};

const processOption = () => {
  const baseOptions = {
    update: false,
    title: {
      show: false,
      text: "",
      fontSize: 16,
      fontWeight: "normal",
      textStyle: {
        color: $c.cbl5,
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: [],
    },
    toolbox: {
      show: false,
      feature: {
        magicType: { type: ['line', 'bar'] }
      }
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '15%',
      top: "5%",
      containLabel: true
    },
    yAxis: [
      {
        type: 'value',
        name: '吨',
        position: 'left',
      },
      {
        type: 'value',
        name: '个',
        position: 'right',
        offset: 0,
      },
    ],
    xAxis: {
      type: 'category',
      data: [],
      splitLine: { show: false },
    },
    series: []
  };

  Object.assign(state.chartOption, baseOptions);
  processData();
};

const sortArry = (arrA, arrB, arrC, indexToSortBy) => {
  let combined = [];
  (arrA || []).forEach((item, i) => {
    combined.push({ valA: item, valB: arrB[i], labelC: arrC[i] });
  });

  combined.sort((a, b) => {
      const valA = indexToSortBy === 0 ? a.valA : a.valB;
      const valB = indexToSortBy === 0 ? b.valA : b.valB;
      return (valB || 0) - (valA || 0);
  });

  let arrNewA = [], arrNewB = [], arrNewC = [];
  combined.forEach(item => {
    arrNewA.push(item.valA);
    arrNewB.push(item.valB);
    arrNewC.push(item.labelC);
  });
  return [arrNewA, arrNewB, arrNewC];
};
onMounted(() => {
  processOption();
  tInterval.s('echartBarX321',async () => {
    state.loading=true;
    state.chartData.data=tNum.rdma({ 
      min:0, 
      max:3000, 
      length:6, 
      group:2
    })
    await tTimer.w(1000)
    processData()
  }, 5000);
});
onUnmounted(()=>{
  tInterval.c('echartBarX321')
})
</script>
<template>
  <TuiEcharts 
    v-model:loading="state.loading"
    :ready="state.ready"
    :chartOption="state.chartOption" 
    v-bind="props"
    t3DShadowUpdate="rendered"
  ></TuiEcharts>
</template>
<style lang="less">
</style>
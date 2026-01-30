<script setup>
import { tTimer } from "@techui/utils";
import { onMounted, reactive } from 'vue';
const props = defineProps({
  dataOpacity:Number,
  dataBlur:Number,
  initT3DShadow: { type: Boolean, default: false },
});

const state = reactive({
  total: 0,
  chartData: {
    legend: ['数据1', '数据2', '数据3'],
    xAxis: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    // colors: [$c.cyl4, $c.rel4, $c.aql3],
    data: [
      [100, 200, 400, 500, 400, 200, 100, 100, 200, 400, 200, 100],
      [100, 200, 300, 400, 300, 200, 50, 50, 100, 200, 100, 50],
      [200, 300, 400, 300, 200, 50, 50, 100, 100, 100, 50, 50]
    ]
  },
  chartOption: {},
  ready:false,
});

const processData =async () => {
  const { legend, xAxis, data } = state.chartData;
  const processedData = [];

  legend.forEach((item, i) => {
    processedData.push({
      name: legend[i],
      type: 'line',
      stack: '01',
      label: {
        show: false,
        position: 'insideRight'
      },
      itemStyle: {
        borderRadius: 5,
        // color: colors[i],
        borderType: "solid",
        opacity: .9
      },
      smooth: true,
      // areaStyle: { // Original commented code kept for reference if needed
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //     offset: 0,
      //     color: $c.fade(colors[i],1)
      //   }, {
      //     offset: 0.8,
      //     color: $c.fade(colors[i],.3)
      //   }], false),
      //   shadowcolor: $c.fade(colors[i],.3),
      //   shadowBlur: 10,
      //   opacity:.9
      // },
      lineStyle: {
        width: 5.358,
        opacity: 1
      },
      data: data[i]
    });
  });

  state.chartOption.legend.data = legend;
  state.chartOption.series = processedData;
  state.chartOption.xAxis.data = xAxis;
  await tTimer.w(1000);
  state.ready=true;
};

const processOption = () => {
  const baseOptions = {
    update: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: [],
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '15%',
      top: "5%",
      containLabel: true
    },
    yAxis: {
      type: 'value',
      splitNumber: 6,
      axisLine: {
        //show:true,
      },
      splitLine: {
        show: true,
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
    },
    series: []
  };

  Object.assign(state.chartOption, baseOptions);
  processData();
};

onMounted(() => {
  processOption();
});

</script>
<template>
  <TuiEcharts 
    :ready="state.ready" 
    :chartOption="state.chartOption" 
    v-bind="props"
  ></TuiEcharts>
</template>
<style lang="less">
</style>
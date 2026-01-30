<script setup>
import { $c } from "@techui/colors";
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
    legend: ['数据A', '数据B'],
    colors: [$c.bll5, $c.cyl5],
    data:[
      [80, 94, 98, 81, 72, 71],
      [73, 60, 77, 95, 80, 99],
    ],
    indicator: [
      { name: '销售', max: 100,},
      { name: '管理', max: 100, },
      { name: '技术', max: 100, },
      { name: '客服', max: 100, },
      { name: '研发', max: 100, },
      { name: '市场', max: 100, }
    ],
  },
  chartOption: {},
  ready:false,
});

const processData =async () => {
  const { legend, colors, indicator, data } = state.chartData;
  const processedData = [];

  legend.forEach((item, i) => {
    processedData.push({
      name: legend[i],
      type: "radar",
      // symbol: "circle",
      symbolSize: 10,
      areaStyle: {
        color: $c.fade(colors[i], .4)
      },
      itemStyle: {
        color: $c.fade(colors[i],.9),
      },
      lineStyle: {
        color: $c.fade(colors[i], .9),
        width: 5.358,
      },
      data: [data[i]]
    });
  });

  state.chartOption.legend.data = legend;
  state.chartOption.series = processedData;
  state.chartOption.radar.indicator = indicator;
  await tTimer.w(1000);
  state.ready=true;
};

const processOption = () => {
  const baseOptions = {
    update: false,
    title: {
      text: "异常特征分布1",
      show: false,
      left: 0,
      top: 0,
      textStyle: {
        color: $c.cbl5,
        fontSize: 16,
        fontWeight: "normal"
      },
    },
    tooltip: {
      show: true,
      trigger: "item"
    },
    legend: {
      show: true,
      data: []
    },
    radar: {
      center: ["50%", "46%"],
      radius: "75%",
      startAngle: 90,
      splitNumber: 5,
      shape: "circle",
      splitArea: {
        areaStyle: {
          color: ["transparent"]
        }
      },
      axisLabel: {
        show: false,
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal",
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: "dashed",
        }
      },
      
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
        }
      },
      axisName: {
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 0,
        padding:-10,
        show: true,
        // formatter: '{value}',
        // rich: { value: { padding: [0, 0, 0, 0] } }
      },
      indicator: [] 
    },
    series: [] 
  };
  Object.assign(state.chartOption, baseOptions);
  processData();
};

// Lifecycle hook
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
// Styles remain the same
</style>
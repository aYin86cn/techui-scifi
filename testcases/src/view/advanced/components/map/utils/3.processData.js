export default (config) => {
  const { viewConfig, mapState, chartOption, ready,themeExtra } = config;
  
  try {
    const seriesData = [];
    const curView = viewConfig.current;
    const currentData = viewConfig.data.find(item => item.value === curView);
    
    if (!currentData) {
      throw new Error(`View config not found for: ${curView}`);
    }
    
    const pinColor = themeExtra[curView].pin||null;
    const pinDotColor = themeExtra[curView].pinDot||null;
    console.log("themeExtra",themeExtra[curView],pinColor,pinDotColor);
    if (curView === 'dataD') {
      seriesData.push({
        data: mapState.pointData,
        geoIndex: 0,
        type: 'map',
      });
    } else {
      seriesData.push(
        {
          symbolSize: 10,
          emphasis: { label: { show: false } },
          label: {
            position: 'center',
            align: 'center',
            show: false,
            fontSize: 12,
          },
          symbolOffset: [0, -10],
          itemStyle: { color: pinDotColor },
          name: 'light',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          data: mapState.pointData,
        },
        {
          type: 'scatter',
          symbol: 'pin',
          coordinateSystem: 'geo',
          symbolOffset: [0, -10],
          large: true,
          label: {
            show: true,
            position: 'inside',
            align: 'center',
            fontSize: 10,
            ...(pinColor&&{color: pinColor.fc}),//选择性设定pin字体颜色
            formatter: (p) => p.data.value[2],
          },
          emphasis: {
            label: {
              fontSize: 14,
              fontWeight: 'bold',
              formatter: (para) => para.data.value[2],
            },
          },
          itemStyle: {
            ...(pinColor&&{//选择性设定pin外观
              color: {
                type: 'radial',
                x: 0.3,
                y: 0.3,
                r: 0.5,
                colorStops: [
                  { offset: 0, color: pinColor.hlite, },
                  { offset: 1, color: pinColor.bg, },
                ],
                global: false,
              },
            })
            
          },
          symbolSize: (val) => {
            const a = (mapState.maxPin - mapState.minPin) / (mapState.maxData - mapState.minData);
            const b = mapState.maxPin - a * mapState.minData;
            return a * val[2] + b * 1.3;
          },
          data: mapState.pointData,
          zlevel: 2,
        }
      );
    }

    chartOption.series = seriesData;
    ready.value = true;

    return { success: true };
  } catch (error) {
    console.error('processData error:', error);
    return { success: false, error: error.message };
  }
};

export default (config) => {
  const { 
    curMap, 
    curView, 
    mapState, 
    layoutInfo, 
    chartOption 
  } = config;
  
  try {
    const layout=layoutInfo()
    const tempOption = {
      title: {
        show: false,
        text: curMap.name,
        left: 'center',
      },
      geo: {
        type: 'map',
        map: curMap.name,
        roam: true,
        zoom: 1,
        layoutCenter: layout.center,
        layoutSize: layout.size,
        center: null,
        zlevel: 1,
        label: {
          show: true,
          fontSize: 12,
          formatter: p => {
            return p.name?.replace(/省|壮族自治区|回族自治区|维吾尔自治区|自治区|市|县|自治县|特别行政区|区/, '');
          },
        },
        itemStyle: {},
        emphasis: {
          label: {
            fontSize: 14,
            show: true,
          },
          itemStyle: {},
        },
      },
      series: [],
    };

    // 仅在 dataD 模式下显示 visualMap
    if (curView === 'dataD') {
      tempOption.visualMap = {
        right: mapState.visualMapPosition.right,
        bottom: mapState.visualMapPosition.bottom,
        min: 0,
        max: 500,
        textStyle: {
          color: '#a6b1b7',
        },
        calculable: true,
      };
    } else {
      tempOption.visualMap = null;
    }
    
    Object.assign(chartOption, tempOption);
    
    return { success: true };
  } catch (error) {
    console.error('processOption error:', error);
    return { success: false, error: error.message };
  }
};
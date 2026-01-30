import { getData, getMap } from "./1.getMapData";
import processOption from "./2.processOption";
import processData from "./3.processData";
export { default as themeExtra } from "./0.themeExtra";

export const init = async (config) => {
  const { curMap, viewConfig, mapLoading } = config;
  
  try {
    //!步骤 1: 获取地图数据
    const mapResult = await getMap(config);
    if (!mapResult.success) {
      return { 
        success: false, 
        error: `获取地图数据失败: ${mapResult.error}`,
        step: 'getMap'
      };
    }
    
    //!步骤 2: 处理数据
    const dataResult = getData(config);
    if (!dataResult.success) {
      return { 
        success: false, 
        error: `处理数据失败: ${dataResult.error}`,
        step: 'getData'
      };
    }

    //!步骤 3: 处理图表配置
    const optionResult = processOption(config);
    if (!optionResult.success) {
      return { 
        success: false, 
        error: `处理图表配置失败: ${optionResult.error}`,
        step: 'processOption'
      };
    }

    //!步骤 4: 处理系列数据
    const seriesResult = processData(config);
    if (!seriesResult.success) {
      return { 
        success: false, 
        error: `处理系列数据失败: ${seriesResult.error}`,
        step: 'processData'
      };
    }

    return { 
      success: true, 
      message: `${curMap.name} 地图初始化成功` 
    };

  } catch (error) {
    console.error('init error:', error);
    return { 
      success: false, 
      error: `初始化失败: ${error.message}`,
      step: 'init'
    };
  }
};

export { getData, getMap, processData, processOption };


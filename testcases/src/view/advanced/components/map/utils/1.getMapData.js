import { httpGetMap } from '@/api/api';
import { tTimer } from "@techui/utils";
export const getMap = async (config) => {
  const { curMap, mapState, mapLoading, publicUrl } = config;
  
  try {
    mapLoading.value = true;
    await tTimer.w(1000)
    // 获取所有地区代码
    if (mapState.allAreaCodes.length === 0) {
      const allCodes = await httpGetMap(publicUrl, 'all.json');
      
      if (!allCodes) {
        throw new Error('Failed to load area codes');
      }
      mapState.allAreaCodes = allCodes;
    }

    // 获取 geojson 数据
    const geoData = await httpGetMap(
      publicUrl,
      `${curMap.code}_geojson_full.json`
    );
    
    if (!geoData) {
      throw new Error(`Failed to load map data for ${curMap.name}`);
    }
    
    // 合并地图信息
    mapState.geoJson = { ...geoData, ...curMap };

    return { success: true };
  } catch (error) {
    console.error('getMap error:', error);
    return { success: false, error: error.message };
  }
};


export const getData = (config) => {
  const { curMap, mapState } = config;
  
  try {
    if (!mapState.geoJson.features) {
      throw new Error('No GeoJSON features found');
    }

    const areaData = [];
    const pointData = [];
    let totalSum = 0;

    mapState.geoJson.features.forEach((feature) => {
      if (feature.properties?.name) {
        const value = Math.floor(Math.random() * 500);
        
        areaData.push({
          name: feature.properties.name,
          value,
          cityCode: parseInt(feature.properties.adcode),
        });

        if (feature.properties.center) {
          pointData.push({
            name: feature.properties.name,
            value: [
              feature.properties.center[0],
              feature.properties.center[1],
              value,
            ],
            cityCode: parseInt(feature.properties.adcode),
          });
        }
        totalSum += value;
      }
    });

    mapState.areaData = areaData;
    mapState.pointData = pointData;
    mapState.totalSum = totalSum;

    return { success: true };
  } catch (error) {
    console.error('getData error:', error);
    return { success: false, error: error.message };
  }
};

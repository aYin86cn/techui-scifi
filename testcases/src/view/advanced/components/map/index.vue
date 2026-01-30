<script setup>
import { tArr } from "@techui/utils";
import { computed, inject, onMounted, reactive, ref, watch } from "vue";
import mapViewToggle from "./common/map-viewToggle.vue";
import createPopover from "./common/mapPopover";
import { init, processData, processOption, themeExtra } from "./utils/init";

//!!!把挂载到proxy上的这些方法,都放到global中.
const { $themePalette ,$gTheme,$tPopover,$tPopoverCloaseAll} = inject('$global');

const mapWrapRef = ref(null);
const mapRef = ref(null);
const ready = ref(false);
const updateReplace = ref(false);
const mapLoading = ref(true);
const chartInstance = ref(null);

const viewConfig = reactive({
  data: [
    { label: 'Data A', value: 'dataA'},//第一组建议走主题设定,其余组走自定义pin颜色, pinColor: [$c.cbl3, $c.bll5, $c.wh]
    { label: 'Data B', value: 'dataB'},
    { label: 'Data C', value: 'dataC'},
    { label: 'Data D', value: 'dataD'},
  ],
  current: 'dataA',
});

// 地图数据
const mapState = reactive({
  allAreaCodes: [],
  geoJson: {},
  areaData: [],
  pointData: [],
  totalSum: 0,
  maxData: 500,
  minData: 9,
  maxPin: 35,
  minPin: 10,
  visualMapPosition: {
    right: '110',
    bottom: '70',
  },
});

// 导航面包屑
const navBcrumb = reactive({
  data: [
    { code: 100000, name: '全国' },
  ],
  position: {
    top: 20,
    left: 30,
  },
});

const curBcrumbCPT = computed(() => {
  let nav = navBcrumb.data;
  return nav[nav.length - 1];
});

const chartOption = reactive({
  title: {},
  geo: {},
  series: [],
  visualMap: null,
});

const layoutInfo=()=>(curBcrumbCPT.value.name == '全国' ?{
  center:['50%', '68%'],
  size:"120%"
}:{
  center:['50%', '50%'],
  size:"90%"
})

const publicUrl = process.env.NODE_ENV === 'development' ? '/maps/' : '/maps/';

const currentMapName = computed(() => {
  return curBcrumbCPT.value.name || '全国';
});


//!核心配置对象
const getMapConfig = (curMap) => ({
  curMap,
  curView: viewConfig.current,
  mapState,
  mapLoading,
  publicUrl,
  viewConfig,
  chartOption,
  ready,
  layoutInfo,
  themeExtra:themeExtra($gTheme.value,$themePalette.value)
});

//!初始化方法
const handleInit = async (curMap) => {
  const config = getMapConfig(curMap);
  const result = await init(config);
  
  if (!result.success) {
    console.error(`初始化失败 [${result.step}]:`, result.error);
    // 可以在这里添加用户提示，例如显示错误消息
    return false;
  }
  
  return true;
};

//!视图切换
const handleChangeView = async (item) => {
  viewConfig.current = item.value;
  
  const config = getMapConfig(curBcrumbCPT.value);
  
  // 步骤 1: 处理配置项
  const optionResult = processOption(config);
  
  if (!optionResult.success) {
    console.error('处理图表配置失败:', optionResult.error);
    return;
  }
  
  // 步骤 2: 处理系列数据
  if(item.value=="dataD"){//伪造新区域数据
    const areaData=mapState.areaData;
    areaData.forEach(item=>{
      const value = Math.floor(Math.random() * 500);
      item.value=value
    })
  }else{//伪造点位数据
    const pointData=mapState.pointData;
    pointData.forEach(item=>{
      const value = Math.floor(Math.random() * 500);
      item.value[2]=value
    })
  }

  const dataResult = processData(config);
  if (!dataResult.success) {
    console.error('处理系列数据失败:', dataResult.error);
    return;
  }
  
  updateReplace.value = true;
};


//!面包屑点击
const handleBreadcrumbClick = async (event) => {
  const { item, breadcrumb } = event;
  navBcrumb.data = breadcrumb;
  await handleInit(item);
};

//!地图点击
const handleMapClick = async (params) => {
  if (!params.name) return;

  // 处理地区点击
  if (params.componentType === 'geo' || params.componentSubType === 'map') {
    if (curBcrumbCPT.value.name !== params.name) {
      const areaInfo = mapState.allAreaCodes.find(
        (area) => area.name === params.name
      );
      
      if (areaInfo && navBcrumb.data.length < 1) {
        const newItem = {
          code: areaInfo.adcode,
          name: params.name,
        };
        navBcrumb.data.push(newItem);
        await handleInit(newItem);
      }
    }
  }
  
  if (params.componentSubType === 'scatter' && params.data?.value?.[2]) {
    //!弹出层逻辑,构建弹出层所需数据
    const event={
      target:mapWrapRef.value,
      currentTarget:mapWrapRef.value,
      offsetX:params.domPosition?.[0],
      offsetY:params.domPosition?.[1]
    }
    
    const popData = { 
      code: params.data.cityCode, 
      data: params.data.value[2] 
    };
    //建立弹出层内部嵌套组件
    const popCompt = createPopover(popData); // 数据在这里传入

    const options={//弹出层配置项
      event,
      type:tArr.rdmpk1(['default','invert','info','primary','success','warning','danger']),
      title:params.name,
      showTrigger:false,
      appearance:"popinfo",
      autoClose:false,
      component:popCompt
    }
    $tPopover(options)
    //!弹出层结束
  }
};

//!地图的交互,缩放拖拽等事件
const hidePopInfos=(event)=>{
  $tPopoverCloaseAll();
}

const handleMapMouseOver = (params) => {
  // console.log('Map hover:', params.name);
};

const handleChartInit = (chart) => {
  chartInstance.value = chart;
};

const handleChartReady = (chart) => {
  // console.log('Chart ready');
};
const handleChartUpdate = (chart) => {
  $tPopoverCloaseAll();
};

const handleChartFinished = () => {
  updateReplace.value = false;
};

watch(()=>$gTheme.value,()=>{
  handleInit(curBcrumbCPT.value);
})

onMounted(async () => {
  const initialDept = navBcrumb.data[0];
  await handleInit(initialDept);
});
</script>

<template>
  <div class="tui-map-data-loop-demo" ref="mapWrapRef">
    <div class="tip"><i class="tui-icon tis-alert-hexagon"></i>SVG渲染</div>
    <div class="mapFunTip">
      <span class="long-text"><i class="tui-icon tis-info-circle"></i>提示：本Echarts地图能实现丰富的GIS功能，因Geojson地图包体积庞大，随测试用例仅包含中国地图，所以屏蔽了下钻以及面包屑功能</span>
      <span class="link">更丰富的测试用例，请到此处体验
        <a href="https://techui.cn" target="_blank" >TechUI中国</a>
        <a href="https://techui.net" target="_blank">TechUI全球</a>
      </span>
    </div>
    <mapViewToggle 
      :view="viewConfig" 
      @changeView="handleChangeView"
    ></mapViewToggle>
    <TuiEchartsMap
      ref="mapRef"
      class="echarts-map-wrapper"
      v-model:loading="mapLoading"
      :chartOption="chartOption"
      :geoJsonData="mapState.geoJson"
      :mapName="currentMapName"
      :updateReplace="updateReplace"
      :enableBreadcrumb="false"
      :breadcrumbConfig="navBcrumb"
      renderer="svg"
      :ready="ready"
      @chartUpdate="handleChartUpdate"
      @chartInit="handleChartInit"
      @chartReady="handleChartReady"
      @chartFinished="handleChartFinished"
      @chartClick="handleMapClick"
      @chartGeoRoam="hidePopInfos"
      @chartMouseOver="handleMapMouseOver"
      @breadcrumbClick="handleBreadcrumbClick"
    ></TuiEchartsMap>
  </div>
</template>

<style lang="less">
.map-popover-content{.flex; flex-direction: column; gap:5px;
  .item{.flex; align-items: center; line-height: 20px; gap:5px;
    .label{}
    .value{}
  }
}
.tui-map-data-loop-demo {overflow: hidden; .poa; inset:0;
  .tip{.poa; right:20px; top:20px; .centerFlex; line-height: 20px; .fc(@rel5);
    .tui-icon{font-size: 18px; margin:0 5px 0 0; }
  }
  .echarts-map-wrapper { .poa; inset:0; z-index: 1; }
  .change-view { bottom: 80px; right: 20px; }
  .mapFunTip{.poa; left:20px; bottom:20px; z-index: 10;
    .long-text{.flex(10px); align-items: center;
      .tui-icon{}
      
    }
    .link{
      a{margin:0 10px 0 0;}
    }
  }
}
</style>
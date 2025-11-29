<script setup>
import { tStr } from "@techui/utils";
import { computed, nextTick, onMounted, reactive, toRefs } from "vue";
import data from "./scifiPanelData.js";
const state=reactive({
  show:false,
  aYinBorders:[],
  pageConfig:{
    // maskShape:{label:"遮罩测试图形",current:"shapeOff",children:[
    //   {label: "开", value: "shapeOn"},
    //   {label: "关", value: "shapeOff"},
    // ]},
    col:{label:"列",current:4,children:[
      {label: "三", value: 3},
      {label: "四", value: 4},
    ]},
    height: {label:"高度",current: "short", children: [
      {label: "高", value: "high"},
      {label: "矮", value: "short"},
    ]},
    config:{label:"配置",current:"cfgOn",children:[
      {label: "显示", value: "cfgOn"},
      {label: "隐藏", value: "cfgOff"},
    ]}
  }
})

const col=computed(()=>{
  return state.pageConfig.col.current
});

const {aYinBorders,pageConfig,show}=toRefs(state)
const initBorderConfig=()=>{
  let borders=[...data]

  borders.forEach((itemG,i)=>{
    itemG.children.forEach((item,j)=>{
      if(!item.config.backgroundOpacity){
        item.config.backgroundOpacity=.9
      }
    })
  })

  state.aYinBorders=borders
}


onMounted(()=>{
  initBorderConfig()
  nextTick(() => {
    state.show=true;
  })
})
</script>
<template>
  <div class="scifi-panel-demo deco-demo">  
    <div class="form-group">
      <div class="form-item" v-for="(radioG,index) in pageConfig" :key="index" >
        <span class="label">{{ radioG.label }}:</span>
        <TTuiRadio v-model="radioG.current" :data="radioG.children"/>
      </div>
    </div>
    <div class="deco-wrap" v-if="show">
      <div class="deco-group" v-for="(item,index) in aYinBorders">
        <div class="group-name">
          <span class="title">{{tStr.upper1st(item.name)}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
          <span class="desc">{{item.desc}}</span> 
        </div>
        <div class="group-content" :style="`grid-template-columns: repeat(${col}, 1fr);`">
          <div :class="`panel-item panel-${pageConfig.height.current}`" v-for="(itemB,index) in item.children" :key="index">
            <component :is='itemB.component' v-bind="itemB.config">
              <div class="panel-name" v-if="pageConfig.config.current=='cfgOn'">{{itemB.config}}</div>
            </component>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style  lang="less">
.scifi-panel-demo{
  .deco-wrap{
    .deco-group{
      .group-content{
        .panel-item{.por;
          &.panel-short{height:300px;}
          &.panel-high{height:400px;}
          .panel-name{ .fc(var(--font-weak)); padding:20px; .centerAbsolute; white-space: pre;}
          
        }
      }
    }
  }
  
  
}
.theme-scheme-light{
  .scifi-panel-demo{
    .sfp-custom{
      --sf-panel-fc:@bk;
      --sf-panel-bg:@wh;
      --sf-panel-bd:@pul3;
      --sf-panel-hlite:@pul5;
      --sf-panel-focus:@rel4;
      --sf-panel-glow:@pul1;
    }
  }
}
.theme-scheme-dark{
  .scifi-panel-demo{
    .sfp-custom{
      --sf-panel-fc:@pul5;
      --sf-panel-bg:@pul9;
      --sf-panel-bd:@pul8;
      --sf-panel-hlite:@pul1;
      --sf-panel-focus:@aql5;
      --sf-panel-glow:@pul3;
    }
  }

}
</style>
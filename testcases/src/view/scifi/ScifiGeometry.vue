<script setup>
import { nextTick, onMounted, reactive, toRefs } from "vue";
import data from "./scifiGeometryData.js";
const state=reactive({
  show:true,
  update:0,
  pageConfig:{
    maskShape:{label:"遮罩测试图形",current:"shapeOff",children:[
      {label: "开", value: "shapeOn"},
      {label: "关", value: "shapeOff"},
    ]},
    config:{label:"配置",current:"cfgOff",children:[
      {label: "开", value: "cfgOn"},
      {label: "关", value: "cfgOff"},
    ]}
  },
  techComps:[...data]
})
const {techComps,pageConfig,show}=toRefs(state)

onMounted(()=>{
  nextTick(() => {
    state.show=true;
  })
})
</script>
<template>
  <div class="scifi-geom-demo deco-demo">  
    <div class="form-group">
      <div class="form-item" v-for="(radioG,index) in pageConfig" :key="index" >
        <span class="label">{{ radioG.label }}:</span>
        <TTuiRadio v-model="radioG.current" :data="radioG.children"/>
      </div>
    </div>
    
    <div class="deco-wrap" v-if="show">
      
      <div class="deco-group" v-for="(item,index) in techComps">
        <div class="group-name">
          <span class="title">{{item.name}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
          <span class="desc">{{item.desc}}</span> 
        </div>
        <div class="group-content">
          <div :class="`content-item `" v-for="itemB in item.children">
            <div class="scifi-deco-wrap">
              <component :is='itemB.geomComp' v-bind="itemB.config">
                <template v-if="pageConfig.maskShape.current=='shapeOn'">
                  <div class="circle-shape"></div>
                  <div class="circle-shape"></div>
                </template>
              </component>
            </div>
            <div class="config-detail" v-if="pageConfig.config.current=='cfgOn'">
              <span class="cfg">{{itemB.config}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style  lang="less">
.scifi-geom-demo{ 
  
  .deco-wrap{
    .deco-group{
      .group-content{ .grid(4,auto,0);
        .content-item{ padding:0; .por; display:flex; flex-direction: column;
          .scifi-deco-wrap{ padding:10px 0; text-align: center; .centerFlex;
            .decoFrame{margin:0 auto;}
            .numbers{.ff(impact);}
            .circle-shape{.poa;  width: 100px; height: 100px; .bgc(@bll5); opacity: .1; 
              &:nth-child(1){left:40px; top:-10px; .bdra(50%);}
              &:nth-child(2){right:40px; bottom:-10px; .bdra(20px);}
            }
          }
          .config-detail{display:inline-flex;  align-items: center; justify-content: center; margin:20px 0 0 0; overflow: auto; .bd(var(--tech-bd)); .bgc(var(--tech-bg)); .bdra(10px); .fc(var(--font-strong)); padding:5px;opacity: .5; white-space: pre; 
            &::-webkit-scrollbar{ width:4px; height:4px;}
          }
        }
      }
    }
  }
}

.theme-scheme-light{
  .scifi-geom-demo{
    .sfg-custom{
      --sf-geom-fc:@orl5;
      --sf-geom-bg:@wh;
      --sf-geom-bg_alt:@puA01;
      --sf-geom-bd:@pul2;
      --sf-geom-hlite:@pul4;
      --sf-geom-focus:@rel4;
      --sf-geom-glow:@pul1;
    }
  }
}
.theme-scheme-dark{
  .scifi-geom-demo{
    .sfg-custom{
      --sf-geom-fc:@pul2;
      --sf-geom-bg:@pul9;
      --sf-geom-bg_alt:@pul7;
      --sf-geom-bd:@pul7;
      --sf-geom-hlite:@pul6;
      --sf-geom-focus:@aql5;
      --sf-geom-glow:@pul3;
    }
  }

}
</style>
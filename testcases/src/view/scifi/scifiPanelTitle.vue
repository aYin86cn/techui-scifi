<script setup>
import { nextTick, onMounted, reactive, toRefs } from "vue";
import data from "./scifiPanelTitleData.js";
const state=reactive({
  show:true,
  update:0,
  pageConfig:{
    config:{current:"cfgOff",children:[
      {label: "显示配置", value: "cfgOn"},
      {label: "隐藏配置", value: "cfgOff"},
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
  <div class="scifi-panel-title-demo deco-demo">  
    <div class="form-group">
      <TTuiRadio v-for="(radioG,index) in pageConfig" :key="index" v-model="radioG.current" :data="radioG.children"/>
    </div>
    
    <div class="deco-wrap" v-if="show">
      
      <div class="deco-group" v-for="(item,index) in techComps">
        <div class="group-name">
          <span class="title">{{item.name}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
          <span class="desc">{{item.desc}}</span> 
        </div>
        <div class="group-content">
          <div :class="`techComps-item `" v-for="itemB in item.children">
            <component :is='itemB.panel' :class="itemB.panelClassName">
              <component :is='itemB.panelTitle' v-bind="itemB.config">
                {{itemB.title}}
              </component>
              <div class="config-detail" v-if="pageConfig.config.current=='cfgOn'">{{itemB.config}}</div>
            </component>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style  lang="less">
.scifi-panel-title-demo{ 
  .deco-wrap{
    .deco-group{
      .group-content{ grid-template-columns: repeat(3, 1fr);
        .techComps-item{ .por;  height:300px;
          .techComps-wrap{.poa;}
          .config-detail{ .centerAbsolute; .fc(var(--font-strong)); white-space: pre; padding:20px;opacity: .5; }
        }
      }
    }
  }
}
.theme-scheme-light{
  .scifi-panel-title-demo{
    .sfp-custom{
      --sf-panel-fc:@bk;
      --sf-panel-bg:@wh;
      --sf-panel-bd:@pul2;
      --sf-panel-hlite:@pul5;
      --sf-panel-focus:@rel3;
      --sf-panel-glow:@pul1;
      .sf-svg-panti{
        --sf-panti-fc:@bk;
        --sf-panti-hlite:@pul5;
        --sf-panti-focus:@rel3;
      }
      .tui-panti{
        --tui-panti-fc:@bk;
        --tui-panti-hlite:@pul5;
        --tui-panti-focus:@rel3;
      }
    }
  }
}
.theme-scheme-dark{
  .scifi-panel-title-demo{
    .sfp-custom{
      --sf-panel-fc:@pul5;
      --sf-panel-bg:@pul9;
      --sf-panel-bd:@pul7;
      --sf-panel-hlite:@pul1;
      --sf-panel-focus:@aql5;
      --sf-panel-glow:@pul3;
      .sf-svg-panti{
        --sf-panti-fc:@pul1;
        --sf-panti-hlite:@pul3;
        --sf-panti-focus:@aql5;
      }
      .tui-panti{
        --tui-panti-fc:@pul1;
        --tui-panti-hlite:@pul3;
        --tui-panti-focus:@aql5;
      }
    }
  }

}
</style>
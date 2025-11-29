<script setup>
import { tStr } from "@techui/utils";
import { nextTick, onMounted, reactive, toRefs } from "vue";
import data from "./scifiHeaderData.js";
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
  <div class="scifi-header-demo deco-demo">  
    <div class="form-group">
      <TTuiRadio v-for="(radioG,index) in pageConfig" :key="index" v-model="radioG.current" :data="radioG.children"/>
    </div>
    
    <div class="deco-wrap" v-if="show">
      <div class="deco-group" v-for="(item,index) in techComps">
        <div class="group-name">
          <span class="title">{{tStr.upper1st(item.name)}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
          <span class="desc">{{item.desc}}</span> 
        </div>
        <div class="group-content">
          <div :class="`content-item `" v-for="itemB in item.children">
            <component :is='itemB.component' v-bind="itemB.config" >
              {{ itemB.title }}
            </component>
            <div class="config-detail" v-if="pageConfig.config.current=='cfgOn'">{{itemB.config}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style  lang="less">
.scifi-header-demo{ 
  .deco-wrap{
    .deco-group{
      .group-content{ grid-template-columns: repeat(2, 1fr);
        .content-item{min-height:80px; .por; padding:100px 0 0 0;
          .scifiHeader-wrap{.poa;}
          .config-detail{ .bd(var(--tech-bd)); .bgc(var(--tech-bg)); .bdra(10px); .fc(var(--font-strong)); padding:20px;opacity: .5; }// white-space: pre;
        }
      }
    }
  }
}

.theme-scheme-light{
  .scifi-header-demo{
    .sfh-custom{
      --sf-header-fc:@pul6;
      --sf-header-fc_alt:@pul4;
      --sf-header-bg:@wh;
      --sf-header-bg_alt:@pul1;
      --sf-header-bd:@pul3;
      --sf-header-hlite:@pul3;
      --sf-header-focus:@rel3;
      --sf-header-glow:@pul1;
    }
  }
}
.theme-scheme-dark{
  .scifi-header-demo{
    .sfh-custom{
      --sf-header-fc:@vil1;
      --sf-header-fc_alt:@pul4;
      --sf-header-bg:@pul8;
      --sf-header-bg_alt:@pul6;
      --sf-header-bd:@pul8;
      --sf-header-hlite:@pul6;
      --sf-header-focus:@aql5;
      --sf-header-glow:@pul3;
    }
  }

}

</style>
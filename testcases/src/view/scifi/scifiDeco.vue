<script setup>
import { nextTick, onMounted, reactive, toRefs } from "vue";
import data from "./scifiDecoData.js";
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
  <div class="scifi-deco-demo deco-demo">  
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
          <div :class="`content-item`" v-for="itemB in item.children">
            <div class="scifi-deco-wrap">
              <component :is='itemB.decoComp' v-bind="itemB.config">
                <i v-if="itemB.icon" :class="itemB.icon"></i>
                <span class="numbers" v-if="itemB.counter">{{ itemB.counter }}</span>
              </component>
            </div>
            <div class="config-detail" v-if="pageConfig.config.current=='cfgOn'">{{itemB.config}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style  lang="less">
.scifi-deco-demo{ 
  
  .deco-wrap{
    .deco-group{
      .group-content{ grid-template-columns: repeat(8, 1fr); grid-gap: 20px;
        .content-item{ padding:0; .por; display:flex; flex-direction: column;
          .scifi-deco-wrap{ padding:10px 0; text-align: center; .centerFlex;
            .decoFrame{margin:0 auto;}
            .numbers{.ff(impact);}
          }
          .config-detail{flex:1; width: 160px; margin:20px 0 0 0; overflow: auto; .bd(var(--tech-bd)); .bgc(var(--tech-bg)); .bdra(10px); .fc(var(--font-strong)); padding:5px;opacity: .5; white-space: pre; 
            &::-webkit-scrollbar{ width:4px; height:4px;}
          }
        }
      }
    }
  }
}

.theme-scheme-light{
  .scifi-deco-demo{
    .sfd-custom{
      --sf-deco-fc:@orl5;
      --sf-deco-bg:@wh;
      --sf-deco-bd:@pul2;
      --sf-deco-hlite:@pul4;
      --sf-deco-focus:@rel4;
      --sf-deco-glow:@pul1;
    }
  }
}
.theme-scheme-dark{
  .scifi-deco-demo{
    .sfd-custom{
      --sf-deco-fc:@pul2;
      --sf-deco-bg:@pul9;
      --sf-deco-bd:@pul7;
      --sf-deco-hlite:@pul6;
      --sf-deco-focus:@aql5;
      --sf-deco-glow:@pul3;
    }
  }

}
</style>
<script setup>
import { onMounted, reactive, toRefs } from "vue";
const state=reactive({
  show:true,
  update:0,
  pageConfig:{
    config:{current:"cfgOff",children:[
      {title:"配置项开",label:"cfgOn"},
      {title:"配置项关",label:"cfgOff"},
    ]}
  },
  techTitle:[
    {name:"decoFrameA1",
      desc:"",
      children:[
        {decoFrame:"decoFrameA1",counter:369,config:{
        }},
        {decoFrame:"decoFrameA1",icon:"tui-icon ti-drawer",config:{
          decorationAlt:true,
          glow:false,
        }},
        {decoFrame:"decoFrameA1",icon:"tui-icon ti-drawer",config:{
          
        }},
        {decoFrame:"decoFrameA1",icon:"tui-icon ti-drawer",config:{
          border:false,
          scale:1.5,
          backgroundOpacity:.5
        }},
      ]
    },

    {name:"decoFrameA2",
      desc:"",
      children:[
        {decoFrame:"decoFrameA2",counter:369,config:{
        }},
        {decoFrame:"decoFrameA2",icon:"tui-icon ti-user-hexagon",config:{
          decorationAlt:true,
          glow:false,
        }},
        {decoFrame:"decoFrameA2",icon:"tui-icon ti-user-hexagon",config:{
          
        }},
        {decoFrame:"decoFrameA2",icon:"tui-icon ti-user-hexagon",config:{
          border:false,
          scale:1.5,
          backgroundOpacity:.5
        }},

        {decoFrame:"decoFrameA2",counter:369,config:{
          directionAlt:true,
        }},
        {decoFrame:"decoFrameA2",icon:"tui-icon ti-user-hexagon",config:{
          directionAlt:true,
          decorationAlt:true,
          glow:false,
        }},
        {decoFrame:"decoFrameA2",icon:"tui-icon ti-user-hexagon",config:{
          directionAlt:true,
          
        }},
        {decoFrame:"decoFrameA2",icon:"tui-icon ti-user-hexagon",config:{
          directionAlt:true,
          border:false,
          scale:1.5,
          backgroundOpacity:.5
        }},
      ]
    },

    {name:"decoFrameA3",
      desc:"",
      children:[
        {decoFrame:"decoFrameA3",counter:369,config:{
        }},
        {decoFrame:"decoFrameA3",icon:"tui-icon ti-comment-plus",config:{
          decorationAlt:true,
          glow:false,
        }},
        {decoFrame:"decoFrameA3",icon:"tui-icon ti-comment-plus",config:{
          
        }},
        {decoFrame:"decoFrameA3",icon:"tui-icon ti-comment-plus",config:{
          border:false,
          scale:1.5,
          backgroundOpacity:.5
        }},
        
        {decoFrame:"decoFrameA3",counter:369,config:{
          directionAlt:true,
        }},
        {decoFrame:"decoFrameA3",icon:"tui-icon ti-comment-plus",config:{
          directionAlt:true,
          decorationAlt:true,
          glow:false,
        }},
        {decoFrame:"decoFrameA3",icon:"tui-icon ti-comment-plus",config:{
          directionAlt:true,
          
        }},
        {decoFrame:"decoFrameA3",icon:"tui-icon ti-comment-plus",config:{
          directionAlt:true,
          border:false,
          scale:1.5,
          backgroundOpacity:.5
        }},
      ]
    },


    {name:"decoFrameB1",
      desc:"",
      children:[
        {decoFrame:"decoFrameB1",counter:369842,config:{
        }},
        {decoFrame:"decoFrameB1",icon:"tui-icon ti-certificate",config:{
          glow:false,
        }},
        {decoFrame:"decoFrameB1",icon:"tui-icon ti-certificate",config:{
          
        }},
        {decoFrame:"decoFrameB1",icon:"tui-icon ti-certificate",config:{
          decorationAlt:true,
          scale:1.5,
          backgroundOpacity:.5
        }},
      ]
    },
    {name:"decoFrameB2",
      desc:"",
      children:[
        {decoFrame:"decoFrameB2",counter:369842,config:{
        }},
        {decoFrame:"decoFrameB2",icon:"tui-icon ti-newspaper",config:{
          glow:false,
        }},
        {decoFrame:"decoFrameB2",icon:"tui-icon ti-newspaper",config:{
          
        }},
        {decoFrame:"decoFrameB2",icon:"tui-icon ti-newspaper",config:{
          decorationAlt:true,
          scale:1.5,
          backgroundOpacity:.5
        }},
      ]
    },
    {name:"decoFrameB3",
      desc:"",
      children:[
        {decoFrame:"decoFrameB3",counter:369842,config:{
        }},
        {decoFrame:"decoFrameB3",icon:"tui-icon ti-chat-text",config:{
          glow:false,
        }},
        {decoFrame:"decoFrameB3",icon:"tui-icon ti-chat-text",config:{
          
        }},
        {decoFrame:"decoFrameB3",icon:"tui-icon ti-chat-text",config:{
          decorationAlt:true,
          scale:1.5,
          backgroundOpacity:.5
        }},
      ]
    },
    {name:"decoFrameB4",
      desc:"",
      children:[
        {decoFrame:"decoFrameB4",counter:369842,config:{
        }},
        {decoFrame:"decoFrameB4",icon:"tui-icon ti-mail",config:{
          glow:false,
        }},
        {decoFrame:"decoFrameB4",icon:"tui-icon ti-mail",config:{
          
        }},
        {decoFrame:"decoFrameB4",icon:"tui-icon ti-mail",config:{
          decorationAlt:true,
          scale:1.5,
          backgroundOpacity:.5
        }},
      ]
    },
  ]
    
    
  
})
const {techTitle,pageConfig,show}=toRefs(state)

onMounted(()=>{
  nextTick(() => {
    state.show=true;
  })
})
</script>
<template>
  <div class="decoFrame-en deco-demo">  
    <div class="border-toggle">
      <el-radio-group v-for="(radioG,index) in pageConfig" :key="index" v-model="radioG.current" >
        <el-radio-button :label="item.label" :key="item.label" v-for="item in radioG.children">{{item.title}}</el-radio-button>
      </el-radio-group>
    </div>
    
    <div class="deco-wrap" v-if="show">
      <div class="deco-group" v-for="(item,index) in techTitle">
        <div class="group-name">
          <span class="title">{{item.name}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
          <span class="desc">{{item.desc}}</span> 
        </div>
        <div class="group-content">
          <div :class="`decoFrame-item `" v-for="itemB in item.children">
            <div class="decoFrame-wrap">
              <component :is='itemB.decoFrame' :class="itemB.class" :config="itemB.config">
                <i v-if="itemB.icon" :class="itemB.icon"></i>
                <TuiDigitalRolling v-if="itemB.counter" class="numbers" :value="itemB.counter" :useGrouping="true" :interval="3000"></TuiDigitalRolling>
              </component>
            </div>
            <div class="config-detail" v-if="pageConfig.config.current=='cfgOn'">{{itemB}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style  lang="less">
.decoFrame-en{ 
  
  .deco-wrap{
    .deco-group{
      .group-content{ grid-template-columns: repeat(8, 1fr); grid-gap: 20px;
        .decoFrame-item{ padding:0; .por;
          .decoFrame-wrap{ padding:10px 0; text-align: center;
            .decoFrame{margin:0 auto;}
          }
          .config-detail{width: 160px; margin:20px 0 0 0; overflow: auto; .bd(var(--tech-bd)); .bgc(var(--tech-bg)); .bdra(10px); .fc(var(--font-strong)); padding:20px;opacity: .5; white-space: pre; }//
        }
      }
    }
  }
  .decoFrameB1{
    
  }
}
</style>
<script setup>
import { reactive, toRefs } from 'vue';
defineOptions({
  name: 'tabDemo',
})
const state=reactive({
  activeTop:0,
  activeRight:0,
  activeBottom:0,
  activeLeft:0,
  
  tabConfigTop:{ active:0, appearance:"simple",tagConfig:{tone:"strong",},
    items:[
      {label:"Item1",count:12,icon:"tui-icon ti-bell"},
      {label:"Item2 This is an English text for testing purposes.",count:31,icon:"tui-icon ti-book"},
    ],
  },
  tabConfigLeft:{ active:0, appearance:"simple", faceTo:"left",tagConfig:{type:"primary", tone:"strong",}, 
    options:[
      {label:"Item1",icon:"tui-icon ti-bell"},
      {label:"Item2 This is an English text for testing purposes.",icon:"tui-icon ti-book"},
    ]
  },
  tabConfigRight:{ active:0, appearance:"simple", faceTo:"right",tagConfig:{type:"primary", tone:"strong",}, 
    options:[
      {label:"Item1",icon:"tui-icon ti-bell"},
      {label:"Item2 This is an English text for testing purposes.",icon:"tui-icon ti-book"},
    ]
  },
  tabConfigBottom:{ active:0, appearance:"simple", faceTo:"down",
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
      {label:"Item3",disabled:true},
    ]
  },
  tabConfigLeftSmall:{ active:0, appearance:"simple", faceTo:"left",tagConfig:{type:"primary", tone:"strong",}, 
    options:[
      {label:"Item1",count:2,icon:"tui-icon ti-bell"},
      {label:"Item2 This is an English text for testing purposes.",icon:"tui-icon ti-book"},
    ]
  },
  tabConfigRightSmall:{ active:0, appearance:"simple", faceTo:"right",tagConfig:{type:"primary", tone:"strong",}, 
    options:[
      {label:"Item1",count:2,icon:"tui-icon ti-bell"},
      {label:"Item2 This is an English text for testing purposes.",icon:"tui-icon ti-book"},
    ]
  },

   //---------------card类型

  tabConfigCardTop:{ active:0, appearance:"card",tagConfig:{type:"warning", tone:"strong",}, itemMaxWidth:200,
    options:[
      {label:"Item1",count:12,icon:"tui-icon ti-bell"},
      {label:"Item2 This is an English text for testing purposes.",count:31,icon:"tui-icon ti-book"},
    ]
  },
  tabConfigCardLeft:{ active:0, appearance:"card",  faceTo:"left",
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
    ]
  }, 
  tabConfigCardRight:{ active:0, appearance:"card", faceTo:"right",tagConfig:{tone:"strong", }, 
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
    ]
  },
  tabConfigCardBottom:{ active:0, appearance:"card", faceTo:"down",
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
      {label:"Item3",disabled:true},
    ]
  },

  //---------------按钮类型
  tabConfigBtnTop:{ active:0, appearance:"button",tagConfig:{round:true,},  itemMaxWidth:180,
    options:[
      {label:"Item1",count:12,icon:"tui-icon ti-bell"},
      {label:"Item2 This is an English text for testing purposes.",count:31,icon:"tui-icon ti-book"},
      {label:"Item3"},
    ]
  },

  tabConfigBtnLeft:{ active:0, appearance:"button", faceTo:"left",tagConfig:{tone:'strong',round:true,},
    options:[
      {label:"Item1",count:12,tagType:"danger"},
      {label:"Item2 This is an English text for testing purposes.",count:11,tagType:"warning"},
      {label:"Item3",count:10,tagType:"success"},
      {label:"Item4",count:9,tagType:"primary"},
    ]
  },
  
  tabConfigBtnRight:{ active:0, appearance:"button",  faceTo:"right",
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
      {label:"Item3"},
    ]
  },
  
  tabConfigBtnBottom:{ active:0, appearance:"button", faceTo:"down",
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
      {label:"Item3",disabled:true},
      {label:"Item4"},
    ]
  },


})
const tabCallBack=(value)=>{
  console.log("tabCallBack",value);
}



const {
  tabConfigTop,
  tabConfigLeft,
  tabConfigRight,
  tabConfigBottom,
  tabConfigLeftSmall,
  tabConfigRightSmall,

  tabConfigBtnTop,
  tabConfigBtnLeft,
  tabConfigBtnRight,
  tabConfigBtnBottom,

  tabConfigCardTop,
  tabConfigCardLeft,
  tabConfigCardRight,
  tabConfigCardBottom,

  activeTop, 
  activeRight, 
  activeBottom, 
  activeLeft,
}=toRefs(state)


</script>
<template>
  <div class="tabs-demo-wrap">
    <div class="tab-demo-inner">
      <div class="tab-demo-box">
        <div class="demo-title">默认</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop" v-bind="tabConfigTop" >
          <TuiTab :count="item.count" :icon="item.icon" :value="index" tagType="danger" v-for="(item,index) in tabConfigTop.items">{{ item.label }}</TuiTab>
        </TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigLeft"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigRight"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" v-model="activeBottom" v-bind="tabConfigBottom"></TuiTabs>
      </div>

      <div class="tab-demo-box">
        <div class="demo-title">默认-小-无基线</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop" v-bind="tabConfigTop" :hideBaseLine="true" size="small">
          <TuiTab :count="item.count" :icon="item.icon" :value="index" v-for="(item,index) in tabConfigTop.items">{{ item.label }}</TuiTab>
        </TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigLeftSmall" :hideBaseLine="true" size="small"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigRightSmall" :hideBaseLine="true" size="small"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" @change="tabCallBack" v-model="activeBottom" v-bind="tabConfigBottom" :hideBaseLine="true" size="small"></TuiTabs>
      </div>
      
      


      <div class="tab-demo-box">
        <div class="demo-title">卡片</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop"  v-bind="tabConfigCardTop"></TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigCardLeft"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigCardRight"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" @change="tabCallBack" v-model="activeBottom" v-bind="tabConfigCardBottom"></TuiTabs>
      </div>
      
      <div class="tab-demo-box">
        <div class="demo-title">卡片-小-无基线</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop"  v-bind="tabConfigCardTop" :hideBaseLine="true" size="small"></TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigCardLeft" :hideBaseLine="true" size="small"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigCardRight" :hideBaseLine="true" size="small"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" @change="tabCallBack" v-model="activeBottom" v-bind="tabConfigCardBottom" :hideBaseLine="true" size="small"></TuiTabs>
      </div>

      

      <div class="tab-demo-box">
        <div class="demo-title">按钮</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop" v-bind="tabConfigBtnTop"></TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigBtnLeft"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigBtnRight"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" @change="tabCallBack" v-model="activeBottom" v-bind="tabConfigBtnBottom" tone="strong"></TuiTabs>
      </div>
      <div class="tab-demo-box">
        <div class="demo-title">按钮-小</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop" v-bind="tabConfigBtnTop" size="small"></TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigBtnLeft" size="small"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigBtnRight" size="small"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" @change="tabCallBack" v-model="activeBottom" v-bind="tabConfigBtnBottom" tone="strong" size="small"></TuiTabs>
      </div>

      <div class="tab-demo-box tab-demo-box-v">
        <div class="demo-title">默认-垂直</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop" v-bind="tabConfigTop" textDirection="v">
          <TuiTab :count="item.count" :icon="item.icon" :value="index" v-for="(item,index) in tabConfigTop.items">{{ item.label }}</TuiTab>
        </TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigLeft" textDirection="v"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigRight" textDirection="v"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" v-model="activeBottom" v-bind="tabConfigBottom" textDirection="v"></TuiTabs>
      </div>
      <div class="tab-demo-box tab-demo-box-v">
        <div class="demo-title">卡片-垂直</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop"  v-bind="tabConfigCardTop" textDirection="v"></TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigCardLeft" textDirection="v"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigCardRight" textDirection="v"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" @change="tabCallBack" v-model="activeBottom" v-bind="tabConfigCardBottom" textDirection="v"></TuiTabs>
      </div>
      <div class="tab-demo-box tab-demo-box-v">
        <div class="demo-title">按钮-垂直</div>
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="activeTop" v-bind="tabConfigBtnTop" textDirection="v"></TuiTabs>
        <TuiTabs class="tab-demo-left" @change="tabCallBack" v-model="activeLeft" v-bind="tabConfigBtnLeft" textDirection="v"></TuiTabs>
        <TuiTabs class="tab-demo-right" @change="tabCallBack" v-model="activeRight" v-bind="tabConfigBtnRight" textDirection="v"></TuiTabs>
        <TuiTabs class="tab-demo-bottom" @change="tabCallBack" v-model="activeBottom" v-bind="tabConfigBtnBottom" textDirection="v" tone="strong"></TuiTabs>
      </div>
      
    </div>
  </div>
</template>
<style lang="less">
.tabs-demo-wrap{ min-height:100%; width:1400px; margin:0 auto ; padding:20px; 
  .tab-demo-inner{.flex(40px); padding:20px; flex-wrap: wrap; margin:0 0 50px 0;
    .tab-demo-box{width:calc(50% - 20px); .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); min-height:300px;
      &.tab-demo-box-v{width:calc(33.33% - 28px); min-height:500px;}
      .tab-demo-top{.poa; left:120px; right:120px; top:20px; }
      .tab-demo-left{.poa; left:20px; bottom:60px; top:60px;}
      .tab-demo-right{.poa;right:20px; bottom:60px; top:60px;}
      .tab-demo-bottom{.poa; left:120px; right:120px; bottom:20px;}
      
      .tab-demo-top.hide-base-line{.poa; left:120px; right:120px; top:auto; bottom:0; }
      .tab-demo-left.hide-base-line{.poa; left:auto; right:0; bottom:60px; top:60px;}
      .tab-demo-right.hide-base-line{.poa;right:auto; left:0;  bottom:60px; top:60px;}
      .tab-demo-bottom.hide-base-line{.poa; left:120px; right:120px; bottom:auto; top:0;}
      .demo-title{.centerAbsolute;}
    }
  }
}
</style>

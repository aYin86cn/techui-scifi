<script setup>
import { reactive, toRefs } from 'vue';
const state=reactive({
  activeV:0,
  activeH:0,
  options:[
    {label:"Item1",count:12,tagType:"danger",icon:"tui-icon ti-bell"},
    {label:"Item2 This is an English text for testing purposes.",icon:"tui-icon ti-book"},
    {label:"Item3"},
    {label:"Item4"},
    {label:"Item5"},
    {label:"Item6"},
    {label:"Item7"},
    {label:"Item8"},
    {label:"Item9"},
    {label:"Item10"},
    {label:"Item11"},
    {label:"Item12"},
    {label:"Item13"},
    {label:"Item14"},
    {label:"Item15"},
    {label:"Item16"},
    {label:"Item17"},
    {label:"Item18"},
    {label:"Item19"},
    {label:"Item20"},
    {label:"Item21"},
    {label:"Item22"},
    {label:"Item23"},
    {label:"Item24"},
    {label:"Item25"},
    {label:"Item26"},
    {label:"Item27"},
    {label:"Item28"},
    {label:"Item29"},
    {label:"Item30"},
  ],
  tabConfigH:{ 
    active:0, 
    appearance:"simple", 
    faceTo:"up",
    scrollable:true,
    scrollOffset:50, 
  },
  tabConfigV:{ 
    active:0, 
    appearance:"simple", 
    faceTo:"right",
    scrollable:true,
    hideBaseLine:true, 
    // textDirection:"v", 
  },

})
const tabCallBack=(value)=>{
  console.log("tabCallBack",value);
}



const {
  tabConfigH,
  tabConfigV,
  options
}=toRefs(state)


</script>
<template>
  <div class="tabsScroll-demo-wrap">
    <div class="tab-demo-inner">
      <div class="tab-demo-box-v">
        <!-- <div class="demo-title">纵向</div> -->
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="state.activeV" v-bind="tabConfigV" itemMaxWidth="100%" >
          <TuiTab :count="item.count" :tagType="item.tagType" :icon="item.icon" :value="index" v-for="(item,index) in options">{{ item.label }}</TuiTab>
        </TuiTabs>
        
      </div>

      <div class="tab-demo-box-h">
        <!-- <div class="demo-title">横向</div> -->
        <TuiTabs class="tab-demo-top" @change="tabCallBack" v-model="state.activeH" v-bind="tabConfigH">
          <TuiTab :count="item.count" :tagType="item.tagType" :icon="item.icon" :value="index" v-for="(item,index) in options">{{ item.label }}</TuiTab>
        </TuiTabs>
      </div>
      
    </div>
  </div>
</template>
<style lang="less">
.tabsScroll-demo-wrap{ min-height:100%; width:1400px; margin:0 auto ; padding:20px; 
  .tab-demo-inner{ padding:20px; margin:0 0 50px 0; .flex(40px);
    .tab-demo-box-h{width:40%; .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); height:200px; 
      .demo-title{.poa; left:50%; .fixc("x"); bottom:20px;}
    }
    .tab-demo-box-v{width:200px; height:400px;.por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); overflow: hidden;
      .demo-title{.poa; top:50%; .fixc("y"); right:20px;}
    }
  }
}
</style>

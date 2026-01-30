<script setup>
import { reactive, toRefs } from 'vue';
const state=reactive({

  emptyDemos:[
    {label:"默认",config:{}},
    {label:"自定义图标",config:{icon:"tui-icon ti-star"}},
    {label:"文字自定义",config:{text:"这里为空"}},
    {label:"有边框",config:{bordered:true}},
    {label:"有按钮",config:{bordered:true,showButton:true,buttonText:"回退"}},
    {label:"大尺寸",config:{size:"large",bordered:true,showButton:true,}},
    {label:"小尺寸",config:{size:"small",bordered:true,showButton:true,}},
  ]
  

})




const {
  
}=toRefs(state)


</script>
<template>
  <div class="empty-demo-wrap">
    <div class="blank-demo-inner">
      <div class="blank-demo-box" v-for="(item,index) in state.emptyDemos">
        <div class="demo-title">{{ item.label }}</div>
        <TuiEmpty v-bind="item.config"/>
      </div>
      
    </div>
  </div>
</template>
<style lang="less">
.empty-demo-wrap{ min-height:100%; width:1400px; margin:0 auto ; padding:20px; 
  .blank-demo-inner{.flex(40px); padding:20px; flex-wrap: wrap; margin:0 0 50px 0;
    .blank-demo-box{width:calc(33.3333% - 27px); .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); min-height:300px; .centerFlex;
      
      .demo-title{.poa; left:0; top:0; margin:10px;}
    }
  }
}
</style>

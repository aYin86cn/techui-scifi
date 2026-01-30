<script setup>
import { $c } from "@techui/colors";
import { onMounted, reactive } from 'vue';
const state=reactive({
  tags:[
    {label:"Base", config:{},children:[
      {type:"default"},
      {type:"invert"},
      {type:"info"},
      {type:"primary"},
      {type:"success"},
      {type:"warning"},
      {type:"danger"},
      {customColor:$c.pul5},
      {type:"default",round:true},
      {type:"invert",round:true},
      {type:"info",round:true},
      {type:"primary",round:true},
      {type:"success",round:true},
      {type:"warning",round:true},
      {type:"danger",round:true},
      {customColor:$c.pul5,round:true},
      
    ]},
    {label:"Strong",config:{tone:"strong"},children:[
      {type:"default"},
      {type:"invert"},
      {type:"info"},
      {type:"primary"},
      {type:"success"},
      {type:"warning"},
      {type:"danger"},
      {customColor:$c.pul5},
      {type:"default",round:true},
      {type:"invert",round:true},
      {type:"info",round:true},
      {type:"primary",round:true},
      {type:"success",round:true},
      {type:"warning",round:true},
      {type:"danger",round:true},
      {customColor:$c.pul5,round:true},
    ]},
    {label:"Weak",config:{tone:"weak"},children:[
      {type:"default"},
      {type:"invert"},
      {type:"info"},
      {type:"primary"},
      {type:"success"},
      {type:"warning"},
      {type:"danger"},
      {customColor:$c.pul5},
      {type:"default",round:true},
      {type:"invert",round:true},
      {type:"info",round:true},
      {type:"primary",round:true},
      {type:"success",round:true},
      {type:"warning",round:true},
      {type:"danger",round:true},
      {customColor:$c.pul5,round:true},
    ]},
    {label:"Size Small",config:{size:"small"},children:[
      {type:"default"},
      {type:"invert"},
      {type:"info"},
      {type:"primary"},
      {type:"success"},
      {type:"warning"},
      {type:"danger"},
      {customColor:$c.pul5},
      {type:"default",round:true},
      {type:"invert",round:true},
      {type:"info",round:true},
      {type:"primary",round:true},
      {type:"success",round:true},
      {type:"warning",round:true},
      {type:"danger",round:true},
      {customColor:$c.pul5,round:true},
    ]},
    {label:"Size Small",config:{size:"large"},children:[
      {type:"default"},
      {type:"invert"},
      {type:"info"},
      {type:"primary"},
      {type:"success"},
      {type:"warning"},
      {type:"danger"},
      {customColor:$c.pul5},
      {type:"default",round:true},
      {type:"invert",round:true},
      {type:"info",round:true},
      {type:"primary",round:true},
      {type:"success",round:true},
      {type:"warning",round:true},
      {type:"danger",round:true},
      {customColor:$c.pul5,round:true},
    ]},
    
  ]
})

onMounted(() => {
})

</script>
<template>
  <div class="tag-demo-wrap">
    <div class="demo-layout">
      <template v-for="(group,gindex) in state.tags">
        <div class="group-title">{{ group.label }}</div>
        <div class="group">
          <TuiTag v-for="(item,index) in group.children" v-bind="{
            ...group.config,
            ...item
          }">{{ item.type||'custom' }}</TuiTag>
          
        </div>
      </template>
      



    </div>
  </div>
</template>
<style lang="less">
.tag-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  
  .demo-layout{ .flex(20px); padding:20px; flex-wrap: wrap; .por;
    .group-title{width: 100%; .bdb(var(--common-bd)); font-size: 18px; padding:10px 0; font-weight: bold;}
    .group{.flex(10px); align-items: start;
      
      
    }
  }
}
</style>

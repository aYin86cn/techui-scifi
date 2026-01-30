<script setup>
import { inject, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from "vue-router";

import t3D10Auto from "./t3DPanel/10Auto.vue";
import t3D11Static from "./t3DPanel/11Static.vue";
import t3D12GyroTest from "./t3DPanel/12GyroTest.vue";
import t3D1Matrix from "./t3DPanel/1Matrix.vue";
import t3D2Hive from "./t3DPanel/2Hive.vue";
import t3D3Unity from "./t3DPanel/3Unity.vue";
import t3D4Hover from "./t3DPanel/4Hover.vue";
import t3D5AniApart from "./t3DPanel/5AniApart.vue";
import t3D6AniUnity from "./t3DPanel/6AniUnity.vue";
import t3D7HiveApart from "./t3DPanel/7HiveApart.vue";
import t3D8GyroApart from "./t3DPanel/8GyroApart.vue";
import t3D9GyroUnity from "./t3DPanel/9GyroUnity.vue";

const {$gT3D,$tState,updateRouteQuery}= inject('$global');

const router = useRouter();
const route = useRoute();

const state=reactive({
  tabActive:0,
  tabConfig:{
    options:[
      {label:"1.矩阵",value:0},
      {label:"2.蜂巢",value:1},
      {label:"3.联合",value:2},
      {label:"4.悬停",value:3},
      {label:"5.动画独立",value:4},
      {label:"6.动画联合",value:5},
      {label:"7.蜂巢独立",value:6},
      {label:"8.陀螺仪独立",value:7},
      {label:"9.陀螺仪联合",value:8},
      {label:"10.模式自适配",value:9},
      {label:"11.静态",value:10},
      {label:"12.陀螺仪测试",value:11},
    ]
  },
})


// watch(()=>route.query,(val,old)=>{
//   state.tabActive=val.curNav
// },{deep:true})

onMounted(() => {
  // if(tObj.isEmpty(route.query)){
  //   updateRouteQuery({curNav:state.tabActive})
  // }else{
  //   state.tabActive=parseInt(route.query.curNav)
  // }
  
  
})

</script>
<template>
  <div class="t3d-demo-wrap">
    <div class="t3DPanel-state-wrap">
      <!-- <TuiToggleT3DPanel class="toggle-3d-btn"/> -->
      <div class="state">
        <div class="desc">t3DPanel:{{ $gT3D?"On":"Off" }}</div>
        <div class="light light-on" v-if="$gT3D"></div>
        <div class="light light-off" v-else></div>
      </div>
    </div>
    <div class="t3DPanel-demo" >
      <TuiTabs 
        @change="tabChange" 
        v-model="state.tabActive" 
        v-bind="state.tabConfig" 
      ></TuiTabs>
      <div class="tab-content">
        <!-- <t3DPanelToggle></t3DPanelToggle> -->
        <t3D1Matrix v-if="state.tabActive==0"></t3D1Matrix>
        <t3D2Hive v-if="state.tabActive==1"></t3D2Hive>
        <t3D3Unity v-if="state.tabActive==2"></t3D3Unity>
        <t3D4Hover v-if="state.tabActive==3"></t3D4Hover>
        <t3D5AniApart v-if="state.tabActive==4"></t3D5AniApart>
        <t3D6AniUnity v-if="state.tabActive==5"></t3D6AniUnity>
        <t3D7HiveApart v-if="state.tabActive==6"></t3D7HiveApart>
        <t3D8GyroApart v-if="state.tabActive==7"></t3D8GyroApart>
        <t3D9GyroUnity v-if="state.tabActive==8"></t3D9GyroUnity>
        <t3D10Auto v-if="state.tabActive==9"></t3D10Auto>
        <t3D11Static v-if="state.tabActive==10"/>
        <t3D12GyroTest v-if="state.tabActive==11"></t3D12GyroTest>
      </div>
    </div>
  </div>
  
</template> 
<style lang="less">
  .t3d-demo-wrap{.poa; inset:0;}
  .t3DPanel-state-wrap{.poa; left:10px; top:5px; .flex(20px); justify-content: center; align-items: center;
    .state{.flex(10px); justify-content: center; align-items: center;
      .light{width: 16px; height: 16px; .bdra(50%);
        &.light-on{.bgc(var(--success-base));}
        &.light-off{.bgc(var(--danger-base));}
      }
    }
    .toggle-cp-btn{.por; z-index: 10; }
    .toggle-3d-btn{.por; z-index: 20; }
  }
  .t3DPanel-demo{text-align: center;
    .tabs-wrap {.poa; inset:0; bottom:auto; padding:0 0 0 20px; 
      .item{display:inline-block; margin:0 10px; cursor: pointer; line-height: 36px;.bdb(@tr);
        &.active{.fc(@bll5); .bdb(@bll6);}
      }
    }
    .tab-content{padding:20px;.poa;inset:0; top:40px; z-index: 5;
      
    }
  }
</style>
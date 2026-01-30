<script setup>
import { tObj } from "@techui/utils";
import { getCurrentInstance, inject, onMounted, reactive, ref, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

import tuiAdvancedDemo from "./advanced/index.vue";
import tuiFeedback from "./base/feedback/index.vue";
import tuiGeneral from "./base/general/index.vue";
import tuiOther from "./base/other/index.vue";
import introTechui from "./intro/index.vue";
import scifiButton from "./scifiComps/scifiButton.vue";
import scifiDeco from "./scifiComps/scifiDeco.vue";
import scifiGeometry from "./scifiComps/ScifiGeometry.vue";
import scifiHeader from "./scifiComps/scifiHeader.vue";
import scifiPanel from "./scifiComps/scifiPanel.vue";
import scifiPanelTitle from "./scifiComps/scifiPanelTitle.vue";
import scifiTabs from "./scifiComps/scifiTabs.vue";

const {$tState,updateRouteQuery}= inject('$global');

const { proxy } = getCurrentInstance();
const router = useRouter();
const route = useRoute();

const comps={
  scifiPanel,
  scifiHeader,
  scifiButton,
  scifiPanelTitle,
  scifiDeco,
  scifiGeometry,
  introTechui,
  scifiTabs,
  tuiAdvancedDemo,
  tuiGeneral,
  tuiFeedback,
  tuiOther
}
const state=reactive({
  actQuery:"introTechui",
  actLabel:"",
  decorView:[
    {label:"TechUI简介",comp:"introTechui",icon:"tui-icon ti-start-up-alt"},
    {label:"ScifiPanel",comp:"scifiPanel",icon:"tui-icon ti-dashboard"},
    {label:"ScifiHeader",comp:"scifiHeader",icon:"tui-icon ti-display-rev"},
    {label:"ScifiButton",comp:"scifiButton",icon:"tui-icon ti-button"},
    {label:"ScifiPanelTitle",comp:"scifiPanelTitle",icon:"tui-icon ti-window-alt"},
    {label:"ScifiDeco",comp:"scifiDeco",icon:"tui-icon ti-sparkle"},
    {label:"ScifiGeometry",comp:"scifiGeometry",icon:"tui-icon ti-octagons"},
    {label:"ScifiTabs",comp:"scifiTabs",icon:"tui-icon ti-tabs"},
    {label:"TuiGeneral",comp:"tuiGeneral",icon:"tui-icon ti-input"},
    {label:"TuiFeedback",comp:"tuiFeedback",icon:"tui-icon ti-comment"},
    {label:"TuiOther",comp:"tuiOther",icon:"tui-icon ti-layers"},
    {label:"Advanced",comp:"tuiAdvancedDemo",icon:"tui-icon ti-suitcase-key"},
  ]
})

const clickAction=(item,index)=>{
  state.actQuery=item.comp
  state.actLabel=item.label
  updateRouteQuery({
    navQuery:item.comp,
    navLabel:item.label,
  })
}

const togVal=ref(false);

const {actQuery, decorView} = toRefs(state)
onMounted(()=>{
  if(tObj.isEmpty(route.query)){
    updateRouteQuery({
      navQuery:state.actQuery,
      navLabel:state.actLabel
    })
  }else{
    state.actQuery=route.query.navQuery
    state.actLabel=route.query.navLabel
  }

})
</script>
<template>
  <div class="decor-comp-wrap">
    <TuiThemeToggle class="tui-layout-theme-toggle"></TuiThemeToggle>
    <TuiToggleControlPanel class="tui-layout-ctrlpanel-toggle" appearance="iconButton"/>
    <div class="sider-nav">
      <TuiSystemLogo textAppearance="white" :logoSize="40"/>
      <div @click="clickAction(item,index)" :class="`item ${actQuery==item.comp&&'active'}`" v-for="(item,index) in decorView"  :index="index">
        <i :class="item.icon"></i>
        <span class="desc">{{item.label}}</span>
      </div>
    </div>
    <div class="deco-content">
      <component :is='comps[actQuery]'></component>
    </div>
  </div>
</template>
<style lang="less">
.decor-comp-wrap{display:flex;.poa; inset:0; pointer-events: all; // z-index: 100; .bgc(@blA19);
  .external-wrap{left:230px;}
  .tui-layout-theme-toggle{right:58px; top:9px; .poa; z-index: 10;}
  .tui-layout-ctrlpanel-toggle{right:18px; top:9px; .poa; z-index: 10;}
  .sider-nav{width: 220px; padding:5px 15px 15px 15px; 
    background-image: linear-gradient(45deg,var(--sider-bg-grad_pri),var(--sider-bg-grad_sec) 50%,var(--sider-bg-grad_thi));
    .tui-logo{margin-bottom:15px;}
    .item{.fc(fade(@wh,60%)); padding:10px 10px; margin:0 0 5px 0; font-size: 16px; cursor: pointer; .bdra(5px); 
      &:hover{.bgc(var(--sider-bg_hov));}
      &.active{.bgc(var(--sider-bg_act));}
      .tui-icon{font-size: 18px; vertical-align: bottom; margin:0 10px 0 0;}
      .desc{}
    }
  }
  .deco-content{.por;flex:1; overflow: auto;}

  .deco-demo{padding:10px 0; .poa; inset:0; 
    .form-group{.poa; top:20px; left:50%; .fixc("x"); z-index: 10; .bd(var(--common-bd_layer)); .bgc(var(--common-bg_layer));  .bdra(5px); padding:5px 10px;
      .flex(20px); 
      .tui-form-item{.flex(5px); align-items: center; margin:0;}
    }
    .deco-wrap{.poa; inset:0; overflow: auto; padding:0 40px 40px 40px; z-index: 5;
      
      .deco-group{
        .group-name{line-height: 2; margin:80px 0 20px 0; 
          span{padding: 0 10px 0 0;}
          .title{font-size: 32px; .fc(var(--primary-base)); }
          .subTitle{font-size:12px;.fc(var(--primary-weak)); }
          .desc{font-size: 12; .fc(var(--primary-weak)); }
        }
        .group-content{ grid-gap: 40px; display: grid; 
          .panel-item{ }
        }
      }
    }
  }


}
</style>
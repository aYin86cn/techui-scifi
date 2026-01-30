<script setup>
import { nextTick, reactive } from 'vue';

const config=reactive({
  trigger:"click",
})

const state=reactive({
  width:800,
  reset:false,
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  dirOpt:[
    {label:"水平",value:'h'},
    {label:"垂直",value:'v'},
  ],
  triggerOpt:[
    {label:"点击",value:'click'},
    {label:"悬停",value:'hover'},
    {label:"右击",value:'contextmenu'},
  ],
  placements:[
    {label:"left",children:[
      'left-start',
      'left',
      'left-end',
    ]},
    {label:"top",children:[
      'top-start',
      'top',
      'top-end',
    ]},
    {label:"bottom",children:[
      'bottom-start',
      'bottom',
      'bottom-end',
    ]},
    {label:"right",children:[
      'right-start',
      'right',
      'right-end',
    ]},
  ]
})

function menuClick(params,item,index) {
  console.log('menuClick:', params,item,index);
}

// 菜单项配置
const menuItems = [
  {
    label: '复制',
    title: '复制选中内容',
    value: 'copy',
    icon: 'tui-icon ti-copy',
    description: 'Ctrl+C',
  },
  {
    label: '粘贴',
    title: '粘贴内容',
    value: 'paste',
    icon: 'tui-icon ti-paste',
    description: 'Ctrl+V',
    divider:true,
  },
  {
    label: '删除',
    title: '删除选中项',
    value: 'delete',
    icon: 'tui-icon ti-trash',
    description: 'Del',
  },
  {
    label: '重命名',
    title: '重命名文件',
    value: 'rename',
    icon: 'tui-icon ti-edit',
    description: 'F2',
    divider: true,
  },
  {
    label: '属性',
    title: '查看属性',
    value: 'properties',
    icon: 'tui-icon ti-info-square',
  }
]

const notifyMenu=[
  { label: "提醒",counter:0, value: "notify",tagContent:5,tagType:"primary"}, 
  { label: "消息",counter:5, value: "message",tagContent:8,tagType:"success"}, 
  { label: "待办",counter:3, value: "work",tagContent:0,tagType:"warning"},
  { label: "级别",counter:3, value: "urgent",tagContent:"紧急",tagType:"danger"},
]

const triggerChange=async (val)=>{
  console.log("triggerChange",val);
  state.reset=true
  await nextTick()
  state.reset=false
}

</script>
<template>
  <div class="tui-menu-demo-wrap">
    <div class="operat-bar">

      <div class="form-group">
        <div class="label">菜单触发</div>
        <TuiRadio @change="triggerChange" v-bind="state.radioCfg" v-model="config.trigger" :options="state.triggerOpt"></TuiRadio>
      </div>

    </div>

    
    <div class="demo-inner" v-if="!state.reset">
      <!-- 指令触发 -->
      <div class="group" >
        <div :class="`sub-group sub-group-${group.label}`" v-for=" (group,indexG) in state.placements" :key="group.label">
          <template v-for=" (item,index) in group.children" :key="item.label" >
            <TuiMenu :menus="menuItems" @menuClick="(params) => menuClick(params, item, index)" :placement="item" v-bind="config" class-name="click-menu" >
              <TuiButton class="trigger-button">
                {{ item }}
              </TuiButton>
            </TuiMenu>
          </template>
        </div>
        <TuiMenu :menus="notifyMenu" @menuClick="menuClick" v-bind="config" class-name="click-menu" >
          <TuiButton size="small" icon="tui-icon ti-bell" class="notify-button"> 消息 </TuiButton>
        </TuiMenu>
        <div class="group-label"> (组件触发)</div>
      </div>
      <div class="group" >
        <div :class="`sub-group sub-group-${group.label}`" v-for=" (group,indexG) in state.placements" :key="group.label">
          <template v-for=" (item,index) in group.children" :key="item.label" >
            <TuiButton v-tui-menu="{ 
              menus:menuItems,
              placement:item,
              menuClick:(params)=>menuClick(params, item, index),
              ...config
            }">{{ item }}</TuiButton>
          </template>
        </div>
        <TuiButton size="small" icon="tui-icon ti-bell" class="notify-button"
          v-tui-menu="{ 
            menus:notifyMenu,
            menuClick,
            ...config
          }"
        > 消息 </TuiButton>
        <div class="group-label"> (指令触发)</div>
      </div>


    </div>
    
  </div>
</template>
<style lang="less">
.tui-menu-demo-wrap{ height:100%; min-height:100%; width:1400px; margin:0 auto; padding:20px;
  .operat-bar{.por; z-index: 10; .flex(20px); padding:0 20px; margin-bottom:20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
      &.group-number{width: 120px;}
    }
  }
  
  .demo-inner{ .flex(40px); padding:20px; height:100%; .centerFlex; flex-wrap: wrap; .por;}
  
  .group{ width:calc(50% - 20px); padding:10px; .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); height:320px; 
      
    .sub-group-left,
    .sub-group-top,
    .sub-group-bottom,
    .sub-group-right{.flex(10px); .poa;}

    .sub-group-left{ flex-direction: column; width: 18%; left:10px; top:50%; .fixc("y");}
    
    .sub-group-top{width: 60%; top:10px; left:50%; .fixc("x");}

    .sub-group-bottom{ width: 60%; bottom:10px; left:50%; .fixc("x");}

    .sub-group-right{ flex-direction: column; width: 18%; right:10px; top:50%; .fixc("y");}
    
    .group-label{.centerAbsolute;pointer-events: none;}
    .notify-button{.centerAbsolute; top:60%; }
    .tui-button{ user-select: none; cursor: pointer; text-align: center; .centerFlex; flex:1; .bdra(5px); 
      margin:0;
      .fc(var(--font-base)); 
      .bd(var(--button-bd)); 
      .bgc(var(--button-bg)); 
    }
    
  }
}
</style>
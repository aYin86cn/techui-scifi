<script setup>
import { inject, reactive, ref, watch } from 'vue';

const state=reactive({
  toggleCfgIcon0:{ appearance:"icon", size:"default", icon:["tui-icon ti-lock","tui-icon ti-lock-open"], },
  toggleCfgIcon1:{ appearance:"iconPlain", size:"default", icon:["tui-icon ti-lock","tui-icon ti-lock-open"], },
  toggleCfgIcon2:{ appearance:"iconButton", size:"large", icon:["tui-icon ti-star","tui-icon tis-star"], },
  toggleCfgIcon3:{ appearance:"iconButton", size:"default", icon:["tui-icon ti-star","tui-icon tis-star"], },
  toggleCfgIcon4:{ appearance:"iconButton",disabled:true, size:"small", icon:["tui-icon ti-star","tui-icon tis-star"], },
  
  toggleCfgIconSvg0:{  appearance:"icon", size:"default", icon:["tui-icon ti-view-expand","tui-icon ti-view-restore"], },
  toggleCfgIconSvg1:{ inactiveText:"否",activeText:"是", appearance:"iconPlain", size:"default", icon:["tui-icon ti-view-expand","tui-icon ti-view-restore"], },
  toggleCfgIconSvg2:{ inactiveText:"关",activeText:"开", appearance:"iconButton", size:"large", icon:["tui-icon ti-view-expand","tui-icon ti-view-restore"], },
  toggleCfgIconSvg3:{ appearance:"iconButton", size:"default", icon:["tui-icon ti-view-expand","tui-icon ti-view-restore"], },
  toggleCfgIconSvg4:{ appearance:"iconButton",disabled:true, size:"small", icon:["tui-icon ti-view-expand","tui-icon ti-view-restore"], },

  toggleCfgIconSg1:{ appearance:"iconPlain", size:"default", icon:"tui-icon ti-lock", },
  toggleCfgIconSg2:{ inactiveText:"否",activeText:"是", appearance:"iconButton", size:"large", icon:"tui-icon ti-lock", },
  toggleCfgIconSg3:{ inactiveText:"关",activeText:"开", appearance:"iconButton", size:"default", icon:"tui-icon ti-lock", },
  toggleCfgIconSg4:{ appearance:"iconButton",disabled:true, size:"small", icon:"tui-icon ti-lock", },

  toggleCfgRound1:{ inactiveText:"否",activeText:"是", appearance:"toggleRound", size:"large" },
  toggleCfgRound2:{ inactiveText:"关",activeText:"开", appearance:"toggleRound", size:"default" },
  toggleCfgRound3:{ appearance:"toggleRound",disabled:true, size:"small" },
  
  toggleCfgRect1:{ width:90, inlinePrompt:true,inactiveText:"关闭信息提示",activeText:"开启信息提示", appearance:"toggleRect", size:"large" },
  toggleCfgRect2:{ width:60, inlinePrompt:true,inactiveText:"关闭",activeText:"开启", appearance:"toggleRect", size:"default" },
  toggleCfgRect3:{ inlinePrompt:true,inactiveText:"关",activeText:"开", appearance:"toggleRect",disabled:true, size:"small" },
  
  toggleControlPanel1:{ appearance:"icon",size:"large",icon:["tui-icon ti-cog","tui-icon tis-cog"] },
  toggleControlPanel2:{ size:"small",icon:"tui-icon tis-star" },
  toggleControlPanel3:{ appearance:"iconButton"},
  toggleControlPanel4:{ showLabel:true, label:"Control Panel"},
  toggleControlPanel5:{ showLabel:true,direction:"v" },
  toggleControlPanel6:{ showLabel:true,appearance:"toggleRound"},
  toggleControlPanel7:{ showLabel:true,appearance:"toggleRect"}, 
  
  
  toggleT3DPanel1:{ appearance:"icon",size:"large",icon:["tui-icon ti-tablet","tui-icon ti-3d"] },
  toggleT3DPanel2:{ size:"small",icon:"tui-icon tis-star" },
  toggleT3DPanel3:{ appearance:"iconButton"},
  toggleT3DPanel4:{ showLabel:true, label:"3D Panel"},
  toggleT3DPanel5:{ showLabel:true,direction:"v" },
  toggleT3DPanel6:{ showLabel:true,appearance:"toggleRound"},
  toggleT3DPanel7:{ showLabel:true,appearance:"toggleRect"}, 
  
})
const toggleActive=ref(false);
const t3DActive=ref(false);
const ControlPanelActive=ref(false);

watch(()=>t3DActive.value,(val)=>{
})

const {$data}= inject('$global');

const toggleCallback=(val)=>{
  console.log("toggleCallback",val);
}

const ctrlPanCallback=(val)=>{
  console.log("ctrlPanCallback",val);
}

const tui3DCallback=(val)=>{
  console.log("tui3DCallback",val);
}

const value3=ref(false)

</script>
<template>
  <div class="comps-demo-wrap">
    <div class="demo-layout">
      <div class="group">
        <h2>Icon Fontawesome [{{ toggleActive }}]</h2>
        <TuiToggle @change="toggleCallback" v-model="toggleActive" v-bind="state.toggleCfgIcon0"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIcon1"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIcon2"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIcon3"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIcon4"/>
      </div>
      <div class="group">
        <h2>Icon SVG</h2>
        <TuiToggle @change="toggleCallback" v-model="toggleActive" v-bind="state.toggleCfgIconSvg0"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIconSvg1"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIconSvg2"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIconSvg3"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIconSvg4"/>
      </div>
      <div class="group">
        <h2>Icon Single</h2>
        <TuiToggle @change="toggleCallback" v-model="toggleActive" v-bind="state.toggleCfgIconSg1"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIconSg2"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIconSg3"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgIconSg4"/>
      </div>
      <div class="group">
        <h2>toggle Round</h2>
        <TuiToggle @change="toggleCallback" v-model="toggleActive" v-bind="state.toggleCfgRound1"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgRound2"/>
        <TuiToggle v-model="toggleActive" v-bind="state.toggleCfgRound3"/>
      </div>
      <div class="group">
        <h2>toggle Rect</h2>
        <TuiToggle class="custom-toggle-a" @change="toggleCallback" v-model="toggleActive" v-bind="state.toggleCfgRect1"/>
        <TuiToggle class="custom-toggle-b" v-model="toggleActive" v-bind="state.toggleCfgRect2"/>
        <TuiToggle class="custom-toggle-c" v-model="toggleActive" v-bind="state.toggleCfgRect3"/>
      </div>
    </div>
    <div class="demo-layout">
      <div class="group">
        <h2>T3D Toggle [{{ t3DActive }}]</h2>
        <TuiToggleT3DPanel @change="tui3DCallback" v-model="t3DActive" v-bind="state.toggleT3DPanel1"/>
        <TuiToggleT3DPanel v-model="t3DActive" v-bind="state.toggleT3DPanel2"/>
        <TuiToggleT3DPanel v-model="t3DActive"/>
        <TuiToggleT3DPanel v-model="t3DActive" v-bind="state.toggleT3DPanel3"/>
        <TuiToggleT3DPanel v-model="t3DActive" v-bind="state.toggleT3DPanel4"/>
        <TuiToggleT3DPanel v-model="t3DActive" v-bind="state.toggleT3DPanel5"/>
        <TuiToggleT3DPanel v-model="t3DActive" v-bind="state.toggleT3DPanel6"/>
        <TuiToggleT3DPanel v-model="t3DActive" v-bind="state.toggleT3DPanel7"/>
      </div>
      <div class="group">
        <h2>ControlPanel Toggle [{{ ControlPanelActive }}]</h2>
        <TuiToggleControlPanel @change="ctrlPanCallback" v-model="ControlPanelActive" v-bind="state.toggleControlPanel1"/>
        <TuiToggleControlPanel v-model="ControlPanelActive" v-bind="state.toggleControlPanel2"/>
        <TuiToggleControlPanel v-model="ControlPanelActive"/>
        <TuiToggleControlPanel v-model="ControlPanelActive" v-bind="state.toggleControlPanel3"/>
        <TuiToggleControlPanel v-model="ControlPanelActive" v-bind="state.toggleControlPanel4"/>
        <TuiToggleControlPanel v-model="ControlPanelActive" v-bind="state.toggleControlPanel5"/>
        <TuiToggleControlPanel v-model="ControlPanelActive" v-bind="state.toggleControlPanel6"/>
        <TuiToggleControlPanel v-model="ControlPanelActive" v-bind="state.toggleControlPanel7"/>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.comps-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px; .flex(20px);
  .demo-layout{ padding:20px; flex:1;
    .group{ .flex(20px); align-items: center; flex-wrap: wrap; padding:0 0 50px 0;
      h2{width:100%; display:block; margin:0;}
    }
  }
  .custom-toggle-a{
    --tui-tgl-bg_def:var(--success-base);
    --tui-tgl-bg_hov:var(--success-weak);
    --tui-tgl-bg_act:var(--danger-base);

    --tui-tgl-bd_def:var(--success-strong);
    --tui-tgl-bd_hov:var(--success-base);
    --tui-tgl-bd_act:var(--danger-strong);

    // --tui-tgl-fc_inline:var(--warning-weak);
  }
}
</style>

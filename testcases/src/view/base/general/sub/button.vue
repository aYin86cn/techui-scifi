<script setup>
import { $c } from "@techui/colors";
import { onMounted, reactive } from 'vue';
const state=reactive({
  radioCfg:{ appearance:"button",  defaultIcon:false, },
  showActiveGroup:false,
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],

  groupObj:[
    {label:"Base",children:[
      {label:"Normal",common:{},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:$c.pul5},
        {type:"divider"},
        {type:"default",icon:"tui-icon ti-cog",label:"With icon"},
        {type:"primary",icon:"tui-icon ti-star",label:"With icon"},
        {type:"primary",size:"large",label:"large"},
        {type:"primary",size:"small",label:"small"},
      ]},
      {label:"Disabled",common:{disabled:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      {label:"Active",className:"is-active",common:{},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      
    ]},
    {label:"Plain",children:[
      {label:"Normal",common:{plain:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
        {type:"divider"},
        {type:"primary",size:"large",label:"large"},
        {type:"primary",size:"small",label:"small"},
      ]},
      {label:"Disabled",common:{plain:true,disabled:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      
    ]},
    {label:"Round",children:[
      {label:"Normal",common:{round:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.orl4,$c.pul5]},
        {type:"divider"},
        {type:"primary",size:"large",label:"large"},
        {type:"primary",size:"small",label:"small"},
      ]},
      {label:"Disabled",common:{round:true,disabled:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      {label:"Plain",common:{plain:true,round:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      
      {label:"Disabled",common:{plain:true,round:true,disabled:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      
    ]},
    {label:"Circle",children:[
      {label:"Normal",common:{icon:"tui-icon ti-star",circle:true},children:[
        {type:"default",},
        {type:"invert"},
        {type:"focus",},
        {type:"info",},
        {type:"primary",},
        {type:"success",},
        {type:"warning",},
        {type:"danger",},
        {type:"emphasis",},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
        {type:"divider"},
        {type:"primary",size:"large",label:"large"},
        {type:"primary",size:"small",label:"small"},
      ]},
      {label:"Disabled",common:{icon:"tui-icon ti-star",circle:true,disabled:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      {label:"Plain",common:{icon:"tui-icon ti-star",circle:true,plain:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      {label:"Disabled",common:{icon:"tui-icon ti-star",circle:true,plain:true,disabled:true},children:[
        {type:"default"},
        {type:"invert"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      
    ]},
    {label:"Link",children:[
      {label:"Normal",common:{link:true},children:[
        {type:"default"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
        {type:"divider"},
        {type:"primary",size:"large",label:"large"},
        {type:"primary",size:"small",label:"small"},
      ]},
      {label:"Disabled",common:{link:true,disabled:true},children:[
        {type:"default"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
      ]},
      
    ]},
    {label:"Text",children:[
      {label:"Normal",common:{text:true},children:[
        {type:"default"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
        {type:"divider"},
        {type:"primary",size:"large",label:"large"},
        {type:"primary",size:"small",label:"small"},
      ]},
      {label:"Disabled",common:{text:true,disabled:true},children:[
        {type:"default"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
        
      ]},
      {label:"Background always on",common:{text:true,textWithBG:true},children:[
        {type:"default"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
        {type:"divider"},
        {type:"primary",size:"large",label:"large"},
        {type:"primary",size:"small",label:"small"},
      ]},
      {label:"Disabled background always on",common:{text:true,disabled:true,textWithBG:true},children:[
        {type:"default"},
        {type:"focus"},
        {type:"info"},
        {type:"primary"},
        {type:"success"},
        {type:"warning"},
        {type:"danger"},
        {type:"emphasis"},
        {label:"Custom",customColor:[$c.pul1,$c.pul5]},
        
      ]},
      
      
    ]},
  ],


})


onMounted(() => {
})

</script>
<template>
  <div class="button-demo-wrap">
    <div class="operat-bar">
      
      <div class="form-group">
        <div class="label">显示Active状态组</div>
        <TuiRadio v-bind="state.radioCfg" v-model="state.showActiveGroup" :options="state.boolOpt"/>
      </div>
    </div>
    <div class="demo-layout" @click="poptipEvent">
      <template v-for="(groupM,indexM) in state.groupObj">
        <div class="group-title">{{ groupM.label }}</div>
        <div class="group">
          <template v-for="(groupS,indexS) in groupM.children">
            <template v-if="groupS.label!='Active'||state.showActiveGroup">
              <div class="group-sub-title">{{ groupS.label }}</div>
              <div class="group-sub">
                <template v-for="(btn,indexB) in groupS.children">
                  <TuiButton 
                    :class="groupS.className" 
                    v-if="btn.type!='divider'" 
                    v-bind="{...groupS.common, ...btn}"
                  >
                    {{ btn.label||btn.type }}
                  </TuiButton>
                  <div class="divider" v-else></div>
                </template>
              </div>
            </template>
  
          </template>
          
        </div>

      </template>

    
      <div class="group-title">Button Group</div>
      <div class="group btn-group">
        <TuiButtonGroup>
          <TuiButton type="primary">ButtonA</TuiButton>
          <TuiButton type="primary">ButtonB</TuiButton>
          <TuiButton type="primary">ButtonC</TuiButton>
        </TuiButtonGroup>

        <TuiButtonGroup>
          <TuiButton type="default">ButtonA</TuiButton>
          <TuiButton type="default">ButtonB</TuiButton>
          <TuiButton type="primary">ButtonC</TuiButton>
        </TuiButtonGroup>

        <TuiButtonGroup size="large">
          <TuiButton type="default">ButtonA</TuiButton>
          <TuiButton type="default">ButtonB</TuiButton>
          <TuiButton type="primary">ButtonC</TuiButton>
        </TuiButtonGroup>

        <TuiButtonGroup size="small">
          <TuiButton type="default">ButtonA</TuiButton>
          <TuiButton type="default">ButtonB</TuiButton>
          <TuiButton type="default">ButtonC</TuiButton>
        </TuiButtonGroup>

        <TuiButtonGroup>
          <TuiButton type="default">ButtonA</TuiButton>
          <TuiButton type="focus">ButtonA</TuiButton>
          <TuiButton type="info">ButtonB</TuiButton>
          <TuiButton type="primary">ButtonC</TuiButton>
          <TuiButton type="success">ButtonD</TuiButton>
          <TuiButton type="warning">ButtonE</TuiButton>
          <TuiButton type="danger">ButtonF</TuiButton>
          <TuiButton type="emphasis">ButtonF</TuiButton>
        </TuiButtonGroup>
        
        <TuiButtonGroup vertical>
          <TuiButton type="default">ButtonA</TuiButton>
          <TuiButton type="info">ButtonB</TuiButton>
          <TuiButton type="primary">ButtonC</TuiButton>
          <TuiButton type="success">ButtonD</TuiButton>
          <TuiButton type="warning">ButtonE</TuiButton>
          <TuiButton type="danger">ButtonF</TuiButton>
        </TuiButtonGroup>
        
        <TuiButtonGroup vertical>
          <TuiButton type="default">ButtonA</TuiButton>
          <TuiButton type="default">ButtonB</TuiButton>
          <TuiButton type="default">ButtonC</TuiButton>
        </TuiButtonGroup>

      </div>
      <div class="group-title">Button Group</div>
      <div class=" btn-group">
        <TuiButton type="primary">ButtonA</TuiButton>
        <TuiButton type="primary">ButtonB</TuiButton>
        <TuiButton type="primary">ButtonC</TuiButton>
      </div>

    </div>
  </div>
</template>
<style lang="less">
.button-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .operat-bar{.flex(30px); padding:0 20px;
    .form-group{
      .label{margin:10px 0;}
    }
  }
  .demo-layout{ .flex(20px); padding:20px; flex-wrap: wrap; .por;
    .group-title{width: 100%; .bdb(var(--common-bd)); font-size: 18px; padding:10px 0; font-weight: bold;}
    .group{.flex(20px); flex-direction: column; margin:0 0 30px 0;
      &.btn-group{align-items: start;}
      .group-sub-title{}
      .group-sub{.flex; align-items: center;
        .divider{width: 2px; .bgc(var(--common-bg)); height:100%; margin:0 10px;}
      }
      
    }
  }
}
</style>

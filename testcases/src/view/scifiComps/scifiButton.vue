<script setup>
import { tStr } from "@techui/utils";
import { nextTick, onMounted, reactive, toRefs } from "vue";
import data from "./scifiButtonData.js";

const comCfg=reactive({
  config:false,
  type:"default",
})

const state=reactive({
  show:true,
  update:0,
  radioCfg:{ appearance:"button", defaultIcon:false, },
  configOpt:[
    {label: "显示", value: true},
    {label: "隐藏", value: false},
  ],
  typeOpt:[
    {label:"默认",value:"default"},
    {label:"主要",value:"primary"},
    {label:"成功",value:"success"},
    {label:"告警",value:"warning"},
    {label:"危险",value:"danger"},
    {label:"着重",value:"emphasis"},
  ],
  buttonTitle:[
    {label:"Normal",labelE:"Normal"},
    {label:"Active",labelE:"Active"},
    {label:"Disabled",labelE:"Disabled"},
    {label:"Saize Large",labelE:"Scale"},
    {label:"Saize Small",labelE:"Scale"},
    {label:"Custom style",labelE:"Custom style"},
  ],
  techComps:[ ...data ]
})
const {techComps,buttonTitle,configOpt,typeOpt,show}=toRefs(state)

onMounted(()=>{
  nextTick(() => {
    state.show=true;
  })
})
</script>
<template>
  <div class="scifi-button-demo deco-demo">  
    <TuiForm class="form-group" inline>
      <TuiFormItem label="按钮类型" prop="labelPosition">
        <TuiRadio v-bind="state.radioCfg" v-model="comCfg.type" :options="typeOpt"></TuiRadio>
      </TuiFormItem>
      <TuiFormItem label="配置参数" prop="labelPosition">
        <TuiRadio v-bind="state.radioCfg" v-model="comCfg.config" :options="configOpt"></TuiRadio>
      </TuiFormItem>
    </TuiForm>

    <div class="deco-wrap" v-if="show">
      
      <div class="scifiButton-title">
        <div class="item" v-for="(item,index) in buttonTitle">
          <p class="chs">{{item.label}}</p>
        </div>
      </div>
      <div class="deco-group" v-for="(item,index) in techComps">
        <div class="group-name">
          <span class="title">{{tStr.upper1st(item.name)}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
          <span class="desc">{{item.desc}}</span> 
        </div>
        <div class="group-content">
          <div :class="`content-item `" v-for="itemB in item.children">
            <div class="button-wrap">
              <component :is='itemB.button' v-bind="itemB.config" :type="comCfg.type">
                {{itemB.text}}
              </component>
            </div>
            <div class="config-detail" v-if="comCfg.config">{{itemB.config}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style  lang="less">
.scifi-button-demo{
  .scifiButton-title{grid-template-columns: repeat(6, 1fr); display:grid; margin:80px 0 0 0;
    .item{text-align: center; font-size: 24px;
      .chs{}
      .eng{}
    }
  }
  .deco-wrap{
    .deco-group{
      .group-content{ grid-template-columns: repeat(6, 1fr);
        .content-item{ padding:70px 0 0 0; .por;
          .button-wrap{.poa; top:0; left:50%; .fixc("x"); }
          .config-detail{ margin:20px 0 0 0; .bd(var(--tech-bd)); .bgc(var(--tech-bg)); .bdra(10px); .fc(var(--font-strong)); padding:20px;opacity: .5; white-space: pre; }//
        }
      }
      &:nth-child(2){
        .group-name{margin-top:30px!important;}
      }
    }
  }
}


.theme-scheme-light{
  .scifi-button-demo{
    .sfb-custom{
      
      --sf-button-bg_def:@wh;
      --sf-button-bd_def:@pul2;
      --sf-button-fc_def:@vil7;

      --sf-button-bg_hov:@wh;
      --sf-button-bd_hov:@pul1;
      --sf-button-fc_hov:@vil6;
      --sf-button-bg_act:@wh;
      --sf-button-bd_act:@pul1;
      --sf-button-fc_act:@vil5;
      --sf-button-bg_dis:@pud1;
      --sf-button-bd_dis:@pud2;
      --sf-button-fc_dis:@vid3;

      --sf-button-hlite:@pul4;
      --sf-button-focus:@rel4;
      --sf-button-glow:@pul1;
    }
  }
}
.theme-scheme-dark{
  .scifi-button-demo{
    .sfb-custom{
      --sf-button-bg_def:@pul8;
      --sf-button-bd_def:@pul7;
      --sf-button-fc_def:@vil1;

      --sf-button-bg_hov:@pul7;
      --sf-button-bd_hov:@pul7;
      --sf-button-fc_hov:@vil1;
      --sf-button-bg_act:@pul6;
      --sf-button-bd_act:@pul6;
      --sf-button-fc_act:@wh;
      --sf-button-bg_dis:@pul8;
      --sf-button-bd_dis:@pul9;
      --sf-button-fc_dis:@vid5;

      --sf-button-hlite:@pul6;
      --sf-button-focus:@aql5;
      --sf-button-glow:@pul3;
    }
  }

}

</style>
<script setup>
import { tStr } from "@techui/utils";
import { getCurrentInstance, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import data from "./scifiTabsData.js";

const { proxy } = getCurrentInstance()
const router = useRouter();

const state=reactive({
  data,
  config:false,
  radioCfg:{ appearance:"button", defaultIcon:false, },
  configOpt:[
    {label: "显示", value: true},
    {label: "隐藏", value: false},
  ],
})


const {configOpt,}=toRefs(state)

const tabList = [
  { label: 'Power', value: 'power' },
  { label: 'Life', value: 'life' },
  { label: 'Shield', value: 'shield' }
];

const onTabChange = (value) => {
  console.log('Tabs已切换至:', value);
};

</script>
<template>
  <div class="scifi-tabs-demo deco-demo">
    <TuiForm class="form-group" inline>
      <TuiFormItem label="配置参数" prop="labelPosition">
        <TuiRadio v-bind="state.radioCfg" v-model="state.config" :options="configOpt"></TuiRadio>
      </TuiFormItem>
    </TuiForm>
    <div class="deco-wrap">
      <div class="deco-group" v-for="(item,index) in state.data">
        <div class="group-name">
          <span class="title">{{tStr.upper1st(item.name)}}</span>
          <span class="subTitle">{{item.subTitle}}</span>
          <span class="desc">{{item.desc}}</span> 
        </div>
        <div class="group-content group-content-h">
          <div :class="`content-item `" v-for="itemT in item.childrenH">
            <div class="button-wrap">
              <ScifiTabs 
                class="scifi-tabs-inst"
                v-model="itemT.activeTab" 
                :buttonType="item.type"
                :options="tabList" 
                v-bind="itemT"
                @change="onTabChange"
              />
            <div class="config-detail" v-if="state.config">{{(({ activeTab, ...rest }) => rest)(itemT)}}</div>

            </div>
          </div>
        </div>
        <div class="group-content group-content-v">
          <div :class="`content-item `" v-for="itemT in item.childrenV">
            <div class="button-wrap">
              <ScifiTabs 
                class="scifi-tabs-inst"
                v-model="itemT.activeTab" 
                :buttonType="item.type"
                :options="tabList" 
                direction="v"
                v-bind="itemT"
                @change="onTabChange"
              />
              <div class="config-detail" v-if="state.config">{{(({ activeTab, ...rest }) => rest)(itemT)}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less'>
.scifi-tabs-demo{
  .deco-wrap{
    .deco-group{
      .group-content{  
        &.group-content-h{grid-template-columns: 40% 35% 25%; gap:50px 10px ;}
        &.group-content-v{grid-template-columns: repeat(5, 1fr);; gap:50px 10px ; margin-top:150px;}
        .content-item{display: flex; justify-content: center; .por;

          .config-detail{ margin:20px 0 0 0; .bd(var(--tech-bd)); .bgc(var(--tech-bg)); .bdra(10px); .fc(var(--font-strong)); padding:20px 0;opacity: .5; white-space: pre; }//
        }
      }
    }
  }
}
</style>
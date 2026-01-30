<script setup>
import { inject, reactive } from 'vue';
defineOptions({
  name: 'loginDemo',
})

import bgDarkBlack from "./images/darkBlack.png";
import bgDarkBlue from "./images/darkBlue.png";
import bgLightBlue from "./images/lightBlue.png";

const themeBG={
  lightBlue:bgLightBlue,
  darkBlack:bgDarkBlack,
  darkBlue:bgDarkBlue,
}

const {proxy:{$tMessage},$gTheme,$gPlatform}= inject('$global');

// 表单数据
const loginCfg = reactive({
  form: {
    username:'',
    password: '',
    captcha: '',
  },
  position: "center", // left, right
  formSize:"large",
  backgroundType:"image",
  enableCaptcha:true,
  loading:false,
  
})


const handleLogin = async (formData) => {
  console.log('登录数据:', formData)
  $tMessage({ content:"表单验证通过，登录中！", type: 'success', })
  loginCfg.loading = true
  
  setTimeout(() => {
    loginCfg.loading = false
  }, 2000)
}

const handleHelp = () => {
  console.log('用户点击了帮助')
}

const handleForget = () => {
  console.log('用户点击了忘记密码')
}

const handleValidate = (validateResult) => {
  console.log('验证结果:', validateResult)
}


const state=reactive({
  formCfg:{
    inline:true,
  },
  radioCfg:{ appearance:"button", defaultIcon:false, },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],

  sizeOpt:[
    {label:"默认",value:"default"},
    {label:"大",value:'large'},
  ],
  posOpt:[
    {label:"居中",value:'center'},
    {label:"靠右",value:"right"},
    {label:"靠左",value:"left"},
  ],
  bgTypeOpt:[
    {label:"矢量",value:"vector"},
    {label:"图片",value:'image'},
  ],
  customPanel:false,
})

const scifiPanelCfg={
  directionAlt: true,
  rotate: "z",
  backgroundOpacity: 0.7
}

</script>

<template>
  <TuiForm :class="[
    'tui-login-cfg',
    `tui-login-pos-${loginCfg.position}`
  ]" :model="loginCfg" inline labelPosition="top">
    <TuiFormItem label="窗口位置" prop="position">
      <TuiRadio v-bind="state.radioCfg" v-model="loginCfg.position" :options="state.posOpt"></TuiRadio>
    </TuiFormItem>
    <TuiFormItem label="表单大小" prop="formSize">
      <TuiRadio v-bind="state.radioCfg" v-model="loginCfg.formSize" :options="state.sizeOpt"></TuiRadio>
    </TuiFormItem>
    <TuiFormItem label="背景类型" prop="backgroundType">
      <TuiRadio v-bind="state.radioCfg" v-model="loginCfg.backgroundType" :options="state.bgTypeOpt"></TuiRadio>
    </TuiFormItem>
    <TuiFormItem label="开启验证码" prop="enableCaptcha">
      <TuiRadio v-bind="state.radioCfg" v-model="loginCfg.enableCaptcha" :options="state.boolOpt"></TuiRadio>
    </TuiFormItem>
    <TuiFormItem label="自定义边框" prop="customPanel" v-if="$gPlatform=='scifi'">
      <TuiRadio v-bind="state.radioCfg" v-model="state.customPanel" :options="state.boolOpt"></TuiRadio>
    </TuiFormItem>
    <TuiFormItem label="主题" prop="theme">
      <TuiThemeToggle/>
    </TuiFormItem>

  </TuiForm>
  <TuiLogin
    v-bind="loginCfg"
    :backgroundImage="themeBG[$gTheme]"
    @login="handleLogin"
    @help="handleHelp"
    @forget="handleForget"
    @validate="handleValidate"
    class="tui-login-prime-demo"
  >
    <template #border v-if="state.customPanel">
      <ScifiPanelA1 v-bind="scifiPanelCfg" :directionAlt="true"/>
    </template>
    <template #logo>
      <TuiSystemLogo textAppearance="fontBase" direction="v" :textSize="32" :logoSize="80" :logoPadding="20"/>
    </template>
    <!-- <template #extra> </template> -->
  </TuiLogin>
</template>

<style lang="less">
.tui-login-cfg{.poa; top:15px; left:25px; z-index: 10;
  &.tui-login-pos-left{left:auto; right:25px;}
}
.tui-login-prime-demo{.poa;
  .tui-theme-toggle{.poa; z-index: 2000; top:15px; left:15px; }
}
</style>
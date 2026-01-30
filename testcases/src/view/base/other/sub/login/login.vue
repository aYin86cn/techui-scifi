<script setup>
import menuFlat from "@shared/navigation/menu-prime";
import { tStr, tTimer } from "@techui/utils";
import { inject, reactive } from 'vue';
import { useRoute, useRouter } from "vue-router";
import bgDarkBlack from "./images/darkBlack.png";
import bgDarkBlue from "./images/darkBlue.png";
import bgLightBlue from "./images/lightBlue.png";

const route = useRoute();
const router = useRouter();

const themeBG={
  lightBlue:bgLightBlue,
  darkBlack:bgDarkBlack,
  darkBlue:bgDarkBlue,
}

const {proxy:{$tMessage,isActAdminFeatures},$ADMIN,$gTheme,$tState,$gPlatform,routerTransition}= inject('$global');

// 表单数据
const loginCfg = reactive({
  form: {
    username:'jason',
    password: 'passw0rd',
    captcha: '1234',
  },
  position: "right", //center left, right
  enableCaptcha:true,
  loading:false,
  backgroundType:"image"
})

const scifiPanelCfg={
  directionAlt: true,
  rotate: "z",
  backgroundOpacity: 0.8
}

const handleLogin = async (formData) => {
  console.log('登录数据:', formData)
  $tMessage({ content:"表单验证通过，登录中！", type: 'success', })
  loginCfg.loading = true
  if(isActAdminFeatures){
    $ADMIN.value.menu=menuFlat;
    $ADMIN.value.userInfo.id="Jason"
    $ADMIN.value.userInfo.token='token_'+tStr.rdm()
  }
  const redirect=route.query?.redirect;
  tTimer.s("routTo",()=>{routerTransition({
    path:`${redirect?redirect:'/'}`
  })},2000)
  
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



</script>

<template>
  <TuiLogin
    v-bind="loginCfg"
    :backgroundImage="themeBG[$gTheme]"
    @login="handleLogin"
    @help="handleHelp"
    @forget="handleForget"
    @validate="handleValidate"
    class="tui-login-prime"
  >
    <template #border v-if="$gPlatform=='prime'">
      <ScifiPanelA1 v-bind="scifiPanelCfg" :directionAlt="true"/>
    </template>
    <template #logo>
      <TuiSystemLogo textAppearance="fontBase" direction="v" :textSize="32" :logoSize="80" :logoPadding="20"/>
    </template>
    <template #extra>
      <TuiThemeToggle direction="v"/>
      <TuiToggleControlPanel/>
    </template>
  </TuiLogin>
</template>

<style lang="less">
.tui-login-prime{
  .tui-theme-toggle{.poa; z-index: 2000; top:30px; right:15px; }
  .tui-toggle-ctrlpanel{.poa; top:130px; right:15px; z-index: 2000;}
}
</style>
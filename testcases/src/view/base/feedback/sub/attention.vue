<script setup>
import { inject, onMounted, reactive } from 'vue';
// import tempBG from "../_common/tempBG/index.vue";
const {$tMessage,$tMessageCloseAll,$tNotify,$tNotifyCloseAll,$tToast,$tToastClose,$tFlash,$tFlashClose,$data,$attentionConfig,$aMessage,$aNotification,$aToast,$aFlash,$aDispatcher}= inject('$global');

onMounted(() => {
  // console.log("$tMessageCloseAll",$tMessageCloseAll);
})

const config=reactive({
  debug:false,
  backgroundBlur:true,
  transparent:true,
  showClose:true,
  tone:'base',
  // title:"测试"
})
const state=reactive({
  radioCfg:{ appearance:"button", size:"default",defaultIcon:false },
  
  boolOpt:[
    {label:"是",value:true},
    {label:"否",value:false},
  ],
  toneOpt:[
    {label:"淡",value:"weak"},
    {label:"基",value:"base"},
    {label:"强",value:"strong"},
    {label:"强反",value:"strongInvert"},
    {label:"极反",value:"extremeInvert"},
  ],
})


//---------------------------Message------------------------------

// watch(()=>$aMessage.value.counter,(val)=>{
//   console.log("messageCounter",val);
// })

const showMsgInfo=()=>{ $tMessage({...config,  content:"消息提醒", type: 'info',grouping:true }) }
const showMsgCallback=()=>{ $tMessage({...config,  content:"Callback", type: 'success',}) }
const showMsgPrimary=()=>{ $tMessage({...config,  content:"重要提醒", type: 'primary' }) }
const showMsgSuccess=()=>{ $tMessage({...config,  content:"成功提醒", type: 'success', }) }
const showMsgWarning=()=>{ $tMessage({...config,  content:"警告提醒", type: 'warning', }) }
const showMsgDanger=()=>{ $tMessage({...config,  content:"警报提醒", type: 'danger'}) }
const showMsgEmphasis=()=>{ $tMessage({...config,  content:"着重提醒", type: 'emphasis',onClose:showMsgCallback}) }

const showMsgTL=()=>{ $tMessage({...config,  duration:3000, content:"消息提醒", type: 'info',position:"top-left" }) }
const showMsgTC=()=>{ $tMessage({...config,  duration:3000, content:"重要提醒", type: 'primary',position:"top-center" }) }
const showMsgTR=()=>{ $tMessage({...config,  duration:3000, content:"成功提醒", type: 'success',position:"top-right" }) }
const showMsgBL=()=>{ $tMessage({...config,  duration:3000, content:"警告提醒", type: 'warning',position:"bottom-left" }) }
const showMsgBC=()=>{ $tMessage({...config,  duration:3000, content:"警报提醒", type: 'danger',position:"bottom-center" }) }
const showMsgBR=()=>{ $tMessage({...config,  duration:3000, content:"自定义图标", icon:"tui-icon tis-star",position:"bottom-right" }) }

const changeMessageConfig=()=>{
  $attentionConfig.value.message.position="top-right";
  $attentionConfig.value.message.duration=5000;
  $attentionConfig.value.message.offset=30;
}

const closeAllMessage=()=>{
  $tMessageCloseAll();
}


//---------------------------Notification------------------------------

// watch(()=>$aNotification.value.counter,(val)=>{
//   console.log("NotificationCounter",val);
// })

const showNotInfo=()=>{ $tNotify({...config, duration:2000,  content:"消息提醒A", type: 'info',grouping:true }) }
const showNotPrimary=()=>{ $tNotify({...config, duration:2000,  content:"重要提醒A", type: 'primary', }) }
const showNotSuccess=()=>{ $tNotify({...config, duration:2000,  content:"成功提醒A", type: 'success', }) }
const showNotWarning=()=>{ $tNotify({...config, duration:2000,  content:"警告提醒A", type: 'warning', }) }
const showNotDanger=()=>{ $tNotify({...config, duration:2000,  content:"警报提醒A", type: 'danger' }) }
const showNotEmphasis=()=>{ $tNotify({...config, duration:2000, content:"着重提醒A", type: 'emphasis', showClose:false,}) }

const showNotTL=()=>{ $tNotify({...config,  duration:3000, content:"消息提醒", type: 'info',position:"top-left" }) }
const showNotTC=()=>{ $tNotify({...config,  duration:3000, content:"重要提醒", type: 'primary',position:"top-center" }) }
const showNotTR=()=>{ $tNotify({...config,  duration:3000, content:"成功提醒", type: 'success',position:"top-right" }) }
const showNotBL=()=>{ $tNotify({...config,  duration:3000, content:"警告提醒", type: 'warning',position:"bottom-left" }) }
const showNotBC=()=>{ $tNotify({...config,  duration:3000, content:"警报提醒", type: 'danger',position:"bottom-center" }) }
const showNotBR=()=>{ $tNotify({...config,  duration:3000, content:"自定义图标", icon:"tui-icon tis-star",position:"bottom-right" }) }

const changeNotificationConfig=()=>{
  $aNotification.value.position="top-right";
  $aNotification.value.duration=15000;
  $aNotification.value.offset=30;
}

const closeAllNotify=()=>{
  $tNotifyCloseAll();
}

//---------------------------Toast------------------------------

const showToastInfo=()=>{ $tToast({...config, hideIcon:true,content:"消息提醒", type: 'info', }) }
const showToastPrimary=()=>{ $tToast({...config,  content:"重要提醒重要提醒重要提醒重要提醒重要提醒重要提醒重要提醒重要提醒", type: 'primary', }) }
const showToastSuccess=()=>{ $tToast({...config,  content:"成功提醒", type: 'success', }) }
const showToastWarning=()=>{ $tToast({...config,  content:"警告提醒", type: 'warning', }) }
const showToastDanger=()=>{ $tToast({...config, title:"警报标题", content:"警报内容警报内容警报内容警报内容，测试内容警报内容警报内容警报内容警报内容，测试内容", type: 'danger' }) }
const showToastEmphasis=()=>{ $tToast({...config, duration:2000, content:"消息提醒", type: 'emphasis',}) }

const changeToastConfig=()=>{
  $aToast.value.duration=15000;
  $aToast.value.offsetX=-100;
  $aToast.value.offsetY=100;
}

const closeToast=()=>{
  $tToastClose();
}



//---------------------------Flash------------------------------
const showFlashInfo=()=>{ $tFlash({...config,  content:"普通提醒", type: 'info', queuePosition:"bottom" }) }
const showFlashPrimary=()=>{ $tFlash({...config,  content:"重要提醒", type: 'primary', queuePosition:"left"}) }
const showFlashSuccess=()=>{ $tFlash({...config,  content:"成功提醒", type: 'success', queuePosition:"right"}) }
const showFlashWarning=()=>{ $tFlash({...config,  content:"警告提醒", type: 'warning', queuePosition:"top"}) }
const showFlashDanger=()=>{ $tFlash({...config,title:"警报标题", content:"带有标题的Flash警报提醒", type: 'danger', queuePosition:"top-left"}) }
const showFlashEmphasis=()=>{ $tFlash({...config, content:"警报提醒Message", type: 'emphasis',aniType:"sudden",appearance:"message", queuePosition:"bottom-right",queueOffset:100 }) }

const changeFlashConfig=()=>{
  $aFlash.value.spreadRadius=50;
  $aFlash.value.blurRadius=100;
  $aFlash.value.appearance="message";
}

const closeFlash=()=>{
  $tFlashClose();
}


</script>
<template>
  <div class="message-demo-wrap">
    <!-- <tempBG/> -->
    <div class="operat-bar">
      <div class="form-group">
        <div class="label">调试信息</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.debug" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">Type色调</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.tone" :options="state.toneOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label">半透明</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.transparent" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group" v-if="config.transparent">
        <div class="label">背景模糊</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.backgroundBlur" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group" v-if="config.transparent">
        <div class="label">显示关闭</div>
        <TuiRadio v-bind="state.radioCfg" v-model="config.showClose" :options="state.boolOpt"></TuiRadio>
      </div>
      <div class="form-group">
        <div class="label current-channel" v-if="$aDispatcher.currentChannel">当前消息类型: {{ $aDispatcher.currentChannel }}</div>
        <div class="queue-length" v-if="$aDispatcher.queue.length>0">总消息队列: {{ $aDispatcher.queue.length }}</div>
      </div>
      
      
    </div>

    <div class="test-btns">
      <TuiButton @click="changeMessageConfig">修改Message全局参数</TuiButton>
      <TuiButton @click="closeAllMessage">关闭所有Message</TuiButton>
      <TuiButton @click="changeNotificationConfig">修改Notification全局参数</TuiButton>
      <TuiButton @click="closeAllNotify">关闭所有Notification</TuiButton>
      <TuiButton @click="changeToastConfig">修改Toast全局参数</TuiButton>
      <TuiButton @click="closeToast">关闭Toast</TuiButton>
      <TuiButton @click="changeFlashConfig">修改Flash全局参数</TuiButton>
      <TuiButton @click="closeFlash">关闭Flash并清空队列</TuiButton>
      
    </div>
    
    <div class="demo-inner">
      
      <div class="demo-group">
        <div class="group-title">Message 常规</div>
        <div class="group-inner">
          <div class="item" @click="showMsgInfo">Info</div>
          <div class="item" @click="showMsgPrimary">Primary</div>
          <div class="item" @click="showMsgSuccess">Success</div>
          <div class="item" @click="showMsgWarning">Warning</div>
          <div class="item" @click="showMsgDanger">Danger</div>
          <div class="item" @click="showMsgEmphasis">Emphasis Callback</div>
        </div>
      </div>
      
      <div class="demo-group">
        <div class="group-title">Message 弹出位置</div>
        <div class="group-inner">
          <div class="item" @click="showMsgTL">TopLeft</div>
          <div class="item" @click="showMsgTC">TopCenter</div>
          <div class="item" @click="showMsgTR">TopRight</div>
          <div class="item" @click="showMsgBL">BottomLeft</div>
          <div class="item" @click="showMsgBC">BottomCenter</div>
          <div class="item" @click="showMsgBR">BottomRight</div>
        </div>
      </div>

      <div class="demo-group">
        <div class="group-title">Toast 常规</div>
        <div class="group-inner">
          <div class="item" @click="showToastInfo">Info</div>
          <div class="item" @click="showToastPrimary">Primary</div>
          <div class="item" @click="showToastSuccess">Success</div>
          <div class="item" @click="showToastWarning">Warning</div>
          <div class="item" @click="showToastDanger">Danger</div>
          <div class="item" @click="showToastEmphasis">Info Close</div>
        </div>
      </div>

      <div class="demo-group">
        <div class="group-title">Notification 常规</div>
        <div class="group-inner">
          <div class="item" @click="showNotInfo">Info</div>
          <div class="item" @click="showNotPrimary">Primary</div>
          <div class="item" @click="showNotSuccess">Success</div>
          <div class="item" @click="showNotWarning">Warning</div>
          <div class="item" @click="showNotDanger">Danger</div>
          <div class="item" @click="showNotEmphasis">Emphasis Close Hide</div>
        </div>
      </div>
      
      <div class="demo-group">
        <div class="group-title">Notification 弹出位置</div>
        <div class="group-inner">
          <div class="item" @click="showNotTL">TopLeft</div>
          <div class="item" @click="showNotTC">TopCenter</div>
          <div class="item" @click="showNotTR">TopRight</div>
          <div class="item" @click="showNotBL">BottomLeft</div>
          <div class="item" @click="showNotBC">BottomCenter</div>
          <div class="item" @click="showNotBR">BottomRight</div>
        </div>
      </div>
      
      <div class="demo-group">
        <div class="group-title">Flash 常规</div>
        <div class="group-inner">
          <div class="item" @click="showFlashInfo">Info</div>
          <div class="item" @click="showFlashPrimary">Primary</div>
          <div class="item" @click="showFlashSuccess">Success</div>
          <div class="item" @click="showFlashWarning">Warning</div>
          <div class="item" @click="showFlashDanger">Danger</div>
          <div class="item" @click="showFlashEmphasis">Emphasis Message</div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<style lang="less">
.message-demo-wrap{ min-height:100%; width:1400px; margin:0 auto;  padding:40px; 
  .operat-bar{.flex(30px); padding:0 20px; flex-wrap: wrap;
    .form-group{
      .label{margin:10px 0;}
    }
  }
  .test-btns{ padding: 20px; 
    button{line-height: 30px; padding:0 10px; margin:0 10px 0 0; font-size: 12px;}
  }

  .demo-inner{.grid(3,0,50px); padding:0 20px;
    .demo-group{ margin:0 0 20px 0; 
      .group-title{padding:10px; .bdb(var(--common-bd)); margin:0 0 20px 0;}
      .group-inner{.grid(3,2,20px); height:150px;}
    }
    .item{.bdra(5px); .centerFlex; text-align: center; cursor: pointer; .bd(var(--button-bd)); .bgc(var(--button-bg));
      &:hover{.bd(var(--button-bd_hov)); .bgc(var(--button-bg_hov));}
    }

  }
}
</style>

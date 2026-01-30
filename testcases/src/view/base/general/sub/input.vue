<script setup>
import { onMounted, reactive } from 'vue'
defineOptions({
  name: 'inputDemo',
})
const state=reactive({
  input1:"",
  input2:"",
  input3:"",
  input4:"",
  input5:"",
  input6:"",
  inputGroup:[
    {label:"输入框",common:{},children:[
      {label:"默认",value:"",config:{}},
      {label:"可清空",value:"",config:{clearable:true}},
      {label:"最大长度",value:"",config:{maxLength:30,clearable:true}},
      {label:"图标",value:"",config:{icon:"tui-icon ti-search"}},
      {label:"前图标",value:"",config:{prefixIcon:"tui-icon ti-search"}},
      {label:"后图标",value:"",config:{suffixIcon:"tui-icon ti-cube"}},
      {label:"禁用",value:"Default Value",config:{icon:"tui-icon ti-user-circle",disabled:true}},
      {label:"只读",value:"this is a readonly input",config:{icon:"tui-icon ti-user-circle",readonly:true}},
      {label:"尺寸大",value:"",config:{icon:"tui-icon ti-search",size:"large"}},
      {label:"尺寸小",value:"",config:{icon:"tui-icon ti-search",size:"small"}},
    ]},
    {label:"密码输入",common:{type:'password'},children:[
      {label:"默认",value:"",config:{}},
      {label:"可清空",value:"",config:{clearable:true}},
      {label:"最大长度",value:"",config:{maxLength:30,clearable:true}},
      {label:"图标",value:"",config:{icon:"tui-icon ti-lock"}},
      {label:"前图标",value:"",config:{prefixIcon:"tui-icon ti-lock"}},
      {label:"后图标",value:"",config:{suffixIcon:"tui-icon ti-lock"}},
      {label:"禁用",value:"",config:{icon:"tui-icon ti-lock",disabled:true}},
      {label:"只读",value:"",config:{icon:"tui-icon ti-lock",readonly:true}},
      {label:"尺寸大",value:"",config:{icon:"tui-icon ti-lock",size:"large"}},
      {label:"尺寸小",value:"",config:{icon:"tui-icon ti-lock",size:"small"}},
    ]},
    {label:"数字输入",common:{type:'number'},children:[
      {label:"默认",value:1,config:{}},
      {label:"最大5 最小0",value:1,config:{min:0, max:5}},
      {label:"步进5",value:0,config:{step:5}},
      {label:"精度2 步进0.05",value:0,config:{step:0.05, precision:2}},
      {label:"禁用",value:0,config:{disabled:true}},
      {label:"只读",value:0,config:{readonly:true}},
      {label:"尺寸大",value:0,config:{icon:"tui-icon ti-lock",size:"large"}},
      {label:"尺寸小",value:0,config:{icon:"tui-icon ti-lock",size:"small"}},
      
    ]},
    {label:"Textarea",common:{type:'textarea'},children:[
      {label:"最大长度",value:"",config:{maxLength:30,}},
      {label:"rows",value:"",config:{rows:5}},
      {label:"只读",value:"this is a readonly textareathis is a readonly input",config:{readonly:true}}, {label:"禁用",value:"",config:{disabled:true}},
    ]},
    
    
  ]
})

const toggleAreaLoading=()=>{
  state.loadingAreaShow=!state.loadingAreaShow
}
const toggleFullLoading=()=>{
  state.loadingFullShow=!state.loadingFullShow
  timer.s("hideLoading",()=>{
    state.loadingFullShow=false
  },3000)
}

onMounted(() => {
  
})
</script>
<template>
  <div class="input-demo-wrap">
    <!-- <el-input readonly v-model="state.testinput"></el-input>
    <el-input type="textarea" readonly v-model="state.testinput"></el-input> -->
    <template v-for="(group,indexG) in state.inputGroup">
      <div class="group-title">{{ group.label }}</div>
      <div class="demo-inner" >
        
        <form class="demo-box" v-for="(iptEl,indexIpt) in group.children">
          <div class="demo-title">{{ iptEl.label }}</div>
          <TuiInput v-model="iptEl.value" v-bind="{...group.common,...iptEl.config}" />
        </form>
        
      </div>
      
    </template>
    <div class="group-title">组合</div>
    <div class="demo-inner" >
      
      <div class="demo-box">
        <div class="demo-title">前缀</div>
        <TuiInput v-model="state.input1" icon="tui-icon ti-search">
          <template #prefix>Http://</template>
        </TuiInput>
      </div>
      
      <div class="demo-box">
        <div class="demo-title">后缀</div>
        <TuiInput v-model="state.input2" icon="tui-icon ti-search">
          <template #suffix>.com</template>
        </TuiInput>
      </div>
      
      <div class="demo-box">
        <div class="demo-title">后缀</div>
        <TuiInput v-model="state.input3" icon="tui-icon ti-search">
          <template #prefix>
            <TuiButton>提交</TuiButton>
          </template>
        </TuiInput>
      </div>
      
      <div class="demo-box">
        <div class="demo-title">后缀</div>
        <TuiInput v-model="state.input4" icon="tui-icon ti-search">
          <template #suffix>
            <TuiButton>提交</TuiButton>
          </template>
        </TuiInput>
      </div>
      
      <div class="demo-box">
        <div class="demo-title">前后缀</div>
        <TuiInput v-model="state.input5">
          <template #prefix>
            <TuiButton type="primary">提交</TuiButton>
          </template>
          <template #suffix>
            <TuiButton type="danger" @click.stop="()=>console.log('delete')">删除</TuiButton>
          </template>
        </TuiInput>
      </div>

    </div>
  </div>
</template>
<style lang="less">
.input-demo-wrap{ min-height:100%; width:1400px; margin:0 auto; padding:20px 20px 100px 20px; .por;
  .group-title{ .bdb(var(--common-bd)); font-size: 16px;font-weight: bold; margin:0 20px; line-height: 1.5;}
  .demo-inner{.flex(40px); padding:20px; flex-wrap: wrap; margin:0 0 50px 0; 
    .demo-box{width:calc(25% - 30px); .por;
      .demo-title{padding:10px;}
    }
  }
}
</style>

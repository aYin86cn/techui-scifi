<script setup>
import { onMounted, reactive } from 'vue'
const state=reactive({
  actSingle:"D",
  actMultiple:['A','C'],
  options:[
    { value: 'A', label: '选项A' },
    { value: 'B', label: '选项b' },
    { value: 'C', label: '选项C',disabled:true },
    { value: 'D', label: '选项D' },
    { value: 'E', label: '选项E' },
    { value: 'F', label: '选项F' },
    { value: 'G', label: '加长的选项G加长的选项G加长的选项G加长的选项G加长的选项G' },
    { value: 'H', label: '选项H' },
    { value: 'I', label: '元素I' },
    { value: 'J', label: '元素J' },
    { value: 'K', label: '元素K' },
    { value: 'L', label: '元素L' },
  ],
  inputGroup:[
    {label:"单选",common:{},children:[
      {label:"默认",value:"",config:{}},
      {label:"可筛选",value:"",config:{filterable:true}},
      {label:"可清空",value:"",config:{clearable:true}},
      {label:"offset",value:"",config:{offset:50}},
      {label:"宽度适配input框",value:"",config:{fitInputWidth:false}},
      {label:"禁用",value:"",config:{disabled:true}},
      {label:"图标",value:"",config:{icon:"tui-icon ti-star"}},
      {label:"图标SVG",value:"",config:{icon:"tui-icon ti-search"}},
      // {label:"图标",value:"",config:{icon:"tui-icon ti-search"}},
      // {label:"前图标",value:"",config:{prefixIcon:"tui-icon ti-search"}},
      // {label:"后图标",value:"",config:{suffixIcon:"tui-icon ti-cube"}},
      // {label:"禁用",value:"",config:{icon:"tui-icon ti-user-circle",disabled:true}},
      // {label:"只读",value:"this is a readonly input",config:{icon:"tui-icon ti-user-circle",readonly:true}},
      // {label:"尺寸大",value:"",config:{icon:"tui-icon ti-search",size:"large"}},
      // {label:"尺寸小",value:"",config:{icon:"tui-icon ti-search",size:"small"}},
    ]},
    {label:"多选",common:{},children:[
      {label:"多选",value:"",config:{multiple:true}},
      {label:"可筛选",value:"",config:{multiple:true,filterable:true,clearable:true,placeholder:"自定义的placeholder"}},
      {label:"可清空",value:"",config:{multiple:true,clearable:true}},
      {label:"多选限制",value:"",config:{multiple:true,multipleLimit:4}},
      {label:"多选折叠-1",value:"",config:{multiple:true,maxCollapseTags:1}},
      {label:"多选折叠-4",value:"",config:{multiple:true,maxCollapseTags:4}},
      {label:"不折叠选项",value:"",config:{multiple:true,collapseTags:false}},
      {label:"宽度不适配input框",value:"",config:{fitInputWidth:false,multiple:true,maxCollapseTags:4}},
      {label:"禁用",value:"",config:{disabled:true,multiple:true}},
      {label:"图标",value:"",config:{multiple:true,icon:"tui-icon ti-star"}},
    ]},
    {label:"尺寸",common:{},children:[
      {label:"小",value:"",config:{clearable:true,size:"small"}},
      {label:"大",value:"",config:{filterable:false,size:"large"}},
      {label:"小",value:"",config:{clearable:true,size:"small",icon:"tui-icon ti-star"}},
      {label:"大",value:"",config:{filterable:false,size:"large",icon:"tui-icon ti-search"}},
      {label:"多选小",value:"",config:{size:"small",multiple:true}},
      // {label:"常规",value:"",config:{filterable:false}},
      // {type:"blank"},
      {label:"多选大",value:"",config:{size:"large",multiple:true}},
      {label:"多选小",value:"",config:{size:"small",multiple:true,icon:"tui-icon ti-star"}},
      {label:"多选大",value:"",config:{size:"large",multiple:true,icon:"tui-icon ti-search"}},
      // {label:"多选常规",value:"",config:{multiple:true}},
      // {label:"图标",value:"",config:{icon:"tui-icon ti-search"}},
      // {label:"前图标",value:"",config:{prefixIcon:"tui-icon ti-search"}},
      // {label:"后图标",value:"",config:{suffixIcon:"tui-icon ti-cube"}},
      // {label:"禁用",value:"",config:{icon:"tui-icon ti-user-circle",disabled:true}},
      // {label:"只读",value:"this is a readonly input",config:{icon:"tui-icon ti-user-circle",readonly:true}},
      // {label:"尺寸大",value:"",config:{icon:"tui-icon ti-search",size:"large"}},
      // {label:"尺寸小",value:"",config:{icon:"tui-icon ti-search",size:"small"}},
    ]},
  ]
})

const filterMethod=(option,text)=>{
  return option.value.includes(text)
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
        <div class="demo-box" v-for="(iptEl,indexIpt) in group.children">
          <div class="demo-title">{{ iptEl.label }}</div>
          <TuiSelect v-if="iptEl.type!='blank'&&!iptEl.config.multiple" :options="state.options" v-model="state.actSingle" v-bind="{...group.common,...iptEl.config}"  />
          <TuiSelect v-if="iptEl.type!='blank'&&iptEl.config.multiple" :options="state.options" v-model="state.actMultiple" v-bind="{...group.common,...iptEl.config}"  />
        </div>
        
      </div>
      
    </template>
    <div class="group-title">Slot传入item</div>
    <div class="demo-inner" >
      
      <div class="demo-box">
        <div class="demo-title">Slot 单选</div>
        <TuiSelect filterable v-model="state.actSingle" >
          <TuiOption v-for="(option, index) in state.options" 
            :key="index"
            :value="option.value"
            :label="option.label"
            :disabled="option.disabled"
          />
        </TuiSelect>
      </div>
      <div class="demo-box">
        <div class="demo-title">Slot 多选</div>
        <TuiSelect multiple filterable v-model="state.actMultiple" >
          <TuiOption v-for="(option, index) in state.options" 
            :key="index"
            :value="option.value"
            :label="option.label"
            :disabled="option.disabled"
          />
        </TuiSelect>
      </div>
      <div class="demo-box">
        <div class="demo-title">Slot 多选 外部FilterMethod</div>
        <TuiSelect multiple filterable filterPlaceholder="过滤Value(区分大小写)" :filterMethod="filterMethod" v-model="state.actMultiple" >
          <TuiOption v-for="(option, index) in state.options" 
            :key="index"
            :value="option.value"
            :label="option.label"
            :disabled="option.disabled"
          />
        </TuiSelect>
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
      .ant-input-wrapper{width: 100%;}
    }
  }
}
</style>

<script setup>
import { $c } from "@techui/colors";
import { reactive, toRefs } from 'vue';
const state=reactive({
  checkedColorSet:[],
  checkedTop:[],
  checkedRight:[],
  checkedBottom:[],
  checkedLeft:[],
  
  checkConfigTop:{ active:0,defaultIcon:false, 
    items:[
      {label:"LightBlue",colors:[$c.bll5,$c.bll1]},
      {label:"LightContrast",colors:[$c.bll6,$c.gyl5]},
      {label:"DarkBlue",colors:[$c.gyd1,$c.gyr5]},
    ],
  },
  checkConfigLeft:{ active:0,defaultIcon:false, 
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
    ]
  },
  checkConfigRight:{ active:0, direction:"v",
    options:[
    {label:"Item1",icon:["tui-icon ti-star","tui-icon tis-star"]},
    {label:"Item2",icon:["tui-icon ti-file","tui-icon tis-file"]},
    ]
  },

  checkConfigLeftSmall:{ active:0, defaultIcon:false,
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
    ]
  },
  checkConfigRightSmall:{ active:0, direction:"v",defaultIcon:false,
    options:[
      {label:"Item1",icon:"tui-icon ti-bell"},
      {label:"Item2",icon:"tui-icon ti-star"},
    ]
  },

  checkConfigBottom:{ active:0,
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
      {label:"Item3",disabled:true},
    ]
  },
  //---------------按钮-plain类型

  checkConfigBtnPlainTop:{ active:0, appearance:"buttonPlain", separable:true,
    options:[
      {label:"Item1"},
      {label:"Item2"},
      {label:"Item3"},
    ]
  },
  checkConfigBtnPlainLeft:{ active:0, appearance:"buttonPlain",defaultIcon:false,direction:"v",disabled:true,
    options:[
      {label:"Item1"},
      {label:"Item2"},
    ]
  }, 
  checkConfigBtnPlainRight:{ active:0, appearance:"buttonPlain", direction:"v",separable:true,defaultIcon:false,
    options:[
      {label:"Item1",icon:"tui-icon ti-bell"},
      {label:"Item2",icon:"tui-icon ti-star"},
    ]
  },
  checkConfigBtnPlainBottom:{ active:0, appearance:"buttonPlain",itemMaxWidth:200,defaultIcon:false,
    options:[
      {label:"Item1",icon:["tui-icon ti-star","tui-icon tis-star"]},
      {label:"Item2 This is an English text for testing purposes.",icon:["tui-icon ti-file","tui-icon tis-file"]},
      {label:"Item3",icon:["tui-icon ti-user","tui-icon tis-user"]},
    ]
  },

  //---------------按钮类型
  checkConfigBtnTop:{ active:0, size:"large", appearance:"button",separable:true,
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
      {label:"Item3"},
      {label:"Item4"},
    ]
  },

  checkConfigBtnLeft:{ active:0, size:"large", appearance:"button",direction:"v",defaultIcon:false,
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
    ]
  },
  
  checkConfigBtnRight:{ active:0, size:"large", appearance:"button", direction:"v",separable:true,defaultIcon:false,
    options:[
      {label:"Item1",icon:"tui-icon ti-bell"},
      {label:"Item2",icon:"tui-icon ti-star"},
    ]
  },
  
  checkConfigBtnBottom:{ active:0, size:"large", appearance:"button",itemMaxWidth:200,defaultIcon:false,
    options:[
      {label:"Item1",icon:["tui-icon ti-star","tui-icon tis-star"]},
      {label:"Item2 This is an English text for testing purposes.",icon:["tui-icon ti-file","tui-icon tis-file"]},
      {label:"Item3",icon:["tui-icon ti-user","tui-icon tis-user"],disabled:true},
    ]
  },
  

  
})
const checkCallBack=(value)=>{
  console.log("checkCallBack",value);
}



const {
  checkConfigTop,
  checkConfigLeft,
  checkConfigRight,
  checkConfigBottom,
  checkConfigLeftSmall,
  checkConfigRightSmall,

  checkConfigBtnTop,
  checkConfigBtnLeft,
  checkConfigBtnRight,
  checkConfigBtnBottom,

  checkConfigBtnPlainTop,
  checkConfigBtnPlainLeft,
  checkConfigBtnPlainRight,
  checkConfigBtnPlainBottom,

  checkedColorSet,
  checkedTop, 
  checkedRight, 
  checkedBottom, 
  checkedLeft,
}=toRefs(state)

</script>
<template>
  <div class="check-demo-wrap">
    <div class="check-demo-inner">
      <div class="check-demo-box">
        <div class="demo-title">默认</div>
        <TuiCheckbox class="check-demo-theme-top" @change="checkCallBack" v-model="checkedColorSet" v-bind="checkConfigTop" >
          <TuiCheckboxItem class="theme-item" :icon="item.icon" :value="item.label" v-for="(item,index) in checkConfigTop.items">
            <TuiPoptip :content="`${item.label}`" placement="top">
              <div class="color-view">
                <i class="tui-icon ti-check"></i>
                <div class="color-item" :style="`background-color:${color}`" v-for="(color,indexc) in item.colors"></div>
              </div>
            </TuiPoptip>
          </TuiCheckboxItem>
        </TuiCheckbox>
        <TuiCheckbox class="check-demo-left" @change="checkCallBack" v-model="checkedLeft" v-bind="checkConfigLeft"></TuiCheckbox>
        <TuiCheckbox class="check-demo-right" @change="checkCallBack" v-model="checkedRight" v-bind="checkConfigRight" textDirection="v"></TuiCheckbox>
        <TuiCheckbox class="check-demo-bottom" v-model="checkedBottom" v-bind="checkConfigBottom"></TuiCheckbox>
      </div>

      <div class="check-demo-box">
        <div class="demo-title">默认-小</div>
        <TuiCheckbox class="check-demo-top" @change="checkCallBack" v-model="checkedColorSet" v-bind="checkConfigTop" :defaultIcon="true" size="small">
          <TuiCheckboxItem :icon="item.icon" :value="item.label" v-for="(item,index) in checkConfigTop.items">{{ item.label }}</TuiCheckboxItem>
        </TuiCheckbox>
        <TuiCheckbox class="check-demo-left" @change="checkCallBack" v-model="checkedLeft" v-bind="checkConfigLeftSmall" size="small"></TuiCheckbox>
        <TuiCheckbox class="check-demo-right" @change="checkCallBack" v-model="checkedRight" v-bind="checkConfigRightSmall" size="small"></TuiCheckbox>
        <TuiCheckbox class="check-demo-bottom" @change="checkCallBack" v-model="checkedBottom" v-bind="checkConfigBottom" size="small"></TuiCheckbox>
      </div>
      
      <div class="check-demo-box">
        <div class="demo-title">按钮-plain</div>
        <TuiCheckbox class="check-demo-top" @change="checkCallBack" v-model="checkedTop"  v-bind="checkConfigBtnPlainTop"></TuiCheckbox>
        <TuiCheckbox class="check-demo-left" @change="checkCallBack" v-model="checkedLeft" v-bind="checkConfigBtnPlainLeft"></TuiCheckbox>
        <TuiCheckbox class="check-demo-right" @change="checkCallBack" v-model="checkedRight" v-bind="checkConfigBtnPlainRight" textDirection="v"></TuiCheckbox>
        <TuiCheckbox class="check-demo-bottom" @change="checkCallBack" v-model="checkedBottom" v-bind="checkConfigBtnPlainBottom"></TuiCheckbox>
      </div>
      <div class="check-demo-box">
        <div class="demo-title">按钮-plain-小</div>
        <TuiCheckbox class="check-demo-top" @change="checkCallBack" v-model="checkedTop"  v-bind="checkConfigBtnPlainTop" size="small"></TuiCheckbox>
        <TuiCheckbox class="check-demo-left" @change="checkCallBack" v-model="checkedLeft" v-bind="checkConfigBtnPlainLeft" size="small"></TuiCheckbox>
        <TuiCheckbox class="check-demo-right" @change="checkCallBack" v-model="checkedRight" v-bind="checkConfigBtnPlainRight" size="small"></TuiCheckbox>
        <TuiCheckbox class="check-demo-bottom" @change="checkCallBack" v-model="checkedBottom" v-bind="checkConfigBtnPlainBottom" size="small"></TuiCheckbox>
      </div>

      <div class="check-demo-box">
        <div class="demo-title">按钮-大</div>
        <TuiCheckbox class="check-demo-top" @change="checkCallBack" v-model="checkedTop" v-bind="checkConfigBtnTop"></TuiCheckbox>
        <TuiCheckbox class="check-demo-left" @change="checkCallBack" v-model="checkedLeft" v-bind="checkConfigBtnLeft"></TuiCheckbox>
        <TuiCheckbox class="check-demo-right" @change="checkCallBack" v-model="checkedRight" v-bind="checkConfigBtnRight" textDirection="v"></TuiCheckbox>
        <TuiCheckbox class="check-demo-bottom" @change="checkCallBack" v-model="checkedBottom" v-bind="checkConfigBtnBottom"></TuiCheckbox>
      </div>
      <div class="check-demo-box">
        <div class="demo-title">按钮-小</div>
        <TuiCheckbox class="check-demo-top" @change="checkCallBack" v-model="checkedTop" v-bind="checkConfigBtnTop" size="small"></TuiCheckbox>
        <TuiCheckbox class="check-demo-left" @change="checkCallBack" v-model="checkedLeft" v-bind="checkConfigBtnLeft" size="small"></TuiCheckbox>
        <TuiCheckbox class="check-demo-right" @change="checkCallBack" v-model="checkedRight" v-bind="checkConfigBtnRight" size="small"></TuiCheckbox>
        <TuiCheckbox class="check-demo-bottom" @change="checkCallBack" v-model="checkedBottom" v-bind="checkConfigBtnBottom" size="small"></TuiCheckbox>
      </div>
      

    </div>
  </div>
</template>
<style lang="less">
.check-demo-wrap{ min-height:100%; width:1400px; margin:0 auto ; padding:20px; 
  .check-demo-inner{.flex(40px); padding:20px; flex-wrap: wrap; margin:0 0 50px 0;
    .check-demo-box{width:calc(50% - 20px); .por;.bgc(var(--common-bg));  .bd(var(--common-bd)); .bdra(10px); min-height:300px;
      // &.check-demo-box-v{width:calc(33.33% - 28px); min-height:500px;}
      .check-demo-top{.poa; left:120px; right:120px; top:20px; }
      .check-demo-left{.poa; left:20px; bottom:60px; top:60px;}
      .check-demo-right{.poa;right:20px; bottom:60px; top:60px;}
      .check-demo-bottom{.poa; left:120px; right:120px; bottom:20px;}
      .demo-title{.centerAbsolute;}
      .tui-checkbox{justify-content: center;}
    }
  }
  .check-demo-theme-top{.poa; left:120px; right:120px; top:20px; 
    .theme-item{padding:0 2px;
      .poptip-wrap{height: 36px;}
      .color-view{.por; width:36px; opacity: 1; height: 36px; .bxs(10%); .bdra(5px); overflow: hidden;
        .tui-icon{.centerAbsolute; font-size:24px; .fc(@wh); opacity: 0;}
        .color-item{height:50%;  width: 100%;}
      }
      &.is-active{
        .color-view{.tui-icon{opacity: 1;}}
      }
    }
  }
}
</style>

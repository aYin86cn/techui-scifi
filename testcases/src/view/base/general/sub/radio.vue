<script setup>
import { $c } from "@techui/colors";
import { reactive, toRefs } from 'vue';
const state=reactive({
  activeTop:0,
  activeRight:0,
  activeBottom:0,
  activeLeft:0,
  
  radioConfigTop:{ active:0,defaultIcon:false, 
    items:[
      {label:"LightBlue",colors:[$c.bll5,$c.bll1]},
      {label:"LightContrast",colors:[$c.bll6,$c.gyl5]},
      {label:"DarkBlue",colors:[$c.gyd1,$c.gyr5]},
    ],
  },
  radioConfigLeft:{ active:0,defaultIcon:false, 
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
    ]
  },
  radioConfigRight:{ active:0, direction:"v",
    options:[
      {label:"Item1",icon:["tui-icon ti-star","tui-icon tis-star"]},
      {label:"Item2",icon:["tui-icon ti-file","tui-icon tis-file"]},
    ]
  },

  radioConfigLeftSmall:{ active:0, defaultIcon:false,
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
    ]
  },
  radioConfigRightSmall:{ active:0, direction:"v",defaultIcon:false,
    options:[
      {label:"Item1",icon:"tui-icon ti-bell"},
      {label:"Item2",icon:"tui-icon ti-book"},
    ]
  },

  radioConfigBottom:{ active:0,defaultIcon:true,
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
      {label:"Item3",disabled:true},
    ]
  },

  

  //---------------按钮-plain类型

  radioConfigCardTop:{ active:0, appearance:"buttonPlain", separable:true,
    options:[
      {label:"Item1"},
      {label:"Item2"},
      {label:"Item3"},
    ]
  },
  radioConfigCardLeft:{ active:0, appearance:"buttonPlain",direction:"v",defaultIcon:false,disabled:true,
    options:[
      {label:"Item1"},
      {label:"Item2"},
    ]
  }, 
  radioConfigCardRight:{ active:0, appearance:"buttonPlain", direction:"v", separable:true,defaultIcon:false,
    options:[
      {label:"Item1",icon:"tui-icon ti-bell"},
      {label:"Item2",icon:"tui-icon ti-star"},
    ]
  },
  radioConfigCardBottom:{ active:0, appearance:"buttonPlain",itemMaxWidth:200,defaultIcon:false,
    options:[
      {label:"Item1",icon:["tui-icon ti-star","tui-icon tis-star"]},
      {label:"Item2 This is an English text for testing purposes.",icon:["tui-icon ti-file","tui-icon tis-file"]},
      {label:"Item3",icon:["tui-icon ti-user","tui-icon tis-user"]},
    ]
  },


  //---------------按钮类型
  radioConfigBtnTop:{ active:0,size:"large", appearance:"button",separable:true,
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
      {label:"Item3"},
    ]
  },

  radioConfigBtnLeft:{ active:0,size:"large", appearance:"button",direction:"v",defaultIcon:false,
    options:[
      {label:"Item1"},
      {label:"Item2 This is an English text for testing purposes."},
    ]
  },
  
  radioConfigBtnRight:{ active:0,size:"large", appearance:"button", direction:"v",separable:true,defaultIcon:false,
    options:[
      {label:"Item1",icon:"tui-icon ti-bell"},
      {label:"Item2",icon:"tui-icon ti-star"},
    ]
  },
  
  radioConfigBtnBottom:{ active:0,size:"large", appearance:"button",defaultIcon:false,itemMaxWidth:200,defaultIcon:false,
    options:[
      {label:"Item1",icon:["tui-icon ti-star","tui-icon tis-star"]},
      {label:"Item2 This is an English text for testing purposes.",icon:["tui-icon ti-file","tui-icon tis-file"]},
      {label:"Item3",icon:["tui-icon ti-user","tui-icon tis-user"],disabled:true},
    ]
  },
  
})
const radioCallBack=(value)=>{
  console.log("radioCallBack",value);
}



const {
  radioConfigTop,
  radioConfigLeft,
  radioConfigRight,
  radioConfigBottom,
  radioConfigLeftSmall,
  radioConfigRightSmall,

  radioConfigBtnTop,
  radioConfigBtnLeft,
  radioConfigBtnRight,
  radioConfigBtnBottom,

  radioConfigCardTop,
  radioConfigCardLeft,
  radioConfigCardRight,
  radioConfigCardBottom,

  activeTop, 
  activeRight, 
  activeBottom, 
  activeLeft,
}=toRefs(state)

</script>
<template>
  <div class="radio-demo-wrap">
    <div class="radio-demo-inner">
      <div class="radio-demo-box">
        <div class="demo-title">默认</div>
        <TuiRadio class="radio-demo-theme-top" @change="radioCallBack" v-model="activeTop" v-bind="radioConfigTop" >
          <TuiRadioItem class="theme-item" :icon="item.icon" :value="index" v-for="(item,index) in radioConfigTop.items">
            <TuiPoptip :content="`${item.label}`" placement="top">
              <div class="color-view">
                <i class="tui-icon ti-check"></i>
                <div class="color-item" :style="`background-color:${color}`" v-for="(color,indexc) in item.colors"></div>
              </div>
            </TuiPoptip>
          </TuiRadioItem>
        </TuiRadio>
        <TuiRadio class="radio-demo-left" @change="radioCallBack" v-model="activeLeft" v-bind="radioConfigLeft"></TuiRadio>
        <TuiRadio class="radio-demo-right" @change="radioCallBack" v-model="activeRight" v-bind="radioConfigRight" textDirection="v"></TuiRadio>
        <TuiRadio class="radio-demo-bottom" v-model="activeBottom" v-bind="radioConfigBottom"></TuiRadio>
      </div>
      
      <div class="radio-demo-box">
        <div class="demo-title">默认-小</div>
        <TuiRadio class="radio-demo-top" @change="radioCallBack" v-model="activeTop" v-bind="radioConfigTop" :defaultIcon="true" size="small">
          <TuiRadioItem :icon="item.icon" :value="index" v-for="(item,index) in radioConfigTop.items">{{ item.label }}</TuiRadioItem>
        </TuiRadio>
        <TuiRadio class="radio-demo-left" @change="radioCallBack" v-model="activeLeft" v-bind="radioConfigLeftSmall" size="small"></TuiRadio>
        <TuiRadio class="radio-demo-right" @change="radioCallBack" v-model="activeRight" v-bind="radioConfigRightSmall" size="small"></TuiRadio>
        <TuiRadio class="radio-demo-bottom" @change="radioCallBack" v-model="activeBottom" v-bind="radioConfigBottom" size="small"></TuiRadio>
      </div>
      
      <div class="radio-demo-box">
        <div class="demo-title">按钮-plain</div>
        <TuiRadio class="radio-demo-top" @change="radioCallBack" v-model="activeTop"  v-bind="radioConfigCardTop"></TuiRadio>
        <TuiRadio class="radio-demo-left" @change="radioCallBack" v-model="activeLeft" v-bind="radioConfigCardLeft"></TuiRadio>
        <TuiRadio class="radio-demo-right" @change="radioCallBack" v-model="activeRight" v-bind="radioConfigCardRight" textDirection="v"></TuiRadio>
        <TuiRadio class="radio-demo-bottom" @change="radioCallBack" v-model="activeBottom" v-bind="radioConfigCardBottom"></TuiRadio>
      </div>
      <div class="radio-demo-box">
        <div class="demo-title">按钮-plain-小</div>
        <TuiRadio class="radio-demo-top" @change="radioCallBack" v-model="activeTop"  v-bind="radioConfigCardTop" size="small"></TuiRadio>
        <TuiRadio class="radio-demo-left" @change="radioCallBack" v-model="activeLeft" v-bind="radioConfigCardLeft" size="small"></TuiRadio>
        <TuiRadio class="radio-demo-right" @change="radioCallBack" v-model="activeRight" v-bind="radioConfigCardRight" size="small"></TuiRadio>
        <TuiRadio class="radio-demo-bottom" @change="radioCallBack" v-model="activeBottom" v-bind="radioConfigCardBottom" size="small"></TuiRadio>
      </div>

      <div class="radio-demo-box">
        <div class="demo-title">按钮-大</div>
        <TuiRadio class="radio-demo-top" @change="radioCallBack" v-model="activeTop" v-bind="radioConfigBtnTop"></TuiRadio>
        <TuiRadio class="radio-demo-left" @change="radioCallBack" v-model="activeLeft" v-bind="radioConfigBtnLeft"></TuiRadio>
        <TuiRadio class="radio-demo-right" @change="radioCallBack" v-model="activeRight" v-bind="radioConfigBtnRight" textDirection="v"></TuiRadio>
        <TuiRadio class="radio-demo-bottom" @change="radioCallBack" v-model="activeBottom" v-bind="radioConfigBtnBottom" ></TuiRadio>
      </div>
      <div class="radio-demo-box">
        <div class="demo-title">按钮-小</div>
        <TuiRadio class="radio-demo-top" @change="radioCallBack" v-model="activeTop" v-bind="radioConfigBtnTop" size="small"></TuiRadio>
        <TuiRadio class="radio-demo-left" @change="radioCallBack" v-model="activeLeft" v-bind="radioConfigBtnLeft" size="small"></TuiRadio>
        <TuiRadio class="radio-demo-right" @change="radioCallBack" v-model="activeRight" v-bind="radioConfigBtnRight" size="small"></TuiRadio>
        <TuiRadio class="radio-demo-bottom" @change="radioCallBack" v-model="activeBottom" v-bind="radioConfigBtnBottom" size="small"></TuiRadio>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.radio-demo-wrap{ min-height:100%; width:1400px; margin:0 auto ; padding:20px; 
  .radio-demo-inner{.flex(40px); padding:20px; flex-wrap: wrap; margin:0 0 50px 0;
    .radio-demo-box{width:calc(50% - 20px); .por; .bgc(var(--common-bg)); .bd(var(--common-bd)); .bdra(10px); min-height:300px;
      .radio-demo-top{.poa; left:120px; right:120px; top:20px; }
      .radio-demo-left{.poa; left:20px; bottom:60px; top:60px;}
      .radio-demo-right{.poa;right:20px; bottom:60px; top:60px;}
      .radio-demo-bottom{.poa; left:120px; right:120px; bottom:20px;}
      .demo-title{.centerAbsolute;}
      .tui-radio{justify-content: center;}
    }
  }
  .radio-demo-theme-top{.poa; left:120px; right:120px; top:20px; 
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

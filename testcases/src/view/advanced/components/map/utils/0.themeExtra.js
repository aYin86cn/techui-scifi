import { $c } from "@techui/colors";
const themes={
  lightBlue:{
    dataA:{
      pin:null,
      pinDot:$c.cbl3,
    },
    dataB:{
      pin:{ hlite:$c.orl1, bg:$c.orl3, fc:$c.bk },
      pinDot:$c.rel2,
    },
    dataC:{
      pin:{ hlite:$c.pul1, bg:$c.inl3, fc:$c.bk },
      pinDot:$c.inl2,
    },
    dataD:{
      pin:{ hlite:$c.pul1, bg:$c.inl3, fc:$c.bk },
      pinDot:$c.wh,
    },
  },
  darkBlue:{
    dataA:{
      pin:null,
      pinDot:$c.cyl3,
    },
    dataB:{
      pin:{ hlite:$c.orl4, bg:$c.rel5, fc:$c.wh },
      pinDot:$c.rel3,
    },
    dataC:{
      pin:{ hlite:$c.pul4, bg:$c.inl5, fc:$c.wh },
      pinDot:$c.pul3,
    },
    dataD:{
      pin:{ hlite:$c.pul3, bg:$c.inl6, fc:$c.wh },
      pinDot:$c.wh,
    },
  },
  darkBlack:{
    dataA:{
      pin:null,
      pinDot:$c.cyl3,
    },
    dataB:{
      pin:{ hlite:$c.orl4, bg:$c.orl5, fc:$c.wh },
      pinDot:$c.orl3,
    },
    dataC:{
      pin:{ hlite:$c.pul3, bg:$c.inl4, fc:$c.wh },
      pinDot:$c.pul3,
    },
    dataD:{
      pin:{ hlite:$c.pul3, bg:$c.inl6, fc:$c.wh },
      pinDot:$c.wh,
    },
  },
}

export default (curTheme)=>{
  if(themes[curTheme]){
    return themes[curTheme]
  }
  return {}
}
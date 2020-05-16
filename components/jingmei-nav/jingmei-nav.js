// components/jingmei-nav/jingmei-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    txt: "煤矿",
    isshow: false,
    choose:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showSheet() {
      if(this.data.isshow==false){
        this.setData({
          isshow:true,
        })
      }else{
        this.setData({
          isshow:false,
        })
      }
    },
    showitem(){
      if (this.data.choose == false) {
        this.setData({
          choose: true
        })
      } else {
        this.setData({
          choose: false
        })
      }
    }
    
  },
  
  
})

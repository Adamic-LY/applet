var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  mixins: [require('../../utils/themeChanged')],
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  golantan: function() {
    wx.navigateTo({
      url: '../../pages/product-lantan/product-lantan',
    })
  },
  gomeijiaoyou: function() {
    wx.navigateTo({
      url: '../../pages/product-meijiaoyou/product-meijiaoyou',
    })
  },
  gojinshumei: function () {
    wx.navigateTo({
      url: '../../pages/product-jinshumei/product-jinshumei',
    })
  }, 
  gowuyanmei: function () {
    wx.navigateTo({
      url: '../../pages/product-wuyanmei/product-wuyanmei',
    })
  },
  gohuagong: function () {
    wx.navigateTo({
      url: '../../pages/product-huagong/product-huagong',
    })
  },
  goshebei: function () {
    wx.navigateTo({
      url: '../../pages/product-shebei/product-shebei',
    })
  },
  changeActindex:function(e){
    this.setData({
      activeIndex:e.currentTarget.dataset.index
    })
    // wx.navigateTo({
    //   url: 'url',
    // })
  }
});
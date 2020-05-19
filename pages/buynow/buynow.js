// pages/buynow/buynow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buynumber: 1,
    ischecked:false,
    ischecked1: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  addbuynumber() {
    this.setData({
      buynumber: this.data.buynumber*1 + 1
    })
  },
  reducebuynumber() {
    if (this.data.buynumber <= 1) {
      this.setData({
        buynumber: 0
      })
    } else {
      this.setData({
        buynumber: this.data.buynumber - 1
      })
    }
  },
  getinputval(e){
    this.setData({
      buynumber: e.detail.value
    })
  },
  changechecked(){
    this.setData({
      ischecked:!this.data.ischecked
    })
  },
  changechecked1() {
    this.setData({
      ischecked1: !this.data.ischecked1
    })
  }
  
})
// pages/buynow/buynow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD

=======
    buynumber: 1,
    ischecked:false,
    ischecked1: false
>>>>>>> 5-15,立即购买页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  onLoad: function (options) {
=======
  onLoad: function(options) {
>>>>>>> 5-15,立即购买页面

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
<<<<<<< HEAD
  onReady: function () {
=======
  onReady: function() {
>>>>>>> 5-15,立即购买页面

  },

  /**
   * 生命周期函数--监听页面显示
   */
<<<<<<< HEAD
  onShow: function () {
=======
  onShow: function() {
>>>>>>> 5-15,立即购买页面

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
<<<<<<< HEAD
  onHide: function () {
=======
  onHide: function() {
>>>>>>> 5-15,立即购买页面

  },

  /**
   * 生命周期函数--监听页面卸载
   */
<<<<<<< HEAD
  onUnload: function () {
=======
  onUnload: function() {
>>>>>>> 5-15,立即购买页面

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
<<<<<<< HEAD
  onPullDownRefresh: function () {
=======
  onPullDownRefresh: function() {
>>>>>>> 5-15,立即购买页面

  },

  /**
   * 页面上拉触底事件的处理函数
   */
<<<<<<< HEAD
  onReachBottom: function () {
=======
  onReachBottom: function() {
>>>>>>> 5-15,立即购买页面

  },

  /**
   * 用户点击右上角分享
   */
<<<<<<< HEAD
  onShareAppMessage: function () {

  }
=======
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
  
>>>>>>> 5-15,立即购买页面
})
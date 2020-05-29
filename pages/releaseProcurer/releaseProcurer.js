// pages/releaseProcurer/releaseProcurer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [],
    tempFiles:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   getApp()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  test(){
    var that=this;
    wx.showActionSheet({
      itemList:[
        "从相册选择",
        "拍照"
      ],
      success:function(res){
        var source="album";
        if(res.tapIndex==1){
          source="camera"
        }
        wx.chooseImage({      
          count:1,
          sourceType:source,
          success:function(res){
            const tempFilePaths =res.tempFilePaths;
            that.setData({
              tempFilePaths:res.tempFilePaths,
              tempFiles:res.tempFiles
            })
          //  wx.uploadFile({
          //    filePath:tempFilePaths[0] ,
          //    name: 'name',
          //    url: 'https://wldpvc.com/api/v1/tpsc',
          //    header:{
          //     "Content-Type": "multipart/form-data"
          //    },
          //    success:function(res){
          //      console.log(res.data)
          //    }
          //  })
          wx.request({
            url: 'https://wldpvc.com/api/v1/tpsc',
            method:'POST',
            header:{
              "Content-Type": "multipart/form-data"
            },
            data:tempFilePaths[0],
            complete:function(res){
              console.log(res)
            }
          })
          }
        })
      }
    })
  }
})
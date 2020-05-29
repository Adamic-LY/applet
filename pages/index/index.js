//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isattention: false,
        videoRecommend:[]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        var that=this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            });
        };
    },
    onShow:function(){
        wx.request({
            url: app.globalData.url+'video_list',
            data:{
              page:'1'
            },
            method:'POST',
            success:(res)=>{
              this.setData({
                videoRecommend:res.data.data
              })
            }
          })
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    gojingmei: function() {
        wx.navigateTo({
            url: '../../pages/index-jingmei/index-jingmei',
        })
    },
    golantan: function() {
        wx.navigateTo({
            url: '../../pages/index-lantan/index-lantan',
        })
    },
    gowuyanmei: function() {
        wx.navigateTo({
            url: '../../pages/index-wuyanmei/index-wuyanmei',
        })
    },
    gojinshumei: function() {
        wx.navigateTo({
            url: '../../pages/index-jinshumei/index-jinshumei',
        })
    },
    gomeijiaoyou: function() {
        wx.navigateTo({
            url: '../../pages/index-meijiaoyou/index-meijiaoyou',
        })
    },
    gohuagong: function() {
        wx.navigateTo({
            url: '../../pages/index-huagong/index-huagong',
        })
    },
    goshebei: function() {
        wx.navigateTo({
            url: '../../pages/index-shebei/index-shebei',
        })
    },
    gowuliu: function() {
        wx.navigateTo({
            url: '../../pages/index-wuliu/index-wuliu',
        })
    },
    attention: function() {
        this.setData({
            isattention: true
        })
    }
    
})
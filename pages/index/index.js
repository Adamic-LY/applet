//index.js
//获取应用实例
const app = getApp()
import {requestIndexClassify,requestIndexLb,requestIndexVideoRecommend} from "../../utils/network"
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isattention: null,
        // 视频推荐列表 
        videoRecommend:null,
        // 轮播列表
        lblist:null,
        // 分类列表
        classifyList:null,
        lbid:1,

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
        // 请求轮播
        requestIndexLb().then(data=>{
            this.setData({
                lblist:data.data
            })
        })
        // 请求首页大分类
        requestIndexClassify().then(data=>{
            this.setData({
                classifyList:data.data
            })
        })
        // 请求首页推荐视频
        requestIndexVideoRecommend(1).then(data=>{
              this.setData({
                videoRecommend:data.data
              })
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
    changeAttention:function(e){
        if(app.globalData.uid){
            var arr=this.data.isattention
            if(this.data.isattention[e.target.dataset.index]==1){
                arr[e.target.dataset.index]=0;
                this.setData({
                  isattention:arr
                })
            }else{
              arr[e.target.dataset.index]=1;
              this.setData({
                  isattention:arr
                })
            }
        }else{
            wx.showModal({
              title:"提示",
              content:"请先登录",
              success(res){
                  if(res.confirm){
                    //   wx.login({
                    //     complete: (res) => {},
                    //   })
                  }else if(res.cancel){
                      
                  }

                  
              }
            })
        }
         
    },
    goswiperDetail(e){
       this.setData({
           lbid:e.currentTarget.id
       })
       wx.navigateTo({
         url: '../../pages/swiper-jingmei/swiper-jingmei?currentid='+this.data.lbid,
       })
    }
})
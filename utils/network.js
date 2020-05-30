const host ="http://wldpvc.com/api/v2"
//获取首页轮播
 function requestIndexLb(){
  return new Promise(function(resolve,reject){
    wx.request({
      url: host + '/lb',
      method:"POST",
      success(res){
        resolve(res.data);
      },
      fail(err){
        reject(err);
      }
    })
  });
 }
// 获取首页大分类
function requestIndexClassify(){
  return new Promise(function(resolve,reject){
    wx.request({
      url: host + '/dfl',
      method:"POST",
      success(res){
        resolve(res.data);
      },
      fail(err){
        reject(err);
      }
    })
  });
}
// 获取首页视频推荐
function requestIndexVideoRecommend(num){
  return new Promise(function(resolve,reject){
    wx.request({
      url: host + '/video_list',
      method:"POST",
      data:{
        page:num
      },
      success(res){
        resolve(res.data);
      },
      fail(err){
        reject(err);
      }
    })
  });
}
export{
  requestIndexClassify,
  requestIndexLb,
  requestIndexVideoRecommend
}
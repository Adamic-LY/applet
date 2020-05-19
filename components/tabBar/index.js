Page({
    mixins: [require('../../utils/themeChanged')],
    data:{
        activeindex:""
    },
    changeactiveindex(e){
      // console.log(e.currentTarget.id)
       this.setData({
         activeindex: e.currentTarget.id
       })
       console.log(this.data.activeindex)
    }
});

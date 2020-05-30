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
        isshowDrop: false,
        activeIndex: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        showDropdown() {
            if (this.data.isshowDropn) {
                this.setData({
                    isshowDrop: false
                })
            } else {
                this.setData({
                    isshowDrop: true
                })
            }
            console.log(this.data.isshowDrop)
        }

    },


})
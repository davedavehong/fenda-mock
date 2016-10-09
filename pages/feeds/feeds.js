//feeds.js
//获取应用实例
var app = getApp()
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        feedList: []
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onPullDownRefreash: function() {
        console.info("xiala")
    },
    onLoad: function() {
        var that = this
        console.log('onLoad')
        wx.request({
            url: 'http://elephstor.com/wxdev/feeds-init.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    feedList: res.data
                })
                try {
                    wx.setStorageSync('feeds', res.data)
                } catch (e) {}
            }
        })
    },
    toPerson: function(e) {
        console.log(e)
        wx.navigateTo({
            url: '../person/person?master=' + e.target.dataset.master
        })
    },
    upper: function() {

    },
    lower: function() {
        console.log("到底啦")
        if (this.requestFlag === false) {
            this.requestFlag = true
            var that = this
            setTimeout(that.getFeeds, 1000)
        }
    },
    requestFlag: false,
    getFeeds: function() {
        var that = this
        wx.request({
            url: 'http://elephstor.com/wxdev/stamp1206.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                var feedsStrorage = wx.getStorageSync('feeds') || []
                feedsStrorage = feedsStrorage.concat(res.data)
                that.setData({
                    feedList: feedsStrorage
                })
                try {
                    wx.setStorageSync('feeds', feedsStrorage)
                } catch (e) {}
                that.requestFlag = false
                console.log("同步成功啦")
            }
        })
    }
})

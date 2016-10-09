//index.js
//获取应用实例
var app = getApp()
Page({
    data: {

    },
    onLoad: function(e) {
        console.log(e)
    },
    toIssue: function(e) {
        console.log(e)
        wx.navigateTo({
            url: '../issue/issue?master=' + e.target.dataset.master
        })
    }
})

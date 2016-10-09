//index.js
//获取应用实例
var app = getApp()
Page({
    data: {},
    onLoad: function(ev) {
        console.log(ev)
    },
    toPerson: function(e) {
        console.log(e)
        wx.navigateTo({
            url: '../person/person?master=' + e.target.dataset.master
        })
    },
    toPerson: function(e) {
        console.log(e)
        wx.navigateTo({
            url: '../person/person?master='+e.currentTarget.dataset.master
        })
    }
})

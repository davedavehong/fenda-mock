##「分答」 Power by 微信小程序


###开发文档和背景阅读

- [官方开发文档](https://mp.weixin.qq.com/debug/wxadoc/dev/)
- [微信小程序设计指南](https://mp.weixin.qq.com/debug/wxadoc/design/)
- [如何把握「微信小程序」这一波红利？ by 小道消息](http://mp.weixin.qq.com/s?src=3&timestamp=1476084572&ver=1&signature=9iql2gUC5J7Ore2nR-vE*H0gMx-FPnvh7tg-59H5QWMBRqIVFVSiJ*1d4P9Ynvx*jzG4x*-cw8VWd0zSXCy5JaC0Og6HZ0HOzPn0si-g2g-cdqwlcc46JxXsfUPfh5U5SjG6Jhwc2gHoN7hj4WkbQ-K-E-w0t6Hrb3YC-d7h*aw=)
- [微信小程序，仅仅是 Web App 么？ by MacTalk](http://mp.weixin.qq.com/s?src=3&timestamp=1476084683&ver=1&signature=rI*ApZSTzdk20BrHyMgaF9eKgT77oadaMtoePyV-BXJIoHrWVpbxGeRnuoYv5B3cIVH2BPb5vx-4WI3JCrZm1m32V17Hqs6W1k7i2xtrU*iDM5FIvOHPSNb1UBzlh6Dfec6G3W2zNN57OXEtYWB*V4ENdABAgw*p*lItuVWU9Hc=)
- [为什么你觉得只开发微信号是不行的？ By 可能吧](https://kenengba.com/post/3517.html)
- [wept](https://github.com/chemzqm/wept)：非常好用的一个「微信小程序」实时开发环境，可以对wxml, wxss, javascript 和页面json自动热更新，炸裂！

**一些想法**：[个人关于「微信小程序」的一些见解](http://elephstor.com/blog/390)

---

###feature

- flex布局

基本使用官方推荐的flex来写布局，结合margin和padding能实现大部分的样式要求。

- 动态刷新

tabBar的第一个菜单「收听」使用了微信提供的组件scroll-view可滚动视图区域，页面加载后从网络上拉取数据填入视图层同时写入Storage（应该就是html5中的localStorage），滚动到底部时触发更新事件，同时设置标志位防止重复触发。应用官方的加载提示动画。

*tip*：滚动视图组件的上下滚动用鼠标滚轮，使用鼠标拖动的话很容易触发下拉事件，哪怕并没有到达顶部。滚动视图组件内不要放与内容无关的元素

- 带参切换页面

点击某个问题进入问题的详情页，同时导航网址带有该问题的编号，具体数据优先从Storage抓取， 查询不到就请求后台。同样的，点击个人头像或者个人简介bar进入个人详情页。（未完全完成）

- template写视图层模板

找人页面的两个榜单均使用template渲染

---
###TODOs

- 滚动到顶部时的动画效果

- 输入搜索关键词时的动态提示

- 完整的带参切换页面功能

###预览图

![预览图](http://elephstor.com/wxdev/catch.gif)

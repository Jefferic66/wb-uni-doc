---
sidebar: auto
title: 目录结构
date: 2021-3-31 12:47:22
tags:
  - 目录结构
---

::: vue
.
├── `api` _(**api请求**)_
|  └── app.js
├── App.vue
├── `common` _(**公用**)_
|  ├── hosts.js _(**host路径配置**)_
|  ├── http.js _(**http request封装**)_
|  ├── `locales` _(**国际化**)_
|  |  ├── en-US.json
|  |  ├── index.js
|  |  └── zh-cn.json
|  ├── `mixin` _(**混入**)_
|  |  ├── base.js _(**基本**)_
|  |  ├── index.js
|  |  ├── refresh.js _(**uni下拉刷新**)_
|  |  └── scrollTop.js _(**监听页面滚动**)_
|  ├── style
|  |  └── animate.css _(**动画样式**)_
|  └── update.js
├── `components` _(**组件文件夹**)_
├── main.js
├── manifest.json
├── package.json
├── `pages` _(**页面**)_
|  └── ...
├── pages.json
├── `static` _(**静态资源**)_
|  ├── `com` _(**组件图片**)_
|  |  ├── `empty` _(**Empty组件**)_
|  |  |  ├── address.png _(**命名：mode.png**)_
|  |  |  └── ...
|  |  └── update _(**自动升级插件**)_
|  ├── `iconfont.css` _(**扩展字体**)_
|  ├── `img` _(**项目图片**)_
|  ├── logo.png
|  └── `tabbar` _(**底部tabbar图片**)_
├── `store`
|  ├── getters.js
|  ├── index.js
|  └── `modules` _(**对api的调用，与api中的文件对应**)_
|     └── app.js
├── uni.scss _(**控制应用的风格，预置了一批scss变量预置**)_
└── vue.config.js _(**配置 webpack 等编译选项**)_
:::

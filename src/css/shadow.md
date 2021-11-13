---
sidebar: auto
title: 阴影
date: 2021-3-31 17:07:13
tags:
  - 阴影
---

### 普通阴影

在指定 view 上添加 .wb-shadow-box 样式即可产生一个灰色的阴影；

```html
<view class="wb-shadow-box" style="width:200px;height:100px"></view>
```

示例：
<div class="wb-shadow-box" style="width:200px;height:100px"></div>


### 继承阴影

继承阴影原理是在指定 view 基础组件上模糊处理后产生一个基于指定 view 的阴影效果；

使用 : 在指定 view 上添加 .wb-shadow 样式即可产生一个继承自主体的阴影；

```html
<view class="wb-shadow wb-bg-green" style="width:200px;height:100px;margin:10px;"></view>
```

示例：
<div class="wb-shadow wb-bg-green" style="width:200px;height:100px;margin:10px;"></div>

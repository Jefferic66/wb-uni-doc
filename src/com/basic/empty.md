---
sidebar: auto
title: Empty 内容为空
date: 2021-4-1 15:03:47
tags:
  - empty
---

## 使用说明

本组件已基于 **多语言** 的实现。  
该组件用于需要加载内容，但是加载的第一页数据就为空，提示一个"没有内容"的场景， 我们精心挑选了十几个场景的图标，方便您使用。

### 基本使用

::: tip
**提示**

字体图标的形式，缺点是字体图标只能是单色的。  
如使用与 `mode` 配套的图片，可以在某中放置按照 \<mode\>.png 进行命名的图片，然后将路径赋值到 **`base-src`**  
本项目目录 **`/static/com/empty/`** 中已放置了对应 `mode` 的 png 图片  
:::

### 内置图标

这些图标已内置，直接通过 mode 参数引用即可

| 名称    | 说明                 | 名称       | 说明         |
| ------- | -------------------- | ---------- | ------------ |
| data    | 数据为空(默认，通用) | car        | 购物车为空   |
| list    | 列表为空(通用)       | page       | 页面不存在   |
| search  | 没有搜索结果         | wifi       | 没有 WiFi    |
| address | 没有收货地址         | permission | 无权限       |
| order   | 订单为空             | history    | 无历史记录   |
| coupon  | 没有优惠券           | news       | 无新闻列表   |
| favor   | 无收藏               | message    | 消息列表为空 |

### mode 配套图片

按照 **`<mode>.png`** 命名方式，在指定路径中放置图片，本项目目录 **`/static/com/empty/`** 中已准备好了所有图片，可以直接使用

### 示例

```html
<wb-empty mode="data" base-src="/static/com/empty/"></wb-empty>
```

## API

### Props

| 属性名     | 说明                                                                                                   | 类型             | 默认值             | 可选值 |
| ---------- | ------------------------------------------------------------------------------------------------------ | ---------------- | ------------------ | ------ |
| color      | 文字颜色                                                                                               | String           | #c0c4cc            | -      |
| text       | 文字提示，在有`mode`无`src`的情况下，<br>text 可以自动匹配对应`mode`的文字，<br>而且是基于多语言的实现 | String           | -                  | -      |
| icon-color | icon 的颜色，字体图标时有效                                                                            | String \| Number | 120                | -      |
| icon-size  | icon 的大小，单位 rpx，如果 src 为图片路径，<br>此参数可以设置图片的尺寸                               | String           | #c0c4cc            | -      |
| icon-style | 图标的样式，可以设置字体大小，颜色等，<br>对象形式，size 和 color 优先级高于此参数                     | Object           | -                  | -      |
| src        | 图标名称或者图片路径(绝对路径)，<br>如定义，`mode`参数会失效                                           | String           | -                  | -      |
| base-src   | 配套`mode`参数的图像文件夹路径                                                                         | String           | /static/com/empty/ | -      |
| font-size  | 提示文字的大小，单位 rpx                                                                               | String \| Number | 28                 | -      |
| mode       | 内置的图标，见[上方说明](./empty.html#内置图标)                                                        | String           | data               |        |
| show       | 是否显示组件                                                                                           | Boolean          | true               | false  |
| margin-top | 组件到上一个元素的间距,单位 rpx                                                                        | String \| Number | 0                  | -      |

### Slot

| 名称 | 说明                               |
| ---- | ---------------------------------- |
| -    | 给组件底部传入 slot 内容，如按钮等 |

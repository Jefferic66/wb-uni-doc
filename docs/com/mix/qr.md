---
sidebar: auto
title: Qr 二维码
date: 2021-4-12 15:18:33
tags:
  - qr
  - 二维码
---

二维码生成器，默认使用组件中的 image 标签显示二维码

- 可以分别设置二维码背景色、前景色、角标色
- 可以设置二维码图标
- 可以设置加载效果

## 使用说明

### 基本使用

```html static
<wb-qr cid="qr2243" text="测试数据" :showLoading="true" spinner="default" />
```

## API

### Props

| 属性名           | 说明                                                                             | 类型    | 默认值  | 可选值 |
| ---------------- | -------------------------------------------------------------------------------- | ------- | ------- | ------ |
| size             | 二维码大小                                                                       | Number  | 256     | -      |
| unit             | 尺寸单位                                                                         | String  | rpx     | px     |
| margin           | 边距                                                                             | Number  | 20      | -      |
| show             | 是否显示                                                                         | Boolean | true    | false  |
| text             | 要生成的内容                                                                     | String  | -       | -      |
| background       | 二维码背景色                                                                     | String  | #ffffff | -      |
| foreground       | 二维码前景色                                                                     | String  | #000000 | -      |
| pdground         | 二维码角标色                                                                     | String  | #000000 | -      |
| icon             | 二维码图标 URL                                                                   | String  | -       | -      |
| icon-size        | 二维码图标大小，注意此大小不会跟随二维码 size 动态变化                           | Number  | 64      | -      |
| lv               | 容错级别（一般不用设置）                                                         | Number  | 3       | -      |
| onval            | 是否监听 val 值，监听则内容变化时自动重新生成二维码                              | Boolean | true    | false  |
| load-make        | 组件初始化完成后自动生成二维码(text 需要有值)                                    | Boolean | true    | false  |
| using-components | 是否使用了自定义组件模式<br>（修复非自定义组件模式时 v-if 无法生成二维码的问题） | Boolean | true    | false  |
| show-loading     | 是否显示生成中的加载效果                                                         | Boolean | true    | false  |
| spinner          | 加载效果类名，内置效果见[文档](../basic/loading.html#内置效果)                   | String  | default | -      |

### Methods

| 方法          | 说明                                                  |
| ------------- | ----------------------------------------------------- |
| \_makeCode()  | 生成二维码                                            |
| \_clearCode() | 清空二维码（清空二维码会触发 result 回调 返回值为空） |
| \_saveCode()  | 保存二维码到图库                                      |
| \_resetCode() | 重置二维码                                            |

|

### Events

| 事件名 | 说明                                                          | 类型     | 参数                                                         |
| ------ | ------------------------------------------------------------- | -------- | ------------------------------------------------------------ |
| finish | 二维码生成完成时，返回二维码路径<br>注：\_clearCode()后返回空 | Function | { url }<br> - url: String — 生成的图片 base64 或图片临时地址 |

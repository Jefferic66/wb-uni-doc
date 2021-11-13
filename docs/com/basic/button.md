---
sidebar: auto
title: Button 按钮
date: 2021-4-1 15:02:58
tags:
  - button
---

该组件内部实现以 uni-app button 组件为基础，进行二次封装，与 `wb-button` 基本一致，主要区别在于：

- 增加了完全直角形状,圆角
- 新增 block 属性，是否块状，占整行
- 新增 shadow 属性，是否有阴影
- 按钮`type`值有更多的主题颜色
- 调整了边框实现，并且 `plain` 配合 `link` 属性可以去除边框
- size 属性的尺寸调整
- 可以自定义尺寸：`width`,`height`,`padding`,`margin`
- 增加了文字样式 `fontSize`,`bold`

## 使用说明

### 基本使用

文字内容通过 `slot` 传入

```html
<wb-button>月落</wb-button>
```

### 设置按钮的主题

`type`值可选的有`default`(默认)、`primary`、`success`、`info`、`warning`、`error`、`gray`、`white`、`black`、`brown`、`gray-primary`、`gray-error`、`gray-warning`、`gray-success`

```html
<wb-button>默认按钮</wb-button>
<wb-button type="gray-primary">主要按钮</wb-button>
```

### 自定义按钮的主题

```html
<template>
  <view>
    <!-- 新的type：red -->
    <wb-button type="red" ripple>自定义按钮</wb-button>
  </view>
</template>
<style>
  /* type：red 开始 */
  .wb-btn--red {
    color: #ffffff !important;
    border-color: #eb0909;
    background-color: #eb0909 !important;
  }
  .wb-btn--red-hover {
    background: #c80808 !important;
  }
  .wb-btn--red--plain {
    color: #eb0909 !important;
    background-color: transparent !important;
  }
  /* type：red 结束 */
</style>
```

### 设置按钮形状

shape 默认值为`square`(按钮为小圆角矩形)，设置为`round`，则按钮为圆角矩形，设置为`circle`，则按钮两边为半圆形，设置为`ra`，则按钮为纯直角

```html
<wb-button shape="square">乌啼</wb-button>
```

### 设置尺寸

button 组件的 size（可选值为 default(默认)，mini(小尺寸)和 medium(中等尺寸)）

```html
<wb-button size="default">江湖</wb-button>
<wb-button size="medium">夜雨</wb-button>
<wb-button size="mini">十年灯</wb-button>
```

### 自定义尺寸

通过 button 组件的 `width`,`height`,`padding`,`margin` 属性来设置

- width：按钮宽度，需要带单位，比如 100%, 100px, 100rpx
- height：按钮高度，单位 rpx
- margin: 调整与其他元素之间间距，比如 'auto 10rpx'
- padding：调整与其他元素之间间距，比如 '0 10rpx'

```html
<wb-button size="mini" width="100px" height="50">江湖</wb-button>
```

### 设置按钮的阴影

- shadow: 是否阴影

```html
<wb-button :shadow="true" :fontSize="26">十年</wb-button>
```

### 设置按钮的占位

- block: 是否为“块级”元素，占整行

```html
<wb-button :block="true" :fontSize="26">十年</wb-button>
```

### 设置按钮的镂空状态

镂空状态按钮背景为白色，边框和文字同色，通过 `plain` 来设置

```html
<wb-button plain>披荆</wb-button>

<!-- 或者显式设置为true -->
<wb-button :plain="true">斩棘</wb-button>
```

### 设置按钮镂空并去除边框

```html
<wb-button plain link>披荆</wb-button>

<!-- 或者显式设置为true -->
<wb-button :plain="true" :link="true">斩棘</wb-button>
```

### 设置点击按钮的水波纹效果

该效果通过给按钮绝对定位形式覆盖一个`view`，点击时改变`view`的`scale`，`opacity`样式属性，形成扩散再消失的水波纹效果。

```html
<wb-button :ripple="true">十年</wb-button>

<!-- 通过rippleBgColor设置水波纹的背景颜色 -->
<wb-button :ripple="true" ripple-bg-color="#909399">之约</wb-button>
```

### 设置文字样式

- blod: 按钮字体加粗
- fontSize: 按钮字体大小，单位 rpx

```html
<wb-button :blod="true" :fontSize="26">十年</wb-button>
```

### 如何修改按钮的样式

针对非微信小程序平台，组件的根元素就是 `uni-app` `button` 组件，所以修改按钮的样式很容易，直接给组件定义`类名`或者嵌入`内联样式`即可。
如果是微信小程序，编译后页面会有组件同名的元素存在，导致样式传递有问题。
如果是为了修改按钮与其他元素之间的距离或者宽度等，可以给按钮外面套一个 `view` 元素，控制这个 `view` 与其他元素的距离或者宽度，即可达到同等效果。

所以：我们提供了一个`custom-style`参数，推荐用户可以用对象形式传递样式给组件内部，注意驼峰命名。

```html
/* 以下形式在微信小程序会无效，APP和H5有效 */
<wb-button class="custom-style">雪月夜</wb-button>

<style scoped>
  .custom-style {
    color: #606266;
    width: 400rpx;
  }
</style>

/* 推荐如下 */
<wb-button :custom-style="customStyle">雪月夜</wb-button>

<script>
  customStyle: {
  	marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
  	color: 'red'
  }
</script>
```

### 内置按钮样式 type

| 名称    | 说明                   | 名称         | 说明                   |
| ------- | ---------------------- | ------------ | ---------------------- |
| default | 白色背景-黑字-黑色边框 | gray         | 灰色背景-黑字-灰色边框 |
| primary | 蓝色背景-白字-蓝色边框 | gray-primary | 灰色背景-黑字-蓝色边框 |
| success | 绿色背景-白字-绿色边框 | gray-success | 灰色背景-黑字-绿色边框 |
| warring | 橘色背景-白字-橘色边框 | gray-warning | 灰色背景-黑字-橘色边框 |
| error   | 红色背景-白字-红色边框 | gray-error   | 灰色背景-黑字-红色边框 |
| white   | 白色背景-黑字-灰色边框 | black        | 黑色背景-白字-黑色边框 |
| brown   | 棕色背景-白字-棕色边框 |              |                        |

## API

### Props

| 属性名                 | 说明                                                                                                                                                                                   | 类型             | 默认值                                                           | 可选值                                      | 平台差异说明                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| size                   | 按钮的大小                                                                                                                                                                             | String           | default                                                          | medium / mini                               | -                                           |
| ripple                 | 是否开启点击水波纹效果                                                                                                                                                                 | Boolean          | false                                                            | true                                        | -                                           |
| ripple-bg-color        | 水波纹的背景色，<br>ripple 为 true 时有效                                                                                                                                              | String           | rgba(0, 0, 0, 0.15)                                              | -                                           | -                                           |
| type                   | 按钮的样式类型                                                                                                                                                                         | String           | default                                                          | [参考文档](./button.html#内置按钮样式-type) |                                             |
| shadow                 | 是否有阴影                                                                                                                                                                             | Boolean          | false                                                            | true                                        | -                                           |
| block                  | 是否为“块级”元素，占整行                                                                                                                                                               | Boolean          | false                                                            | true                                        | -                                           |
| plain                  | 按钮是否镂空，背景色透明                                                                                                                                                               | Boolean          | false                                                            | true                                        | -                                           |
| disabled               | 是否禁用                                                                                                                                                                               | Boolean          | false                                                            | true                                        | -                                           |
| shape                  | 按钮外观形状，见上方说明                                                                                                                                                               | String           | square                                                           | round/circle/ra                             | -                                           |
| loading                | 按钮名称前是否带 loading<br> 图标                                                                                                                                                      | Boolean          | false                                                            | true                                        | nvue 平台:<br> ios 为雪花<br>Android 为圆圈 |
| width                  | 按钮宽度，<br>比如 100%, 100px, 100rpx                                                                                                                                                 | String           | -                                                                | -                                           | -                                           |
| height                 | 按钮高度，单位 rpx                                                                                                                                                                     | String \| Number | -                                                                | -                                           | -                                           |
| bold                   | 字体是否加粗                                                                                                                                                                           | Boolean          | false                                                            | true                                        | -                                           |
| margin                 | 调整与其他元素之间间距， <br>比如 'auto 10rpx'                                                                                                                                         | String           | -                                                                | -                                           | -                                           |
| padding                | 元素内间距， <br>比如 'auto 10rpx'                                                                                                                                                     | String           | -                                                                | -                                           | -                                           |
| throttle-time          | 节流的时间间隔(一定<br>时间内无论点击多少次，<br>只会触发 一次 click 事件)，<br>单位 ms                                                                                                | String \| Number | 300                                                              | -                                           | -                                           |
| form-type              | 用于 `<form>` 组件，<br>点击分别会触发 `<form>` <br>组件的 submit/reset 事件                                                                                                           | String           | -                                                                | submit / reset                              | -                                           |
| open-type              | 开放能力                                                                                                                                                                               | String           | 请参考 <br> [uni-app](https://uniapp.dcloud.io/component/button) | -                                           | -                                           |
| custom-style           | 对按钮的自定义样式，<br>对象形式，见上方说明                                                                                                                                           | Object           | -                                                                | -                                           | -                                           |
| data-name              | 额外传参参数，用于小程<br>序的 data-xxx 属性，通过 <br>target.dataset.name 获取                                                                                                        | String           | -                                                                | -                                           | -                                           |
| app-parameter          | 打开 APP 时，向 APP 传递<br>的参数，open-type=launchApp 时有效                                                                                                                         | Boolean          | false                                                            | true                                        | 微信小程序、QQ 小程序                       |
| hover-stop-propagation | 指定是否阻止本节点的祖先<br>节点出现点击态                                                                                                                                             | Boolean          | false                                                            | true                                        | 微信小程序                                  |
| lang                   | 指定返回用户信息的语言，<br>zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文                                                                                                                | String           | en                                                               | zh_CN \ zh_TW                               | 微信小程序                                  |
| session-from           | 会话来源，<br>open-type="contact"时有效                                                                                                                                                | String           | -                                                                | -                                           | 微信小程序                                  |
| send-message-title     | 会话内消息卡片<br>点击跳转小程序路径，<br>open-type="contact"时有效                                                                                                                    | String           | 当前标题                                                         | -                                           | 微信小程序                                  |
| send-message-path      | 会话内消息卡片<br>点击跳转小程序路径，<br>open-type="contact"时有效                                                                                                                    | String           | 当前<br>分享路径                                                 | -                                           | 微信小程序                                  |
| send-message-img       | 会话内消息卡片图片，<br>open-type="contact"时有效                                                                                                                                      | String           | 当前<br>页面截图                                                 | -                                           | 微信小程序                                  |
| show-message-card      | 是否显示会话内消息卡片，设<br>置此参数为 true，用户进入<br>客服会话会在右下角显示"可<br>能要发送的小程序"提示，用<br>户点击后可以快速发送小程序<br>消息，open-type="contact"<br>时有效 | String \| Number | -                                                                | -                                           | 微信小程序                                  |

### Events

| 事件名         | 说明                                                                                             | 平台差异说明 | 参数                   |
| -------------- | ------------------------------------------------------------------------------------------------ | ------------ | ---------------------- |
| click          | 按钮点击，请勿使用`@tap`点击事件，<br>微信小程序无效，返回值为点击事件及参数                     | -            | Object: 点击事件及参数 |
| getphonenumber | open-type="getPhoneNumber"时有效                                                                 | 微信小程序   | Object                 |
| getuserinfo    | 用户点击该按钮时，会返回获取到的用户信息，<br>从返回参数的 detail 中获取到的值同 uni.getUserInfo | 微信小程序   | Object                 |
| error          | 当使用开放能力时，发生错误的回调                                                                 | 微信小程序   | Object                 |
| opensetting    | 在打开授权设置页并关闭后回调                                                                     | 微信小程序   | Object                 |
| launchapp      | 打开 APP 成功的回调                                                                              | 微信小程序   | Object                 |

### Slot

| 名称 | 说明     |
| ---- | -------- |
| -    | 默认插槽 |

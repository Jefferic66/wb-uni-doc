---
sidebar: auto
title: Html2canvas 网页截屏
date: 2021-4-18 15:44:26
tags:
  - html2canvas
  - renderjs
  - 网页截屏
---

::: tip
此插件只适用于 <font color="red">APP 项目（Android/Ios）、Web 项目</font>，不支持小程序！！
:::

**本组件是基于 renderjs 机制封装的 html2canvas**

html2canvas 能够实现在用户浏览器端直接对整个或部分页面进行截屏。这个 html2canvas 脚本将当页面渲染成一个 Canvas 图片，通过读取 DOM 并将不同的样式应用到这些元素上实现。它不需要来自服务器任何渲染，整张图片都是在客户端浏览器创建。

参考来源：https://ext.dcloud.net.cn/plugin?id=2466

## 使用说明

需要生成时，给组件设置 **`selector`** 属性，并绑定到需要生成图片的 dom 对象上

只要 **`selector`** 变化就会重新生成

```html
<template>
  <wb-page class="u-p-20">
    <!-- html -->
    <wb-html-to-canvas
      :domId="'#' + domId"
      title="正在生成海报..."
      @render="renderFinish"
    >
      <view :id="domId">
        <image class="logo" :src="logoBase64"></image>
        <view class="text-area">
          <text class="title">{{ title }}</text>
        </view>
      </view>
    </wb-html-to-canvas>
    <wb-button @click="make">生成</wb-button>
  </wb-page>
</template>

<script>
  export default {
    data() {
      return {
        title: "Html2Canvas-Renderjs 示例",
        domId: "",
        logoBase64: "/static/img/test/xj.jpg",
        filePath: "",
        alwaysNew: false,
      };
    },
    methods: {
      make() {
        if (!this.domId) {
          this.domId = this.$u.guid(12);
        }
        if (this.alwaysNew) {
          this.domId = this.$u.guid(12);
        } else {
          if (this.filePath) {
            uni.previewImage({
              urls: [this.filePath],
            });
          }
        }
      },
      /**
       * 渲染完毕接收图片
       * @param {String} filePath
       */
      renderFinish(filePath) {
        this.filePath = filePath;
        uni.previewImage({
          urls: [filePath],
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .logo {
    width: 100%;
  }
  .title {
    font-size: 30rpx;
  }
  .text-area {
    text-align: center;
    padding: 10rpx 10rpx 20rpx;
  }
</style>
```

### Props

| 属性名   | 说明                     | 类型   | 默认值       | 可选值 |
| -------- | ------------------------ | ------ | ------------ | ------ |
| selector | 需要生成图片的对象选择器 | String | -            | -      |
| title    | 二维码大小               | String | 正在生成海报 | -      |

### Events

| 事件名 | 说明     | 类型     | 参数                              |
| ------ | -------- | -------- | --------------------------------- |
| render | 生成完成 | Function | filePath: String — 生成的图片路径 |

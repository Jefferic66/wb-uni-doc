---
sidebar: auto
title: DragVerifyChip 拼图滑块验证
date: 2021-4-22 16:25:50
tags:
  - dragVerifyChip
  - 拼图滑块验证
---

拼图滑块验证，本组件已基于 **多语言** 的实现。

::: danger 注意事项

- 该组件不支持小程序，仅支持 H5 和 App
- 图片请使用本地路径，如果是 app 可以先获取到本地再设置
  :::

## 使用说明

### 示例

插槽用法、状态还原与 wb-drag-verify 相同

```html
<template>
  <wb-page>
    <wb-drag-verify-chip
      ref="chip"
      :imgsrc="imgsrc"
      :isPassing.sync="isPassing"
      :showRefresh="true"
      @refresh="refresh"
      @verify="pass"
    ></wb-drag-verify-chip>
    <wb-button type="primary" @click="reset" margin="10px 0">还原</wb-button>
  </wb-page>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        imgs: [
          "/static/com/chip/001.jpg",
          "/static/com/chip/002.jpg",
          "/static/com/chip/003.jpg",
          "/static/com/chip/004.jpg",
          "/static/com/chip/005.jpg",
          "/static/com/chip/006.jpg",
        ],
        isPassing: false,
        imgsrc: "",
      };
    },
    onLoad() {
      this.refresh();
    },
    methods: {
      refresh() {
        this.imgsrc = this.imgs[Math.round(Math.random() * this.imgs.length)];
      },
      pass(e) {
        if (e) {
          this.layer.msg("验证通过", { icon: [0, "font-size:48px;"] });
        }
      },
      reset() {
        this.isPassing = false;
        this.$refs.chip.reset();
      },
    },
  };
</script>
```

## API

### Props

| 属性名          | 说明                                        | 类型             | 默认值                               | 可选值 |
| --------------- | ------------------------------------------- | ---------------- | ------------------------------------ | ------ |
| is-passing      | 验证状态(支持.sync)                         | Boolean          | false                                | true   |
| width           | 宽度，单位 rpx                              | String \| Number | 500                                  | -      |
| height          | 高度，单位 rpx                              | String \| Number | 80                                   | -      |
| text            | 初始文字                                    | String           | 请按住滑块拖动                       | -      |
| success-text    | 成功提示文字                                | String           | 验证通过                             | -      |
| background      | 滑块右侧背景色                              | String           | #eee                                 | -      |
| progress-bar-bg | 滑块左侧背景色                              | String           | #76c61d                              | -      |
| handler-bg      | 滑块背景色                                  | String           | #fff                                 | -      |
| completed-bg    | 验证通过背景色                              | String           | #76c61d                              | -      |
| radius          | 圆角，单位 rpx                              | String \| Number | 8                                    | -      |
| handler-icon    | 滑块未验证通过时的图标的名称，使用的 u-icon | String           | cl-icon-arrow-double-right8          | -      |
| success-icon    | 滑块验证通过时的图标的名称，使用的 u-icon   | String           | cl-icon-check-border                 | -      |
| test-size       | 文字大小，单位 rpx                          | String \| Number | 28                                   | -      |
| test-color      | 文字颜色                                    | String           | #333                                 | -      |
| img-src         | 图片路径，请使用本地路径                    | String           | -                                    | -      |
| bar-width       | 拼图宽度，同拼图高度，单位 rpx              | String \| Number | 72                                   | -      |
| bar-radius      | 拼图外部圆形半径，单位 rpx                  | String \| Number | 12                                   | -      |
| show-refresh    | 是否右上角显示刷新                          | Boolean          | false                                | true   |
| refresh-icon    | 刷新按钮图标的名称，使用的 u-icon           | String           | cl-icon-arrow-double-right8          | -      |
| show-tips       | 是否显示底部提示                            | Boolean          | true                                 | false  |
| success-tip     | 底部验证通过提示                            | String           | 验证通过，超过 80%用户               | -      |
| fail-tip        | 底部验证失败提示                            | String           | 验证失败，拖动滑块将悬浮图像正确合并 | -      |
| diff-width      | 在此范围内松开计算验证成功，单位 px         | String \| Number | 16                                   | -      |

### Events

| 事件名  | 说明       | 类型     | 参数                          |
| ------- | ---------- | -------- | ----------------------------- |
| refresh | 刷新的事件 | Function | -                             |
| verify  | 验证结果   | Function | result：true 成功，false 失败 |

### Methods

| 方法    | 说明                   |
| ------- | ---------------------- |
| reset() | 还原未验证通过时的状态 |

---
sidebar: auto
title: DragVerifyRatate 旋转滑块验证
date: 2021-4-22 17:56:01
tags:
  - dragVerifyRatate
  - 旋转滑块验证
---

旋转滑块验证，本组件已基于 **多语言** 的实现。

## 使用说明

### 示例

插槽用法、状态还原与 wb-drag-verify 相同

```html
<template>
  <wb-page>
    <wb-drag-verify-rotate
      ref="rotate"
      :img-src="imgSrc"
      :is-passing.sync="isPassing"
      @verify="pass"
    ></wb-drag-verify-rotate>
    <wb-button type="primary" @click="reset" margin="10px 0">还原</wb-button>
    <wb-button type="primary" @click="refresh" margin="10px">刷新</wb-button>
  </wb-page>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        imgs: [
          "/static/com/chip/001.jpg",
          "/static/com/chip/003.jpg",
          "/static/com/chip/004.jpg",
          "/static/com/chip/005.jpg",
        ],
        isPassing: false,
        imgSrc: "",
      };
    },
    onLoad() {
      this.refresh();
    },
    methods: {
      reset() {
        this.isPassing = false;
        this.$refs.rotate.reset();
      },
      refresh() {
        this.imgSrc = this.imgs[Math.round(Math.random() * this.imgs.length)];
        console.log(this.imgSrc);
      },
      pass(e) {
        if (e) {
          this.layer.msg("验证通过", { icon: [0, "font-size:48px;"] });
        }
      },
    },
  };
</script>
```

## API

### Props

| 属性名          | 说明                                              | 类型             | 默认值                      | 可选值 |
| --------------- | ------------------------------------------------- | ---------------- | --------------------------- | ------ |
| isPassing       | 验证状态(支持.sync)                               | boolean          | false                       | true   |
| width           | 宽度，单位 rpx                                    | String \| Number | 500                         | -      |
| height          | 高度，单位 rpx                                    | String \| Number | 80                          | -      |
| text            | 初始文字                                          | String           | 请按住滑块拖动              | -      |
| success-text    | 成功提示文字                                      | String           | 验证通过                    | -      |
| fail-text       | 验证失败提示                                      | String           | 验证失败                    | -      |
| background      | 滑块右侧背景色                                    | String           | #eee                        | -      |
| progress-bar-bg | 滑块左侧背景色                                    | String           | #76c61d                     | -      |
| handler-bg      | 滑块背景色                                        | String           | #fff                        | -      |
| completed-bg    | 验证通过背景色                                    | String           | #76c61d                     | -      |
| circle          | 两侧是否圆形                                      | boolean          | false                       | true   |
| radius          | 圆角，单位 rpx                                    | String \| Number | 8                           | -      |
| handler-icon    | 滑块未验证通过时的图标,根据所选框架设置不同 class | String           | cl-icon-arrow-double-right8 | -      |
| success-icon    | 滑块验证通过时的图标,根据所选框架设置不同 class   | String           | cl-icon-check-border        | -      |
| test-size       | 文字大小，单位 rpx                                | String \| Number | 28                          | -      |
| test-color      | 文字颜色                                          | String           | #333                        | -      |
| img-src         | 图片路径                                          | String           | -                           | -      |
| show-tips       | 是否显示底部提示                                  | Boolean          | true                        | false  |
| diff-degree     | 在此范围内松开计算验证成功(单位 °)                | Number           | 10                          | -      |
| min-degree      | 最小旋转角度                                      | Number           | 120                         | -      |
| max-degree      | 最大旋转角度(大小旋转角度相同时可指定旋转角度)    | Number           | 270                         | -      |

### Events

| 事件名 | 说明     | 类型     | 参数                          |
| ------ | -------- | -------- | ----------------------------- |
| verify | 验证结果 | Function | result：true 成功，false 失败 |

### Methods

| 方法    | 说明                   |
| ------- | ---------------------- |
| reset() | 还原未验证通过时的状态 |

### Slot

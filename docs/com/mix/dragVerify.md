---
sidebar: auto
title: DragVerify 滑块验证
date: 2021-4-20 17:55:32
tags:
  - dragVerify
  - 滑块验证
---

滑块验证组件，本组件已基于 **多语言** 的实现。

## 使用说明

### 基础用法

```html
<template>
  <wb-page>
    <wb-drag-verify :isPassing.sync="isPassing"></wb-drag-verify>
  </wb-page>
</template>

<script>
  export default {
    data() {
      return {
        isPassing: false,
      };
    },
  };
</script>
```

### 插槽用法

```html
<template>
  <wb-page>
    <wb-drag-verify
      :width="300"
      :isPassing.sync="isPassing"
      @verify="passcallback"
    >
      <u-icon
        name="lock"
        v-show="!isPassing"
        size="28"
        slot="textBefore"
      ></u-icon>
    </wb-drag-verify>
  </wb-page>
</template>

<script>
  export default {
    data() {
      return {
        isPassing: false,
      };
    },
    methods: {
      passcallback(result) {
        if (result) {
          this.layer.msg("验证通过,插槽消失", { icon: 1 });
        }
      },
    },
  };
</script>
```

### 状态还原

```html
<template>
  <wb-page>
    <wb-drag-verify
      ref="dragVerify"
      :isPassing.sync="isPassing"
      @verify="passcallback"
    ></wb-drag-verify>
    <wb-button style="margin-top: 5px" @click="reset">还原</wb-button>
  </wb-page>
</template>

<script>
  export default {
    data() {
      return {
        isPassing: false,
      };
    },
    methods: {
      passcallback(result) {
        if (result) {
          this.layer.msg("验证通过", { icon: [0, "font-size:48px;"] });
        }
      },
      reset() {
        this.isPassing = false;
        this.$refs.dragVerify.reset();
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

### Events

| 事件名 | 说明     | 类型     | 参数                          |
| ------ | -------- | -------- | ----------------------------- |
| verify | 验证结果 | Function | result：true 成功，false 失败 |

### Methods

| 方法    | 说明                   |
| ------- | ---------------------- |
| reset() | 还原未验证通过时的状态 |

### Slot

| 名称        | 说明       |
| ----------- | ---------- |
| text-before | 提示文字前 |
| text-after  | 提示文字后 |

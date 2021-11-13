---
sidebar: auto
title: Vcode 图形验证码
date: 2021-4-16 15:18:24
tags:
  - vcode
  - 图形验证码
---

图形验证码组件，可以生产验证码图片

## 使用说明

### 基本使用

```html
<template>
  <wb-page>
    <wb-button @click="show = true">唤起</wb-button>
    <wb-opts
      title="测试"
      v-model="show"
      :current="current"
      :list="list"
      @change="handleChange"
      :size="40"
      :icon-size="30"
      shape="circle"
    ></wb-opts>
  </wb-page>
</template>

<script>
  export default {
    data() {
      return {};
    },
    onLoad() {},
    methods: {},
  };
</script>
```

## API

### Props

| 属性名 | 说明                       | 类型             | 默认值 | 可选值 |
| ------ | -------------------------- | ---------------- | ------ | ------ |
| value  | 初始值，为空则自动生成     | String           | -      | -      |
| width  | 每个验证码的宽度，单位 rpx | String \| Number | 40     | -      |
| height | 图形验证码的高度，单位 rpx | String \| Number | 60     | -      |
| length | 图形验证码的长度           | Number           | 4      | -      |

### Methods

| 方法             | 说明                            |
| ---------------- | ------------------------------- |
| refresh()        | 刷新验证码                      |
| validator(value) | 验证，相同返回 true，否则 false |

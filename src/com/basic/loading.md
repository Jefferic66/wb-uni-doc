---
sidebar: auto
title: Loading 加载动画
date: 2021-4-1 15:04:16
tags:
  - loading
---

## 使用说明

加载数据时显示动效

### 基本使用

通过 v-model 绑定是否显示加载效果
通过 spinner 设定动画的类型

```html
<template>
  <view>
    <wb-loading v-model="loading" spinner="default"></wb-loading>
    <wb-loading v-model="loading" spinner="single1"></wb-loading>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },
  };
</script>
```

### 设置加载文字

通过 text 设定动画的类型

```html
<template>
  <view>
    <wb-loading v-model="loading" text="加载中..."></wb-loading>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },
  };
</script>
```

### 设置全屏加载效果

```html
<template>
  <view>
    <wb-loading v-model="loading" :fullscreen="true"></wb-loading>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },
  };
</script>
```

### 设置颜色

通过 background 设定遮罩背景色，默认 #ffffffe6
通过 color 设定载入文字颜色，默认 #ffffffe6

```html
<template>
  <view>
    <wb-loading v-model="loading" background="#ffffffe6"></wb-loading>
    <wb-loading v-model="loading" color="red" text="加载中..."></wb-loading>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },
  };
</script>
```

### 内置效果

这些内置已内置，直接通过 spinner 参数引用即可

| 名称      | 说明     | 名称      | 说明     |
| --------- | -------- | --------- | -------- |
| default   | 默认     | load      | 加载     |
| single1   | 单个点 1 | single2   | 单个点 2 |
| loading1  | 载入中 1 | loading2  | 载入中 2 |
| radar1    | 雷达 1   | radar2    | 雷达 2   |
| points1   | 三个点 1 | pendule   | 钟摆     |
| points2   | 三个点 2 | cup       | 杯子     |
| points3   | 三个点 3 | hourglass | 沙漏     |
| surround1 | 环绕 1   | surround2 | 环绕 2   |
| clock     | 时钟     | battery   | 电池     |
| lookup    | 查找     | eye       | 眼睛     |

## API

### Props

| 属性名     | 说明                                                                          | 类型    | 默认值    | 可选值 |
| ---------- | ----------------------------------------------------------------------------- | ------- | --------- | ------ |
| v-model    | 是否显示，双向绑定值                                                          | Boolean | false     | true   |
| fullscreen | 自定义加载效果类名                                                            | Boolean | false     | true   |
| spinner    | 加载效果类名，内置效果见[上面文档](./loading.html#内置效果)，也可以自定义扩展 | String  | default   |        |
| background | 遮罩背景色                                                                    | String  | #ffffffe6 | -      |
| color      | 加载字体颜色                                                                  | String  | -         | -      |

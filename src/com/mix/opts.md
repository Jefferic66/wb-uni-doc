---
sidebar: auto
title: Opts 可选列表
date: 2021-4-13 15:56:31
tags:
  - opts
  - 可选列表
---

弹出的单选框列表，由`u-popup` `u-radio-group` `u-radio` 组合

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
      return {
        show: false,
        current: 0,
        list: [
          { name: "test abc 0", value: 0 },
          { name: "test abc 1", value: 1 },
          { name: "test abc 2", value: 2 },
          { name: "test abc 3", value: 3 },
        ],
      };
    },
    onLoad() {},
    methods: {
      handleChange(e) {
        console.log(e);
      },
    },
  };
</script>
```

## API

### Props

| 属性名                 | 说明                                                      | 类型             | 默认值  | 可选值 |
| ---------------------- | --------------------------------------------------------- | ---------------- | ------- | ------ |
| v-model                | 是否弹出显示                                              | Boolean          | false   | true   |
| current                | 被选中的值，如果初始值为某一个的 name，该项将会默认被选中 | String \| Number | -       | -      |
| title                  | 弹出标题                                                  | String           | -       | -      |
| list                   | 选项列表，{name, value, disabled, labelDisabled}          | Array            | -       | -      |
| list-height            | 选项列表部分的最大高度，单位 rpx                          | String \| Number | 450     | -      |
| mask                   | 是否显示遮罩                                              | Boolean          | true    | false  |
| safe-area-inset-bottom | 是否开启底部安全区适配                                    | Boolean          | false   | true   |
| mask-close-able        | 点击遮罩是否可以关闭弹出层                                | Boolean          | true    | false  |
| custom-style           | 用户自定义样式                                            | Object           | -       | -      |
| border-radius          | 弹窗圆角值                                                | String \| Number | 0       | -      |
| closeable              | 是否显示关闭图标                                          | Boolean          | true    | false  |
| close-icon             | 关闭图标的名称，只能 uView 的内置图标                     | String           | close   | -      |
| close-icon-color       | 关闭图标的颜色                                            | String           | #909399 | -      |
| close-icon-size        | 关闭图标的大小，单位 rpx                                  | String \| Number | 30      | -      |
| duration               | 遮罩打开或收起的动画过渡时间，单位 ms                     | String \| Number | 250     | -      |
| disabled               | 是否禁用所有 radio                                        | Boolean          | false   | true   |
| label-disabled         | 是否禁止点击文本操作 checkbox                             | Boolean          | false   | true   |
| size                   | 选项框整体的大小(外框)，单位 rpx                          | String \| Number | 40      | -      |
| active-color           | 选项框选中时的颜色，应用到所有子 Radio 组件               | String           | #2979ff | -      |
| icon-size              | 选项框图标大小，单位 rpx                                  | String \| Number | 20      | -      |
| shape                  | 选项框外观形状，shape-方形，circle-圆形(默认 circle)      | String           | circle  | shape  |

### Events

| 事件名 | 说明                            | 类型     | 参数                                   |
| ------ | ------------------------------- | -------- | -------------------------------------- |
| change | 任一个 radio 状态发生变化时触发 | Function | {name, value, disabled, labelDisabled} |

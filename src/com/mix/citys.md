---
sidebar: auto
title: Citys 五级城市
date: 2021-4-12 16:18:24
tags:
  - citys
  - 五级城市
---

省市区镇乡 5 级联选择器，可以设置是否开启五级数据

本组件无 **多语言** 。

::: tip
前三级数据在本地，4、5 级城市数据需要异步请求
:::

## 使用说明

### 基本使用

```html static
<template>
  <view>
    <wb-button type="info" @click="value = true">五级地址选择</wb-button>
    <wb-citys
      v-model="value"
      @change="cityChange"
      :has-five="true"
      :any-leves="true"
      :asyn-town="town"
      :asyn-village="village"
    ></wb-citys>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        value: false,
        areaCode: ["14", "1404", "140421", "130828206", "130921212214"],
      };
    },
    methods: {
      town(id, callback) {
        console.log(id);
        setTimeout(() => {
          callback([
            { label: "兰旗卡伦乡", value: "130828205" },
            { label: "银窝沟乡", value: "130828206" },
            { label: "新地乡", value: "130828207" },
            { label: "广发永乡", value: "130828208" },
            { label: "育太和乡", value: "130828209" },
            { label: "郭家湾乡", value: "130828210" },
            { label: "南山嘴乡", value: "130828228" },
            { label: "西龙头乡", value: "130828229" },
            { label: "建设北街街道办事处", value: "130902001" },
            { label: "车站街道办事处", value: "130902002" },
          ]);
        }, 500);
      },
      village(id, callback) {
        console.log(id);
        setTimeout(() => {
          callback([
            { label: "王胡村委会", value: "130921212214" },
            { label: "北张村委会", value: "130921212215" },
            { label: "路场村委会", value: "130921212216" },
            { label: "东贾洼东村委会", value: "130921212217" },
            { label: "西贾洼东村委会", value: "130921212218" },
            { label: "阳气寺村委会", value: "130921212224" },
            { label: "韩庄村委会", value: "130921212225" },
          ]);
        }, 500);
      },
      cityChange(e) {
        this.input = console.log(e);
      },
    },
  };
</script>
```

## API

### Props

| 属性名            | 说明                                                     | 类型             | 默认值           | 可选值 |
| ----------------- | -------------------------------------------------------- | ---------------- | ---------------- | ------ |
| v-model           | 组件的弹出与收起                                         | Boolean          | false            | true   |
| area-code         | 默认显示地区的编码，<br>可传类似["13", "1303", "130304"] | Array            | []               | -      |
| any-leves         | 是否可以选择任意级别                                     | Boolean          | false            | true   |
| has-five          | 是否需要镇乡的 5 级数据联动                              | Boolean          | false            | true   |
| asyn-town         | 获取镇数据的回调方法，第 4 级                            | Function         | (id,callback)={} |        |
| asyn-village      | 获取乡数据的回调方法，第 5 级                            | Function         | (id,callback)={} |        |
| mask-close-able   | 是否允许通过点击遮罩关闭 Picker                          | Boolean          | true             | false  |
| z-index           | 弹出的 z-index 值                                        | String \| Number | 10075            |        |
| title             | 弹出头部的标题                                           | String           | -                | -      |
| cancel-color      | 弹出头部中"取消"按钮的颜色                               | String           | #606266          | -      |
| confirm-color     | 弹出头部中"确定"按钮的颜色                               | String           | #2979ff          | -      |
| cancel-text       | 弹出头部中"取消"按钮的文字                               | String           | 取消             | -      |
| confirm-text      | 弹出头部中"确定"按钮的文字                               | String           | 确定             | -      |
| size              | tabs 文字大小，单位 rpx                                  | String \| Number | 28               | -      |
| color             | tabs 文字颜色                                            | String           | #555             | -      |
| bold              | tab 选中后文字加粗                                       | Boolean          | true             | false  |
| show-bar          | 是否显示 tabs 选中的底部 bar                             | Boolean          | true             | false  |
| tabs-height       | 顶部标签栏高度，单位 rpx                                 | String \| Number | 88               | -      |
| tabs-border       | 是否显示 tabs 容器的底部细线边框                         | Boolean          | true             | false  |
| header-bg-color   | header 背景颜色                                          | String           | #fff             | -      |
| bar-color         | tabs 底部 bar 的颜色                                     | String           | #5677fc          | -      |
| active-color      | 选中项的颜色（tabs 和 icon）                             | String           | #5677fc          | -      |
| text-size         | item text 字体大小，单位 rpx                             | String \| Number | 28               | -      |
| text-color        | item text 颜色                                           | String           | #333             | -      |
| text-bold         | 选中后字体是否加粗                                       | Boolean          | true             | false  |
| text-active-color | tem text 选中后颜色                                      | String           | #333             | -      |
| bg-color          | 主体内容部分背景颜色                                     | String           | #fff             | -      |
| height            | 地区选择主体部分的高度，单位 rpx                         | String \| Number | 600              | -      |

### Events

| 事件名 | 说明         | 类型     | 参数                                                                                                                                                                                                                                                                                             |
| ------ | ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| finish | 选择城市完成 | Function | { province, city, area, town, village }<br> - province: String — 省 {label: '', value: ''} <br> - city: String — 市 {label: '', value: ''} <br> - area: String — 区/县 {label: '', value: ''} <br> - town: String — 镇 {label: '', value: ''} <br> - village: String — 乡 {label: '', value: ''} |

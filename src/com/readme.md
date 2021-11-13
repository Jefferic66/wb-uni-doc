---
sidebar: auto
title: 介绍
date: 2021-4-1 12:49:31
---

#### 这里的组件主要是基于

- 对 ui 库中的组件有调整或增强
- ui 库中没有的组件

## 根容器组件

[**page**](./layout/page) 组件作为页面的根容器

这样可以使用其中扩展的 **`全局方法`** 与 **`加载效果`** 等等

```vue
<template>
  <page></page>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
```

<!-- ::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

# page 设置

## page 设置

### page 设置

1. 全屏的页面
   - "disableScroll": true - 阻止 ios 下 list 组件下拉的抖动问题，在 H5 下也可阻止页面整体下拉(页面整体不能上下滚动)
2. "bounce": "none" - 页面回弹效果，设置为 "none" 时关闭效果。在 App 下有效果，ios 下可以禁止页面下拉白屏，不会影响页面下拉刷新

### 内置图标

这些图标已内置，直接通过`mode`参数引用即可

| 名称       | 说明           | 名称    | 说明                 |
| ---------- | -------------- | ------- | -------------------- |
| car        | 购物车为空     | wifi    | 没有 WiFi            |
| page       | 页面不存在     | order   | 订单为空             |
| search     | 没有搜索结果   | coupon  | 没有优惠券           |
| address    | 没有收货地址   | favor   | 无收藏               |
| permission | 无权限         | news    | 无新闻列表           |
| history    | 无历史记录     | message | 消息列表为空         |
| list       | 列表为空(通用) | data    | 数据为空(默认，通用) |

示例 -->

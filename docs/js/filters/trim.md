---
sidebar: auto
title: 去除空格
date: 2021-3-31 17:47:36
tags:
  - 过滤器
  - trim
---

```vue
<template>
  <view>
    <view class="view-title"></view>
    <view> {{ str }} </view>
    <view class="view-title"> trim </view>
    <view> {{ str | trim }} </view>
    <view class="view-title"> trimStart </view>
    <view>'{{ str | trimStart }} </view>
    <view class="view-title"> trimEnd </view>
    <view> {{ str | trimEnd }} </view>
    <view class="view-title"> trimAll </view>
    <view> {{ str | trimAll }} </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      str: " 使 酒 好 剑 ",
    };
  },
};
</script>
<style>
.view-title {
  margin: 15px 0 5px;
  color: #2979ff;
}
</style>
```

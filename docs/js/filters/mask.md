---
sidebar: auto
title: 数据脱敏
date: 2021-3-31 17:47:36
tags:
  - mask
  - 过滤器
---

```vue
<template>
  <view>
    <!-- 过滤器式写法 -->
    <view class="view-title"> 过滤器写法 </view>
    <view> 手机号：{{ phone | mask }} </view>
    <view> 手机号：{{ phone | mask(3, 3, "-") }} </view>
    <!-- 方法调用写法 -->
    <view class="view-title"> 方法调用 </view>
    <view> 手机号：{{ $wb.mask(phone) }} </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      phone: "18353246789",
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

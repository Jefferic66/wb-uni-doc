---
sidebar: auto
title: 介绍
date: 2021-3-31 17:38:02
tags:
  - $wb
  - $sys
---

<!--
::: tip
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
::: -->

::: tip
工具库中的所有方法，均挂载在`$wb`对象下  
获取的[系统信息](https://uniapp.dcloud.net.cn/api/system/info?id=getsysteminfo)，挂载在`$sys`对象下  
:::
更多的工具库可以查看[uView](https://uviewui.com/js/intro.html)

### js 中

如果是在 js 中，需要通过`this.$wb.xxx`形式调用，如调用去除空格的`trim`方法：

```javascript
// 去除两端空格
console.log(this.$wb.trim(" abc "));
// 客户端平台，值域为：ios、android
console.log(this.$sys.platform);
```

### 元素中

如果是在元素中，无需前缀 this，如：

```vue
<template>
  <view> 去除所有空格：{{ $wb.trim(str) }} </view>
  <view> 客户端平台：{{ $sys.platform }} </view>
</template>

<script>
export default {
  data() {
    return {
      str: "a  b c ",
    };
  },
};
</script>
```

### uni 对象中

\$wb 和 \$sys 也挂载到 **`uni`** 对象上

```js
let str = "a  b c ";
uni.$wb.trim(str);
uni.$sys.platform;
```

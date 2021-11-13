---
sidebar: auto
title: 注意事项
date: 2021-3-30 17:29:07
tags:
  - 背景
  - uni.scss
  - 重写
  - iPhoneX
---

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
::: -->

## 页面背景颜色

一般情况下，我们给页面的`page`节点或者给页面的最外层`view`设置背景颜色，二者分别有如下需要注意点：

1. **通过`page`设置**  
   这个方式全端有效，但是需要注意的是，在微信小程序，或者某些安卓机型上，该节点如果写在带`scoped`属性的样式标签内是无效的，所以我们建议 您可以在页面多加一个不带 scoped 属性的样式标签，如下：

```vue
/* 如果需要css的支持，还可以添加lang属性 */
<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>

/* 带scoed属性的其他样式 */
<style lang="scss" scoped>
.box {
  ......
}
</style>
```

2. **通过最外层容器设置**  
   相比`page`节点，`view`的高度默认为内容高度，所以如果页面内容不足一屏高度时，底部剩余部分依然为默认的白色，所以我们给需要这个`view` 设置一个最低高度，让它等于窗口高度

```vue
<template>
  <view class="wrap">
    ......
  </view>
</template>

<style scoped lang="scss">
.wrap {
  background-color: #f7f7f7;
  min-height: 100vh;
}
</style>
```

## uni.scss 的优缺点

`uni.scss`为 uni-app 新建项目自带工程文件，使用的预处理器为`sass/scss`，由此可见，uni-app 官方推荐的是`scss`，同时我们也是`scss`的坚定推崇者，不建议在 uni-app 中使用`less`、`stylus`等。

`uni.scss`具有如下一些特点：

- 无需引入，uni-app 在编译时，会自动引入此文件
- 在此中定义的`scss`变量，可以全局使用，可以在此定义一些颜色，主题，尺寸等变量
- `uni.scss`会编译到每个`scss`文件中(请着重理解这一句话)

综上所述，我们可以得知，`uni.scss`主要是利用`scss`的特性，定义一些全局变量，供各个写了`lang=scss`的 style 标签引用，但是这引出了一个重要的问题：

`uni.scss`中所写的一切内容，都会注入到每个声明了`scss`的文件中，这意味着，如果您的`uni.scss`如果有几百行，大小 10k 左右，那么这个 10k 都会被注入所有的 其他`scss`文件(页面)中，如果您的应用有 50 个页面，那么有可能因此导致整体的包体积多了 50 \* 10 = 500k 的大小，这可能会导致小程序包太大而无法预览和发布， 所以，我们建议您只将`scss`变量相关的内容放到 uni.scss 中。

## 重写组件中的样式

使用 **`/deep/`**

```vue
<style lang="scss" scoped>
/deep/ .wb-layer-page {
  min-width: 400rpx;
}
</style>
```

## 自定按钮颜色

::: tip
使用本项目的按钮组件：**`wb-button`**
:::

```html
<wb-button type="red">自定颜色按钮</wb-button>
```

```css
.wb-btn--red {
  color: #ffffff !important;
  border-color: #eb0909;
  background-color: #eb0909 !important;
}
.wb-btn--red-hover {
  background: #c80808 !important;
}
.wb-btn--red--plain {
  color: #eb0909 !important;
  background-color: transparent !important;
}
```

## iPhoneX 底部适配

样式 class: safe-area-inset-bottom

## 避免不必要的滚动条

> 有时会发现，页面内容没有超出一屏的大小，但是出现了垂直滚动条

原因：这是因为页面的基本布局（根容器下的子元素）中使用了 **`margin`**（top 或 bottom）

解决：如果可以的话，在父容器中使用 **`padding`**（top 或 bottom）来代替 **`margin`**（top 或 bottom）

## 导航栏

- 如果只有标题和返回的需求的情况下，使用 uni 默认的标题栏(直接在 pages.json 中设置)
- 其他都使用 **`wb-navbar`** 组件(这个自定导航组件基本上满足了绝大数需求)

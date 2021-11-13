---
sidebar: auto
title: Flex布局
date: 2021-3-31 16:58:05
tags:
  - flex
---
::: tip
在看这个部分的时候，请确保您对 flex 是了解的，否则可以参考[flex 教程](https://www.cnblogs.com/hellocd/p/10443237.html)

这个部分基本是沿用 [uView flex 布局](https://uviewui.com/components/common.html#flex布局)，做了一点扩展
:::

### 主轴垂直方向

```css
.u-flex-col {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
}
```

### 全屏布局

```css
.u-full {
  height: calc(100vh - var(--window-top) - var(--window-bottom));
}
```

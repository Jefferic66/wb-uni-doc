---
sidebar: auto
title: 一直执行
date: 2021-4-12 14:48:36
tags:
  - until
---

until(condition, milliseconds)

::: tip
当不满足条件，就一直执行
:::

| 参数         | 类型                | 必填 | 默认值 | 说明           |
| ------------ | ------------------- | ---- | ------ | -------------- |
| condition    | Boolean \| Function | 是   | -      | 需要满足的条件 |
| milliseconds | Number              | 否   | 17     | 下次执行的间隔 |

```javascript
this.$wb
  .until(() => !this.loading)
  .then(() => {
    console.log("loading finished");
  });
```

---
sidebar: auto
title: 时间格式化
date: 2021-5-7 10:10:53
tags:
  - timeFormat
  - data
  - 时间格式化
---

## 格式化时间

timeFormat | date(time , format = "yyyy-mm-dd")

> 该方法可以在`过滤器`中使用

| 参数   | 类型   | 必填 | 默认值     | 说明                                                                           |
| ------ | ------ | ---- | ---------- | ------------------------------------------------------------------------------ |
| time   | String | 是   |            | 任何合法的时间格式                                                             |
| format | String | 否   | yyyy-mm-dd | 年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配 |

```javascript
this.$wb.timeFormat(timestamp, "yyyy年mm月dd日");
```

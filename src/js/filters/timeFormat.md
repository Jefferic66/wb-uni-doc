---
sidebar: auto
title: 时间格式化
date: 2021-5-7 10:10:53
tags:
  - 过滤器
  - timeFormat
  - data
  - 时间格式化
---

timeFormat | date(format = "yyyy-mm-dd")

| 参数   | 类型   | 必填 | 默认值     | 说明                                                                             |
| ------ | ------ | ---- | ---------- | -------------------------------------------------------------------------------- |
| format | String | 否   | yyyy-mm-dd | 格式可以自由搭配<br>年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss" |

```html
<view>
  <!-- 因为默认参数为yyyy-mm-dd，所以这里可以不用写时间格式 -->
  时间为：{{'2021-5-7 10:16:51' | date}}
</view>

<view>
  时间为：{{'1585926095536' | date('yyyy-mm')}}
</view>
```

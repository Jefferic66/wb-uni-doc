---
sidebar: auto
title: 数据脱敏
date: 2021-3-31 18:03:01
tags:
  - mask
---

mask(str = '', beginLen = 2, endLen = 2, maskCode = '\*',maxLength = 0)

> 该方法可以在`过滤器`中使用

| 参数      | 类型   | 必填 | 默认值 | 说明               |
| --------- | ------ | ---- | ------ | ------------------ |
| str       | String | 是   | ''     |                    |
| beginLen  | Number | 否   | 2      | 字符串前面保留位数 |
| endLen    | Number | 否   | 2      | 字符串后面保留位数 |
| maskCode  | String | 否   | \*     | 掩码               |
| maxLength | Number | 否   | 0      | 掩码最大长度限制   |

示例

```javascript
this.$wb.mask("18353246789097654");
// "18*************54"

this.$wb.mask("18353246789097654", 4, 4);
// "1835*********7654"

this.$wb.mask("18353246789097654", 4, 4, "-");
// "1835---------7654"

this.$wb.mask("18353246789097654", 4, 4, "-", 3);
// "1835---7654"
```

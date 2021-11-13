---
sidebar: auto
title: 去除空格
date: 2021-3-31 18:02:15
tags:
  - trim
  - trimStart
  - trimEnd
  - trimAll
---
## 头尾空格

trim(str)

```javascript
var str = " 使 酒 好 剑 ";
this.$wb.trim(str);
// '使 酒 好 剑'
```

## 头空格

trimStart(str)

```javascript
var str = " 使 酒 好 剑 ";
this.$wb.trimStart(str);
// '使 酒 好 剑 '
```

## 尾空格

trimEnd(str)

```javascript
var str = " 使 酒 好 剑 ";
this.$wb.trimEnd(str);
// ' 使 酒 好 剑'
```

## 全部空格

trimAll(str)

```javascript
var str = " 使 酒 好 剑 ";
this.$wb.trimAll(str);
// '使酒好剑 '
```

---
sidebar: auto
title: 对象相同
date: 2021-3-31 17:53:28
tags:
  - eq
---
eq(a, b)


| 参数 | 类型 | 必填 | 默认值 | 说明 |
| - | - | - | - | - |
| a | Any | 是 |   | 要判断相等的对象 a |
| b | Any | 是 |   | 要判断相等的对象 b |

```javascript
console.log(this.$wb.eq(0, 0)); // true
console.log(this.$wb.eq(0, -0)); // false

console.log(this.$wb.eq(NaN, NaN)); // true
console.log(this.$wb.eq(Number(NaN), Number(NaN))); // true

console.log(this.$wb.eq("Curly", new String("Curly"))); // true

console.log(this.$wb.eq([1], [1])); // true
console.log(this.$wb.eq({ value: 1 }, { value: 1 })); // true

var a, b;

a = { foo: { b: { foo: { c: { foo: null } } } } };
b = { foo: { b: { foo: { c: { foo: null } } } } };
a.foo.b.foo.c.foo = a;
b.foo.b.foo.c.foo = b;

console.log(this.$wb.eq(a, b)); // true
```

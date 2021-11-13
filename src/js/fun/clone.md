---
sidebar: auto
title: 对象克隆
date: 2021-3-31 17:47:36
tags:
  - clone
  - cloneAll
  - merge
---
::: tip
注意

由于 JS 对象包括的范围非常广，加上 ES6 又有众多的新特性，很难、也没必要做到囊括所有的类型和情况，这里说的"对象"，指的是大多数对象，包含"Function"、"RegExp"、"Date"、"Symbol"，档不包括修改对象原型链或者为"Promise"等的情况，请留意。
:::

## 克隆两个对象

clone(target, source, options)


| 参数 | 类型 | 必填 | 默认值 | 说明 |
| - | - | - | - | - |
| target | Any | 是 |   | 要合并的第一个对象 |
| source | Any | 是 |   | 要合并的第二个对象 |
| options | Object | 否 |   | 合并的参数 |

**options**


| 参数 | 类型 | 必填 | 默认值 | 说明 |
| - | - | - | - | - |
| arrayMerge | Boolean Function | 否 | true | <div style="text-align:left;">数组合并选项，有多种方法可以合并两个数组， 也可以<br/> 创建自定义函数。<br/>`true`：>默认值，使用数组连接，数组中的元素克隆 <br/>`false`: 合并两个数组中同一索引的对象 <br/> `自定义函数`:自定义合并函数 </div> |
| isMergeableObject | Function | 否 |   | <div style="text-align:left;"> 判断是否是需要合并的对象类型，<br/>默认情况下，clone 几乎克隆对象所有类型的每个属性。 </div> |
| customMerge | Function | 否 |   | <div style="text-align:left;">可用于重写属性的默认合并行为的函数。</div> |

### 普通示例

```javascript
const x = {
  foo: { bar: 3 },
  array: [
    {
      does: "work",
      too: [1, 2, 3],
    },
  ],
};

const y = {
  foo: { baz: 4, bar: 1 },
  quux: 5,
  array: [
    {
      does: "work",
      too: [4, 5, 6],
    },
    {
      really: "yes",
    },
  ],
};

this.$wb.clone(x, y, {});
```

### arrayMerge 示例

```javascript
// Overwrites the existing array values completely rather than concatenating them:
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;
this.$wb.clone([1, 2, 3], [3, 2, 1], { arrayMerge: overwriteMerge }); // => [3, 2, 1]
```

### isMergeableObject 示例

```javascript
// 只克隆普通对象
const isPlainObject = require("is-plain-object");

function SuperSpecial() {
  this.special = "oh yeah man totally";
}

const instantiatedSpecialObject = new SuperSpecial();

const target = {
  someProperty: {
    cool: "oh for sure",
  },
};

const source = {
  someProperty: instantiatedSpecialObject,
};

const defaultOutput = this.$wb.clone(target, source);

defaultOutput.someProperty.cool; // => 'oh for sure'
defaultOutput.someProperty.special; // => 'oh yeah man totally'
defaultOutput.someProperty instanceof SuperSpecial; // => false

const customMergeOutput = this.$wb.clone(target, source, {
  isMergeableObject: isPlainObject,
});

customMergeOutput.someProperty.cool; // => undefined
customMergeOutput.someProperty.special; // => 'oh yeah man totally'
customMergeOutput.someProperty instanceof SuperSpecial; // => true
```

### customMerge 示例

```javascript
//
const alex = {
  name: {
    first: "Alex",
    last: "Alexson",
  },
  pets: ["Cat", "Parrot"],
};

const tony = {
  name: {
    first: "Tony",
    last: "Tonison",
  },
  pets: ["Dog"],
};

const mergeNames = (nameA, nameB) => `${nameA.first} and ${nameB.first}`;

const options = {
  customMerge: (key) => {
    if (key === "name") {
      return mergeNames;
    }
  },
};

const result = this.$wb.clone(alex, tony, options);

result.name; // => 'Alex and Tony'
result.pets; // => ['Cat', 'Parrot', 'Dog']
```

## 多个对象的克隆

cloneAll(targets, options)


| 参数 | 类型 | 必填 | 默认值 | 说明 |
| - | - | - | - | - |
| targets | Array | 是 |   | 要合并的对象或数组的数组 |
| options | Object | 否 |   | 合并的参数 |

**options**


| 参数 | 类型 | 必填 | 默认值 | 说明 |
| - | - | - | - | - |
| arrayMerge | Boolean Function | 否 | true | <div style="text-align:left;">数组合并选项，有多种方法可以合并两个数组， 也可以<br/> 创建自定义函数。<br/>`true`：>默认值，使用数组连接，数组中的元素克隆 <br/>`false`: 合并两个数组中同一索引的对象 <br/> `自定义函数`:自定义合并函数 </div> |
| isMergeableObject | Function | 否 |   | <div style="text-align:left;"> 判断是否是需要合并的对象类型，<br/>默认情况下，clone 几乎克隆对象所有类型的每个属性。 </div> |
| customMerge | Function | 否 |   | <div style="text-align:left;">可用于重写属性的默认合并行为的函数。</div> |

```javascript
const x = {
  foo: { bar: 3 },
  array: [
    {
      does: "work",
      too: [1, 2, 3],
    },
  ],
};

const y = {
  foo: { baz: 4, bar: 1 },
  quux: 5,
  array: [
    {
      does: "work",
      too: [4, 5, 6],
    },
    {
      really: "yes",
    },
  ],
};

this.$wb.cloneAll([x, y], {});
```

## 合并对象或数组等

merge([item1[, item2[, . . . [, itemN]]]])

```javascript
const x = {
  foo: { bar: 3 },
  array: [
    {
      does: "work",
      too: [1, 2, 3],
    },
  ],
};

const y = {
  foo: { baz: 4, bar: 1 },
  quux: 5,
  array: [
    {
      does: "work",
      too: [4, 5, 6],
    },
    {
      really: "yes",
    },
  ],
};

this.$wb.merge(x, y);
```

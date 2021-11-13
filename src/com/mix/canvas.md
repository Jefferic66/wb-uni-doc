---
sidebar: auto
title: Canvas 画布
date: 2021-4-17 17:23:40
tags:
  - canvas
  - 画布
---

## 使用说明

本组件是 js 组件，需要实例化

```js
this.cvs = new this.$wb.canvas("test", this);
```

## 画布绘制方法

### 创建文本

text(options)

| options 参数 | 类型    | 说明                        | 默认值  |
| ------------ | ------- | --------------------------- | ------- |
| x            | Number  | 绘制文本的左上角 x 坐标位置 | 必填    |
| y            | Number  | 绘制文本的左上角 y 坐标位置 | 必填    |
| text         | String  | 在画布上输出的文本          | 必填    |
| width        | Number  | 文本的总宽度                | 必填    |
| fontSize     | Number  | 字体大小，单位 px           | 14      |
| color        | String  | 字体颜色                    | #000000 |
| lineHeight   | Number  | 行高                        | 14      |
| letterSpace  | Number  | 字间距                      | 0       |
| overflow     | Boolean | 设置超出省略号              | false   |
| lineClamp    | Number  | 文本行数, 配合 `overflow`   | 1       |

```js
this.cvs = new this.$wb.canvas("test", this);

this.cvs
  .text({
    x: 130,
    y: 43,
    width: this.$sys.windowWidth - 150,
    overflow: "ellipsis",
    lineClamp: 5,
    text: `我要把你揉进我怀里 把你做进我梦里 然后靠一个吻 缝补这距离 捱过无能为力的年纪 我一定要拥有你 是我最亲爱的你 给你一整首情诗 关于你温暖名字 在每个孑然的深夜为你诵读 字句真诚而坚固 星辰也为你祝福 一想你 `,
  })
  .draw();
```

### 创建图片

image(options)

| options 参数    | 类型    | 说明                                                                            | 默认值 |
| --------------- | ------- | ------------------------------------------------------------------------------- | ------ |
| x               | Number  | 绘制图形的左上角 x 坐标位置                                                     | 必填   |
| y               | Number  | 绘制图形的左上角 y 坐标位置                                                     | 必填   |
| url             | String  | 图片路径                                                                        | 必填   |
| height          | Number  | 高度，单位 px                                                                   | 必填   |
| width           | Number  | 宽度，单位 px                                                                   | 必填   |
| radius          | Number  | 圆角，单位 px                                                                   | 0      |
| backgroundColor | String  | 背景色，在有圆角的情况下背景默认为#000000                                       | -      |
| mode            | String  | 裁剪模式，不填 或 aspectFit 或 aspectFill                                       | -      |
| center          | Boolean | 在 scaleToFill 模式的情况下，超出截取图片是否按中心的计算，false 则从左上角计算 | true   |

```js
this.cvs = new this.$wb.canvas("test", this);

this.cvs
  .image({
    x: 20,
    y: 20,
    height: 100,
    width: 100,
    radius: 10,
    mode: "aspectFill",
    url: "/static/img/test/xj.jpg",
    backgroundColor: "#ffffff",
  })
  .draw();
```

### 创建块

div(options)

| options 参数    | 类型   | 说明                                      | 默认值  |
| --------------- | ------ | ----------------------------------------- | ------- |
| x               | Number | 绘制块的左上角 x 坐标位置                 | 必填    |
| y               | Number | 绘制块的左上角 y 坐标位置                 | 必填    |
| height          | Number | 高度，单位 px                             | 必填    |
| width           | Number | 宽度，单位 px                             | 必填    |
| radius          | Number | 圆角，单位 px                             | 0       |
| backgroundColor | String | 背景色，在有圆角的情况下背景默认为#000000 | -       |
| border.width    | Number | 边框宽度，单位 px                         | 0       |
| border.color    | String | 边框色                                    | #000000 |

```js
this.cvs = new this.$wb.canvas("test", this);

this.cvs
  .div({
    x: 10,
    y: 10,
    height: 120,
    width: this.$sys.windowWidth - 20,
    radius: 5,
    backgroundColor: "#ffffff",
    border: {
      width: 0.5,
      color: "#666",
    },
  })
  .draw();
```

## 画布操作方法

### 预览图片

previewImage()

```js
this.cvs.previewImage();
```

### 生成图片

createImage()

```js
this.cvs.createImage();
```

### 保存图片

saveImage()

```js
this.cvs.saveImage();
```

---
sidebar: auto
title: Base64
date: 2021-4-17 17:47:36
tags:
  - base64
---

## 图片转换为 base64 数据

pathToBase64(path)

::: tip
路径是本地路径，远程图片需要处理下
:::

| 参数 | 类型   | 必填 | 默认值 | 说明               |
| ---- | ------ | ---- | ------ | ------------------ |
| path | String | 是   |        | 需要转换的图像路径 |

```javascript
// 本地图片
this.$wb.pathToBase64("/static/logo.png");

// 远程图片，先加载到本地
const imgInfo = await uni.getImageInfo({
  src:
    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1ae87107-2943-4ba6-be2b-390ca27c6260.png",
});
const logoBase64 = await this.$wb.pathToBase64(imgInfo[1].path);
```

## base64 转换为本地图片

base64ToPath(base64, extName)

| 参数    | 类型   | 必填 | 默认值 | 说明        |
| ------- | ------ | ---- | ------ | ----------- |
| base64  | String | 是   |        | base64 数据 |
| extName | String | 否   |        | 文件后缀    |

```javascript
const base64 = await pathToBase64("/static/logo.png");
this.$wb.base64ToPath(base64, "png");
```

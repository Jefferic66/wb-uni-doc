---
sidebar: auto
title: 部分对齐
date: 2021-3-31 17:38:02
tags:
  - h5
---


### 设置剪切板

```javascript
uni.setClipboardData({
  data: "文字",
  success: function(data) {},
  fail: function(err) {},
  complete: function(res) {},
});
```

### 获取剪贴板

```javascript
uni.getClipboardData({
  success: function(data) {},
  fail: function(err) {},
  complete: function(res) {},
});
```

### 保存图片到系统相册

```javascript
uni.saveImageToPhotosAlbum({
  filePath: res.tempFilePaths[0],
  success: function() {
    console.log("save success");
  },
});
```

### 保存视频到系统相册

```javascript
uni.saveVideoToPhotosAlbum({
  filePath: res.tempFilePath,
  success: function() {
    console.log("save success");
  },
});
```
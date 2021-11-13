---
sidebar: auto
title: 环境设置
date: 2021-3-30 17:17:18
tags:
  - 环境设置
  - manifest.json
  - vs code
  - 安卓证书
---

## manifest.json

### ios 的安全区域

`app-plus` 节点下，隐藏底部安全区域，需要情况下用样式实现 `safe-area-inset-bottom`

```json
/* 安全区设置 */
  "safearea": {
    "background": "#FFFFFF",
    "bottom": {
      "offset": "none"
    }
  }
```

## vs code

### 代码格式化

1. 安装[prettier](https://ext.dcloud.net.cn/plugin?id=2025)插件
1. 菜单：工具->设置->插件设置->打开文件 prettier.config.js 进行配置
   ```javascript
   module.exports = {
     printWidth: 180,
     semi: false,
     tabWidth: 2,
     useTabs: false,
     singleQuote: true,
     trailingComma: "none",
     bracketSpacing: true,
     htmlWhitespaceSensitivity: "ignore",
     parsers: {
       ".jsx": "flow",
       ".scss": "scss",
       ".ts": "typescript",
       ".less": "css",
       ".vue": "vue",
       ".nvue": "vue",
       ".ux": "vue",
       ".yml": "yaml",
     },
   };
   ```

## 安卓证书

生成命令

```bash
keytool -genkey -alias io.xxx.xxx -keyalg RSA -keysize 2048 -validity 36500 -keystore xxx.keystore
```

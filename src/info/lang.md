---
sidebar: auto
title: 国际化
date: 2021-3-31 16:07:36
tags:
  - lang
  - i18n
  - 多语言
---

::: tip
本项目中已经集成了多语言切换的功能
:::

# i18n

前言：

> `i18n`是一个专门用于处理多语言的插件，其义来自于`internationalization`(国际化)，取其首尾两个字母`i`和`n`，中间部分`nternationalizatio`刚好 18 个字母， 故被起名`i18n`。  
> 此插件需要通过`npm`下载方可使用。

## 安装 vue-i18n

您需要通过`npm`安装此插件：

```sh
# 如果您的项目由HX创建，根目录没有package.json的话，先通过如下命令创建package.json
# npm init -y

# 安装vue-i18n
npm install vue-i18n
```

## 配置

### 多语言设置

> 路径：`common/locales/index.js`

```js
import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import zh from "./zh-cn.json";
import en from "./en-US.json";

if (!uni.getStorageSync("lang")) {
  // 根据系统环境设置默认语言
  uni.getSystemInfo({
    success: (res) => {
      uni.setStorageSync(
        "lang",
        res.language.indexOf("zh") != -1 ? "zh" : "en"
      );
    },
  });
}

// 或者 固定默认中文
// uni.setStorageSync("lang", "zh");

const i18n = new VueI18n({
  // 默认使用中文
  locale: uni.getStorageSync("lang") || "zh",
  messages: {
    en: en, // 英文语言包
    zh: zh, // 中文简体语言包
  },
});

// 导出国际化
export default i18n;
```

### 在 main.js 中引用

```js
...
import i18n from "./common/locales/index.js";
...
// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n

const app = new Vue({
  i18n,
  ...App
})
app.$mount()
```

::: danger
注意

别忘了上面的最后处，需要在new Vue构造器中写入i18n
:::

## 更详细的方案
  [多语言切换](https://uviewui.com/guide/i18n.html)
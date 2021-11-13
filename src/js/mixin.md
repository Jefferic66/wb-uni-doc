---
sidebar: auto
title: 全局
date: 2021-3-31 17:46:51
tags:
  - mixin
---

::: tip
注意

使用`Vue.mixin`混入到 vue 实例中
:::

## 返回

back(delta=1)  
关闭当前页面，返回上一页面或多级页面。

> 不适用 `tabBar` 页面

| 参数  | 类型   | 必填 | 默认值 | 说明                                                  |
| ----- | ------ | ---- | ------ | ----------------------------------------------------- |
| delta | Number | 否   | 1      | 返回的页面数，如果 delta 大于现有页面数，则返回到首页 |

```javascript
// 返回上一页
this.goback();

// 后退2页
this.goback(2);
```

## 打开外部链接

openBrowser(url)

| 参数 | 类型   | 必填 | 默认值 | 说明                                                                                     |
| ---- | ------ | ---- | ------ | ---------------------------------------------------------------------------------------- |
| url  | String | 是   | -      | http://xxx.xxx.xx：打开浏览器<br>mailto：xxx@xxx.xx 打开邮件工具<br>tel:xxxxxxx 打开拨号 |

```javascript
// 打开浏览器
this.openBrowser("http://xxx.xxx.xx");

// 打开邮件工具
this.openBrowser("mailto：xxx@xxx.xx");

// 打开拨号
this.openBrowser("tel:xxxxxxx");
```

## 拨打电话

phoneCall(phoneNumber, success, fail)

| 参数        | 类型     | 必填 | 说明                   |
| ----------- | -------- | ---- | ---------------------- |
| phoneNumber | String   | 是   | 需要拨打的电话号码     |
| success     | Function | 否   | 接口调用成功的回调     |
| fail        | Function | 否   | 接口调用失败的回调函数 |

```javascript
this.phoneCall("114");
```

## 用户是否登录

isLogin(needLogin, needRequest, backHome)  
返回用户是否登录

> 基于检测`store`中`account`模块的`uid`(用户 id)和`account`(用户账号)实现
> 如果业务复杂可以自定义实现

| 参数        | 类型    | 必填 | 默认值 | 说明                                 |
| ----------- | ------- | ---- | ------ | ------------------------------------ |
| needLogin   | Boolean | 是   | true   | 如果没有登录，是否需要跳转到登录界面 |
| needRequest | Boolean | 是   | false  | 是否需要请求服务端来判断用户登录状态 |
| backHome    | Boolean | 是   | false  | 取消登录是否回到首页面               |

```javascript
// 检测(带跳转)
if (this.isLogin()) {
  // 已登录
}

// 只检测不跳转
const isLogin = this.isLogin(false);

// 远程请求检测，带跳转
this.isLogin(true, true);
```

## px 转 rpx

px2upx(px)  
返回转换后的 rpx 值

```javascript
this.px2upx(15);
```

## 复制

copy(txt, message)

| 参数    | 类型   | 必填 | 说明                       |
| ------- | ------ | ---- | -------------------------- |
| txt     | String | 是   | 需要辅助的字符串           |
| message | String | 否   | 成功提示，默认是：复制成功 |

```javascript
this.copy("复制的内容");
```

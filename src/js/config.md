---
sidebar: auto
title: 配置项
date: 2021-5-1 15:04:25
tags:
  - config
---

#### 与项目相关的配置项

::: tip
主要是登录和首页的相关配置
:::

| 名称             | 说明                                     | 类型    | 默认值               |
| ---------------- | ---------------------------------------- | ------- | -------------------- |
| homeUrl          | 首页路径                                 | String  | /pages/home/home     |
| getInfoAction    | 用户信息的 action 路径                   | String  | account/getInfo      |
| loginUrl         | 登陆路径                                 | String  | /pages/account/login |
| loginCancleBack  | 登录不允许返回的参数                     | String  | ?m=1                 |
| loginCanBackHome | 登录运行返回，但是只能返回到首页面的参数 | String  | ?m=2                 |
| homeIsTab        | 首页是否 tab 页面                        | Boolean | true                 |

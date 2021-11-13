---
sidebar: auto
title: Layer 弹层组件
date: 2021-4-1 15:18:24
tags:
  - layer
  - Vusui-app-layer
---

## 使用说明

组件在页面中声明后，就可以在 Vue 实例中调用

::: tip
该组件已经在 wb-page 组件中引用了，直接使用 wb-page 组件就可以
:::

### 基本使用

```html
<wb-layer>
  <block slot="drawer"> </block>
  <block slot="page"> </block>
  <block slot="photos"> </block>
</wb-layer>
```

## Methods

### 关闭弹层

#### close(type)

关闭弹层，返回 Promise，如果不传 tpye 则关闭所有

| 参数 | 说明                         | 类型   | 默认值 | 可选值                                                               | 必填 |
| ---- | ---------------------------- | ------ | ------ | -------------------------------------------------------------------- | ---- |
| type | 层的类型，如果不传则关闭所有 | String | -      | 'dialog', 'message', 'loading', 'prompt', 'drawer', 'page', 'photos' | 否   |

```js
// 关闭 dialog 类型的弹层
this.layer.close("dialog").then(() => {
  this.layer.msg("常见提示框", { time: 5000 });
});
// 关闭所有弹层
this.layer.close();
```

### 提示框

#### alert(content, options, yes)

可以多个按钮

| 参数    | 说明                                                                           | 类型            | 默认值 | 可选值 |
| ------- | ------------------------------------------------------------------------------ | --------------- | ------ | ------ |
| content | 提示内容,使用\<br\>换行<br>String: '内容'<br>Array: ['内容', 'font-size:26px'] | String \| Array |        |        |
| options | 更多的参数设置，见下表                                                         | Object          |        |        |
| yes     | 第一个按钮的回调                                                               | Function        |        |        |

#### options

| 参数         | 说明                                                                                                                                                         | 类型            | 默认值                  | 可选值     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ----------------------- | ---------- |
| title        | 标题                                                                                                                                                         | String          | 提示                    | -          |
| button       | 按钮或按钮组，最多 3 个按钮 <br> 例如：'确定' 或 ['按钮', '取消', '关闭']，<br> 按钮 1 的回调是 yes，而从按钮 2 开始，则回调为 btn2:function(){}，以此类推。 | String \| Array | 确定                    | -          |
| butType      | 使用 wb-button 的 type，如果没有则使用默认样式<br> 例如：'error' 或 ['error','info','black']                                                                 | String \| Array | 确定                    | -          |
| contentAlign | 内容对齐位置                                                                                                                                                 | String          | center                  | left,right |
| shade        | 遮罩透明度                                                                                                                                                   | Number          | 0.3                     | 0-1        |
| shadeClose   | 点击遮罩是否能关闭弹层                                                                                                                                       | Boolean         | false                   | true       |
| tabBar       | 弹出层时是否隐藏原生 tabBar 导航栏                                                                                                                           | Boolean         | true                    | false      |
| anim         | 弹层出现的动画效果，<br>如果不想显示动画，设置 anim: -1 即可                                                                                                 | Number          | 0                       | 0-6        |
| outAnim      | 弹层消失的动画效，<br>如果不想显示动画，设置 anim: -1 即可                                                                                                   | Number          | 0                       | 0-6        |
| icon         | 按钮中的图标类型，-1 表示无图标 <br> 例如：0 或 [0,'font-size:48px;']                                                                                        | Number \| Array | [-1, 'font-size:30px;'] | 0-5        |
| time         | 定时关闭，0 为不自动关闭，单位毫秒                                                                                                                           | Number          | 0                       | -          |
| btn2         | 按钮组中第 2 按钮的回调                                                                                                                                      | Function        | null                    | -          |
| btn3         | 按钮组中第 3 按钮的回调                                                                                                                                      | Function        | null                    | -          |

```js
this.layer.alert(
  "自定义按钮",
  {
    button: ["按钮", "取消", "关闭"],
    time: 2000,
    shade: 0.1,
    btn2: (a, b, c) => {
      this.layer.msg("按钮2");
    },
    btn3: (a, b, c) => {
      this.layer.msg("按钮3");
    },
  },
  () => {
    this.layer.msg("按钮 1");
  }
);
```

### 询问框

#### confrim(content, options, yes, cancle)

| 参数    | 说明                                                                           | 类型            | 默认值 | 可选值 |
| ------- | ------------------------------------------------------------------------------ | --------------- | ------ | ------ |
| content | 提示内容,使用\<br\>换行<br>String: '内容'<br>Array: ['内容', 'font-size:26px'] | String \| Array |        |        |
| options | 更多的参数设置，见下表                                                         | Object          |        |        |
| yes     | 确定(第 1 个)按钮的回调                                                        | Function        |        |        |
| cancle  | 取消(第 2 个)按钮的回调                                                        | Function        |        |        |

#### options

| 参数         | 说明                                                                                         | 类型            | 默认值                 | 可选值     |
| ------------ | -------------------------------------------------------------------------------------------- | --------------- | ---------------------- | ---------- |
| title        | 标题                                                                                         | String          | -                      | -          |
| button       | 按钮组，必须是 2 个按钮 <br> 例如：['确定', '取消']                                          | String \| Array | 确定                   | -          |
| butType      | 使用 wb-button 的 type，如果没有则使用默认样式<br> 例如：'error' 或 ['error','info','black'] | String \| Array | 确定                   | -          |
| contentAlign | 内容对齐位置                                                                                 | String          | center                 | left,right |
| shadeClose   | 点击遮罩是否能关闭弹层                                                                       | Boolean         | false                  | true       |
| anim         | 弹层出现的动画效果，<br>如果不想显示动画，设置 anim: -1 即可                                 | Number          | 0                      | 0-6        |
| outAnim      | 弹层消失的动画效，<br>如果不想显示动画，设置 anim: -1 即可                                   | Number          | 0                      | 0-6        |
| icon         | 按钮中的图标类型，-1 表示无图标 <br> 例如：0 或 [0,'font-size:48px;']                        | Number \| Array | [4, 'font-size:30px;'] | 0-5        |
| time         | 定时关闭，0 为不自动关闭，单位毫秒                                                           | Number          | 0                      | -          |
| shade        | 遮罩透明度                                                                                   | Number          | 0.3                    | 0-1        |
| tabBar       | 弹出层时是否隐藏原生 tabBar 导航栏                                                           | Boolean         | true                   | false      |

```js
this.layer.confirm(
  "您确定要退出当前账号？",
  (opt) => {
    this.layer.msg("退出成功");
  },
  (opt) => {
    this.layer.msg("取消操作");
  }
);
```

### 信息提示

#### msg(content, options, cancle)

| 参数    | 说明                                                                           | 类型            | 默认值 | 可选值 |
| ------- | ------------------------------------------------------------------------------ | --------------- | ------ | ------ |
| content | 提示内容,使用\<br\>换行<br>String: '内容'<br>Array: ['内容', 'font-size:26px'] | String \| Array |        |        |
| options | 更多的参数设置，见下表                                                         | Object          |        |        |
| cancle  | 信息提示关闭的回调                                                             | Function        |        |        |

#### options

| 参数       | 说明                                                                  | 类型            | 默认值                  | 可选值 |
| ---------- | --------------------------------------------------------------------- | --------------- | ----------------------- | ------ |
| closeBtn   | 是否显示关闭按钮                                                      | Boolean         | false                   | true   |
| shadeClose | 点击遮罩是否能关闭弹层                                                | Boolean         | false                   | true   |
| anim       | 弹层出现的动画效果，<br>如果不想显示动画，设置 anim: -1 即可          | Number          | 0                       | 0-6    |
| outAnim    | 弹层消失的动画效，<br>如果不想显示动画，设置 anim: -1 即可            | Number          | 0                       | 0-6    |
| icon       | 按钮中的图标类型，-1 表示无图标 <br> 例如：0 或 [0,'font-size:48px;'] | Number \| Array | [-1, 'font-size:30px;'] | 0-5    |
| time       | 定时关闭，0 为不自动关闭，单位毫秒                                    | Number          | 1500                    | -      |
| shade      | 遮罩透明度                                                            | Number          | 0.01                    | 0-1    |
| tabBar     | 弹出层时是否隐藏原生 tabBar 导航栏                                    | Boolean         | true                    | false  |

```js
this.layer.msg("常见提示框");
```

### 加载层

#### load(icon, options)

| 参数    | 说明                   | 类型   | 默认值 | 可选值 |
| ------- | ---------------------- | ------ | ------ | ------ |
| icon    | 加载效果图标           | Number | 0      | 0-3    |
| options | 更多的参数设置，见下表 | Object |        |        |

#### options

| 参数       | 说明                                                         | 类型    | 默认值 | 可选值 |
| ---------- | ------------------------------------------------------------ | ------- | ------ | ------ |
| content    | 提示内容,使用\<br\>换行                                      | String  | -      | -      |
| closeBtn   | 是否显示关闭按钮                                             | Boolean | false  | true   |
| shadeClose | 点击遮罩是否能关闭弹层                                       | Boolean | false  | true   |
| anim       | 弹层出现的动画效果，<br>如果不想显示动画，设置 anim: -1 即可 | Number  | 0      | 0-6    |
| outAnim    | 弹层消失的动画效，<br>如果不想显示动画，设置 anim: -1 即可   | Number  | 0      | 0-6    |
| time       | 定时关闭，0 为不自动关闭，单位毫秒                           | Number  | 0      | -      |
| shade      | 遮罩透明度                                                   | Number  | 0.01   | 0-1    |
| tabBar     | 弹出层时是否隐藏原生 tabBar 导航栏                           | Boolean | true   | false  |

```js
this.layer.load();
```

### 输入层

#### prompt(options, yes)

| 参数    | 说明                   | 类型     | 默认值 | 可选值 |
| ------- | ---------------------- | -------- | ------ | ------ |
| options | 更多的参数设置，见下表 | Object   |        |        |
| yes     | 提交成功回调           | Function |        |        |

#### options

| 参数        | 说明                                                                           | 类型            | 默认值     | 可选值 |
| ----------- | ------------------------------------------------------------------------------ | --------------- | ---------- | ------ |
| formType    | 表单输入框类型 0:密码框 1:文本框 2: 文本域                                     | Number          | 1          | 0-2    |
| value       | 输入框的值                                                                     | String          | -          | -      |
| title       | 标题                                                                           | String          | 提示       | -      |
| content     | 提示内容,使用\<br\>换行<br>String: '内容'<br>Array: ['内容', 'font-size:26px'] | String \| Array |            |        |
| height      | 输入框的高度，需要带单位，formType=2 时生效                                    | String          | 80px       | -      |
| regular     | 正则字符串                                                                     | String          | -          | -      |
| empty       | 输入为空的提示                                                                 | String          | 不能为空   | -      |
| error       | 验证失败的错误提示                                                             | String          | 填写不正确 | -      |
| placeholder | 输入框提示文字                                                                 | String          | 请输入     | -      |
| length      | 最小长度和最大长度,0 为不限制                                                  | Number \| Array | [0, 255]   | -      |
| count       | 是否显示计算输入长度                                                           | Boolean         | false      | true   |
| shade       | 遮罩透明度                                                                     | Number          | 0.3        | 0-1    |
| shadeClose  | 点击遮罩是否能关闭弹层                                                         | Boolean         | false      | true   |
| anim        | 弹层出现的动画效果，<br>如果不想显示动画，设置 anim: -1 即可                   | Number          | 0          | 0-6    |
| outAnim     | 弹层消失的动画效，<br>如果不想显示动画，设置 anim: -1 即可                     | Number          | 0          | 0-6    |
| time        | 定时关闭，0 为不自动关闭，单位毫秒                                             | Number          | 0          | -      |
| tabBar      | 弹出层时是否隐藏原生 tabBar 导航栏                                             | Boolean         | true       | false  |

```js
this.layer.prompt(
  {
    placeholder: "我是占位文本",
  },
  (value) => {
    this.layer.msg("输入结果：" + value);
  }
);
```

### 抽屉层

#### drawer(position, options)

| 参数     | 说明                   | 类型   | 默认值 | 可选值                |
| -------- | ---------------------- | ------ | ------ | --------------------- |
| position | 抽屉显示位置           | String | right  | left/right/bottom/top |
| options  | 更多的参数设置，见下表 | Object |        |                       |

#### options

| 参数       | 说明                                                          | 类型    | 默认值 | 可选值 |
| ---------- | ------------------------------------------------------------- | ------- | ------ | ------ |
| content    | 提示内容,可以使用 html 内容，如果为空则使用 drawer 插槽的内容 | String  |        |        |
| shade      | 遮罩透明度                                                    | Number  | 0.3    | 0-1    |
| shadeClose | 点击遮罩是否能关闭弹层                                        | Boolean | true   | false  |
| time       | 定时关闭，0 为不自动关闭，单位毫秒                            | Number  | 0      | -      |
| tabBar     | 弹出层时是否隐藏原生 tabBar 导航栏                            | Boolean | true   | false  |

```js
// dom 模式
this.layer.drawer("left", {
  //左弹出
  content: '<h1 style="padding:20px;color:red;">自定义HTML</h1>',
});
// slot(插槽) 模式
this.layer.drawer("right"); //右弹出（默认）
```

### 页面层

#### page(options)

#### options

| 参数       | 说明                                                        | 类型    | 默认值 | 可选值 |
| ---------- | ----------------------------------------------------------- | ------- | ------ | ------ |
| title      | 标题                                                        | String  | 提示   | -      |
| content    | 提示内容,可以使用 html 内容，如果为空则使用 page 插槽的内容 | String  |        |        |
| closeBtn   | 是否显示关闭按钮                                            | Boolean | true   | false  |
| shadeClose | 点击遮罩是否能关闭弹层                                      | Boolean | false  | true   |
| shade      | 遮罩透明度                                                  | Number  | 0.3    | 0-1    |
| tabBar     | 弹出层时是否隐藏原生 tabBar 导航栏                          | Boolean | true   | false  |

```js
// slot(插槽) 模式
this.layer.page({
  title: "登录",
});
// dom 模式
this.layer.page({
  content: '<h1 style="color:red;padding:15px;">自定义HTML</h1>',
});
```

### 图集层

#### photos(options)

#### options

| 参数       | 说明                                                         | 类型              | 默认值 | 可选值 |
| ---------- | ------------------------------------------------------------ | ----------------- | ------ | ------ |
| content    | 图片数组 [{title,src}],如果空数组则使用 photos 插槽的内容    | Array             | []     |        |
| title      | 是否显示标题，或设置标题内容，如设置标题内容数组中的标题优先 | Boolean \| String | false  | -      |
| closeBtn   | 是否显示关闭按钮                                             | Boolean           | true   | false  |
| anim       | 弹层出现的动画效果，<br>如果不想显示动画，设置 anim: -1 即可 | Number            | 0      | 0-6    |
| outAnim    | 弹层消失的动画效，<br>如果不想显示动画，设置 anim: -1 即可   | Number            | 0      | 0-6    |
| shade      | 遮罩透明度                                                   | Number            | 0.8    | 0-1    |
| shadeClose | 点击遮罩是否能关闭弹层                                       | Boolean           | true   | false  |
| time       | 定时关闭，0 为不自动关闭，单位毫秒                           | Number            | 0      | -      |
| tabBar     | 弹出层时是否隐藏原生 tabBar 导航栏                           | Boolean           | true   | false  |

```js
// dom 模式
// content 数组模式
this.layer.photos({
  title: true, //显示图片标题
  number: true, //显示页码
  content: this.demoImg, //图片数组
});
// slot(插槽) 模式
this.layer.photos({
  title: "单张图片",
});/右弹出（默认）
```

## Api

### Slot

| 名称   | 说明               |
| ------ | ------------------ |
| -      | 默认插槽，页面内容 |
| drawer | drawer 抽屉层 插槽 |
| page   | page 页面层 插槽   |
| photos | photos 图集层 插槽 |

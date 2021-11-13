---
sidebar: auto
title: Page 根容器组件
date: 2021-4-1 15:10:22
tags:
  - page
  - 根容器
  - 全局组件
---

::: tip
**说明**

在最外层加该组件。然后你可以使用内置的一些方法，也可以自己扩展，例如添加 socket 消息弹窗的事件，登录验证等等
:::

::: warning
容器默认清除了margin属性
:::

已包含的组件:

- wb-layer : 通过 this.**`layer`** Vue 实例中调用，并包含 `drawer`、`page`、`photos` 三个插槽
- wb-navbar : 通过 <font color="red">**config** </font> 属性来设置
- wb-loading : 通过 **`v-model`** 和 **`loading`** 来设置全屏的页面加载效果
- cl-toast : 通过 <font color="red">this.**\$app.showToast** </font>调用，`参数`请参考[文档](https://docs.cool-js.com/uni/components/feedback/toast.html)，需要在页面加载完成后方可调用
- cl-message : 通过 <font color="red">this.**\$app.showMessage** </font>调用，`参数`请参考[文档](https://docs.cool-js.com/uni/components/feedback/message.html)，需要在页面加载完成后方可调用

## 使用说明

该组件为了弥补 uniapp 无法全局组件的遗憾。

### 完整示例

通过 v-model 绑定是否显示加载效果  
通过 loading 设定加载动画的效果

```html
<template>
  <wb-page
    class="u-p-20"
    v-model="loading"
    :loader="loader"
    msgSingle
    toastSingle
  >
    <!--slot(Vusui-app-layer drawer 插槽)-->
    <view slot="drawer" class="safe-area-inset-bottom"></view>
    <!--slot(Vusui-app-layer page 插槽)-->
    <view slot="page" class="u-p-20 u-p-b-40">
      <!--在这里写入页面层的html内容-->
    </view>
    <!--slot(Vusui-app-layer photos 插槽)-->
    <view slot="photos">
      <!--在这里写入图集层的html内容-->
    </view>

    <cl-card label="Loading 全屏" :show-more="false">
      <view class="u-flex">
        <wb-button @click="showLoading" size="mini">全屏 Loading</wb-button>
      </view>
    </cl-card>
    <cl-card label="Message 消息提醒" :show-more="false">
      <wb-button @click="showMessage('success')" size="mini">成功</wb-button>
    </cl-card>

    <cl-card label="Toast 吐司提示" :show-more="false">
      <cl-card label="文字提示" :show-more="false">
        <wb-button size="mini" @click="open('文字提示')">
          <text>文字提示</text>
        </wb-button>
        <wb-button
          size="mini"
          @click="open('这是一条长文字提示，超过一定字数就会换行')"
        >
          <text>长文字提示</text>
        </wb-button>
      </cl-card>
    </cl-card>

    <cl-card label="Alert 提示框(Vusui-app-layer 弹层组件)">
      <wb-button size="mini" @click="alert1" class="u-flex-1">
        提示框
      </wb-button>
    </cl-card>
  </wb-page>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        loader: {
          spinner: "default",
          background: "#ffffffe6",
          text: "加载中",
        },
      };
    },
    onLoad() {
      // this.layer 扩展的全局方法在此处就用
    },
    onReady() {
      // 挂载到 this.$app 的扩展方法需要 页面加载完成后才能调用
    },
    methods: {
      showLoading() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 4000);
      },
      showMessage(type = "success") {
        // this.$app.showMessage('Hello')
        this.$app.showMessage({
          // success / cancel / warn / info
          type,
          message: "Hello",
        });
      },
      //#region toast
      showToast(opt) {
        this.$app.showToast(opt);
      },
      open(message) {
        this.showToast({ message });
      },
      //#endregion
      //#region alert
      alert1() {
        this.layer.alert(
          "icon:0",
          {
            button: "确定",
            icon: 0, //0-5
          },
          () => {}
        );
      },
      //#endregion
    },
  };
</script>
<style>
  /* page {
  background-color: #f7f7f7;
} */
</style>
<style lang="scss" scoped>
  /** 
  重写样式
  .wb-page: 非微信
  /deep/ .wb-page: 微信兼容处理
  */
  .wb-page,
  /deep/ .wb-page {
    overflow: hidden;
  }
</style>
<style lang="scss" scoped>
  /deep/ .cl-grid-item {
    padding-top: 10px;
  }
  .wb-btn + .wb-btn {
    margin-left: 10px;
  }
</style>
```

### 如何修改组件的样式

与 button 组件类似，针对非微信小程序平台，修改样式很容易，直接给组件定义`类名`或者嵌入`内联样式`即可。但如果是微信小程序，样式传递有问题。

#### 方法一：`custom-style`

我们提供了一个`custom-style`参数，推荐用户可以用对象形式传递样式给组件内部，注意驼峰命名。

```html
/* 以下形式在微信小程序会无效，APP和H5有效 */
<wb-page class="custom-style">雪月夜</wb-page>

<style scoped>
  .custom-style {
    padding: 20rpx 0;
  }
</style>

/* 推荐如下 */
<wb-page :custom-style="customStyle">雪月夜</wb-page>

<script>
  customStyle: {
    padding: "20rpx 0";
  }
</script>
```

#### 方法二：样式重写

```html
<style lang="scss" scoped>
  /** 
  重写样式
  .wb-page: 非微信
  /deep/ .wb-page: 微信兼容处理
  */
  .wb-page,
  /deep/ .wb-page {
    overflow: hidden;
  }
</style>
```

### loading 配置

全屏显示的页面级 loading，其属性如下

| 名称       | 说明                                                           | 类型   | 默认值    |
| ---------- | -------------------------------------------------------------- | ------ | --------- |
| spinner    | 加载效果类名，内置效果见[文档](../basic/loading.html#内置效果) | String | default   |
| background | 遮罩背景色                                                     | String | #ffffffe6 |
| text       | loading 提示文字                                               | String | -         |

## API

### Props

| 属性名                 | 说明                                                            | 类型            | 默认值 | 可选值 |
| ---------------------- | --------------------------------------------------------------- | --------------- | ------ | ------ |
| v-model                | 是否显示页面 Loading(全屏的) ，双向绑定值                       | Boolean         | false  | true   |
| full                   | 是否满屏                                                        | Boolean         | false  | true   |
| offset                 | 一般不需要使用，高度补偿，必须在 full(true)时有效，单位 rpx     | Number          | false  | true   |
| config                 | 设置 Navbar 导航栏 [配置](./navbar.html#config-参数属性)        | Object          | null   | -      |
| scroll-top             | 滚动条滚动距离                                                  | String\| Number | 0      | -      |
| safe-area-inset-bottom | 是否开启底部安全区适配                                          | Boolean         | true   | false  |
| loading                | 全屏 loading 配置，具体参考[上面文档](./page.html#loading-配置) | Object          |        |        |
| msg-single             | message 是否单个显示                                            | Boolean         | false  | true   |
| toast-single           | toast 是否单个显示                                              | Boolean         | false  | true   |
| custom-style           | 对容器的自定义样式，主要是针对微信小程序平台                    | Object          | -      | -      |

### Events

| 事件名        | 说明                                                                                    | 参数                |
| ------------- | --------------------------------------------------------------------------------------- | ------------------- |
| clickBtn      | navbar 按钮点击事件，可根据 key 来识别，进行操作                                        | {key}: 按钮的 key   |
| searchClick   | navbar 输入框点击事件<br>当点击了搜索框时触发，这时候可以进行操作，如跳转到指定的搜索页 |                     |
| searchConfirm | navbar 输入后点完成的事件<br> 当点击了完成或回车则会触发，返回输入的内容                | {value}: 搜索的内容 |

### Slot

| 名称         | 说明                                                                             |
| ------------ | -------------------------------------------------------------------------------- |
| -            | 默认插槽，页面内容                                                               |
| drawer       | drawer 抽屉层 插槽                                                               |
| page         | page 页面层 插槽                                                                 |
| photos       | photos 图集层 插槽                                                               |
| left         | navbar 左插槽                                                                    |
| leftSwitch   | navbar 左滑动切换插槽                                                            |
| center       | navbar 中间插槽（注：设置后标题`title`属性失效）                                 |
| centerSwitch | navbar 中间滑动切换插槽                                                          |
| right        | navbar 右插槽                                                                    |
| rightSwitch  | navbar 右滑动切换插槽                                                            |
| max          | navbar 填充满导航栏的插槽，使用该插槽就不要用其他插槽 （我认为是个无意义的插槽） |
| maxSwitch    | navbar 填充满导航栏的滑动切换插槽                                                |

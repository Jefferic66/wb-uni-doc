---
sidebar: auto
title: Scroller 滚动区域
date: 2021-4-11 16:28:09
tags:
  - scroller
---

## 使用说明

本组件已基于 **多语言** 的实现。

- 下拉刷新
- 到底自动加载
- 空数据展示
- 初始化载入效果
- 回到顶部
- 丰富的自定义插槽
  - down 插槽: 自定义下拉时的刷新区域
  - error 插槽: 加载错误区域
  - finish 插槽: 全部加载完成区域
  - more 插槽: 加载更多的区域，主要是数据不满一屏，未触发到底自动加载
  - empty 插槽: 空数据情况下，空数据组件底部传入 slot 内容，如按钮等
  - backtop 插槽: 回到顶部区域插槽

更强大和内容丰富的组件：[【wxs+renderjs 实现】高性能的下拉刷新上拉加载组件](https://ext.dcloud.net.cn/plugin?id=343)

<!-- ### 基本使用 -->

### pages.json 中 style 设置

- "disableScroll": true - 阻止 ios 下 list 组件下拉的抖动问题，但也阻止了页面整体下拉(页面整体不能上下滚动)

### scroll-top 跟随页面滚动

通过设置 scroll-top（页面的滚动距离），来使用跟随页面滚动的方式

- 需要监听 onPageScroll 事件来获取 scroll-top，并设置
- 不显示回到顶部按钮，回到顶部按钮需要在页面中实现

### 示例

```html
<template>
  <wb-page class="u-demo">
    <wb-scroller v-model="needReset" @load="load">
      <view v-for="(item, index) of list" :key="index">{{ item }}</view>
    </wb-scroller>
  </wb-page>
</template>
<script>
  export default {
    data() {
      needReset: false,
      list: []
    },
    methods: {
      load({ num, size, next } = {}) {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const total = 30
        console.log('loadTest', num, size)
        setTimeout(() => {
          const opt = { length: data.length, num, total }
          next(opt)
          if (num == 1) this.list = [] //如果是第一页需手动制空列表
          this.list = this.list.concat(data) //追加新数据
        }, 1 * 2000)
      }
    }
  }
</script>
```

## API

### Props

| 属性名               | 说明                                                                                                                                                                      | 类型                    | 默认值                 | 可选值 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------- | ------ |
| v-model              | 是否重置数据加载，<br>数据加载完成后会变为 true                                                                                                                           | Boolean                 | false                  | true   |
| actived              | 是否激活状态                                                                                                                                                              | Boolean                 | true                   | false  |
| auto                 | 初始化时是否自动加载数据（激活状态下）                                                                                                                                    | Boolean                 | true                   | false  |
| scroll-top           | 页面的滚动距离，通过 onPageScroll 生命周期获取，用于跟随页面滚动的情况                                                                                                    | Number                  | 0                      | -      |
| fixed                | 是否通过 fixed 固定高度                                                                                                                                                   | Boolean                 | false                  | true   |
| height               | 指定 scroll 的高度, 此项有值,则不使用 fixed.<br> (支持 20, "20rpx", "20px", "20%"格式的值, <br> 其中纯数字则默认单位 rpx, 百分比则相对于 windowHeight)                    | String\| Number         | -                      | -      |
| top                  | 距顶部距离，单位 rpx                                                                                                                                                      | String\| Number\| Array | -                      | -      |
| bottom               | 距底部距离，单位 rpx                                                                                                                                                      | String\| Number\| Array | -                      | -      |
| loading-text         | 下拉区域的加载中文案                                                                                                                                                      | String                  | 正在刷新数据中...      | -      |
| pulling-text         | 下拉区域的下拉状态文案                                                                                                                                                    | String                  | 下拉可以刷新           | -      |
| loosing-text         | 下拉区域的释放状态文案                                                                                                                                                    | String                  | 松开立即刷新           | -      |
| load-text            | 初次加载时组件的加载中文案                                                                                                                                                | String                  | 加载中...              | -      |
| more-text            | 底部数据未全部加载完成时的文案                                                                                                                                            | String                  | 点击或上拉加载更多     | -      |
| finish-text          | 加载到底的文案                                                                                                                                                            | String                  | 没有更多了             | -      |
| empty-text           | 空数据的文字提示                                                                                                                                                          | String                  | -                      | -      |
| error-text           | 错误状态文字提示                                                                                                                                                          | String                  | 加载失败，点击重新加载 | -      |
| top-text             | 返回顶部文字                                                                                                                                                              | String                  | -                      | -      |
| spinner              | 加载效果类名，内置效果见[文档](../basic/loading.html#内置效果)                                                                                                            | String                  | default                | -      |
| pull-down            | 是否开启下拉刷新                                                                                                                                                          | Boolean                 | true                   | false  |
| down-offset          | 下拉提示容器高度，单位 rpx                                                                                                                                                | Number                  | 100                    | -      |
| down-fps             | 下拉节流的 fps，单位 rpx                                                                                                                                                  | Number                  | 40                     | -      |
| down-min-angle       | 向下滑动最少偏移的角度，取值区间 [0,90]；<br>默认 45 度，即向下滑动的角度大于 45 度，<br>则触发下拉；<br>而小于 45 度，将不触发下拉，<br>避免与左右滑动的轮播等组件冲突。 | Number                  | 45                     | -      |
| down-in-offset-rate  | 在列表顶部，下拉的距离小于 offset 时，<br>改变下拉区域高度比例；<br>值小于 1 且越接近 0，高度变化越小，<br>表现为越往下越难拉                                             | Number                  | 1                      | -      |
| down-out-offset-rate | 在列表顶部，下拉的距离大于 offset 时，<br>改变下拉区域高度比例；<br>值小于 1 且越接近 0，高度变化越小，<br>表现为越往下越难拉                                             | Number                  | 0.03                   | -      |
| down-start-top       | scroll-view 快速滚动到顶部时，<br>此时的 scroll-top 可能大于 0，<br>此值用于控制最大的误差                                                                                | Number                  | 100                    | -      |
| down-bottom-offset   | 当手指 touchmove 位置在距离 body <br>底部 20px 范围内的时候结束上拉刷新，<br>避免 Webview 嵌套导致 touchend 事件不执行                                                    | Number                  | 20                     | -      |
| pull-up              | 是否开启上拉加载                                                                                                                                                          | Boolean                 | true                   | false  |
| up-offset            | 距底部多远时触发上拉，单位 rpx                                                                                                                                            | Number                  | 160                    | -      |
| back-top             | 是否开启回到顶部按钮                                                                                                                                                      | Boolean                 | true                   | false  |
| back-bottom          | 返回按钮位置到屏幕底部的距离，<br>默认值 130，单位 rpx                                                                                                                    | Number                  | 130                    | -      |
| back-top-offset      | 返回按钮位置到屏幕底部的距离钮                                                                                                                                            | Number                  | 1000                   | -      |
| z-index              | 回调顶部按钮的 z-index 值                                                                                                                                                 | Number                  | 9                      | -      |
| size                 | 分页大小                                                                                                                                                                  | Number                  | 20                     | -      |
| no-more-size         | 设置列表的总数量要大于多少条， <br>才显示无更多数据                                                                                                                       | Number                  | 8                      | -      |
| empty-src            | Emypt 图标名称或者图片路径， <br>如定义：emptyMode 参数会失效                                                                                                             | String                  | -                      | -      |
| empty-mode           | Emypt 内置的图标，详见[文档](../basic/empty.html#内置图标)                                                                                                                | String                  | data                   | -      |
| empty-base-src       | Emypt 图像模式的默认文件夹路径， <br>配合 mode 参数，详见[文档](../basic/empty.html#mode-配套图片)                                                                        | String                  | /static/com/empty/     | -      |
| empty-icon-size      | Emypt 图标(图片)的大小，单位 rpx                                                                                                                                          | Number                  | 300                    | -      |

### Events

| 事件名 | 说明     | 类型     | 参数                                                                                                                                                                                                  |
| ------ | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| load   | 数据加载 | Function | {num,size,next} <br> - num：页码 <br> - size：分页大小 <br> - next(opt)：一定要调用该方法来继续 <br><br>opt 参数<br> - error：是否错误<br> - length：当前页面数量<br> - num：页面<br> - total：总大小 |

### Slot

| 名称    | 说明                                                   | 作用域                                                                                          |
| ------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| -       | 默认插槽                                               |                                                                                                 |
| head    | 表头插槽                                               | -                                                                                               |
| down    | 自定义下拉时的刷新区域                                 | time：最后更新时间<br>text：提示的文本<br>rate：圆形进度条旋转的角度<br>loading：是否显示加载中 |
| error   | 加载错误区域                                           | text：提示的文本                                                                                |
| finish  | 全部加载完成区域                                       | text：提示的文本                                                                                |
| more    | 加载更多的区域，主要是数据不满一屏，未触发到底自动加载 | text：提示的文本                                                                                |
| empty   | 空数据情况下，空数据组件底部传入 slot 内容，如按钮等   | -                                                                                               |
| backtop | 回到顶部区域插槽                                       | text：回到顶部的文字                                                                            |

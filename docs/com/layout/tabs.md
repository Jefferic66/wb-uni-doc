---
sidebar: auto
title: Tabs 选项卡
date: 2021-4-13 15:10:22
tags:
  - tabs
  - scroller
---

## 使用说明

该组件，是一个 tabs 标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的 tab 会自动移动到组件的中间位置。

### 基本使用

tabs 标签的切换，激活项的值是 v-model 双向绑定的

具体的标签，通过 list 参数配置，该参数要求为数组，元素为对象，对象要有 name 属性，见示例：

```html
<wb-tabs v-model="current" :list="list"></wb-tabs>

<script>
  export default {
    data() {
      return {
        list: [{ name: "待收货" }, { name: "待付款" }, { name: "待评价" }],
        current: 0,
      };
    },
  };
</script>
```

### 标签的对齐

tabs 标签组通过 **`justify`** 来调整对齐方式

但如果 **`fill`** == **`true`** 时， **`justify`** 会被强制设置为 **`center`**

```html
<!-- 居中对齐 -->
<wb-tabs v-model="current" :list="list" justify="center"></wb-tabs>
<!-- 左对齐 -->
<wb-tabs v-model="current" :list="list" justify="left"></wb-tabs>
<!-- 右对齐 -->
<wb-tabs v-model="current" :list="list" justify="right"></wb-tabs>

<!-- fill = true 强制居中对齐 -->
<wb-tabs v-model="current" :list="list" justify="right" fill></wb-tabs>

<script>
  export default {
    data() {
      return {
        list: [{ name: "待收货" }, { name: "待付款" }, { name: "待评价" }],
        current: 0,
      };
    },
  };
</script>
```

### 控制组件读取的数组元素属性名

某些情况下，数据可能是从后端获取的，**`list`** 所需的数组中不一定会有 **`name`** 属性，比如可能为 **`cate_name`** ，如果这种情况还需一定要提供 **`name`** 属性 会导致用户需要循环一遍，把 **`cate_name`** 改成 **`name`** ，所以给组件提供了一个 **`name`** 参数，您可以设置其值为 **`cate_name`** ，组件内部会读取数组中的 **`cate_name`** 属性，而不是默认的 **`name`** 属性。

```html
<wb-tabs name="cate_name" :list="list" v-model="current"></wb-tabs>

<script>
  export default {
    data() {
      return {
        list: [
          { cate_name: "待收货" },
          { cate_name: "待付款" },
          { cate_name: "待评价" },
        ],
        current: 0,
      };
    },
  };
</script>
```

### 控制 tabs 组件的宽度

有时候我们并不想让 tabs 组件占满整个屏幕的宽度，如果有此需求，可以给 tabs 外面嵌套一个 view 元素，控制这个 view 的宽度或者内外边距，view 里面的 tabs 组件 宽度也会相应的发生变化。

```html
<view style="width: 400rpx;">
  <wb-tabs :list="list" v-model="current"></wb-tabs>
</view>
```

### 控制底部浮标样式模式

```html
<!-- 底部线型浮标滑块，宽度与item等宽 -->
<wb-tabs :list="list" v-model="current" mode="line"></wb-tabs>

<!-- 块状浮标滑块，宽度与item等宽 -->
<wb-tabs :list="list" v-model="current" mode="block"></wb-tabs>
```

### 内容部分的滑动效果，以及 beforeLeave

1. swiper 自带的滑动，并通过 beforeLeave 来控制是否能切换

```html
<template>
  <wb-page>
    <wb-tabs v-model="current" :list="tabs" :before-leave="beforeLeave">
      <!-- 自定义内容区域 -->
      <!-- @change="onChangeSwiper"  -->
      <swiper @change="onChangeSwiper" :current="current" duration="200">
        <!-- <swiper :current="current" :disable-touch="true" duration="200"> -->
        <swiper-item v-for="(tab, index) in tabs" :key="index">
          <wb-scroller
            v-model="tabs[index].needReset"
            :size="8"
            :no-more-size="6"
            :actived="index == current && beforeLeave(index)"
            @load="load($event, index)"
          >
            <view class="list">
              <cl-list-item
                v-for="(item, i) in tabs[index].list"
                :key="i"
                :label="`${tab.name} - ${i}`"
              >
                <cl-icon name="cl-icon-arrow-right"></cl-icon>
              </cl-list-item>
            </view>
          </wb-scroller>
        </swiper-item>
      </swiper>
    </wb-tabs>
  </wb-page>
</template>

<script>
  export default {
    data() {
      return {
        // 选中项
        current: 0,
        tabs: [],
      };
    },

    onLoad() {
      setTimeout(() => {
        this.init();
      }, 100);
    },
    mounted() {},

    methods: {
      init() {
        const labels = [
          { name: "食品" },
          { name: "母婴" },
          { name: "数码家电" },
          { name: "家居家装" },
          { name: "内衣" },
        ];

        this.tabs = labels.map((e) => {
          return {
            ...e,
            list: [],
            needReset: false,
          };
        });

        this.current = 1;
      },
      onChangeSwiper(e) {
        const current = this.current;
        const index = e.detail.current;
        this.current = index;
        if (!this.beforeLeave(index)) {
          this.$nextTick(() => {
            this.current = current;
          });
        }
      },
      load({ num, size, next } = {}, index) {
        if (this.beforeLeave(this.current)) {
          setTimeout(() => {
            const res = {
              data: index * size > 0 ? new Array(size).fill(1) : [],
              pager: {
                page: num,
                total: index * size,
              },
            };
            const opt = {
              length: res.data.length,
              num: res.pager.page,
              total: res.pager.total,
            };
            next(opt);
            if (num == 1) this.tabs[index].list = [];
            // 追加新数据
            this.tabs[index].list = this.tabs[index].list.concat(res.data);
          }, 800);
        }
      },
      beforeLeave(index) {
        if (index != 5) {
          return true;
        } else {
          return false;
        }
      },
    },
  };
</script>
```

2. swipeable 设置滑动，关闭 swiper 自带的滑动，并通过 beforeLeave 来控制是否能切换

::: tip
通过 swipeable 设置的滑动不是在 touchEnd 的时候触发切换，而是在 touchMove 时达到 swipeThreshold 值的时候就触发切换了
:::

::: warning
在微信小程序中，swiper 组件没有 disable-touch 属性，所以只能使用第 1 总方法来滑动
:::

```html
<template>
  <wb-page>
    <wb-tabs
      v-model="current"
      :list="tabs"
      mode="block"
      bar-color="#eee"
      swipeable
      :before-leave="beforeLeave"
    >
      <!-- 自定义内容区域 -->
      <swiper :current="current" :disable-touch="true">
        <swiper-item v-for="(tab, index) in tabs" :key="index">
          <wb-scroller
            v-model="tabs[index].needReset"
            :size="8"
            :no-more-size="6"
            :actived="index == current && beforeLeave(index)"
            @load="load($event, index)"
          >
            <view class="list">
              <cl-list-item
                v-for="(item, i) in tabs[index].list"
                :key="i"
                :label="`${tab.name} - ${i}`"
              >
                <cl-icon name="cl-icon-arrow-right"></cl-icon>
              </cl-list-item>
            </view>
          </wb-scroller>
        </swiper-item>
      </swiper>
    </wb-tabs>
  </wb-page>
</template>

<script>
  export default {
    data() {
      return {
        // 选中项
        current: 0,
        mode: "block",
        swipeable: false,
        tabs: [],
      };
    },

    onLoad() {
      setTimeout(() => {
        this.init();
      }, 100);
    },
    mounted() {},

    methods: {
      init() {
        const labels = [
          { name: "食品" },
          { name: "母婴" },
          { name: "数码家电" },
          { name: "家居家装" },
          { name: "内衣" },
        ];

        this.tabs = labels.map((e) => {
          return {
            ...e,
            list: [],
            needReset: false,
          };
        });

        this.current = 1;
      },
      load({ num, size, next } = {}, index) {
        if (this.beforeLeave(this.current)) {
          setTimeout(() => {
            const res = {
              data: index * size > 0 ? new Array(size).fill(1) : [],
              pager: {
                page: num,
                total: index * size,
              },
            };
            const opt = {
              length: res.data.length,
              num: res.pager.page,
              total: res.pager.total,
            };
            next(opt);
            if (num == 1) this.tabs[index].list = [];
            // 追加新数据
            this.tabs[index].list = this.tabs[index].list.concat(res.data);
          }, 800);
        }
      },
      beforeLeave(index) {
        if (index != 5) {
          return true;
        } else {
          return false;
        }
      },
    },
  };
</script>
```

### 标签的前后导图标

标签的前后图标使用的是 u-icon 组件
**`prefixIcon`** 前导图标  
**`suffixIcon`** 后导图标

还可以通过 **`prefixCustom`** 、**`suffixCustom`**，来使用自定义图标，详情见[扩展自定义图标库](https://www.uviewui.com/guide/customIcon.html)

使用的图标类型

- u-icon 的图标和自定义图标 通过 **`prefixIcon`** 或 **`suffixIcon`** 来设置 所需图标的 name 值
- cl-icon 通过 **`prefixIcon`** 或 **`suffixIcon`** 来设置 cl-icon 图标的完整 class

```html
<wb-tabs v-model="current" :list="list" justify="center"></wb-tabs>

<script>
  export default {
    data() {
      return {
        list: [
          { name: "热门", prefixIcon: "level" },
          {
            name: "猜你喜欢",
            suffixIcon: "cl-icon-like-fill",
            prefixIcon: "level",
          },
          { name: "女装", suffixIcon: "cl-icon-set" },
          { name: "美妆个护", prefixIcon: "level" },
          { name: "食品" },
        ],
        current: 0,
      };
    },
  };
</script>
```

## API

### Tabs Props

| 属性名           | 说明                                                                           | 类型             | 默认值                  | 可选值     |
| ---------------- | ------------------------------------------------------------------------------ | ---------------- | ----------------------- | ---------- |
| v-model          | 绑定值，选中的索引                                                             | Boolean          | false                   | true       |
| mode             | 浮标样式模式,分为线条和背景块 2 种                                             | String           | line                    | block      |
| list             | 标签列表                                                                       | Array            | -                       | -          |
| name             | 组件内部读取的 tabs 参数中的属性名（tab 名称）                                 | String           | name                    |            |
| loop             | 是否循环显示                                                                   | Boolean          | false                   | true       |
| duration         | 滑动动画时长 ，单位毫秒                                                        | String \| Number | 500                     |            |
| swipeable        | 内容部分是否支持滑动                                                           | Boolean          | false                   | true       |
| swipe-threshold  | 滑动阈值，单位 px                                                              | Number           | 20                      |            |
| sticky           | 是否吸顶                                                                       | Boolean          | false                   | true       |
| sticky-top       | 吸顶顶部距离，单位 rpx                                                         | String \| Number | -                       |            |
| fill             | 标签是否填充(flex 布局，并且子元素 flex:1)                                     | Boolean          | true                    | false      |
| justify          | tab-items 水平对齐方式                                                         | String           | center                  | left/right |
| border           | 是否带有下边框                                                                 | Boolean          | false                   | true       |
| gutter           | 标签间隔，单位 rpx                                                             | Number           | 10                      |            |
| color            | 选中的字体颜色                                                                 | String           | #2979ff                 | -          |
| un-color         | 未选中字体颜色                                                                 | String           | -                       | -          |
| background-color | tabs 的背景颜色                                                                | String           | #2979ff                 | -          |
| height           | tabs 的高度，单位 rpx                                                          | String \| Number | 80                      |            |
| font-size        | tab 文字大小，单位 rpx                                                         | String \| Number | 30                      |            |
| bar-width        | 滑块宽度，在 line 模式下有效，单位 rpx，                                       | String \| Number | 0 （使用 label 的宽度） |            |
| bar-height       | 滑块高度，在 line 模式下有效，单位 rpx                                         | String \| Number | 0                       |            |
| bar-color        | 浮标背景颜色                                                                   | String           | #2979ff                 | -          |
| bar-style        | 底部滑块的样式，对象形式                                                       | Object           | -                       | -          |
| before-leave     | 离开某个 tab-items 前执行的方法，<br>输入:(index)<br>返回： Boolean 或 Promise | Function         | -                       | -          |

### Tabs Events

| 事件名     | 说明             | 类型     | 参数  |
| ---------- | ---------------- | -------- | ----- |
| tab-change | 选项卡切换时触发 | Function | index |

### Tabs Slot

| 名称 | 说明     |
| ---- | -------- |
| -    | 默认插槽 |

### Tabs item 属性

| 属性名       | 说明                                                                               | 类型   |
| ------------ | ---------------------------------------------------------------------------------- | ------ |
| name         | 选项卡标题                                                                         | String |
| prefixIcon   | 前缀图标，图标使用的 u-icon 组件，也可兼容 cl-icon                                 | String |
| prefixCustom | 前缀图标自定义字体图标库时，需要写上此值                                           | String |
| suffixIcon   | 后缀图标，图标使用的 u-icon 组件，也可兼容 cl-icon                                 | String |
| suffixCustom | 后缀图标自定义字体图标库时，需要写上此值                                           | String |
| badge        | 徽标数 {"type":"error","count":0,"overflowCount":99,"isDot":true,"offset":[20,20]} | String |

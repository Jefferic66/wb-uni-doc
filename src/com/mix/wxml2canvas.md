---
sidebar: auto
title: Wxml2canvas 网页截屏
date: 2021-4-19 10:08:14
tags:
  - wxml2canvas
  - 小程序
---

::: tip
此插件只适用于 <font color="red">小程序项目</font>，不支持 APP 项目（Android/Ios）、Web 项目！
:::

**根据微信小程序 wxml-to-canvas 封装**，支持的 css 属性及写法 一定一定要按 [官方文档](https://developers.weixin.qq.com/miniprogram/dev/extended/component-plus/wxml-to-canvas.html)

参考来源：https://ext.dcloud.net.cn/plugin?id=3998

## xWxml

支持 view、text、image 三种标签，通过 class 匹配 style 对象中的样式。

```js
const wxml = `
		<view class="container">
			<view><image class="img" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xyzgy/7d75b690-6087-11eb-918d-3d24828c498c.jpeg" mode="widthFix"></image></view>
			<view class="wrap">
				<view>
					<text class="wraptext">窗前明月光，疑是地上霜。举头望明月，低头思故乡</text>
				</view>
			<view><image class="wrapimg" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xyzgy/7d75b690-6087-11eb-918d-3d24828c498c.jpeg" mode="widthFix"></image></view>
			</view>
		</view>
`;
```

## xStyle

- 对象属性值为对应 wxml 标签的 class 驼峰形式。<font color="red">需为每个元素指定 width 和 height 属性</font>，否则会导致布局错误。
- 存在多个 className 时，位置靠后的优先级更高，子元素会继承父级元素的可继承属性。
- 元素均为 <font color="red">flex</font> 布局。left/top 等 仅在 absolute 定位下生效

### css 区别

<html>
	<table>
		<tr>
			<td class="td-pre">
  <pre>
  .container {
    width: 310px;
    height: 500px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
  }
  .img {
    width: 310px;
    height: 60px;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .wraptext {
    display: inline-block;
    font-size: 13px;
    padding-right:10px;
  }
  .wrapimg {
    width: 60px;
    height: 60px;
  }
  </pre>
			</td>
			<td class="td-pre">  
  <pre>
  container: {
    width: 350,
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20
  },
  img: {
    width: 310,
    height: 310
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  wraptext: {
    width:210,
    height:60,
    fontSize: 13,
    paddingRight: 10
  },
  wrapimg: {
    width: 60,
    height: 60
  }
  </pre>
			</td>
		</tr>
	</table>
</html>

### 支持的 css 属性及写法

#### 布局相关

| 属性名                | 支持的值或类型                                            | 默认值     |
| --------------------- | --------------------------------------------------------- | ---------- |
| width                 | number                                                    | 0          |
| height                | number                                                    | 0          |
| position              | relative, absolute                                        | relative   |
| left                  | number                                                    | 0          |
| top                   | number                                                    | 0          |
| right                 | number                                                    | 0          |
| bottom                | number                                                    | 0          |
| margin                | number                                                    | 0          |
| padding               | number                                                    | 0          |
| borderWidth           | number                                                    | 0          |
| borderRadius          | number                                                    | 0          |
| flexDirection         | column, row                                               | row        |
| flexShrink            | number                                                    | 0          |
| flexGrow              | number                                                    | 0          |
| flexWrap              | wrap, nowrap                                              | nowrap     |
| justifyContent        | flex-start, center, flex-end, space-between, space-around | flex-start |
| alignItems, alignSelf | flex-start, center, flex-end, stretch                     | flex-start |

支持 marginLeft、paddingLeft 等

#### 文字

| 属性名          | 支持的值或类型      | 默认值      |
| --------------- | ------------------- | ----------- |
| fontSize        | number              | 14          |
| lineHeight      | number / string     | '1.4em'     |
| textAlign       | left, center, right | left        |
| verticalAlign   | top, middle, bottom | top         |
| color           | string              | #000000     |
| backgroundColor | string              | transparent |

lineHeight 可取带 em 单位的字符串或数字类型。

#### 变形

| 属性名 | 支持的值或类型 | 默认值 |
| ------ | -------------- | ------ |
| scale  | number         | 1      |

## 完整示例

```html
<template>
  <wb-page full :custom-style="customStyle">
    <view class="container">
      <view>
        <image
          class="img"
          src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xyzgy/7d75b690-6087-11eb-918d-3d24828c498c.jpeg"
          mode="widthFix"
        ></image>
      </view>
      <view class="wrap">
        <view
          ><text class="wraptext"
            >窗前明月光，疑是地上霜。举头望明月，低头思故乡</text
          ></view
        >
        <view>
          <image
            class="wrapimg"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xyzgy/7d75b690-6087-11eb-918d-3d24828c498c.jpeg"
            mode="widthFix"
          ></image>
        </view>
      </view>
    </view>
    <view class="u-flex">
      <view class="u-flex-1 u-p-30">
        <wb-button block @click="renderToCanvas">渲染到canvas</wb-button>
      </view>
      <view class="u-flex-1 u-p-30">
        <wb-button block @click="canvasToTempFilePath">导出图片</wb-button>
      </view>
    </view>

    <wb-wxml-to-canvas
      ref="xWxmlToCanvas"
      :width="350"
      :height="500"
      :xStyle="style"
      :xWxml="wxml"
    ></wb-wxml-to-canvas>
  </wb-page>
</template>

<script>
  const wxml = `
		<view class="container">
			<view><image class="img" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xyzgy/7d75b690-6087-11eb-918d-3d24828c498c.jpeg" mode="widthFix"></image></view>
			<view class="wrap">
				<view>
					<text class="wraptext">窗前明月光，疑是地上霜。举头望明月，低头思故乡</text>
				</view>
			<view><image class="wrapimg" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xyzgy/7d75b690-6087-11eb-918d-3d24828c498c.jpeg" mode="widthFix"></image></view>
			</view>
		</view>
`;
  const style = {
    container: {
      width: 350,
      height: 420,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 20,
    },
    img: {
      width: 310,
      height: 310,
    },
    wrap: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    wraptext: {
      width: 210,
      height: 60,
      fontSize: 13,
      paddingRight: 10,
    },
    wrapimg: {
      width: 60,
      height: 60,
    },
  };
  export default {
    data() {
      return {
        wxml: wxml,
        style: style,
        customStyle: {
          padding: "20rpx 0",
        },
      };
    },
    methods: {
      renderToCanvas() {
        this.$refs.xWxmlToCanvas.renderToCanvas();
      },
      canvasToTempFilePath() {
        this.$refs.xWxmlToCanvas.canvasToTempFilePath().then((res) => {
          // this.src = res
          uni.previewImage({
            urls: [res],
          });
        });
      },
    },
  };
</script>

<style>
  page {
    background: rgba(0, 0, 0, 0.3);
  }
  .container {
    width: 350px;
    margin: 0 auto;
    height: 420px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
  }
  .img {
    width: 310px;
    height: 60px;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .wraptext {
    display: inline-block;
    font-size: 13px;
    padding-right: 10px;
  }
  .wrapimg {
    width: 60px;
    height: 60px;
  }
</style>
```

### Props

| 属性名 | 说明                                                       | 类型    | 默认值 | 可选值 |
| ------ | ---------------------------------------------------------- | ------- | ------ | ------ |
| hide   | canvas 是否在页面可见 true 通过 fixed 将 canvas 移至屏幕外 | Boolean | false  | -      |
| width  | canvas 宽度                                                | Number  | 300    | -      |
| height | canvas 高度                                                | Number  | 300    | -      |
| xWxml  | wxml 模板，见上面说明                                      | String  | -      | -      |
| xStyle | 样式，见上面说明                                           | Object  | {}     | -      |

### Methods

| 方法                   | 说明                      | 返回值                     |
| ---------------------- | ------------------------- | -------------------------- |
| renderToCanvas()       | 将 wxml 渲染至页面 canvas | 无                         |
| canvasToTempFilePath() | 将 canvas 转为图片地址    | promise 函数，返回图片地址 |

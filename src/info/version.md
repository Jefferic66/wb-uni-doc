---
sidebar: auto
title: 更新日志
---

### 1.1.2

<font class="ver-date">2021-9-1</font>

<font class="ver-add ver-span">新增</font> NavBar preBack 后退的前置处理

### 1.1.1

<font class="ver-date">2021-8-3</font>

<font class="ver-fix ver-span">修复</font> Tabs 选项卡的吸顶 bug

### 1.0.1

<font class="ver-date">2021-6-28</font>

<font class="ver-opt ver-span">优化</font> layer 的 msg 和 load 的样式以及 timer 优化

### 0.1.7

<font class="ver-date">2021-6-18</font>

<font class="ver-add ver-span">新增</font> Tabs badge 徽标数

### 0.1.5

<font class="ver-date">2021-6-18</font>

<font class="ver-add ver-span">新增</font> NavBar search.noIcon 是否显示左侧搜索图标
<font class="ver-add ver-span">新增</font> NavBar search.bg 搜索框的背景色

### 0.1.4

<font class="ver-date">2021-6-18</font>

<font class="ver-fix ver-span">修复</font> Tabs 选项卡的 left 偏移问题

### 0.1.1

<font class="ver-date">2021-6-18</font>

<font class="ver-opt ver-span">优化</font> NavBar 字体问题

### 0.0.9

<font class="ver-date">2021-5-10</font>

::: warning
去除掉 html2canvas 组件，还是用 canvas 输出方便些
:::

<font class="ver-add ver-span">新增</font> canvas image 方法的 center 属性，用于 在 scaleToFill 模式的情况下，超出截取图片按中心点的计算还是按左上角计算

### 0.0.8

<font class="ver-date">2021-5-7</font>

::: tip
已发布到 npm，包名: <font class="ver-add ver-span">**wb-uni**</font>
:::

<font class="ver-opt ver-span">优化</font> layer 组件 更改为 wb-layer，vue 实例方法为 `layer`

### 0.0.7

<font class="ver-date">2021-5-6</font>

<font class="ver-add ver-span">新增</font> wb-scroller 中新增 scrollTop，可以接受外部传入的 scrollTop，用于 scroller 的高度跟随页面的情况  
<font class="ver-add ver-span">新增</font> wb-scroller 中新增 backBottom，返回按钮位置到屏幕底部的距离  
<font class="ver-add ver-span">新增</font> wb-scroller 中新增 head 插槽，用于需要表头的情况  
<font class="ver-add ver-span">新增</font> wb-page 中新增头部导航，通过 config 属性来设置  
<font class="ver-add ver-span">新增</font> wb-page 中新增 offset(高度补偿)属性  
<font class="ver-add ver-span">新增</font> function 中新增 timeFormat，修复 uView 在 ios 不兼容 javascript 时间的 bug  
<font class="ver-opt ver-span">优化</font> wb-page full 模式下的 flex 布局  
<font class="ver-opt ver-span">优化</font> login 示例中的安卓返回键  
<font class="ver-fix ver-span">修复</font> wb-navbar flex 的 bug  
<font class="ver-fix ver-span">修复</font> wb-scroller 中水平溢出的问题  
<font class="ver-fix ver-span">修复</font> wb-scroller 中滚动条到底部的距离的 bug

### 0.0.6

<font class="ver-date">2021-5-4</font>

<font class="ver-add ver-span">新增</font> 浏览器示例页面  
<font class="ver-add ver-span">新增</font> wb-navbar 中 leftButton 和 rightButton 的字体大小设置  
<font class="ver-opt ver-span">优化</font> wb-scroller 中 downOutOffsetRate 的默认值调整，优化下拉距离  
<font class="ver-opt ver-span">优化</font> this.layer.close() 方法返回 Promise  
<font class="ver-opt ver-span">优化</font> mask 掩码方法新增最大掩码长度的参数  
<font class="ver-fix ver-span">修复</font> wb-scroller 中 height 的百分比高度计算值的问题  
<font class="ver-fix ver-span">修复</font> layer 中 询问框的 按钮组限制问题  
<font class="ver-fix ver-span">修复</font> wb-tabs 滑块 block 模式下的 top 定位高度问题

### 0.0.5

<font class="ver-date">2021-5-1</font>  
此次更新主要是调整登录相关的实现  
<font class="ver-opt ver-span">新增</font> 登录示例（页面,api,action...）  
<font class="ver-opt ver-span">新增</font> 全局混入的 copy 方法  
<font class="ver-opt ver-span">优化</font> 全局混入的 isLogin 方法调整

> - loginUrl: 登陆地址
> - homeUrl: 首页地址
> - getInfoAction: 获取用户信息的 action  
>    这些属性需要根据项目来设置调整

<font class="ver-opt ver-span">新增</font> function/config.js 中的属性

### 0.0.4

<font class="ver-date">2021-4-20</font>

<font class="ver-add ver-span">新增</font> wb-drag-verify 滑块验证组件  
<font class="ver-add ver-span">新增</font> wb-drag-verify-chip 拼图滑块验证组件  
<font class="ver-add ver-span">新增</font> wb-drag-verify-ratate 旋转滑块验证

### 0.0.3

<font class="ver-date">2021-4-18</font>

<font class="ver-add ver-span">新增</font> js base64 转换方法  
<font class="ver-add ver-span">新增</font> wb-html-to-canvas 组件  
<font class="ver-add ver-span">新增</font> wb-wxml-to-canvas 组件  
<font class="ver-add ver-span">新增</font> wb-page 组件新增 customStyle 属性，优化对小程序的样式设置  
<font class="ver-opt ver-span">优化</font> wb-page 组件 isFull 属性改为 full

### 0.0.2

<font class="ver-date">2021-4-17</font>

<font class="ver-add ver-span">新增</font> canvas 组件  
<font class="ver-add ver-span">新增</font> button 组件新增 block 属性，是否块状，占整行  
<font class="ver-add ver-span">新增</font> button 组件新增 shadow 属性，是否有阴影  
<font class="ver-opt ver-span">优化</font> button 组件 size 属性的尺寸调整  
<font class="ver-opt ver-span">优化</font> button 组件 形状 新增大圆角的类型

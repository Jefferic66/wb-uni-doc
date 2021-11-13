module.exports = {
  title: "WB-UNI",
  base: "/wb-uni-doc/",
  dest: "./docs",
  theme: "reco",
  themeConfig: {
    // 备案
    // record: "ICP 备案文案",
    // recordLink: "ICP 备案指向链接",
    // cyberSecurityRecord: "公安部备案文案",
    // cyberSecurityLink: "公安部备案指向链接",
    // 项目开始时间，只填写年份
    startYear: "2021",
    smoothScroll: true,
    logo: "/assets/img/logo.png",
    nav: [
      { text: "指南", link: "/info/", icon: "reco-document" },
      { text: "组件", link: "/com/", icon: "reco-category" },
      { text: "样式", link: "/css/", icon: "reco-color" },
      { text: "JS", link: "/js/", icon: "reco-api" },
      // { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      { text: "演示", link: "https://jefferic66.github.io/wb-uni-demo/" },
      {
        text: "GitHub",
        link: "https://github.com/Jefferic66/wb-uni-template",
        icon: "reco-mayun",
      },
    ],
    sidebar: {
      "/info/": [
        // ["", "指南"],
        // ["config", "设置"],
        // ["directory", "目录结构"],
        // ["lang", "国际化"],
        {
          title: "简介", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/info/", "/info/directory", "/info/version"],
        },
        {
          title: "配置", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/info/config", "/info/lang", "/info/customIcon"],
        },
        // {
        //   title: "设置", // 必要的
        //   path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //   collapsable: false, // 可选的, 默认值是 true,
        //   sidebarDepth: 1, // 可选的, 默认值是 1
        //   children: [
        //     ["/info/config#manifest-json", "manifest.json"],
        //     ["/info/config#vs-code", "vs code"],
        //     ["/info/config#安卓证书", "生成安卓证书"],
        //   ],
        // },
        // ["config", "配置"],
        // ["version", "版本"],
      ],
      "/js/": [
        {
          title: "概述", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/js/", "/js/config"],
        },
        {
          title: "H5+Api", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/js/h5Api"],
        },
        {
          title: "混入", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/js/mixin"],
        },
        {
          title: "过滤器", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            "/js/filters/trim",
            "/js/filters/mask",
            "/js/filters/timeFormat",
          ],
        },
        {
          title: "工具库", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            "/js/fun/timeFormat",
            "/js/fun/clone",
            "/js/fun/eq",
            "/js/fun/math",
            "/js/fun/trim",
            "/js/fun/mask",
            "/js/fun/until",
            "/js/fun/base64",
          ],
        },
      ],
      "/com/": [
        // ["", "概述"],
        {
          title: "概述", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/com/", "/com/order"],
        },
        {
          title: "基础组件", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            "/com/basic/button",
            "/com/basic/empty",
            "/com/basic/loading",
          ],
        },
        {
          title: "布局组件", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            "/com/layout/page",
            "/com/layout/navbar",
            "/com/layout/scroller",
            "/com/layout/tabs",
          ],
        },
        {
          title: "弹层组件", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/com/third/layer"],
        },
        {
          title: "功能组件", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            "/com/mix/qr",
            "/com/mix/citys",
            "/com/mix/opts",
            "/com/mix/vcode",
            "/com/mix/dragVerify",
            "/com/mix/dragVerifyChip",
            "/com/mix/dragVerifyRatate",
          ],
        },
        {
          title: "画布", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            // "/com/mix/html2canvas",
            "/com/mix/wxml2canvas",
            "/com/mix/canvas",
          ],
        },
      ],
      "/css/": [
        // ["", "概述"],
        {
          title: "概述", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/css/", "/css/attention"],
        },
        {
          title: "内置样式", // 必要的
          path: "", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/css/color", "/css/flex", "/css/border", "/css/shadow"],
        },
      ],
    },
  },
  plugins: [
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>",
      },
    ],
    "@vuepress-reco/extract-code",
  ],
  markdown: {
    lineNumbers: true,
  },
};

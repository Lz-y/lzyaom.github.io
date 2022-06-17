import { defineUserConfig } from "vuepress"
import type { DefaultThemeOptions } from "vuepress"
import recoTheme from "vuepress-theme-reco"

export default defineUserConfig({
  title: "Lzyaom's Blog",
  description: "简单就是快乐",
  lang: 'zh-CN',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/cat.svg",
    author: "lzyaom",
    authorAvatar: "/cat.svg",
    docsRepo: 'https://github.com/Lz-y/lzyaom.github.io',
    docsBranch: "gh-pages",
    lastUpdatedText: "最近更新时间",
    navbar: [
      { text: "首页", link: "/" },
      { text: "分类", link: "/categories/frontEnd/1/" },
      { text: "标签", link: "/tags/" },
    ],
    valineConfig: {
      appId: 'RLGsXLUKc2Vz0T3htAa0dduk-gzGzoHsz',
      appKey: 'BHxcwQGxiQKtRkQIeaI5l0cj',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      verify: true, // 验证码服务
      // notify: true,
      recordIP: true,
      // hideComments: true // 隐藏评论
    },
    autoSetCategory: true,// 自动设置分类
  }),
})

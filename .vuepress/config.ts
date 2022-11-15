import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: "Lzyaom's Blog",
  description: '简单就是快乐',
  lang: 'zh-CN',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/cat.svg',
    author: 'lzyaom',
    authorAvatar: '/cat.svg',
    docsRepo: 'https://github.com/lzyaom/lzyaom.github.io',
    docsBranch: 'gh-pages',
    lastUpdatedText: '最近更新时间',
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '分类',
        children: [
          { text: '前端', link: '/categories/front-end/1/' },
          { text: '工具', link: '/categories/tools/1/' },
        ],
      },
      {
        text: '标签',
        children: [
          {
            text: '前端',
            children: [
              { text: 'HTML', link: '/tags/html/1/' },
              { text: 'CSS', link: '/tags/css/1/' },
              { text: 'JavaScript', link: '/tags/JavaScript/1/' },
              { text: 'Vue', link: '/tags/Vue/1/' },
            ],
          },
          {
            text: '后端',
            children: [{ text: 'Node.js', link: '/tags/node.js/1/' }],
          },
          {
            text: '工具',
            children: [
              { text: 'oh-my-zsh', link: '/tags/oh-my-zsh/1/' },
              { text: 'Homebrew', link: '/tags/homebrew/1/' },
            ],
          },
        ],
      },
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
    autoSetBlogCategories: true, // 自动设置分类
    autoAddCateforyToNavbar: true, // 自动将首页、分类和标签添加至头部导航条
  }),
})

import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '简幻欢乐子文档',
  description: '收录各种简幻欢中的乐子行为',
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '乐子导航',
        link: '/nav/',
      },
      {
        text: '提交新乐子',
        link: 'https://github.com/YuHan1015/simpfun-lezi-docs/issues',
        target: '_blank',
      },
    ],
    // 侧边栏配置
    sidebar: {
      '/nav/': [
        {
          text: '乐子导航',
          children: [
            '/nav/README.md',
          ],
        },
      ],
      '/lezi/': [
        {
          text: '乐子列表',
          children: [
            '/lezi/README.md',
          ],
        },
      ],
    },
  }),
})
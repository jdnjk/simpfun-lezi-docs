import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: process.env.VERCEL ? '/' : (APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/'),

  lang: 'zh-CN',
  title: '简幻欢乐子文档',
  description: '收录各种简幻欢中的乐子行为',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/YuHan1015/simpfun-lezi-docs' }],

    footer: {
      message: 'https://github.com/YuHan1015/simpfun-lezi-docs/',
      copyright: 'Copyright © 2019-present maomao',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'YuHan1015.simpfun-lezi-docs',
    },

    comment: {
      repo: 'YuHan1015/simpfun-lezi-docs',
      repoId: 'R_kgDOPQXPbg',
      category: 'General',
      categoryId: 'DIC_kwDOPQXPbs4CtRfP',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})

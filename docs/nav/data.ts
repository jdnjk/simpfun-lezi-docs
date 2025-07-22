import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '邦国崛起',
    items: [
      {
        icon: 'https://www.emojiall.com/images/240/google/15.1/1f913.png',
        title: '炸天帮孙悟空传',
        desc: '顶级助攻',
        link: '/article/炸天帮孙悟空传',
      },
    ],
  },
]

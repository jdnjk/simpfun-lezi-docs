import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '🏛️ 邦国崛起',
    items: [
      {
        icon: '🙊',
        title: '炸天帮孙悟空传',
        desc: '恶心你咋了，恶心的就是你',
        link: '/article/炸天帮孙悟空传.html',
      },
      {
        icon: '🐕',
        title: '狗叫报社-佚鸣传',
        desc: '严厉抵制青云宗对云杉木的攻击',
        link: '/article/佚鸣传.html',
      },
    ],
  },
  {
    title: '💻 简幻欢传记',
    items: [
      {
        icon: '🗿',
        title: 'SuperStone传',
        desc: 'bat转sh的传奇故事',
        link: '/article/superstone传.html',
      },
      {
        icon: '🌊',
        title: '海边战士传',
        desc: '显着你了？经典语录',
        link: '/article/海边战士传.html',
      },
      {
        icon: '💎',
        title: 'DiamondEgg传',
        desc: '招技术~要倒贴钱给我的那种~',
        link: '/article/DiamondEgg传.html',
      },
      {
        icon: '👑',
        title: '传奇顶嘴杠精王传',
        desc: '给我看就是对牛弹琴~',
        link: '/article/传奇顶嘴杠精王传.html',
      },
    ],
  },
  {
    title: '🎮 游戏服务器传说',
    items: [
      {
        icon: '⚔️',
        title: 'XeCraft 服务器传（凌天传）',
        desc: '还不是因为我太强了，嫉妒我牛逼',
        link: 'https://lezi.8aka.org/article/XeCraft%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BC%A0%EF%BC%88%E5%87%8C%E5%A4%A9%E4%BC%A0%EF%BC%89',
      },
    ],
  },
]

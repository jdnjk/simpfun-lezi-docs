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
        desc: '恶心你咋了，恶心的就是你',
        link: '/article/炸天帮孙悟空传.html',
      },
      {
        icon: 'https://www.emojiall.com/images/240/google/15.1/1f92a.png',
        title: '[狗叫报社]佚鸣传',
        desc: '严厉抵制青云宗对云杉木的攻击',
        link: '/article/佚鸣传.html',
      },
    ],
  },
      {
    title: '简幻欢',
    items: [
      {
        icon: 'https://www.emojiall.com/images/240/google/15.1/1f92a.png',
        title: 'SuperStone传',
        desc: 'bat转sh',
        link: '/article/superstone传.html',
      },
    ],
  },
    {
    title: '乐子',
    items: [
      {
        icon: 'https://www.emojiall.com/images/240/google/15.1/1f92a.png',
        title: 'XeCraft 服务器传（凌天传）',
        desc: '还不是因为我太强了，嫉妒我牛逼',
        link: 'https://lezi.8aka.org/article/XeCraft%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BC%A0%EF%BC%88%E5%87%8C%E5%A4%A9%E4%BC%A0%EF%BC%89',
      },
    ],
  },
  {
    title: '简幻欢',
    items: [
      {
        icon: 'https://www.emojiall.com/images/240/google/15.1/1f92a.png',
        title: '海边战士传',
        desc: '显着你了？',
        link: '/article/海边战士传.html',
      },
    ],
  },
  {
    title: '简幻欢',
    items: [
      {
        icon: 'https://www.emojiall.com/images/240/google/15.1/1f92a.png',
        title: 'DiamondEgg传',
        desc: '招技术~要倒贴钱给我的那种~',
        link: '/article/DiamondEgg传.html',
      },
    ],
  },
]

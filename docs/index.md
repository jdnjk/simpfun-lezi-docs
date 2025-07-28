---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 简幻欢
  text: 乐子文档
  tagline: 收录各种简幻欢中的乐子行为
  image:
    src: /logo.png
    alt: 简幻欢
  actions:
    - text: 简幻欢官网
      link: https://simpfun.cn
    - text: 🧭 乐子导航
      link: /nav/
      theme: alt
    - text: 📝 提交新乐子
      link: https://github.com/YuHan1015/simpfun-lezi-docs/issues

features:
  - icon: 🙊
    title: 炸天帮孙悟空传
    details: 恶心你咋了，恶心的就是你
    link: /article/炸天帮孙悟空传
    linkText: 📖 阅读传记
  - icon: 🐕
    title: 狗叫报社-佚鸣传
    details: 严厉抵制青云宗对云杉木的攻击
    link: /article/佚鸣传
    linkText: 📖 阅读传记
  - icon: 🗿
    title: SuperStone传
    details: bat转sh的传奇故事
    link: /article/superstone传
    linkText: 📖 阅读传记
  - icon: ⚔️
    title: XeCraft 服务器传
    details: 还不是因为我太强了，嫉妒我牛逼
    link: https://lezi.8aka.org/article/XeCraft%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BC%A0%EF%BC%88%E5%87%8C%E5%A4%A9%E4%BC%A0%EF%BC%89
    linkText: 📖 阅读传记
  - icon: 🌊
    title: 海边战士传
    details: "显着你了？"
    link: /article/海边战士传
    linkText: 📖 阅读传记
  - icon: 💎
    title: DiamondEgg传
    details: "招技术~要倒贴钱给我的那种~"
    link: /article/DiamondEgg传
    linkText: 📖 阅读传记
  - icon: 👑
    title: 传奇顶嘴杠精王传
    details: "给我看就是对牛弹琴~"
    link: /article/传奇顶嘴杠精王传
    linkText: 📖 阅读传记
---

<style>
/* 爱的魔力转圈圈 */
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

/* 特性卡片美化 */
.m-home-layout .VPFeatures {
  margin-top: 2rem;
}

.m-home-layout .VPFeature {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  transition: all 0.25s;
  height: 100%;
}

.m-home-layout .VPFeature:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.m-home-layout .VPFeature .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.m-home-layout .VPFeature .title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.m-home-layout .VPFeature .details {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.m-home-layout .VPFeature .link {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--vp-c-brand-1);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.25s;
  font-size: 0.9rem;
}

.m-home-layout .VPFeature .link:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .m-home-layout .VPFeatures {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .m-home-layout .VPFeature {
    padding: 20px;
  }
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>

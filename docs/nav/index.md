---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 🧭 乐子导航

<div class="nav-description">
  <p>收录简幻欢各种乐子人物的传记故事，按类别整理便于浏览</p>
</div>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip 版权声明
该导航模板由 [maomao](https://github.com/maomao1996) 开发  
原项目地址：<https://github.com/maomao1996/vitepress-nav-template>
:::

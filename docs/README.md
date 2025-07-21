---
home: true
heroText: 简幻欢乐子文档
tagline: 收录各种简幻欢中的乐子行为
actions:
  - text: 简幻欢
    link: https://simpfun.cn
    type: primary
  - text: 简幻云
    link: https://simpcloud.cn
    type: primary
  - text: 乐子导航
    link: /nav/
    type: secondary
---

<div class="latest-lezi">
  <h2>最新乐子</h2>
  <div class="lezi-cards">
    <!-- 乐子卡片将在这里动态显示 -->
  </div>
</div>

<style>
  /* Force the hero section to be full-width and left-aligned */
  .home .hero {
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 2rem !important; /* Adjust padding as needed */
    text-align: left !important;
  }
  .home .hero .actions {
    justify-content: flex-start !important;
  }
  .home .hero .name {
    line-height: 1.25;
  }
  .home .hero .name::before {
    content: '简幻欢';
    display: block;
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .home .hero .name::after {
    content: '乐子文档';
    display: block;
    color: var(--c-text);
    font-size: 0.8em;
  }
  .home .hero .name {
    color: transparent !important;
  }
  .latest-lezi {
    padding: 2rem;
    text-align: left;
  }
  .latest-lezi h2 {
    font-size: 2rem;
    border-bottom: 1px solid var(--c-border);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
  .lezi-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .lezi-card {
    display: block;
    border: 1px solid var(--c-border);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    text-decoration: none;
    color: var(--c-text);
  }
  .lezi-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .lezi-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }
  .lezi-card .card-title {
    padding: 1rem;
    font-weight: 600;
  }
</style>
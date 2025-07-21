<template><div><h1 id="乐子列表" tabindex="-1"><a class="header-anchor" href="#乐子列表"><span>乐子列表</span></a></h1>
<p>这里是所有乐子的完整列表。</p>
<h2 id="乐子名单" tabindex="-1"><a class="header-anchor" href="#乐子名单"><span>乐子名单</span></a></h2>
<div class="lezi-simple-list">
  <!-- 在这里添加您的乐子，每个乐子一行 -->
  <!-- 示例格式（您可以复制这个格式来添加新的乐子）：
  <div class="lezi-item" onclick="window.location.href='/nav/your-lezi-folder/'">
    <img src="/nav/your-lezi-folder/images/cover.jpg" alt="乐子标题">
    <div class="item-content">
      <h3>乐子标题</h3>
      <p>乐子的简短描述</p>
    </div>
  </div>
  -->
</div>
</div></template>



<style>
.lezi-simple-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.lezi-item {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--c-border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--c-bg);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.lezi-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border-color: var(--c-brand);
}

.lezi-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.item-content {
  flex: 1;
}

.item-content h3 {
  margin: 0 0 0.5rem 0;
  color: var(--c-text);
  font-size: 1.2rem;
  font-weight: 600;
}

.item-content p {
  margin: 0;
  color: var(--c-text-light);
  line-height: 1.5;
  font-size: 0.95rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .lezi-simple-list {
    padding: 1rem;
  }

  .lezi-item {
    padding: 1.25rem;
  }

  .lezi-item img {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
  }

  .item-content h3 {
    font-size: 1.1rem;
  }

  .item-content p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .lezi-item {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .lezi-item img {
    width: 100px;
    height: 100px;
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
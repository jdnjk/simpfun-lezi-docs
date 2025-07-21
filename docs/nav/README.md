# 乐子导航

## 乐子名单

<div class="lezi-gallery">
  <!-- 在这里添加您的乐子，每个乐子一个卡片 -->

  <!-- 示例格式（您可以复制这个格式来添加新的乐子）：
  <div class="lezi-card" onclick="window.location.href='/nav/your-lezi-folder/'">
    <img src="/nav/your-lezi-folder/images/cover.jpg" alt="乐子标题">
    <div class="card-content">
      <h3>乐子标题</h3>
      <p>乐子的简短描述</p>
    </div>
  </div>
  -->

</div>

<style>
.lezi-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.lezi-card {
  border: 1px solid var(--c-border);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--c-bg);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.lezi-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.15);
  border-color: var(--c-brand);
}

.lezi-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin: 0 0 0.75rem 0;
  color: var(--c-text);
  font-size: 1.25rem;
  font-weight: 600;
}

.card-content p {
  margin: 0;
  color: var(--c-text-light);
  line-height: 1.5;
  font-size: 0.95rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .lezi-gallery {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }

  .lezi-card img {
    height: 180px;
  }

  .card-content {
    padding: 1.25rem;
  }

  .card-content h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .lezi-gallery {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .lezi-card img {
    height: 160px;
  }

  .card-content {
    padding: 1rem;
  }
}
</style>
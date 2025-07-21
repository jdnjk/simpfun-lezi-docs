<template><div><h1 id="能干辉" tabindex="-1"><a class="header-anchor" href="#能干辉"><span>能干辉</span></a></h1>
<div class="nengganhui-title">
  <h1>能干辉</h1>
</div>
<div class="nengganui-subtitle">
  <h2>全宇宙最大的乐子</h2>
</div>
<p>这里是关于能干辉的详细内容...</p>
</div></template>



<style>
.nengganui-title {
  text-align: center;
  margin: 3rem 0;
}

.nengganui-title h1 {
  font-size: 8rem;
  font-weight: 900;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 3s ease infinite;
  text-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
  margin: 0;
  line-height: 1.1;
}

.nengganui-subtitle {
  text-align: center;
  margin: 2rem 0;
}

.nengganui-subtitle h2 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--c-brand);
  margin: 0;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nengganui-title h1 {
    font-size: 5rem;
  }
  
  .nengganui-subtitle h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .nengganui-title h1 {
    font-size: 3.5rem;
  }
  
  .nengganui-subtitle h2 {
    font-size: 1.5rem;
  }
}
</style>
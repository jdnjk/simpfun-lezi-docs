<template><div><h1 id="如何添加乐子" tabindex="-1"><a class="header-anchor" href="#如何添加乐子"><span>如何添加乐子</span></a></h1>
<p>本文档将指导您如何向简幻欢乐子文档中添加新的乐子内容。</p>
<h2 id="添加乐子的步骤" tabindex="-1"><a class="header-anchor" href="#添加乐子的步骤"><span>添加乐子的步骤</span></a></h2>
<h3 id="_1-创建乐子文件夹" tabindex="-1"><a class="header-anchor" href="#_1-创建乐子文件夹"><span>1. 创建乐子文件夹</span></a></h3>
<p>在 <code v-pre>docs/nav/</code> 目录下创建一个新的文件夹，文件夹名称建议使用英文或拼音，例如：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">docs/nav/my-new-lezi/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-创建乐子内容文件" tabindex="-1"><a class="header-anchor" href="#_2-创建乐子内容文件"><span>2. 创建乐子内容文件</span></a></h3>
<p>在新创建的文件夹中创建 <code v-pre>README.md</code> 文件，这将是乐子的主要内容页面：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code class="language-markdown"><span class="line"><span class="token title important"><span class="token punctuation">#</span> 我的新乐子</span></span>
<span class="line"></span>
<span class="line">这里写乐子的详细描述...</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 相关图片</span></span>
<span class="line"></span>
<span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">图片描述</span>](<span class="token url">./images/my-image.jpg</span>)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-添加图片资源" tabindex="-1"><a class="header-anchor" href="#_3-添加图片资源"><span>3. 添加图片资源</span></a></h3>
<p>在乐子文件夹中创建 <code v-pre>images</code> 文件夹：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">docs/nav/my-new-lezi/images/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后将图片文件放入其中，建议准备一张封面图片（如 <code v-pre>cover.jpg</code>）用于在名单中显示。</p>
<h3 id="_4-更新乐子名单" tabindex="-1"><a class="header-anchor" href="#_4-更新乐子名单"><span>4. 更新乐子名单</span></a></h3>
<h4 id="在乐子导航页面添加" tabindex="-1"><a class="header-anchor" href="#在乐子导航页面添加"><span>在乐子导航页面添加</span></a></h4>
<p>编辑 <code v-pre>docs/nav/README.md</code> 文件，在 <code v-pre>&lt;div class=&quot;lezi-gallery&quot;&gt;</code> 中添加新的乐子卡片：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lezi-card<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript">window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token operator">=</span><span class="token string">'/nav/my-new-lezi/'</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/nav/my-new-lezi/images/cover.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我的新乐子<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>我的新乐子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一个新的乐子的简短描述<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在乐子列表页面添加" tabindex="-1"><a class="header-anchor" href="#在乐子列表页面添加"><span>在乐子列表页面添加</span></a></h4>
<p>编辑 <code v-pre>docs/lezi/README.md</code> 文件，在 <code v-pre>&lt;div class=&quot;lezi-simple-list&quot;&gt;</code> 中添加新的乐子项：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lezi-item<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript">window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token operator">=</span><span class="token string">'/nav/my-new-lezi/'</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/nav/my-new-lezi/images/cover.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我的新乐子<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>我的新乐子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一个新的乐子的简短描述<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预览和测试" tabindex="-1"><a class="header-anchor" href="#预览和测试"><span>预览和测试</span></a></h2>
<p>添加完成后，运行以下命令来预览您的更改：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后在浏览器中访问 <code v-pre>http://localhost:8080</code> 查看效果。</p>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li>文件夹和文件名建议使用英文或拼音，避免使用中文</li>
<li>图片文件建议压缩后再上传，以提高页面加载速度</li>
<li>乐子描述要简洁明了，便于用户快速了解内容</li>
<li>封面图片建议尺寸为 280x200 像素，或保持类似比例</li>
</ol>
<h2 id="示例文件结构" tabindex="-1"><a class="header-anchor" href="#示例文件结构"><span>示例文件结构</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">docs/</span>
<span class="line">├── nav/</span>
<span class="line">│   ├── README.md (乐子导航页面)</span>
<span class="line">│   ├── my-new-lezi/</span>
<span class="line">│   │   ├── README.md</span>
<span class="line">│   │   └── images/</span>
<span class="line">│   │       ├── cover.jpg</span>
<span class="line">│   │       └── screenshot.png</span>
<span class="line">│   └── another-lezi/</span>
<span class="line">│       ├── README.md</span>
<span class="line">│       └── images/</span>
<span class="line">├── lezi/</span>
<span class="line">│   └── README.md (乐子列表页面)</span>
<span class="line">└── ...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单总结" tabindex="-1"><a class="header-anchor" href="#简单总结"><span>简单总结</span></a></h2>
<p>添加新乐子只需要三步：</p>
<ol>
<li>在 <code v-pre>docs/nav/</code> 下创建乐子文件夹和内容</li>
<li>在 <code v-pre>docs/nav/README.md</code> 中添加卡片</li>
<li>在 <code v-pre>docs/lezi/README.md</code> 中添加列表项</li>
</ol>
<p>就这么简单！</p>
</div></template>



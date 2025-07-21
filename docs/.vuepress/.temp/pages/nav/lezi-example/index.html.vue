<template><div><h1 id="这是一个示例乐子" tabindex="-1"><a class="header-anchor" href="#这是一个示例乐子"><span>这是一个示例乐子</span></a></h1>
<p>这里是关于这个示例乐子的详细描述。</p>
<h2 id="如何添加图片" tabindex="-1"><a class="header-anchor" href="#如何添加图片"><span>如何添加图片</span></a></h2>
<p>我们推荐为每一个乐子都创建一个独立的 <code v-pre>images</code> 文件夹，就像本示例一样。这样可以让您的项目文件结构保持清晰、易于管理。</p>
<p>您只需要将图片（例如 <code v-pre>my-picture.jpg</code>）放入本目录下的 <code v-pre>images</code> 文件夹中，然后使用相对路径来引用它，就像这样：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code class="language-markdown"><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">图片描述</span>](<span class="token url">./images/my-picture.jpg</span>)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下面就是一个使用占位符图片的例子：</p>
<p><img src="@source/nav/lezi-example/images/placeholder.png" alt="占位符图片"></p>
</div></template>



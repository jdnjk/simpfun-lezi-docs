<template>
  <!-- Empty template to effectively remove 404 page -->
  <div />
</template>

<script setup lang="ts">
// 当访问不存在的路由时，直接跳转回首页，避免出现原主题 404 页面的 bug。
if (typeof window !== 'undefined') {
  // 根据站点的 base 配置动态跳转
  const base = import.meta.env.BASE_URL || '/'
  window.location.replace(base)
}
</script>

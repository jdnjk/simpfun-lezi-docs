export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/%E5%A6%82%E4%BD%95%E6%B7%BB%E5%8A%A0%E4%B9%90%E5%AD%90.html", { loader: () => import(/* webpackChunkName: "如何添加乐子.html" */"E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/如何添加乐子.html.js"), meta: {"title":"如何添加乐子"} }],
  ["/lezi/", { loader: () => import(/* webpackChunkName: "lezi_index.html" */"E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/lezi/index.html.js"), meta: {"title":"乐子列表"} }],
  ["/nav/", { loader: () => import(/* webpackChunkName: "nav_index.html" */"E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/nav/index.html.js"), meta: {"title":"乐子导航"} }],
  ["/nav/lezi-example/", { loader: () => import(/* webpackChunkName: "nav_lezi-example_index.html" */"E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/nav/lezi-example/index.html.js"), meta: {"title":"这是一个示例乐子"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

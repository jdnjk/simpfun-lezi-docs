export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/lezi/", { loader: () => import(/* webpackChunkName: "lezi_index.html" */"E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/lezi/index.html.js"), meta: {"title":"乐子列表"} }],
  ["/nav/", { loader: () => import(/* webpackChunkName: "nav_index.html" */"E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/nav/index.html.js"), meta: {"title":"乐子导航"} }],
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

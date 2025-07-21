import comp from "E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/nav/lezi-example/index.html.vue"
const data = JSON.parse("{\"path\":\"/nav/lezi-example/\",\"title\":\"这是一个示例乐子\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"nav/lezi-example/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

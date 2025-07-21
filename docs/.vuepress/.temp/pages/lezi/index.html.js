import comp from "E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/lezi/index.html.vue"
const data = JSON.parse("{\"path\":\"/lezi/\",\"title\":\"乐子列表\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"lezi/README.md\"}")
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

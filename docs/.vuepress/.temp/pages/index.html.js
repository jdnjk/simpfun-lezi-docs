import comp from "E:/我的程序大全.zip/简幻欢乐子文档/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"简幻欢乐子文档\",\"tagline\":\"收录各种简幻欢中的乐子行为\",\"actions\":[{\"text\":\"简幻欢\",\"link\":\"https://simpfun.cn\",\"type\":\"primary\"},{\"text\":\"简幻云\",\"link\":\"https://simpcloud.cn\",\"type\":\"primary\"},{\"text\":\"乐子导航\",\"link\":\"/nav/\",\"type\":\"secondary\"}]},\"git\":{},\"filePathRelative\":\"README.md\"}")
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

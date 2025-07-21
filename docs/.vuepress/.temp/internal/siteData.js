export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"简幻欢乐子文档\",\"description\":\"收录各种简幻欢中的乐子行为\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.png\"}],[\"link\",{\"rel\":\"shortcut icon\",\"href\":\"/logo.png\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#42d392\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

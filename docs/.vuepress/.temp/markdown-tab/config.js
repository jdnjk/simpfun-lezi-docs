import { CodeTabs } from "E:/我的程序大全.zip/简幻欢乐子文档/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/我的程序大全.zip/简幻欢乐子文档/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/我的程序大全.zip/简幻欢乐子文档/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

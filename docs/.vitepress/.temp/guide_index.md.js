import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"项目介绍","description":"Front Guide 的定位、内容范围和维护方式","frontmatter":{"title":"项目介绍","description":"Front Guide 的定位、内容范围和维护方式","outline":"deep"},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}');
const _sfc_main = { name: "guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h1><p>Front Guide 是一个面向前端学习者和面试准备者的知识库。它以 Markdown 文章为核心，用 VitePress 提供导航、侧边栏、全文搜索、右侧目录、最后更新时间和 GitHub 编辑入口。</p><h2 id="内容定位" tabindex="-1">内容定位 <a class="header-anchor" href="#内容定位" aria-label="Permalink to &quot;内容定位&quot;">​</a></h2><p>本站内容围绕长期可维护的前端知识体系展开：</p><ul><li>前端基础：HTML、CSS、布局、响应式与可访问性。</li><li>JavaScript：语言基础、闭包、原型、异步和运行机制。</li><li>TypeScript：类型建模、泛型、接口和工程实践。</li><li>Vue / React：组件模型、状态管理、路由和性能优化。</li><li>工程化：构建工具、规范工具、依赖管理和持续部署。</li><li>浏览器：渲染、缓存、跨域、安全和性能。</li><li>面试指南：手写题、问答题、项目亮点和简历表达。</li></ul><h2 id="维护原则" tabindex="-1">维护原则 <a class="header-anchor" href="#维护原则" aria-label="Permalink to &quot;维护原则&quot;">​</a></h2><p>每篇文章尽量回答三个问题：这个知识是什么、真实开发中怎么用、面试中如何表达。内容不追求堆砌，而是追求结构清楚、概念准确和示例可运行。</p><h2 id="推荐阅读顺序" tabindex="-1">推荐阅读顺序 <a class="header-anchor" href="#推荐阅读顺序" aria-label="Permalink to &quot;推荐阅读顺序&quot;">​</a></h2><p>如果你从零开始，可以先阅读 <a href="/front-guide/roadmap/">学习路线</a>，再进入 <a href="/front-guide/basic/">前端基础</a> 和 <a href="/front-guide/javascript/">JavaScript</a>。如果你正在准备面试，可以直接从 <a href="/front-guide/interview/">面试指南</a> 开始。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

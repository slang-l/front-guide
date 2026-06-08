import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"前端基础","description":"HTML、CSS、布局与页面开发基础知识","frontmatter":{"title":"前端基础","description":"HTML、CSS、布局与页面开发基础知识","outline":"deep"},"headers":[],"relativePath":"basic/index.md","filePath":"basic/index.md"}');
const _sfc_main = { name: "basic/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="前端基础" tabindex="-1">前端基础 <a class="header-anchor" href="#前端基础" aria-label="Permalink to &quot;前端基础&quot;">​</a></h1><p>前端基础决定页面质量。这个栏目关注 HTML 语义、SEO、CSS 盒模型、布局方式和响应式设计。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li>用 HTML 表达内容结构。</li><li>用 CSS 管理布局、间距和视觉层级。</li><li>理解浏览器如何计算尺寸和排列元素。</li><li>在不同屏幕尺寸下保持稳定体验。</li></ul><h2 id="推荐顺序" tabindex="-1">推荐顺序 <a class="header-anchor" href="#推荐顺序" aria-label="Permalink to &quot;推荐顺序&quot;">​</a></h2><p>先阅读 HTML 语义化和 SEO 基础，再进入 CSS 盒模型、Flex、Grid 与响应式布局。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("basic/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

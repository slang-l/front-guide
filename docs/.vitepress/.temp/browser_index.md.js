import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"浏览器","description":"浏览器渲染、缓存、跨域和性能基础","frontmatter":{"title":"浏览器","description":"浏览器渲染、缓存、跨域和性能基础","outline":"deep"},"headers":[],"relativePath":"browser/index.md","filePath":"browser/index.md"}');
const _sfc_main = { name: "browser/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-label="Permalink to &quot;浏览器&quot;">​</a></h1><p>浏览器知识帮助我们理解页面从网络请求到渲染展示的全过程，是性能优化和问题排查的基础。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li>渲染流水线。</li><li>HTTP 缓存策略。</li><li>跨域和 CORS。</li><li>性能指标和优化方法。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("browser/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

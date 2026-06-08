import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"浏览器渲染原理","description":"从 HTML、CSS 到页面绘制的关键流程","frontmatter":{"title":"浏览器渲染原理","description":"从 HTML、CSS 到页面绘制的关键流程","outline":"deep"},"headers":[],"relativePath":"browser/render.md","filePath":"browser/render.md"}');
const _sfc_main = { name: "browser/render.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="浏览器渲染原理" tabindex="-1">浏览器渲染原理 <a class="header-anchor" href="#浏览器渲染原理" aria-label="Permalink to &quot;浏览器渲染原理&quot;">​</a></h1><p>浏览器渲染大致经历解析 HTML、构建 DOM、解析 CSS、构建 CSSOM、生成渲染树、布局和绘制。</p><h2 id="关键流程" tabindex="-1">关键流程 <a class="header-anchor" href="#关键流程" aria-label="Permalink to &quot;关键流程&quot;">​</a></h2><ol><li>解析 HTML 生成 DOM。</li><li>解析 CSS 生成 CSSOM。</li><li>合成渲染树。</li><li>计算布局。</li><li>绘制和合成图层。</li></ol><h2 id="性能关注点" tabindex="-1">性能关注点 <a class="header-anchor" href="#性能关注点" aria-label="Permalink to &quot;性能关注点&quot;">​</a></h2><p>频繁修改布局相关属性可能触发布局和重绘。动画优先使用 <code>transform</code> 和 <code>opacity</code>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("browser/render.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const render = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  render as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"React","description":"React 组件、Hooks 和性能优化","frontmatter":{"title":"React","description":"React 组件、Hooks 和性能优化","outline":"deep"},"headers":[],"relativePath":"react/index.md","filePath":"react/index.md"}');
const _sfc_main = { name: "react/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h1><p>React 以组件和状态驱动界面。学习 React 时，需要理解渲染模型、Hooks 规则、状态提升和性能优化。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li>JSX 与组件组合。</li><li>Hooks 的使用规则。</li><li>状态管理和服务端状态。</li><li>memo、useMemo、useCallback 的使用边界。</li></ul><h2 id="推荐顺序" tabindex="-1">推荐顺序 <a class="header-anchor" href="#推荐顺序" aria-label="Permalink to &quot;推荐顺序&quot;">​</a></h2><p>先理解组件和状态，再学习 Hooks 和性能优化。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("react/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

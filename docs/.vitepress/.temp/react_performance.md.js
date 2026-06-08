import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"性能优化","description":"React 性能优化的常见方向和判断标准","frontmatter":{"title":"性能优化","description":"React 性能优化的常见方向和判断标准","outline":"deep"},"headers":[],"relativePath":"react/performance.md","filePath":"react/performance.md"}');
const _sfc_main = { name: "react/performance.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h1><p>React 性能优化的核心不是盲目使用缓存，而是减少不必要渲染、拆分昂贵计算和优化数据流。</p><h2 id="常见方式" tabindex="-1">常见方式 <a class="header-anchor" href="#常见方式" aria-label="Permalink to &quot;常见方式&quot;">​</a></h2><ul><li>使用 <code>React.memo</code> 减少子组件重复渲染。</li><li>使用 <code>useMemo</code> 缓存昂贵计算结果。</li><li>使用 <code>useCallback</code> 稳定函数引用。</li><li>对长列表使用虚拟滚动。</li></ul><h2 id="判断标准" tabindex="-1">判断标准 <a class="header-anchor" href="#判断标准" aria-label="Permalink to &quot;判断标准&quot;">​</a></h2><p>先使用浏览器性能工具和 React DevTools 定位问题，再选择优化手段。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("react/performance.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const performance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  performance as default
};

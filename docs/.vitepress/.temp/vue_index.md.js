import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vue","description":"Vue 组件、Composition API、路由和状态管理","frontmatter":{"title":"Vue","description":"Vue 组件、Composition API、路由和状态管理","outline":"deep"},"headers":[],"relativePath":"vue/index.md","filePath":"vue/index.md"}');
const _sfc_main = { name: "vue/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><p>Vue 通过响应式系统和组件模型降低界面开发复杂度。学习 Vue 时，需要同时关注模板语法、状态组织和组件边界。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li>组件通信和插槽。</li><li>Composition API 的状态复用。</li><li>Vue Router 的路由组织。</li><li>Pinia 的状态建模。</li></ul><h2 id="推荐顺序" tabindex="-1">推荐顺序 <a class="header-anchor" href="#推荐顺序" aria-label="Permalink to &quot;推荐顺序&quot;">​</a></h2><p>先理解组件和响应式，再学习组合式函数、路由和状态管理。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

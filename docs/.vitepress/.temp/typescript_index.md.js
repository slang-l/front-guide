import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TypeScript","description":"TypeScript 类型系统、泛型和工程实践","frontmatter":{"title":"TypeScript","description":"TypeScript 类型系统、泛型和工程实践","outline":"deep"},"headers":[],"relativePath":"typescript/index.md","filePath":"typescript/index.md"}');
const _sfc_main = { name: "typescript/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h1><p>TypeScript 的价值不只是提前发现错误，更重要的是用类型表达业务约束和模块边界。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li>基础类型和联合类型。</li><li>接口与类型别名。</li><li>泛型函数、泛型约束和泛型工具。</li><li>从业务模型中提炼类型。</li></ul><h2 id="推荐顺序" tabindex="-1">推荐顺序 <a class="header-anchor" href="#推荐顺序" aria-label="Permalink to &quot;推荐顺序&quot;">​</a></h2><p>先学习基础类型和类型别名，再进入接口、泛型和类型工具。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("typescript/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

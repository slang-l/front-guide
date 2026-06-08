import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ESLint 与 Prettier","description":"代码质量检查和格式化工具的职责边界","frontmatter":{"title":"ESLint 与 Prettier","description":"代码质量检查和格式化工具的职责边界","outline":"deep"},"headers":[],"relativePath":"engineering/eslint-prettier.md","filePath":"engineering/eslint-prettier.md"}');
const _sfc_main = { name: "engineering/eslint-prettier.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eslint-与-prettier" tabindex="-1">ESLint 与 Prettier <a class="header-anchor" href="#eslint-与-prettier" aria-label="Permalink to &quot;ESLint 与 Prettier&quot;">​</a></h1><p>ESLint 负责发现潜在问题和约束代码质量，Prettier 负责统一代码格式。两者配合可以减少风格争论。</p><h2 id="职责划分" tabindex="-1">职责划分 <a class="header-anchor" href="#职责划分" aria-label="Permalink to &quot;职责划分&quot;">​</a></h2><ul><li>ESLint：未使用变量、错误 Hooks 调用、潜在逻辑问题。</li><li>Prettier：缩进、换行、引号、尾随逗号等格式问题。</li></ul><h2 id="实践建议" tabindex="-1">实践建议 <a class="header-anchor" href="#实践建议" aria-label="Permalink to &quot;实践建议&quot;">​</a></h2><p>格式化交给 Prettier，质量规则交给 ESLint。不要让两个工具同时管理同一个格式规则。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/eslint-prettier.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eslintPrettier = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eslintPrettier as default
};

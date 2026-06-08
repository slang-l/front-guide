import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"工程化","description":"构建工具、代码规范、依赖管理和自动部署","frontmatter":{"title":"工程化","description":"构建工具、代码规范、依赖管理和自动部署","outline":"deep"},"headers":[],"relativePath":"engineering/index.md","filePath":"engineering/index.md"}');
const _sfc_main = { name: "engineering/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="工程化" tabindex="-1">工程化 <a class="header-anchor" href="#工程化" aria-label="Permalink to &quot;工程化&quot;">​</a></h1><p>工程化让项目在多人协作和长期维护中保持稳定。本栏目关注构建、规范、质量检查和自动部署。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li>Vite 的开发服务器和生产构建。</li><li>ESLint 与 Prettier 的职责分工。</li><li>npm 脚本和依赖版本管理。</li><li>GitHub Actions 自动部署。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

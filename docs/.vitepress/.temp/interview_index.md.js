import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"面试指南","description":"前端面试手写题、问答题、项目亮点和简历建议","frontmatter":{"title":"面试指南","description":"前端面试手写题、问答题、项目亮点和简历建议","outline":"deep"},"headers":[],"relativePath":"interview/index.md","filePath":"interview/index.md"}');
const _sfc_main = { name: "interview/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="面试指南" tabindex="-1">面试指南 <a class="header-anchor" href="#面试指南" aria-label="Permalink to &quot;面试指南&quot;">​</a></h1><p>面试准备不是背答案，而是把知识转化成能清楚表达的结构。这个栏目整理高频题目、代码实现和项目表达方式。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li>手写题：理解边界和实现细节。</li><li>八股题：建立概念模型。</li><li>项目亮点：从业务价值和技术难点表达。</li><li>简历：突出结果、规模和职责。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

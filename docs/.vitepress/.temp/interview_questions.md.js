import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"高频八股题","description":"前端面试常见基础问答整理","frontmatter":{"title":"高频八股题","description":"前端面试常见基础问答整理","outline":"deep"},"headers":[],"relativePath":"interview/questions.md","filePath":"interview/questions.md"}');
const _sfc_main = { name: "interview/questions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="高频八股题" tabindex="-1">高频八股题 <a class="header-anchor" href="#高频八股题" aria-label="Permalink to &quot;高频八股题&quot;">​</a></h1><p>八股题的核心是概念表达。回答时先给结论，再补充原理、示例和实践经验。</p><h2 id="示例问题" tabindex="-1">示例问题 <a class="header-anchor" href="#示例问题" aria-label="Permalink to &quot;示例问题&quot;">​</a></h2><h3 id="解释闭包" tabindex="-1">解释闭包 <a class="header-anchor" href="#解释闭包" aria-label="Permalink to &quot;解释闭包&quot;">​</a></h3><p>闭包是函数和其词法环境的组合。即使外层函数执行结束，内部函数仍然可以访问外层变量。</p><h3 id="promise-和-async-await-的关系" tabindex="-1">Promise 和 async/await 的关系 <a class="header-anchor" href="#promise-和-async-await-的关系" aria-label="Permalink to &quot;Promise 和 async/await 的关系&quot;">​</a></h3><p><code>async/await</code> 是 Promise 的语法糖，让异步代码更接近同步写法，但底层仍然基于 Promise 和微任务。</p><h3 id="什么是重排和重绘" tabindex="-1">什么是重排和重绘 <a class="header-anchor" href="#什么是重排和重绘" aria-label="Permalink to &quot;什么是重排和重绘&quot;">​</a></h3><p>重排会重新计算元素几何信息，重绘只更新视觉样式。重排成本通常更高。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/questions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const questions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  questions as default
};

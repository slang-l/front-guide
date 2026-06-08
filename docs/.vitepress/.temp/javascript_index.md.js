import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"JavaScript","description":"JavaScript 语言核心、运行机制和异步编程","frontmatter":{"title":"JavaScript","description":"JavaScript 语言核心、运行机制和异步编程","outline":"deep"},"headers":[],"relativePath":"javascript/index.md","filePath":"javascript/index.md"}');
const _sfc_main = { name: "javascript/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><p>JavaScript 是前端工程的基础语言。本栏目重点整理数据类型、作用域、闭包、原型、Promise 和事件循环。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li>理解值、引用和类型转换。</li><li>理解函数作用域、词法作用域和闭包。</li><li>理解原型链和对象继承模型。</li><li>理解异步任务调度。</li></ul><h2 id="推荐顺序" tabindex="-1">推荐顺序 <a class="header-anchor" href="#推荐顺序" aria-label="Permalink to &quot;推荐顺序&quot;">​</a></h2><p>先学习数据类型，再进入闭包和原型，最后阅读 Promise 与 Event Loop。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("javascript/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

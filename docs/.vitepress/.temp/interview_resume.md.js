import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"简历建议","description":"前端简历的结构、项目表达和常见问题","frontmatter":{"title":"简历建议","description":"前端简历的结构、项目表达和常见问题","outline":"deep"},"headers":[],"relativePath":"interview/resume.md","filePath":"interview/resume.md"}');
const _sfc_main = { name: "interview/resume.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="简历建议" tabindex="-1">简历建议 <a class="header-anchor" href="#简历建议" aria-label="Permalink to &quot;简历建议&quot;">​</a></h1><p>前端简历要突出你解决了什么问题、承担了什么职责、带来了什么结果。避免只堆技术名词。</p><h2 id="项目表达模板" tabindex="-1">项目表达模板 <a class="header-anchor" href="#项目表达模板" aria-label="Permalink to &quot;项目表达模板&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在某业务场景中，负责某模块从 0 到 1 建设。</span></span>
<span class="line"><span>通过某技术方案解决某问题，使某指标得到改善。</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><ul><li>项目描述只有功能列表，没有技术难点。</li><li>技术栈很多，但看不出掌握深度。</li><li>没有量化结果或业务上下文。</li></ul><h2 id="建议" tabindex="-1">建议 <a class="header-anchor" href="#建议" aria-label="Permalink to &quot;建议&quot;">​</a></h2><p>每个项目准备一段 1 分钟版本和一段 3 分钟版本，分别用于简历初筛和深挖环节。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/resume.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resume = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  resume as default
};

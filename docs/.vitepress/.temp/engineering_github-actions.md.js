import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GitHub Actions","description":"使用 GitHub Actions 自动构建和部署前端静态站点","frontmatter":{"title":"GitHub Actions","description":"使用 GitHub Actions 自动构建和部署前端静态站点","outline":"deep"},"headers":[],"relativePath":"engineering/github-actions.md","filePath":"engineering/github-actions.md"}');
const _sfc_main = { name: "engineering/github-actions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;GitHub Actions&quot;">​</a></h1><p>GitHub Actions 可以在代码推送后自动执行安装、构建和部署流程。本站使用它发布到 GitHub Pages。</p><h2 id="核心流程" tabindex="-1">核心流程 <a class="header-anchor" href="#核心流程" aria-label="Permalink to &quot;核心流程&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">- </span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">name</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">Install dependencies</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">  run</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">- </span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">name</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">Build with VitePress</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">  run</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">npm run docs:build</span></span></code></pre></div><h2 id="pages-设置" tabindex="-1">Pages 设置 <a class="header-anchor" href="#pages-设置" aria-label="Permalink to &quot;Pages 设置&quot;">​</a></h2><p>仓库 Settings -&gt; Pages 中选择 GitHub Actions。推送到 <code>main</code> 分支后即可自动发布。</p><h2 id="面试角度" tabindex="-1">面试角度 <a class="header-anchor" href="#面试角度" aria-label="Permalink to &quot;面试角度&quot;">​</a></h2><p>可以从自动化、可追溯、减少人工操作和统一环境四个角度说明 CI/CD 的价值。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("engineering/github-actions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const githubActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  githubActions as default
};

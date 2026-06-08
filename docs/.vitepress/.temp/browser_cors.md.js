import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"跨域","description":"同源策略、CORS 和常见跨域解决方案","frontmatter":{"title":"跨域","description":"同源策略、CORS 和常见跨域解决方案","outline":"deep"},"headers":[],"relativePath":"browser/cors.md","filePath":"browser/cors.md"}');
const _sfc_main = { name: "browser/cors.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h1><p>同源策略限制不同协议、域名或端口之间的资源访问。CORS 是浏览器允许跨源请求的标准机制。</p><h2 id="cors-响应头" tabindex="-1">CORS 响应头 <a class="header-anchor" href="#cors-响应头" aria-label="Permalink to &quot;CORS 响应头&quot;">​</a></h2><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Access-Control-Allow-Origin</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> https://example.com</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Access-Control-Allow-Methods</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> GET, POST, OPTIONS</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Access-Control-Allow-Headers</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Content-Type, Authorization</span></span></code></pre></div><h2 id="预检请求" tabindex="-1">预检请求 <a class="header-anchor" href="#预检请求" aria-label="Permalink to &quot;预检请求&quot;">​</a></h2><p>复杂请求会先发送 <code>OPTIONS</code> 预检请求，确认服务端是否允许该跨源访问。</p><h2 id="面试角度" tabindex="-1">面试角度 <a class="header-anchor" href="#面试角度" aria-label="Permalink to &quot;面试角度&quot;">​</a></h2><p>回答跨域时，要区分浏览器安全限制和服务端网络能力。跨域不是请求发不出去，而是浏览器拦截响应读取。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("browser/cors.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cors as default
};

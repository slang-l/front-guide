import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Spring Boot 自动配置","description":"理解 Spring Boot 自动配置、条件注解、配置属性和 Bean 创建逻辑","frontmatter":{"title":"Spring Boot 自动配置","description":"理解 Spring Boot 自动配置、条件注解、配置属性和 Bean 创建逻辑","outline":"deep"},"headers":[],"relativePath":"backend/spring-boot/auto-configuration.md","filePath":"backend/spring-boot/auto-configuration.md"}');
const _sfc_main = { name: "backend/spring-boot/auto-configuration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="spring-boot-自动配置" tabindex="-1">Spring Boot 自动配置 <a class="header-anchor" href="#spring-boot-自动配置" aria-label="Permalink to &quot;Spring Boot 自动配置&quot;">​</a></h1><p>自动配置是 Spring Boot 的核心能力。它会根据项目依赖、配置项和条件注解，自动创建一组常用 Bean。</p><h2 id="基本思路" tabindex="-1">基本思路 <a class="header-anchor" href="#基本思路" aria-label="Permalink to &quot;基本思路&quot;">​</a></h2><p>自动配置通常依赖三个条件：</p><ul><li>classpath 中是否存在某些类。</li><li>配置文件中是否开启某些属性。</li><li>容器中是否已经存在同类 Bean。</li></ul><p>满足条件时，Spring Boot 会加载对应配置并创建默认 Bean。</p><h2 id="条件注解" tabindex="-1">条件注解 <a class="header-anchor" href="#条件注解" aria-label="Permalink to &quot;条件注解&quot;">​</a></h2><p>常见条件注解包括：</p><table tabindex="0"><thead><tr><th>注解</th><th>说明</th></tr></thead><tbody><tr><td><code>@ConditionalOnClass</code></td><td>classpath 存在某个类时生效</td></tr><tr><td><code>@ConditionalOnMissingBean</code></td><td>容器中没有指定 Bean 时生效</td></tr><tr><td><code>@ConditionalOnProperty</code></td><td>配置属性满足条件时生效</td></tr></tbody></table><p>这些条件让默认配置可以被用户自定义配置覆盖。</p><h2 id="配置属性" tabindex="-1">配置属性 <a class="header-anchor" href="#配置属性" aria-label="Permalink to &quot;配置属性&quot;">​</a></h2><p>配置属性负责把 <code>application.yml</code> 中的值绑定到 Java 对象中。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">server</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">  port</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">8080</span></span></code></pre></div><p>理解配置属性后，就能知道为什么改配置可以影响框架默认行为。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>自动配置不是魔法。它本质上是根据条件加载配置类，并在合适的时候创建 Bean。排查配置不生效时，要看依赖、条件和属性三件事。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/spring-boot/auto-configuration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const autoConfiguration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  autoConfiguration as default
};

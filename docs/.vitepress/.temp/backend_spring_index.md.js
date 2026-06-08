import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Spring 概览","description":"Spring 模块学习入口，梳理 IoC、DI、Bean 生命周期、AOP、事务和 MVC","frontmatter":{"title":"Spring 概览","description":"Spring 模块学习入口，梳理 IoC、DI、Bean 生命周期、AOP、事务和 MVC","outline":"deep"},"headers":[],"relativePath":"backend/spring/index.md","filePath":"backend/spring/index.md"}');
const _sfc_main = { name: "backend/spring/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="spring-概览" tabindex="-1">Spring 概览 <a class="header-anchor" href="#spring-概览" aria-label="Permalink to &quot;Spring 概览&quot;">​</a></h1><p>Spring 的核心是容器和代理。容器负责创建对象、管理依赖和生命周期，代理负责把事务、日志、权限等横切逻辑统一织入业务调用。</p><h2 id="学习重点" tabindex="-1">学习重点 <a class="header-anchor" href="#学习重点" aria-label="Permalink to &quot;学习重点&quot;">​</a></h2><ul><li><a href="/front-guide/backend/spring/ioc">IoC 与 DI</a>：理解对象创建和依赖注入。</li><li><a href="/front-guide/backend/spring/bean-lifecycle">Bean 生命周期</a>：理解 Bean 从创建到销毁的过程。</li><li><a href="/front-guide/backend/spring/aop">AOP</a>：理解代理、切点、通知和横切逻辑。</li><li><a href="/front-guide/backend/spring/transaction">声明式事务</a>：理解事务边界、传播行为和回滚规则。</li><li><a href="/front-guide/backend/spring/mvc">Spring MVC</a>：理解请求进入控制器前后的处理流程。</li></ul><h2 id="学习建议" tabindex="-1">学习建议 <a class="header-anchor" href="#学习建议" aria-label="Permalink to &quot;学习建议&quot;">​</a></h2><p>学习 Spring 时不要只背注解。注解只是入口，背后真正重要的是容器如何扫描组件、如何创建 Bean、如何注入依赖、如何生成代理对象。</p><h2 id="面试角度" tabindex="-1">面试角度 <a class="header-anchor" href="#面试角度" aria-label="Permalink to &quot;面试角度&quot;">​</a></h2><p>Spring 面试常从 <code>@Autowired</code>、<code>@Transactional</code>、Bean 生命周期和 AOP 追问到底层机制。回答时可以围绕“容器管理对象”和“代理增强方法”这两条主线组织。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/spring/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

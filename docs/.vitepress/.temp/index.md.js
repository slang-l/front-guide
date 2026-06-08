import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Front Guide","text":"前端学习与面试知识库","tagline":"系统整理 HTML、CSS、JavaScript、TypeScript、Vue、React、工程化、浏览器原理与面试准备。","image":{"src":"/logo.svg","alt":"Front Guide"},"actions":[{"theme":"brand","text":"开始学习","link":"/basic/"},{"theme":"alt","text":"查看路线","link":"/roadmap/"}]},"features":[{"title":"基础能力","details":"HTML 语义、CSS 布局、响应式设计和页面结构。","link":"/basic/","linkText":"进入基础"},{"title":"JS 主线","details":"数据类型、闭包、原型、Promise 和 Event Loop。","link":"/javascript/","linkText":"梳理核心"},{"title":"类型系统","details":"TypeScript 基础类型、接口、类型别名和泛型。","link":"/typescript/","linkText":"学习 TS"},{"title":"框架实践","details":"Vue、React 的组件模型、状态管理与性能优化。","link":"/vue/","linkText":"查看框架"},{"title":"工程链路","details":"Vite、规范工具、GitHub Actions 和部署流程。","link":"/engineering/","linkText":"做好工程"},{"title":"面试复习","details":"高频手写题、八股题、项目亮点和简历表达。","link":"/interview/","linkText":"准备面试"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeSections = resolveComponent("HomeSections");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HomeSections, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

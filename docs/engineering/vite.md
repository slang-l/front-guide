---
title: Vite 核心原理入门
description: 理解 Vite 的开发服务器、生产构建、插件机制和它与 Webpack 的区别
outline: deep
---

# Vite 核心原理入门

Vite 是现代前端工程中常用的构建工具。它在开发阶段利用浏览器原生 ESM 提升启动速度，在生产阶段使用 Rollup 进行打包。

## Vite 解决了什么问题

传统打包工具在开发启动时通常需要先扫描并打包整个应用。项目越大，启动和热更新成本越高。

Vite 的核心思路是：

- 开发阶段不预先打包业务源码。
- 浏览器按需请求 ES Module。
- 服务端按请求即时转换源码。
- 依赖使用预构建提升访问速度。
- 生产环境仍然进行完整打包优化。

## 开发环境原理

Vite 开发服务器会把源码作为 ESM 提供给浏览器。

```ts
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

浏览器遇到 `import` 后，会继续请求对应模块。Vite 拦截这些请求，对 `.vue`、`.ts`、`.css` 等文件进行转换，再返回浏览器可执行的内容。

### 依赖预构建

第三方依赖通常来自 `node_modules`。它们可能是 CommonJS，也可能包含大量内部模块。Vite 会使用 esbuild 预构建依赖，把它们转换为更适合浏览器加载的 ESM。

预构建带来两个好处：

- 将 CommonJS 转换为 ESM。
- 合并依赖内部模块，减少浏览器请求数量。

### 热更新

当文件变化时，Vite 不需要重新打包整个应用，而是精确通知浏览器更新受影响模块。

```txt
文件变化 -> Vite 分析模块关系 -> 推送 HMR 消息 -> 浏览器替换模块
```

这也是 Vite 在大型项目中开发体验较好的原因之一。

## 生产环境构建

生产环境不能直接依赖大量浏览器 ESM 请求，因为这会影响加载性能。Vite 在构建时使用 Rollup 完成打包、代码分割和资源优化。

```bash
npm run build
```

生产构建通常会做：

- TypeScript 和框架语法转换。
- CSS 提取和压缩。
- JavaScript 压缩。
- 静态资源 hash。
- 动态导入代码分割。

## 插件机制

Vite 插件机制兼容 Rollup 插件模型，并补充了开发服务器相关能力。插件可以参与解析、加载、转换、热更新和构建流程。

一个简化插件示例：

```ts
export default function virtualPlugin() {
  const virtualModuleId = 'virtual:hello'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`

  return {
    name: 'virtual-hello',
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return `export const message = 'hello vite'`
      }
    }
  }
}
```

插件让 Vite 可以扩展 Vue、React、Markdown、SVG、Mock 数据和自定义构建逻辑。

## 和 Webpack 的区别

| 维度 | Vite | Webpack |
| --- | --- | --- |
| 开发启动 | 基于原生 ESM，按需转换 | 通常先打包依赖图 |
| 热更新 | 模块级更新，链路较短 | 依赖打包图和 loader |
| 生产构建 | Rollup | Webpack |
| 配置体验 | 默认配置轻量 | 能力强但配置较重 |
| 适用场景 | 现代前端应用和库 | 复杂历史项目和高度定制场景 |

这不是谁完全替代谁的问题。新项目通常优先考虑 Vite；已有复杂 Webpack 项目是否迁移，要评估插件生态、构建链路和团队成本。

## 面试角度

可以从这几个角度回答 Vite：

1. 开发阶段利用浏览器原生 ESM，避免全量打包。
2. 依赖预构建使用 esbuild，提升冷启动和依赖加载效率。
3. HMR 只更新受影响模块，反馈更快。
4. 生产环境使用 Rollup，仍然进行完整打包优化。
5. 插件机制兼容 Rollup，并扩展开发服务器能力。

## 总结

Vite 的优势来自开发阶段和生产阶段的分工：开发阶段追求即时反馈，生产阶段追求资源优化。理解 Vite 时，要抓住 ESM、依赖预构建、HMR、Rollup 构建和插件机制这几个关键词。

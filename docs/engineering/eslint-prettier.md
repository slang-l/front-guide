---
title: ESLint 与 Prettier
description: 代码质量检查和格式化工具的职责边界
outline: deep
---

# ESLint 与 Prettier

ESLint 负责发现潜在问题和约束代码质量，Prettier 负责统一代码格式。两者配合可以减少风格争论。

## 职责划分

- ESLint：未使用变量、错误 Hooks 调用、潜在逻辑问题。
- Prettier：缩进、换行、引号、尾随逗号等格式问题。

## 实践建议

格式化交给 Prettier，质量规则交给 ESLint。不要让两个工具同时管理同一个格式规则。

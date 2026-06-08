---
title: GitHub Actions
description: 使用 GitHub Actions 自动构建和部署前端静态站点
outline: deep
---

# GitHub Actions

GitHub Actions 可以在代码推送后自动执行安装、构建和部署流程。本站使用它发布到 GitHub Pages。

## 核心流程

```yaml
- name: Install dependencies
  run: npm install

- name: Build with VitePress
  run: npm run docs:build
```

## Pages 设置

仓库 Settings -> Pages 中选择 GitHub Actions。推送到 `main` 分支后即可自动发布。

## 面试角度

可以从自动化、可追溯、减少人工操作和统一环境四个角度说明 CI/CD 的价值。

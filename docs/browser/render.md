---
title: 浏览器渲染原理
description: 从 HTML、CSS 到页面绘制的关键流程
outline: deep
---

# 浏览器渲染原理

浏览器渲染大致经历解析 HTML、构建 DOM、解析 CSS、构建 CSSOM、生成渲染树、布局和绘制。

## 关键流程

1. 解析 HTML 生成 DOM。
2. 解析 CSS 生成 CSSOM。
3. 合成渲染树。
4. 计算布局。
5. 绘制和合成图层。

## 性能关注点

频繁修改布局相关属性可能触发布局和重绘。动画优先使用 `transform` 和 `opacity`。

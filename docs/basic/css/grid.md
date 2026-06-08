---
title: Grid 布局
description: CSS Grid 的二维布局能力与常见使用场景
outline: deep
---

# Grid 布局

Grid 适合处理二维布局，也就是同时管理行和列。相比 Flex 更偏向一维排列，Grid 更适合页面骨架、卡片矩阵和复杂栅格。

## 基础示例

```css
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
}
```

## 常用能力

- `grid-template-columns` 定义列。
- `grid-template-rows` 定义行。
- `gap` 管理间距。
- `minmax()` 控制弹性尺寸。
- `auto-fit` 和 `auto-fill` 创建响应式网格。

## 响应式卡片

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```

## 总结

当布局重点是整体网格结构时优先考虑 Grid；当重点是元素在单轴上的排列和对齐时优先考虑 Flex。

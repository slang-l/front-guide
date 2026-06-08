---
title: 性能优化
description: React 性能优化的常见方向和判断标准
outline: deep
---

# 性能优化

React 性能优化的核心不是盲目使用缓存，而是减少不必要渲染、拆分昂贵计算和优化数据流。

## 常见方式

- 使用 `React.memo` 减少子组件重复渲染。
- 使用 `useMemo` 缓存昂贵计算结果。
- 使用 `useCallback` 稳定函数引用。
- 对长列表使用虚拟滚动。

## 判断标准

先使用浏览器性能工具和 React DevTools 定位问题，再选择优化手段。

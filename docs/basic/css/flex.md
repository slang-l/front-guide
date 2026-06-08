---
title: Flex 布局完全指南
description: 系统学习 CSS Flex 布局的核心概念、常用属性、布局案例和面试重点
outline: deep
---

# Flex 布局完全指南

Flex 是前端开发中最常用的一维布局方案。它适合处理元素在一条主轴上的排列、对齐、分布和自适应问题。

## Flex 是什么

Flex 的全称是 Flexible Box Layout，中文常叫弹性盒布局。给容器设置 `display: flex` 后，容器内的直接子元素会成为 flex item，并按照主轴和交叉轴进行布局。

```css
.container {
  display: flex;
}
```

Flex 解决的典型问题包括：

- 垂直居中。
- 子元素等分空间。
- 元素之间保持固定间距。
- 左右两侧布局。
- 内容数量变化时自动换行。

## 主轴和交叉轴

Flex 布局的关键是理解两条轴：

- 主轴：由 `flex-direction` 决定，默认从左到右。
- 交叉轴：与主轴垂直的方向。

```css
.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}
```

当 `flex-direction: row` 时，`justify-content` 控制水平方向，`align-items` 控制垂直方向。当方向改为 `column`，两者控制的视觉方向也会随之变化。

## 容器属性

容器属性写在 flex container 上，影响所有直接子元素。

### flex-direction

控制主轴方向。

```css
.container {
  display: flex;
  flex-direction: row;
}
```

常见值：

| 值 | 说明 |
| --- | --- |
| `row` | 默认值，从左到右排列 |
| `row-reverse` | 从右到左排列 |
| `column` | 从上到下排列 |
| `column-reverse` | 从下到上排列 |

### justify-content

控制项目在主轴上的对齐和分布。

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

常见值：

- `flex-start`：靠主轴起点。
- `center`：居中。
- `space-between`：两端对齐，中间等距。
- `space-around`：每个项目两侧间距相等。
- `space-evenly`：所有间距相等。

### align-items

控制项目在交叉轴上的对齐。

```css
.container {
  display: flex;
  align-items: center;
}
```

最常用的场景是垂直居中：

```css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### flex-wrap

控制项目是否换行。

```css
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
```

配合 `gap` 可以很方便地实现卡片列表。

## 项目属性

项目属性写在 flex item 上，只影响当前子元素。

### flex

`flex` 是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写。

```css
.main {
  flex: 1;
}

.aside {
  flex: 0 0 240px;
}
```

`flex: 1` 通常表示项目可以增长、可以收缩，并把剩余空间分配给自己。侧边栏这类固定宽度区域可以使用 `flex: 0 0 240px`。

### align-self

单独控制某个项目在交叉轴上的对齐方式。

```css
.special {
  align-self: flex-start;
}
```

### order

改变视觉排列顺序，但不改变 DOM 顺序。

```css
.first {
  order: -1;
}
```

谨慎使用 `order`，因为它可能影响键盘导航和屏幕阅读器体验。

## 常见布局案例

### 水平垂直居中

```css
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 两栏布局

```css
.layout {
  display: flex;
  gap: 24px;
}

.sidebar {
  flex: 0 0 260px;
}

.content {
  flex: 1;
  min-width: 0;
}
```

`min-width: 0` 很重要。它允许内容区域在 flex 布局中正确收缩，避免长文本或代码块把容器撑开。

### 等宽卡片

```css
.cards {
  display: flex;
  gap: 16px;
}

.card {
  flex: 1;
}
```

### 自动换行卡片

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  flex: 1 1 240px;
}
```

## 面试常问问题

### Flex 和 Grid 有什么区别

Flex 更适合一维布局，重点是沿主轴排列项目；Grid 更适合二维布局，重点是同时控制行和列。简单横向排列、居中、左右布局优先考虑 Flex；页面栅格、复杂卡片矩阵优先考虑 Grid。

### flex: 1 表示什么

常见理解是 `flex: 1 1 0%`。它允许项目增长和收缩，并以 `0%` 作为基础尺寸参与剩余空间分配。

### 为什么 flex 子项会被内容撑开

flex item 默认 `min-width: auto`，会尊重内容的最小宽度。需要让它可收缩时，可以设置 `min-width: 0`。

## 总结

Flex 的核心是主轴、交叉轴、容器属性和项目属性。日常开发中最常见的组合是 `display: flex`、`align-items`、`justify-content`、`gap` 和 `flex`。面试时不要只背属性，要能说明适用场景和常见问题。

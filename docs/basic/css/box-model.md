---
title: 盒模型
description: 理解 CSS 盒模型和 box-sizing 的实际影响
outline: deep
---

# 盒模型

CSS 盒模型描述元素尺寸的组成方式。一个元素通常由 content、padding、border 和 margin 组成。

## 标准盒模型

在默认 `content-box` 中，`width` 只表示内容区宽度。实际占用宽度还要加上 padding 和 border。

```css
.box {
  width: 200px;
  padding: 16px;
  border: 1px solid #e2e8f0;
}
```

## Border Box

工程中更常使用 `border-box`，让 `width` 包含 content、padding 和 border，布局更可控。

```css
* {
  box-sizing: border-box;
}
```

## 面试角度

回答盒模型时，要说明标准盒模型和 IE 盒模型的区别，并结合 `box-sizing` 解释实际开发中的选择。

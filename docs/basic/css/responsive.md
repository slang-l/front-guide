---
title: 响应式布局
description: 响应式布局的核心思路、媒体查询和现代 CSS 写法
outline: deep
---

# 响应式布局

响应式布局的目标是在不同屏幕尺寸下保持内容可读、操作可达和视觉稳定。

## 核心思路

- 优先保证内容流动，而不是固定像素。
- 使用弹性布局和相对单位。
- 为关键断点补充媒体查询。
- 图片和表格需要单独处理溢出。

## 媒体查询

```css
.content {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }
}
```

## 实践建议

移动端不是把桌面端缩小，而是重新组织信息优先级。导航、表单、表格和卡片列表都需要单独检查。

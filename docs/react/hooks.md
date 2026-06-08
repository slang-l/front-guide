---
title: Hooks
description: React Hooks 的核心规则和常见使用方式
outline: deep
---

# Hooks

Hooks 让函数组件可以管理状态、副作用和引用。

## useState

```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## useEffect

`useEffect` 用于处理组件渲染后的副作用，例如订阅、请求和手动 DOM 操作。

## 面试角度

需要说明 Hooks 不能放在条件语句中，因为 React 依赖调用顺序关联状态。

---
title: 接口与类型别名
description: interface 和 type 的区别、选择建议与实践场景
outline: deep
---

# 接口与类型别名

`interface` 和 `type` 都可以描述对象结构，但它们的能力和语义略有差异。

## interface

```ts
interface User {
  id: number
  name: string
}
```

接口可以声明合并，适合描述可扩展的对象结构。

## type

```ts
type ID = string | number
type UserRole = 'admin' | 'member'
```

类型别名更适合联合类型、交叉类型和工具类型组合。

## 选择建议

描述公开对象结构时优先考虑 `interface`；需要组合复杂类型时使用 `type`。

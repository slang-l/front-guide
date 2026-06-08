---
title: Pinia
description: Pinia 状态管理的基本写法和使用场景
outline: deep
---

# Pinia

Pinia 是 Vue 官方推荐的状态管理方案。它适合管理跨组件共享、需要持久化或需要调试的业务状态。

```ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    token: ''
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    }
  }
})
```

## 使用建议

不要把所有局部状态都放入 Pinia。只有真正跨页面、跨组件或需要集中管理的状态才适合进入 store。

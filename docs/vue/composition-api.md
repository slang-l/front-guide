---
title: Composition API
description: Vue Composition API 的组织方式和复用价值
outline: deep
---

# Composition API

Composition API 让逻辑可以按照功能组织，而不是分散在 data、methods 和 computed 中。

## 基础示例

```ts
import { computed, ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  const inc = () => count.value++

  return { count, double, inc }
}
```

## 实践建议

组合式函数应该聚焦一个明确能力，例如请求状态、表单校验、分页或弹窗控制。

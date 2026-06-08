---
title: 组件通信
description: Vue 组件之间传递数据和事件的常见方式
outline: deep
---

# 组件通信

Vue 组件通信要根据关系选择方式。父子组件使用 props 和 emit，跨层级状态使用 provide/inject 或状态管理库。

## 父子通信

```vue
<script setup lang="ts">
defineProps<{ title: string }>()
const emit = defineEmits<{ change: [value: string] }>()
</script>
```

## 跨层级通信

`provide` 和 `inject` 适合主题、表单上下文、布局上下文等稳定依赖。复杂业务状态更适合 Pinia。

## 面试角度

回答时要先区分组件关系，再说明 props、emit、v-model、provide/inject 和状态管理的适用场景。

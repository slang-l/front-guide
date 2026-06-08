---
title: Promise
description: Promise 状态、链式调用和错误处理
outline: deep
---

# Promise

Promise 用来描述一个未来完成或失败的异步结果。它有 `pending`、`fulfilled` 和 `rejected` 三种状态。

## 链式调用

```js
fetch('/api/user')
  .then((res) => res.json())
  .then((user) => {
    console.log(user)
  })
  .catch((error) => {
    console.error(error)
  })
```

## 错误处理

链式调用中抛出的错误会进入最近的 `catch`。真实项目中要为网络异常、业务异常和取消请求分别设计处理方式。

## 面试角度

常见问题包括 Promise 状态不可逆、`then` 返回新 Promise、`finally` 的执行时机，以及 `Promise.all` 和 `Promise.race` 的区别。

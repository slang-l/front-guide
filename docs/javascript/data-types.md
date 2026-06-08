---
title: 数据类型
description: JavaScript 基本类型、引用类型和类型判断方法
outline: deep
---

# 数据类型

JavaScript 数据类型分为基本类型和引用类型。基本类型包括 `string`、`number`、`boolean`、`undefined`、`null`、`symbol` 和 `bigint`。

## 基本类型与引用类型

基本类型按值访问，引用类型保存对象引用。

```js
let a = 1
let b = a
b = 2

const x = { count: 1 }
const y = x
y.count = 2
```

## 类型判断

- `typeof` 适合判断基本类型。
- `Array.isArray` 判断数组。
- `Object.prototype.toString.call(value)` 可获得更准确的内置类型。

## 面试角度

常见问题包括 `typeof null` 为什么是 `object`、如何判断数组、浅拷贝和深拷贝的区别。

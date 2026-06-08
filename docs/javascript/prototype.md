---
title: 原型与原型链
description: JavaScript 对象继承模型和原型链查找机制
outline: deep
---

# 原型与原型链

JavaScript 使用原型实现对象之间的能力复用。每个对象都可以通过内部原型指向另一个对象，属性查找会沿着这条链向上进行。

## 基础示例

```js
function User(name) {
  this.name = name
}

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`
}

const user = new User('Front Guide')
user.sayHi()
```

## 查找规则

访问属性时，先查找对象自身；如果没有，再查找原型对象；直到原型为 `null`。

## 面试角度

需要能说明 `prototype`、`__proto__`、`constructor` 的关系，以及 `new` 操作符做了什么。

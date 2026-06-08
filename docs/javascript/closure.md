---
title: 深入理解 JavaScript 闭包
description: 从词法作用域、执行上下文和真实场景理解 JavaScript 闭包
outline: deep
---

# 深入理解 JavaScript 闭包

闭包是 JavaScript 面试和工程实践中都很重要的概念。理解闭包，需要先理解函数作用域和词法作用域。

## 闭包是什么

闭包是函数和其词法环境的组合。一个函数即使在外层函数执行结束后，仍然可以访问外层函数中的变量，这种能力就来自闭包。

```js
function createCounter() {
  let count = 0

  return function increment() {
    count++
    return count
  }
}

const counter = createCounter()

counter() // 1
counter() // 2
counter() // 3
```

`createCounter` 执行结束后，局部变量 `count` 没有被销毁，因为返回的 `increment` 函数仍然引用它。

## 词法作用域

词法作用域指函数的作用域在定义时确定，而不是在调用时确定。

```js
const name = 'global'

function outer() {
  const name = 'outer'

  return function inner() {
    console.log(name)
  }
}

const fn = outer()
fn() // outer
```

`inner` 在 `outer` 内部定义，因此它访问的是 `outer` 的 `name`，和函数在哪里调用无关。

## 闭包的使用场景

### 封装私有变量

闭包可以让变量只被特定函数访问，避免暴露到外部。

```js
function createStore(initialState) {
  let state = initialState

  return {
    getState() {
      return state
    },
    setState(nextState) {
      state = nextState
    }
  }
}

const store = createStore({ count: 0 })
store.setState({ count: 1 })
store.getState() // { count: 1 }
```

### 函数柯里化

闭包可以保存前一次调用传入的参数。

```js
function add(a) {
  return function (b) {
    return a + b
  }
}

const add10 = add(10)
add10(5) // 15
```

### 事件处理

闭包常用于事件回调中保留上下文。

```js
function bindButton(id) {
  const button = document.querySelector(`#${id}`)

  button?.addEventListener('click', () => {
    console.log(`clicked: ${id}`)
  })
}
```

## 常见陷阱

### 循环中的变量捕获

使用 `var` 时，循环变量是函数作用域，多个回调共享同一个变量。

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  })
}

// 3 3 3
```

使用 `let` 可以为每次循环创建新的块级作用域。

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  })
}

// 0 1 2
```

### 不必要的内存占用

闭包会延长变量生命周期。如果闭包引用了大对象，并且函数长期存在，就可能造成额外内存占用。

```js
function createHandler() {
  const largeData = new Array(100000).fill('data')

  return function handle() {
    return largeData.length
  }
}
```

不再需要时，应解除事件监听或释放引用。

## 面试题

### 如何一句话解释闭包

闭包是函数能够记住并访问其词法作用域的能力，即使这个函数在原作用域之外执行。

### 闭包一定会造成内存泄漏吗

不会。闭包只是让被引用变量的生命周期延长。只有当这些引用长期无法释放，且占用资源持续增长时，才可能形成内存泄漏。

### 防抖为什么会用到闭包

防抖需要在多次调用之间共享同一个定时器变量。这个变量不能暴露到全局，因此适合通过闭包保存。

```js
function debounce(fn, delay) {
  let timer = null

  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
```

## 总结

闭包来自词法作用域和函数一等公民特性。它常用于封装状态、函数柯里化、事件处理和异步回调。理解闭包时，要重点关注变量生命周期、作用域链和引用释放。

---
title: Event Loop 事件循环
description: 理解同步任务、宏任务、微任务和 async/await 的执行顺序
outline: deep
---

# Event Loop 事件循环

JavaScript 主线程一次只能执行一个任务。事件循环负责协调同步代码、异步回调、渲染和任务队列，让单线程模型也能处理异步行为。

## 同步任务

同步任务会直接进入调用栈执行。只有当前同步代码执行完，事件循环才会处理队列中的异步任务。

```js
console.log('start')
console.log('end')

// start
// end
```

## 宏任务

宏任务也叫 task，常见来源包括：

- `setTimeout`
- `setInterval`
- DOM 事件回调
- 网络请求回调
- script 整体执行

```js
console.log('start')

setTimeout(() => {
  console.log('timeout')
}, 0)

console.log('end')

// start
// end
// timeout
```

`setTimeout(fn, 0)` 不是立即执行，而是把回调放入后续宏任务队列。

## 微任务

微任务也叫 microtask，常见来源包括：

- `Promise.then`
- `queueMicrotask`
- `MutationObserver`
- `async/await` 中 `await` 后续逻辑

在一次宏任务结束后，浏览器会清空当前微任务队列，然后再进入下一次宏任务。

```js
console.log('start')

setTimeout(() => {
  console.log('timeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise')
})

console.log('end')

// start
// end
// promise
// timeout
```

## async/await 执行顺序

`async/await` 是 Promise 的语法糖。`await` 后面的表达式会先执行，后续代码会进入微任务。

```js
async function run() {
  console.log('a')
  await Promise.resolve()
  console.log('b')
}

console.log('start')
run()
console.log('end')

// start
// a
// end
// b
```

可以把 `await` 后面的代码理解为放进 `then` 里的回调。

## 经典面试题

看下面代码的输出顺序：

```js
console.log('1')

setTimeout(() => {
  console.log('2')
}, 0)

Promise.resolve()
  .then(() => {
    console.log('3')
  })
  .then(() => {
    console.log('4')
  })

async function foo() {
  console.log('5')
  await bar()
  console.log('6')
}

async function bar() {
  console.log('7')
}

foo()

console.log('8')
```

输出：

```txt
1
5
7
8
3
6
4
2
```

分析：

1. 同步执行 `1`。
2. `setTimeout` 进入宏任务队列。
3. Promise 的第一个 `then` 进入微任务队列。
4. 调用 `foo`，同步输出 `5`。
5. 调用 `bar`，同步输出 `7`。
6. `await` 后面的 `console.log('6')` 进入微任务队列。
7. 同步输出 `8`。
8. 清空微任务队列：输出 `3`，再排入输出 `4` 的微任务；输出 `6`；输出 `4`。
9. 执行下一个宏任务，输出 `2`。

## 浏览器渲染的关系

浏览器通常会在一次宏任务和微任务清空后，寻找合适时机进行渲染。如果微任务持续追加，可能阻塞渲染。

```js
function loop() {
  Promise.resolve().then(loop)
}

loop()
```

这类代码会不断制造微任务，导致页面没有机会渲染，真实开发中要避免。

## 总结

事件循环的判断顺序可以概括为：先执行同步代码，再清空微任务队列，最后进入下一个宏任务。面试题中遇到 `async/await`，要把 `await` 后续逻辑拆成微任务来分析。

---
title: Java 并发编程
description: Java 线程、锁、线程池、并发容器和可见性问题入门
outline: deep
---

# Java 并发编程

并发编程用于处理多个任务同时执行的问题。后端系统中，接口请求、异步任务、定时任务和消息消费都可能涉及并发。

## 线程与共享状态

线程是任务执行的基本单位。并发问题通常来自多个线程同时读写共享数据。

```java
private int count = 0;

public void increase() {
    count++;
}
```

上面的 `count++` 不是原子操作，多线程下可能出现结果丢失。

## 锁

锁用于保护临界区。

```java
public synchronized void increase() {
    count++;
}
```

锁要尽量缩小范围，避免把耗时的网络请求或文件操作放进锁里。

## 线程池

线程池用于复用线程并控制并发量。

```java
ExecutorService executor = Executors.newFixedThreadPool(8);
executor.submit(() -> sendMessage());
```

真实项目中更推荐显式配置线程池参数，而不是直接使用默认工厂方法。

## 并发容器

常见并发容器包括：

- `ConcurrentHashMap`
- `CopyOnWriteArrayList`
- `BlockingQueue`

它们适合不同场景，不能简单互相替代。

## 总结

并发编程的核心是管理共享状态。能不用共享状态时优先避免；必须共享时，再用锁、原子类、并发容器和数据库约束保证正确性。

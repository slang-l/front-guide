---
title: Spring 声明式事务
description: 理解 @Transactional、事务传播、回滚规则和常见失效场景
outline: deep
---

# Spring 声明式事务

声明式事务让开发者通过注解声明事务边界，Spring 通过代理在方法调用前后开启、提交或回滚事务。

## 基本用法

```java
@Transactional
public void pay(Long orderId) {
    orderRepository.markPaid(orderId);
    accountRepository.decreaseBalance(orderId);
}
```

方法执行成功时提交事务，出现符合规则的异常时回滚。

## 回滚规则

默认情况下，Spring 对运行时异常和错误回滚，对受检异常不一定回滚。需要时可以显式声明：

```java
@Transactional(rollbackFor = Exception.class)
public void importData() {
    // import records
}
```

## 传播行为

传播行为决定一个事务方法调用另一个事务方法时如何处理事务。常见的是 `REQUIRED`，表示有事务就加入，没有事务就新建。

## 常见失效场景

- 方法不是通过 Spring 代理对象调用。
- 同类内部自调用。
- 方法不是 `public`。
- 异常被捕获后没有继续抛出。
- 数据库操作本身不支持事务。

## 总结

事务要同时关注注解、代理、异常和数据库。只加 `@Transactional` 不代表事务一定生效，关键是调用路径和回滚规则是否满足条件。

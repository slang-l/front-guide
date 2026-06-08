---
title: Spring IoC 与 DI
description: 理解 Spring 控制反转、依赖注入、组件扫描和构造器注入
outline: deep
---

# Spring IoC 与 DI

IoC 是控制反转，意思是对象创建和依赖关系不再由业务代码自己控制，而是交给 Spring 容器管理。DI 是依赖注入，表示容器把依赖对象注入到目标对象中。

## 传统依赖创建

```java
public class OrderService {
    private final OrderRepository repository = new OrderRepository();
}
```

这种写法让 `OrderService` 和 `OrderRepository` 强绑定，测试和替换都不方便。

## 依赖注入

```java
@Service
public class OrderService {
    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }
}
```

构造器注入能清楚表达必要依赖，也能避免对象处于半初始化状态。

## 组件扫描

Spring 通过组件扫描发现带有注解的类，例如：

- `@Component`
- `@Service`
- `@Repository`
- `@Controller`

这些类会注册为 Bean，由容器统一创建和管理。

## 常见问题

### Bean 找不到

通常是组件没有被扫描到、接口没有实现类、条件配置不满足，或者包路径放错。

### 多个 Bean 冲突

同一接口有多个实现时，可以使用 `@Qualifier` 指定具体 Bean，或者通过配置调整默认实现。

## 总结

IoC 和 DI 的价值是降低对象之间的硬编码依赖。业务代码依赖抽象，容器负责装配具体实现，项目会更容易测试和扩展。

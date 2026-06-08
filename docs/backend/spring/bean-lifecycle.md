---
title: Spring Bean 生命周期
description: 理解 Spring Bean 创建、属性注入、初始化、后置处理和销毁流程
outline: deep
---

# Spring Bean 生命周期

Bean 生命周期描述一个对象从被 Spring 容器创建到销毁的完整过程。理解生命周期有助于掌握配置加载、代理生成和扩展点执行时机。

## 主要流程

一个常见 Bean 会经历：

1. 实例化对象。
2. 注入属性和依赖。
3. 执行初始化前的后置处理。
4. 执行初始化方法。
5. 执行初始化后的后置处理。
6. Bean 进入可使用状态。
7. 容器关闭时执行销毁逻辑。

## 初始化方法

常见初始化方式包括：

- `@PostConstruct`
- 实现初始化接口。
- 在配置中声明初始化方法。

```java
@PostConstruct
public void init() {
    loadCache();
}
```

初始化逻辑不要执行过长的阻塞任务，否则会影响应用启动。

## BeanPostProcessor

`BeanPostProcessor` 可以在 Bean 初始化前后介入处理。Spring AOP 创建代理对象时，就会利用类似机制在合适阶段增强 Bean。

## 销毁方法

销毁阶段适合释放资源，例如关闭连接、停止后台任务、刷新缓冲区。

## 总结

Bean 生命周期是理解 Spring 扩展点的基础。很多框架能力不是凭空出现的，而是在生命周期的某个阶段被注册、处理或增强。

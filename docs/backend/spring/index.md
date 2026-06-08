---
title: Spring 概览
description: Spring 模块学习入口，梳理 IoC、DI、Bean 生命周期、AOP、事务和 MVC
outline: deep
---

# Spring 概览

Spring 的核心是容器和代理。容器负责创建对象、管理依赖和生命周期，代理负责把事务、日志、权限等横切逻辑统一织入业务调用。

## 学习重点

- [IoC 与 DI](/backend/spring/ioc)：理解对象创建和依赖注入。
- [Bean 生命周期](/backend/spring/bean-lifecycle)：理解 Bean 从创建到销毁的过程。
- [AOP](/backend/spring/aop)：理解代理、切点、通知和横切逻辑。
- [声明式事务](/backend/spring/transaction)：理解事务边界、传播行为和回滚规则。
- [Spring MVC](/backend/spring/mvc)：理解请求进入控制器前后的处理流程。

## 学习建议

学习 Spring 时不要只背注解。注解只是入口，背后真正重要的是容器如何扫描组件、如何创建 Bean、如何注入依赖、如何生成代理对象。

## 面试角度

Spring 面试常从 `@Autowired`、`@Transactional`、Bean 生命周期和 AOP 追问到底层机制。回答时可以围绕“容器管理对象”和“代理增强方法”这两条主线组织。

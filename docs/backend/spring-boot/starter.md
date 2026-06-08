---
title: Spring Boot Starter
description: 理解 Spring Boot Starter 的作用、依赖组合和自定义 Starter 思路
outline: deep
---

# Spring Boot Starter

Starter 是一组依赖和默认配置的组合。引入 Starter 后，项目可以快速获得某类能力，例如 Web、数据库、缓存或安全认证。

## 常见 Starter

| Starter | 作用 |
| --- | --- |
| `spring-boot-starter-web` | Web MVC 和内嵌服务器 |
| `spring-boot-starter-validation` | 参数校验 |
| `spring-boot-starter-data-jpa` | JPA 数据访问 |
| `spring-boot-starter-actuator` | 健康检查和指标 |

Starter 本身通常不写业务逻辑，而是把相关依赖聚合起来。

## Starter 与自动配置

Starter 负责引入依赖，自动配置负责根据依赖创建 Bean。两者配合，才形成“引入即用”的开发体验。

```txt
引入 Starter -> classpath 出现相关类 -> 自动配置条件满足 -> 创建默认 Bean
```

## 自定义 Starter

内部平台或公共能力可以封装成 Starter，例如统一日志、统一鉴权、统一异常处理。这样多个项目可以共享同一套基础设施。

## 总结

理解 Starter 后，就能知道一个功能是怎么被引入项目的。排查依赖冲突或功能不生效时，也能沿着 Starter 和自动配置继续分析。

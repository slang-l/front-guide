---
title: Spring Boot 概览
description: Spring Boot 模块学习入口，梳理自动配置、Starter、配置管理、Web、数据访问和 Actuator
outline: deep
---

# Spring Boot 概览

Spring Boot 建立在 Spring 之上，目标是减少配置成本，让后端项目可以更快启动、开发、测试和部署。

## 学习重点

- [自动配置](/backend/spring-boot/auto-configuration)：理解默认配置如何生效。
- [Starter](/backend/spring-boot/starter)：理解依赖组合和功能引入方式。
- [配置管理](/backend/spring-boot/configuration)：理解配置文件、多环境和敏感信息管理。
- [Web 接口](/backend/spring-boot/web-api)：理解 REST 接口、参数校验和统一响应。
- [数据访问](/backend/spring-boot/data-access)：理解数据库连接、ORM 和事务配合。
- [Actuator](/backend/spring-boot/actuator)：理解健康检查、指标和运行状态。

## 启动入口

```java
@SpringBootApplication
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}
```

`@SpringBootApplication` 是组合注解，包含组件扫描、配置声明和自动配置能力。

## 总结

Spring Boot 的重点不是少写配置，而是理解它如何通过 Starter、自动配置和配置属性把一个 Spring 应用组织成可交付的工程。

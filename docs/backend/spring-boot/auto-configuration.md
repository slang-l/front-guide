---
title: Spring Boot 自动配置
description: 理解 Spring Boot 自动配置、条件注解、配置属性和 Bean 创建逻辑
outline: deep
---

# Spring Boot 自动配置

自动配置是 Spring Boot 的核心能力。它会根据项目依赖、配置项和条件注解，自动创建一组常用 Bean。

## 基本思路

自动配置通常依赖三个条件：

- classpath 中是否存在某些类。
- 配置文件中是否开启某些属性。
- 容器中是否已经存在同类 Bean。

满足条件时，Spring Boot 会加载对应配置并创建默认 Bean。

## 条件注解

常见条件注解包括：

| 注解 | 说明 |
| --- | --- |
| `@ConditionalOnClass` | classpath 存在某个类时生效 |
| `@ConditionalOnMissingBean` | 容器中没有指定 Bean 时生效 |
| `@ConditionalOnProperty` | 配置属性满足条件时生效 |

这些条件让默认配置可以被用户自定义配置覆盖。

## 配置属性

配置属性负责把 `application.yml` 中的值绑定到 Java 对象中。

```yaml
server:
  port: 8080
```

理解配置属性后，就能知道为什么改配置可以影响框架默认行为。

## 总结

自动配置不是魔法。它本质上是根据条件加载配置类，并在合适的时候创建 Bean。排查配置不生效时，要看依赖、条件和属性三件事。

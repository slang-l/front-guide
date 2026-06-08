---
title: Spring Boot 配置管理
description: Spring Boot application.yml、多环境配置、配置绑定和敏感信息管理
outline: deep
---

# Spring Boot 配置管理

配置管理用于把端口、数据库、缓存、第三方服务地址和业务开关从代码中抽离出来。

## application.yml

```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/app
    username: root
```

配置文件让同一份代码可以在不同环境中使用不同参数。

## 多环境配置

常见环境包括：

- `dev`：本地开发。
- `test`：测试环境。
- `prod`：生产环境。

可以使用 `application-dev.yml`、`application-test.yml`、`application-prod.yml` 管理差异。

## 配置绑定

配置可以绑定到对象中，方便业务代码读取。

```java
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String uploadDir;
}
```

配置对象要有明确的前缀，避免配置项散乱。

## 敏感信息

数据库密码、密钥和 Token 不要直接提交到仓库。生产环境可以通过环境变量、部署平台密钥或配置中心注入。

## 总结

配置管理的目标是让代码稳定、环境可变。把配置边界划清楚，应用部署和问题排查都会更轻松。

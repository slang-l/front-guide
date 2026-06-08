---
title: Spring MVC
description: 理解 Spring MVC 请求处理流程、控制器、参数绑定和拦截器
outline: deep
---

# Spring MVC

Spring MVC 是 Spring 体系中的 Web 请求处理框架。它负责把 HTTP 请求映射到控制器方法，并把方法返回值转换成 HTTP 响应。

## 请求处理流程

简化流程如下：

```txt
请求 -> DispatcherServlet -> HandlerMapping -> Controller -> HandlerAdapter -> 响应
```

`DispatcherServlet` 是入口，负责协调后续组件完成请求处理。

## 控制器

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping("/{id}")
    public UserDetail getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }
}
```

控制器负责接收参数、调用业务服务和返回结果，不应该承载复杂业务逻辑。

## 参数绑定

常见参数来源包括：

- `@PathVariable`
- `@RequestParam`
- `@RequestBody`
- 请求头和 Cookie

参数校验建议放在接口入口，避免非法数据进入业务层。

## 拦截器

拦截器适合处理登录校验、权限判断、请求日志和灰度标记等统一逻辑。

## 总结

Spring MVC 的重点是请求如何进入控制器，以及控制器如何保持轻量。把 Web 层和业务层边界分清楚，项目会更容易维护。

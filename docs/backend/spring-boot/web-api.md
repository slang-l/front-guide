---
title: Spring Boot Web 接口
description: Spring Boot REST 接口、请求参数、参数校验、统一响应和异常处理
outline: deep
---

# Spring Boot Web 接口

Web 接口是后端服务对外暴露能力的主要方式。一个清晰的接口要同时关注路径、方法、参数、响应和错误处理。

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

控制器负责接收请求和返回结果，复杂业务逻辑应该放到服务层。

## 参数校验

```java
public class CreateUserRequest {
    @NotBlank
    private String username;
}
```

参数校验可以减少无效请求进入业务层，也能让错误信息更稳定。

## 统一响应

项目中可以统一响应结构：

```java
public record ApiResult<T>(boolean success, T data, String message) {}
```

统一响应不是必须，但在后台系统和前后端分离项目中很常见。

## 异常处理

配合 `@RestControllerAdvice` 可以把异常转换为统一错误响应，避免接口返回风格不一致。

## 总结

Web 接口要做到路径清楚、参数明确、错误稳定。控制器越薄，业务层越容易复用和测试。

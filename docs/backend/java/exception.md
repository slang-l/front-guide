---
title: Java 异常处理
description: Java 异常类型、业务异常、统一异常处理和接口错误返回设计
outline: deep
---

# Java 异常处理

异常用于表达程序运行中的错误和边界情况。后端项目中，异常处理直接影响接口稳定性和问题排查效率。

## 异常分类

Java 异常大致可以分为：

| 类型 | 说明 |
| --- | --- |
| 受检异常 | 编译期要求处理，如部分 IO 异常 |
| 运行时异常 | 运行期才暴露，如空指针、参数非法 |
| 错误 | JVM 或系统级问题，通常不在业务中捕获 |

业务代码常用运行时异常表达业务失败。

## 业务异常

业务异常应该包含明确的错误码和错误信息。

```java
public class BusinessException extends RuntimeException {
    private final String code;

    public BusinessException(String code, String message) {
        super(message);
        this.code = code;
    }
}
```

这样接口层可以统一返回稳定结构，前端也能根据错误码做处理。

## 统一异常处理

Spring Boot 项目通常使用 `@ControllerAdvice` 统一处理异常。

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(BusinessException.class)
    public ApiResult<Void> handleBusiness(BusinessException exception) {
        return ApiResult.fail(exception.getMessage());
    }
}
```

控制器不要到处写重复的 `try catch`，否则错误处理会很难维护。

## 总结

异常处理的目标是让错误可表达、可追踪、可恢复。业务层抛出有意义的异常，接口层统一转换响应，是后端项目的常见实践。

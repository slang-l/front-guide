---
title: Java 面向对象
description: 理解 Java 类、对象、封装、继承、多态、接口和抽象类
outline: deep
---

# Java 面向对象

面向对象是 Java 组织业务代码的核心方式。它关注如何把业务概念抽象成对象，并通过对象之间的协作完成需求。

## 类与对象

类是模板，对象是运行时实例。

```java
public class User {
    private Long id;
    private String name;
}
```

业务对象要表达真实含义，不要只做字段容器。关键业务规则可以放在领域对象或服务对象中。

## 封装

封装是把内部状态保护起来，只暴露必要行为。

```java
public class Account {
    private BigDecimal balance;

    public void decrease(BigDecimal amount) {
        if (balance.compareTo(amount) < 0) {
            throw new IllegalArgumentException("balance not enough");
        }
        balance = balance.subtract(amount);
    }
}
```

封装能避免外部随意修改对象状态。

## 继承与多态

继承表达“是一种”的关系，多态让同一接口在不同实现中表现不同。

```java
public interface NotificationSender {
    void send(String message);
}
```

实际项目中要谨慎使用深层继承。多数场景下，接口加组合比复杂继承更容易维护。

## 接口与抽象类

接口适合定义能力边界，抽象类适合复用一部分通用逻辑。

| 类型 | 适用场景 |
| --- | --- |
| 接口 | 多个实现、能力抽象、依赖倒置 |
| 抽象类 | 有共同状态或通用模板逻辑 |

## 总结

面向对象的重点是职责划分。好的对象边界可以降低模块耦合，让代码更容易测试、替换和扩展。

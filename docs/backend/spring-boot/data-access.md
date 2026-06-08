---
title: Spring Boot 数据访问
description: Spring Boot 数据库连接、Repository、ORM、事务和常见数据访问实践
outline: deep
---

# Spring Boot 数据访问

数据访问负责连接数据库、执行查询和持久化业务对象。Spring Boot 可以和 JDBC、MyBatis、JPA 等方案配合。

## 数据源配置

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/app
    username: root
    password: secret
```

数据源配置要按环境区分，生产密码不要提交到仓库。

## Repository 层

Repository 层负责数据库访问，不应该承载复杂业务流程。

```java
public interface UserRepository {
    User findById(Long id);
}
```

服务层编排业务流程，Repository 层提供数据读写能力。

## 事务配合

数据访问通常需要和事务一起考虑。涉及多个写操作时，要在服务层声明事务边界。

```java
@Transactional
public void createOrder(CreateOrderCommand command) {
    orderRepository.save(command.toOrder());
    stockRepository.decrease(command.productId());
}
```

## 常见实践

- 列表接口避免查询大字段。
- 分页查询要有稳定排序。
- 高频筛选字段要建立索引。
- 批量写入要控制单次数据量。
- 数据库唯一约束要作为最终兜底。

## 总结

数据访问层要保持职责单一。业务规则放服务层或领域层，数据库读写放 Repository 层，事务边界放在能完整表达业务动作的位置。

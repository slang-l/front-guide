---
title: Java 集合框架
description: Java List、Set、Map、Queue 的使用场景和常见注意点
outline: deep
---

# Java 集合框架

集合用于保存和处理一组对象，是 Java 后端代码中最高频的基础工具之一。

## 常见集合类型

| 接口 | 常见实现 | 特点 |
| --- | --- | --- |
| `List` | `ArrayList`、`LinkedList` | 有序、可重复 |
| `Set` | `HashSet`、`TreeSet` | 去重 |
| `Map` | `HashMap`、`TreeMap` | 键值映射 |
| `Queue` | `ArrayDeque`、`PriorityQueue` | 队列或优先级处理 |

选择集合时，先看业务需要：是否有序、是否去重、是否按 key 查询、是否需要线程安全。

## List

`ArrayList` 适合大多数按顺序保存数据的场景。

```java
List<String> names = new ArrayList<>();
names.add("alice");
names.add("bob");
```

如果频繁按下标访问，`ArrayList` 通常更合适。如果频繁在中间插入，也要结合实际数据量评估。

## Set

`Set` 用于去重，依赖对象的 `equals` 和 `hashCode`。

```java
Set<Long> userIds = new HashSet<>();
userIds.add(1L);
```

自定义对象放入 `HashSet` 时，必须正确实现相等逻辑。

## Map

`Map` 用于通过 key 快速找到 value。

```java
Map<Long, String> userNameMap = new HashMap<>();
userNameMap.put(1L, "alice");
```

`HashMap` 不是线程安全的，并发场景要考虑 `ConcurrentHashMap` 或外部同步。

## 总结

集合选择没有固定答案。理解集合的语义和性能特点，再根据业务访问方式选择，才是可靠的做法。

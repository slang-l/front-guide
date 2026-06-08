---
title: HTTP 缓存
description: 强缓存、协商缓存和前端资源缓存策略
outline: deep
---

# HTTP 缓存

HTTP 缓存可以减少网络请求、降低延迟并提升页面加载速度。

## 强缓存

强缓存通过 `Cache-Control` 或 `Expires` 控制。在有效期内浏览器可以直接使用本地缓存。

```http
Cache-Control: max-age=31536000, immutable
```

## 协商缓存

协商缓存通过 `ETag` 或 `Last-Modified` 与服务端确认资源是否变化。

## 实践建议

带 hash 的静态资源可以使用长缓存；HTML 入口文件通常使用较短缓存或协商缓存。

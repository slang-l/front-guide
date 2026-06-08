---
title: 跨域
description: 同源策略、CORS 和常见跨域解决方案
outline: deep
---

# 跨域

同源策略限制不同协议、域名或端口之间的资源访问。CORS 是浏览器允许跨源请求的标准机制。

## CORS 响应头

```http
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

## 预检请求

复杂请求会先发送 `OPTIONS` 预检请求，确认服务端是否允许该跨源访问。

## 面试角度

回答跨域时，要区分浏览器安全限制和服务端网络能力。跨域不是请求发不出去，而是浏览器拦截响应读取。

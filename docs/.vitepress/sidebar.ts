import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [
    {
      text: '维护指南',
      items: [
        { text: '项目介绍', link: '/guide/' },
        { text: '写作指南', link: '/writing-guide' }
      ]
    }
  ],

  '/writing-guide': [
    {
      text: '维护指南',
      items: [
        { text: '写作指南', link: '/writing-guide' },
        { text: '项目介绍', link: '/guide/' }
      ]
    }
  ],

  '/basic/': [
    {
      text: '前端基础',
      items: [
        { text: '概览', link: '/basic/' },
        {
          text: 'HTML',
          collapsed: false,
          items: [
            { text: '语义化标签', link: '/basic/html/semantic-html' },
            { text: 'SEO 基础', link: '/basic/html/seo-basic' }
          ]
        },
        {
          text: 'CSS',
          collapsed: false,
          items: [
            { text: '盒模型', link: '/basic/css/box-model' },
            { text: 'Flex 布局', link: '/basic/css/flex' },
            { text: 'Grid 布局', link: '/basic/css/grid' },
            { text: '响应式布局', link: '/basic/css/responsive' }
          ]
        }
      ]
    }
  ],

  '/javascript/': [
    {
      text: 'JavaScript',
      items: [
        { text: '概览', link: '/javascript/' },
        {
          text: '基础语法',
          collapsed: false,
          items: [
            { text: '数据类型', link: '/javascript/data-types' },
            { text: '作用域与闭包', link: '/javascript/closure' },
            { text: '原型与原型链', link: '/javascript/prototype' }
          ]
        },
        {
          text: '异步编程',
          collapsed: false,
          items: [
            { text: 'Promise', link: '/javascript/promise' },
            { text: 'Event Loop', link: '/javascript/event-loop' }
          ]
        }
      ]
    }
  ],

  '/typescript/': [
    {
      text: 'TypeScript',
      items: [
        { text: '概览', link: '/typescript/' },
        { text: '基础类型', link: '/typescript/basic-types' },
        { text: '接口与类型别名', link: '/typescript/interface-vs-type' },
        { text: '泛型', link: '/typescript/generics' }
      ]
    }
  ],

  '/vue/': [
    {
      text: 'Vue',
      items: [
        { text: '概览', link: '/vue/' },
        { text: '组件通信', link: '/vue/component-communication' },
        { text: 'Composition API', link: '/vue/composition-api' },
        { text: 'Pinia', link: '/vue/pinia' }
      ]
    }
  ],

  '/react/': [
    {
      text: 'React',
      items: [
        { text: '概览', link: '/react/' },
        { text: 'Hooks', link: '/react/hooks' },
        { text: '性能优化', link: '/react/performance' }
      ]
    }
  ],

  '/engineering/': [
    {
      text: '工程化',
      items: [
        { text: '概览', link: '/engineering/' },
        { text: 'Vite', link: '/engineering/vite' },
        { text: 'ESLint 与 Prettier', link: '/engineering/eslint-prettier' },
        { text: 'GitHub Actions', link: '/engineering/github-actions' }
      ]
    }
  ],

  '/browser/': [
    {
      text: '浏览器',
      items: [
        { text: '概览', link: '/browser/' },
        { text: '渲染原理', link: '/browser/render' },
        { text: 'HTTP 缓存', link: '/browser/cache' },
        { text: '跨域', link: '/browser/cors' }
      ]
    }
  ],

  '/backend/': [
    {
      text: '后端模块',
      items: [
        { text: '概览', link: '/backend/' },
        {
          text: 'Java',
          link: '/backend/java/',
          collapsed: false,
          items: [
            { text: 'Java 概览', link: '/backend/java/' },
            { text: '基础语法', link: '/backend/java/basic-syntax' },
            { text: '面向对象', link: '/backend/java/oop' },
            { text: '集合框架', link: '/backend/java/collections' },
            { text: '异常处理', link: '/backend/java/exception' },
            { text: '并发编程', link: '/backend/java/concurrency' },
            { text: 'JVM 基础', link: '/backend/java/jvm' }
          ]
        },
        {
          text: 'Spring',
          link: '/backend/spring/',
          collapsed: false,
          items: [
            { text: 'Spring 概览', link: '/backend/spring/' },
            { text: 'IoC 与 DI', link: '/backend/spring/ioc' },
            { text: 'Bean 生命周期', link: '/backend/spring/bean-lifecycle' },
            { text: 'AOP', link: '/backend/spring/aop' },
            { text: '声明式事务', link: '/backend/spring/transaction' },
            { text: 'Spring MVC', link: '/backend/spring/mvc' }
          ]
        },
        {
          text: 'Spring Boot',
          link: '/backend/spring-boot/',
          collapsed: false,
          items: [
            { text: 'Spring Boot 概览', link: '/backend/spring-boot/' },
            { text: '自动配置', link: '/backend/spring-boot/auto-configuration' },
            { text: 'Starter', link: '/backend/spring-boot/starter' },
            { text: '配置管理', link: '/backend/spring-boot/configuration' },
            { text: 'Web 接口', link: '/backend/spring-boot/web-api' },
            { text: '数据访问', link: '/backend/spring-boot/data-access' },
            { text: 'Actuator', link: '/backend/spring-boot/actuator' }
          ]
        }
      ]
    }
  ],

  '/interview/': [
    {
      text: '面试指南',
      items: [
        { text: '概览', link: '/interview/' },
        { text: '高频手写题', link: '/interview/handwrite' },
        { text: '高频八股题', link: '/interview/questions' },
        { text: '简历建议', link: '/interview/resume' }
      ]
    }
  ],

  '/roadmap/': [
    {
      text: '学习路线',
      items: [
        { text: '前端学习路线', link: '/roadmap/' }
      ]
    }
  ]
}

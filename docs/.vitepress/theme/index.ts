import type { Theme } from 'vitepress'
import Teek from 'vitepress-theme-teek'
import 'vitepress-theme-teek/index.css'
import HomeSections from './components/HomeSections.vue'
import './style.css'

export default {
  extends: Teek,
  enhanceApp({ app }) {
    app.component('HomeSections', HomeSections)
  }
} satisfies Theme

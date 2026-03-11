import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 注册全局组件
import cardVue from './components/card.vue'

export const app = createApp(App)

app.component('card', cardVue)

app.mount('#app')

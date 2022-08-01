import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosOne from './api/base'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/base.css'

import './assets/fonts/fonts.css'
const app = createApp(App)
// app.config.globalProperties.$axios = axios
app.provide('$axiosOne', axiosOne)
app.use(store).use(router).use(ElementPlus).mount('#app')

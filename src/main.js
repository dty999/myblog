import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosOne from './api/base'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/base.css'
import './assets/fonts/fonts.css'

import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// highlightjs
import hljs from 'highlight.js'

VMdEditor.use(githubTheme, {
  Hljs: hljs
})

const app = createApp(App)
// app.config.globalProperties.$axios = axios
app.provide('$axiosOne', axiosOne)
app.use(store).use(router).use(ElementPlus).use(VMdEditor).mount('#app')

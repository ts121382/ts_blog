import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入路由
import router from './router'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg
import 'virtual:svg-icons-register'
import globalComponent from '@/components'
//全局scss
import '@/styles/index.scss'
//pinia
import pinia from '@/store'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent)
//注册路由
app.use(router)
//注册pinia
app.use(pinia)
app.mount('#app')

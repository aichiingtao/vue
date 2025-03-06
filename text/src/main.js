
//  将创建的实例进行封装，保证每个实例都是独立封闭性
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//  导入pinia持久化插件，可以自动帮你储存数据到本地
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


// 创建 pinia 实例
const pinia = createPinia()
//  挂载 pinia 在APP组件里面使用
createApp(App).use(pinia).mount('#app')
pinia.use(piniaPluginPersistedstate)

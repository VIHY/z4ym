import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Element from 'element-ui'

const Vue = createApp(App)
Vue.use(store).use(router).mount('#app')

// Vue.use(Element)
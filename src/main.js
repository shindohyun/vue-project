import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './mixins/api'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(api)
app.mount('#app')
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

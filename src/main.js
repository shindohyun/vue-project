import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './mixins/api'
import mixins from './mixins/mixins'
import i18nPlugin from './plugins/i18n'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const i18nStrings = {
  en: {
    hi: 'Hello'
  },
  ko: {
    hi: '안녕하세요'
  }
}

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(api)
app.mixin(mixins)
app.use(VueSweetalert2)
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
app.use(i18nPlugin, i18nStrings)
app.mount('#app')

window.Kakao.init('bb694b403f11ddda8cbc05210dbf8cf4')

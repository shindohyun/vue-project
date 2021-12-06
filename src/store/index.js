import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'
import test from '@/store/modules/test'
import user from '@/store/modules/user'

const store = createStore({
  modules: {
    test,
    user
  },
  plugins: [
    persistedstate({
      paths: [
        'user'
      ]
    })
  ]
})

export default store

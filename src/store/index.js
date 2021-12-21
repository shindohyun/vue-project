import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'
import test from '@/store/modules/test'
import user from '@/store/modules/user'
import persistedstatetest from './modules/persistedstatetest'

const store = createStore({
  modules: {
    test,
    user,
    persistedstatetest
  },
  plugins: [
    persistedstate({
      paths: [
        'user',
        'persistedstatetest.persistedData' // persistedstatetest 모듈 내부에 있는 state 들 중에서 persistedData state 만 등록한다.
      ]
    })
  ]
})

export default store

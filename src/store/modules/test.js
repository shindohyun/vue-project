const test = {
  namespaced: true,
  state() {
    return {
      count: 0,
      cart: [{
        product_id: 1,
        product_name: '아이폰 거치대',
        category: 'A'
      }]
    }
  },
  getters: {
    // cart의 개수를 가져오는 코드를 각 컴포넌트에서 반복 구현할 필요가 없어진다.
    // 단순히 데이터 자체를 get 하기 위한 목적 보다는 데이터의 가공 또는 데이터의 어떤 속성을 가져올때 유용하다.
    cartCount: (state) => {
      return state.cart.length
    }
  },
  mutations: {
    // 동기 처리
    // call > commit
    increment(state) {
      state.count++
      console.log('call mutations')
    }
  },
  actions: {
    increment(context) {
      // 여러개의 mutations을 실행시킬 수 있고
      // 비동기 처리
      // 비동기 처리 후 mutations를 커밋할 목적
      // call > dispatch
      console.log('call actions')
      context.commit('increment')
    }
  }
}

export default test

<template>
  <p>Count: {{ count }}</p>
  <p>Cart Count: {{ cartCount }} </p>
  <button type="button" @click="increment">Increment</button>
  <button type="button" @click="incrementAction">Increment Action</button>
  <br>
  <input v-model="name" placeholder="사용자 이름 입력"/>
  <button type="button" @click="saveUser">사용자 object 저장</button>
  <p>{{ $store.state.user }}</p>
  <br>
  <input v-model="data1" placeholder="지속적인 데이터">
  <button type="button" @click="saveData1">저장</button>
  <p>{{ $store.state.persistedstatetest.persistedData }}</p>
  <input v-model="data2" placeholder="비지속적인 데이터">
  <button type="button" @click="saveData2">저장</button>
  <p>{{ $store.state.persistedstatetest.unpersistedData }}</p>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      data1: 0,
      data2: 0
    }
  },
  computed: {
    count() {
      return this.$store.state.test.count
    },
    cartCount() {
      return this.$store.getters['test/cartCount']
    }
  },
  methods: {
    increment() {
      this.$store.commit('test/increment')
    },
    incrementAction() {
      this.$store.dispatch('test/increment')
    },
    saveUser() {
      this.$store.commit('user/user', { name: this.name })
    },
    saveData1() {
      this.$store.commit('persistedstatetest/persistedData', this.data1)
    },
    saveData2() {
      this.$store.commit('persistedstatetest/unpersistedData', this.data2)
    }
  }
}
</script>

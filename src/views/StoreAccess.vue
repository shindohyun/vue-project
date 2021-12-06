<template>
  <p>Count: {{ count }}</p>
  <p>Cart Count: {{ cartCount }} </p>
  <button type="button" @click="increment">Increment</button>
  <button type="button" @click="incrementAction">Increment Action</button>
  <br>
  <input v-model="name" placeholder="사용자 이름 입력"/>
  <button type="button" @click="saveUser">사용자 object 저장</button>
  <p>{{ $store.state.user }}</p>
</template>
<script>
export default {
  data() {
    return {
      name: ''
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
    }
  }
}
</script>

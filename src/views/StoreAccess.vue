<template>
  <p>Count: {{ count }}</p>
  <p>Cart Count: {{ cartCount }} </p>
  <button type="button" @click="increment">Increment</button>
  <button type="button" @click="incrementAction">Increment Action</button>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    cartCount() {
      return this.$store.getters.cartCount
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementAction() {
      this.$store.dispatch('increment')
    }
  }
}
</script>

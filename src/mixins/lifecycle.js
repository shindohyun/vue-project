// mixin 라이프사이클이 먼저 호출된다.
export default {
  mounted() {
    console.log('mixins mounted')
  },
  unmounted() {
    console.log('mixins unmounted')
  }
}

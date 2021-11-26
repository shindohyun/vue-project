<template>
  <composition-api-inject/>
</template>
<script>
import { provide } from 'vue'
import CompositionApiInject from '../views/CompositionApiInject'

export default {
  components: {
    CompositionApiInject
  },
  setup() {
    provide('title', 'Composition API Provide-Inject Test')
  }
}
</script>

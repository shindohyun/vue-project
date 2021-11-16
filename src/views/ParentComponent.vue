<template>
  <child-component @send-message="sendMessage" ref="child_component"/>
  <button type="button" @click="callChildEvent">call child event</button><br/>
  <button type="button" @click="callChildFunc">call child func</button><br/>
  <button type="button" @click="changeChildData">change child data</button><br/>
  <button type="button" @click="checkSyncData">check sync data</button>
</template>
<script>
import ChildComponent from './ChildComponent'

export default {
  components: {
    ChildComponent
  },
  methods: {
    sendMessage(data) {
      alert(data)
    },
    callChildEvent() {
      this.$refs.child_component.$refs.btnCallEvent.click()
    },
    callChildFunc() {
      this.$refs.child_component.callFunc()
    },
    changeChildData() {
      this.$refs.child_component.data++
    },
    checkSyncData() {
      alert(this.syncData)
    }
  },
  computed: {
    syncData() {
      return this.$refs.child_component.syncData
    }
  }
}
</script>

<template>
  <div class="child">
    <h1>child</h1>
    <button type="button" @click="callEvent" ref="btnCallEvent">call event</button>
    <p>data: {{data}}</p>
    <button @click="changeSyncData">change sync data</button> {{syncData}} <br/>
    <button @click="sendMsgToParent">send message to parent</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: 0,
      syncData: 0,
      toParent: 'from child'
    }
  },
  methods: {
    callEvent() {
      alert('child event')
    },
    callFunc() {
      alert('child func')
    },
    changeSyncData() {
      this.syncData++
    },
    sendMsgToParent() {
      this.$emit('send-message', this.toParent)
    }
  }
}
</script>
<style scoped>
.child {
  background: #bdb8b8;
  margin-bottom: 50px;
}
</style>

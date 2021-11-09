<template>
  <div
    class="container"
    v-bind:class="{
      'active': isActive,
      'text-red': hasError
    }">Class Binding</div>
  <div
    class="container"
    v-bind:class="[
      activeClass, errorClass
    ]">Class Binding</div>
  <div
    class="container"
    v-bind:class="activeErrorClass">
    Class Binding</div>
  <div
    v-bind:style="containerStyle">
    Style Binding
  </div>
  <div
    v-bind:style="[
      containerStyle, activeStyle, errorStyle
    ]">Style Binding</div>
  <button @click="two(), one()">Click</button>
  <input @keyup.enter="submit" placeholder="enter event"/>
  <input @keyup.delete="backspace" placeholder="delete event"/>
  <div @click.shift="shiftClick">shift + click event</div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-red',
      activeErrorClass: 'active text-red',
      containerStyle: {
        width: '100%',
        height: '50px'
      },
      activeStyle: 'background-color: yellow; font-weight: bold',
      errorStyle: 'color: red;'
    }
  },
  methods: {
    one() {
      alert('one')
    },
    two() {
      alert('two')
    },
    submit() {
      alert('submit')
    },
    backspace() {
      alert('backspace')
    },
    shiftClick() {
      alert('shift + click')
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 50px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>

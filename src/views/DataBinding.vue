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
  <h1>Computed Full Name: {{computedFullName}}</h1>
  <h1>Watch Full Name: {{fullName}}</h1>
  <button @click="changeFirstName">Change First Name</button>
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
      errorStyle: 'color: red;',
      firstName: 'dohyun',
      lastName: 'shin',
      fullName: ''
    }
  },
  computed: {
    computedFullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName
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
    },
    changeFirstName() {
      this.firstName = this.firstName.split('').reverse().join('')
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

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

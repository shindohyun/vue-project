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
  <input @keyup.enter="submit" placeholder="enter event" v-focus/>
  <input @keyup.delete="backspace" placeholder="delete event"/>
  <div @click.shift="shiftClick">shift + click event</div>
  <h1>Computed Full Name: {{computedFullName}}</h1>
  <h1>Watch Full Name: {{fullName}}</h1>
  <button @click="changeFirstName">Change First Name</button>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in productList" v-bind:key="index">
        <td>{{product.product_name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.category}}</td>
        <td>{{product.delivery_price}}</td>
      </tr>
    </tbody>
  </table>
  <p v-pin="position">Custom Local Directive Test (position:fixed;top:50px;left:100px;)</p>
  <using-plugin/>
</template>
<script>
import lifecycle from '../mixins/lifecycle'
import UsingPlugin from './UsingPlugin'

export default {
  components: {
    UsingPlugin
  },
  mixins: [
    lifecycle
  ],
  directives: {
    pin: {
      mounted(el, binding) {
        el.style.position = 'fixed'
        el.style.top = binding.value.top + 'px'
        el.style.left = binding.value.left + 'px'
      }
    }
  },
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
      fullName: '',
      productList: [],
      position: {
        top: 50,
        left: 100
      }
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    console.log('component mounted')
  },
  unmounted() {
    console.log('component unmounted')
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
    },
    async getList() {
      this.productList = await this.$api('https://a14071f4-dff0-4a20-9343-a1c775d7f9c4.mock.pstmn.io/list', 'get')
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

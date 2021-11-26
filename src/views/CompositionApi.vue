<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers"/>
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers"/>
      <span> = </span>
      <span>{{state.result1}}</span>
    </div>
    <div>
      <input type="text" v-model="state.num1"/>
      <span> + </span>
      <input type="text" v-model="state.num2"/>
      <span> = </span>
      <span>{{state.result2}}</span>
    </div>
    <div>
      <input type="text" v-model="extNum1"/>
      <span> + </span>
      <input type="text" v-model="extNum2"/>
      <span> = </span>
      <span>{{extResult}}</span>
    </div>
    <div>
      <input type="text" v-model="extNum1" @keyup="extPlusNumbers"/>
      <span> + </span>
      <input type="text" v-model="extNum2" @keyup="extPlusNumbers"/>
      <span> = </span>
      <span>{{extResult}}</span>
    </div>
  </div>
</template>
<script>
import { reactive, computed, onMounted, onUnmounted } from 'vue'
import { externalPlusCalculator } from '../common.js'

export default {
  name: 'calculator',
  setup() {
    onMounted(() => {
      console.log('onMounted')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    const state = reactive({
      num1: 0,
      num2: 0,
      result1: 0,
      result2: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })
    function plusNumbers() {
      state.result1 = parseInt(state.num1) + parseInt(state.num2)
    }
    const { extNum1, extNum2, extResult, externalPlusNumbers } = externalPlusCalculator()
    return {
      state,
      plusNumbers,
      extNum1,
      extNum2,
      extResult,
      externalPlusNumbers
    }
  }
}
</script>

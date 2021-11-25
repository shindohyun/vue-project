import { reactive, computed, toRefs } from 'vue'

const externalPlusCalculator = () => {
  const state = reactive({
    extNum1: 0,
    extNum2: 0,
    extResult: computed(() => parseInt(state.extNum1) + parseInt(state.extNum2))
  })
  function externalPlusNumbers() {
    state.extResult = parseInt(state.extNum1) + parseInt(state.extNum2)
  }
  return toRefs(state, externalPlusNumbers)
}

export { externalPlusCalculator }

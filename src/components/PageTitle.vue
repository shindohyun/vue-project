<template>
  <h2 v-if="stringData != '기본 문자열 데이터'">{{stringData + '의 자료형은 '+ typeof stringData + ' 입니다.'}}</h2>
  <h2 v-if="numberData != 100">{{numberData + '의 자료형은 '+ typeof numberData + ' 입니다.'}}</h2>
  <h2 v-if="booleanData">{{booleanData + '의 자료형은 '+ typeof booleanData + ' 입니다.'}}</h2>
  <h2 v-if="arrayData != null">{{arrayData + '의 자료형은 ' + typeof arrayData + ' 입니다.'}}</h2>
  <h2 v-if="objectData != null">{{objectData + '의 자료형은 ' + typeof objectData + ' 입니다.'}}</h2>
</template>
<script>
export default {
  props: {
    stringData: {
      type: String,
      default: '기본 문자열 데이터'
    },
    numberData: {
      type: Number,
      default: 100
    },
    booleanData: {
      type: Boolean,
      default: false
    },
    arrayData: {
      type: Array,
      default: null
    },
    objectData: {
      type: Object,
      default: null
    },
    propA: null, // 또는 'undefined', 모든 타입 허용
    propB: Number, // Number 타입만 허용, 나머지 경고 발생
    propC: [String, Number], // 여러 타입 허용
    propD: {
      type: String,
      required: true // 데이터를 전달 받지 않으면 경고 발생
    },
    propE: {
      type: Object,
      default: function() { // 'Object', 'Array'의 기본 값은 반드시 팩토리 함수로 반환
        return {
          name: '신도현',
          age: 30
        }
      }
    },
    propF: {
      type: Array,
      default: () => {
        return [1, 2, 3]
      }
    },
    propG: {
      validator: function(value) {
        return ['A', 'B', 'C'].indexOf(value) !== -1 // false가 반환되면 경고 발생
      }
    },
    propH: {
      type: Function,
      default: function() {
        return 'Default function'
      }
    }
  }
}
</script>

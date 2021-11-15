<template>
  <div>
    <p>* prop 전달 시 v-bind 를 사용하지 않는 경우 문자열로 전달된다.</p>
    <p>* v-bind 를 사용하면 데이터가 자바스크립트 표현식이 된다.</p>
    <br/>
    <PageTitle v-bind:stringData="stringData"/>
    <PageTitle :stringData="stringData"/>
    <br/>
    <PageTitle numberData="10"/>
    <PageTitle :numberData="10"/>
    <PageTitle :numberData="'10'"/>
    <PageTitle :numberData="numberData"/>
    <br/>
    <PageTitle booleanData="true"/>
    <PageTitle :booleanData="true"/>
    <PageTitle :booleanData="booleanData"/>
    <br/>
    <PageTitle arrayData="[1, 2, 3]"/>
    <PageTitle :arrayData="[1, 2, 3]"/>
    <PageTitle :arrayData="arrayData"/>
    <br/>
    <PageTitle objectData="{name: '도현', age: '30'}"/>
    <PageTitle :objectData="{name: '도현', age: '30'}"/>
    <PageTitle :objectData="objectData"/>
    <PageTitle :stringData="objectData.name" :numberData="objectData.age"/>
  </div>
</template>
<script>
import PageTitle from '../components/PageTitle'

export default {
  components: {
    PageTitle
  },
  data() {
    return {
      stringData: '문자',
      numberData: 20,
      booleanData: true,
      arrayData: [10, 20, 30],
      objectData: {
        name: '신도현',
        age: 31
      }
    }
  }
}
</script>

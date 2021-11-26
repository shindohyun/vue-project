# Learning
## Lazy Load
Vue는 빌드 후 모든 소스 코드가 하나의 파일로 생성되고, 첫 접속 시 파일에 포함된 리소스 및 컴포넌트가 전부 로드된다.

특정 컴포넌트를 지연로드로 지정하는 경우 path로 접근했을 때 해당 컴포넌트(Async Component)를 로드시킨다.  
Async Component는 코드가 분리되어 Chunk 파일로 생성된다.

Chunk 파일의 이름을 지정할 수 있다. (같은 이름으로 설정한 모든 컴포넌트는 해당 파일로 함께 묶인다.)
```javascript
// router/index.js
component: () => import(/* webpackChunkName: "about" */ 'vue 파일명')
```

Vue CLI에서는 **prefetch** 기능을 제공한다. 이 기능은 Async Component와 같이 **미래에 사용될 리소스를 미리 캐시에 올려둠으로써 빠른 화면 전환을 가능하게 한다.** 기본 설정값은 `true`(사용)이다.

prefetch 기능에 의해 캐시에 리소스가 저장될 때 리소스 각각에 대해 request가 발생한다. 또한 미래에 사용될 모든 리소스를 내려 받은 후 첫 화면에 사용되는 리소스를 내려 받는다.

따라서 기본적으로 prefetch 기능을 꺼두고 prefetch 기능이 필요한 지연로드 컴포넌트에만 선택적으로 사용하는 것이 좋다.
```javascript
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
```
```javascript
// router/index.js
import(/* webpackPrefetch: true */ 'vue 파일명')
```

- 일반적: 사용자의 접속 빈도가 높은 컴포넌트
- 지연로드: 사용자의 접속 빈도가 낮은 컴포넌트
- 지연로드 prefetch: 지연로드 컴포넌트 중에서 사용하는 리소스가 큰 컴포넌트

## Vue Base Code
```
<template>
  <div></div>
</template>
<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: '',
  components: {},
  setup() {
    onMounted(() => {
      // 컴포넌트 인스턴트가 마운트된 후 호출
      // 화면 내용이 랜더링된 후에 호출
      // tip. 화면 로딩 이후에 출력되어도 되는 데이터 또는 HTML 객체 부분을 획득하는 구간으로 사용
    })
    onUnmounted(() => {
      // 컴포넌트 인스턴트가 마운트 해제된 후 호출
    })
  },
  created() {
    // 컴포넌트 인스턴스가 생성된 후 호출
    // tip. 해당 컴포넌트에서 가장 먼저 보여줘야 하는 데이터를 획득하는 구간으로 사용
    // Composition API 에서 beforeCreate, created hook을 지원하지 않음
  }
}
</script>

```
- VSCode Vue Base Code Snippets 설정 방법: `Code > Preference > User Snippets > vue.json`

## `v-if` vs `v-show`
- `v-if`  
조건에 따라 element를 생성, 삭제한다. 화면에 보이지 않을 때 element 자체가 존재하지 않는다.  
toggle 발생 시 많은 자원을 사용한다. toggle 빈도가 높은 경우 `v-show`를 사용하는 것이 좋다.
- `v-show`  
조건에 상관 없이 element가 생성되고 조건에 따라 출력, 숨김 처리된다. 화면에 보이지 않을 때에도 element는 `display: none;` 형태로 존재한다.
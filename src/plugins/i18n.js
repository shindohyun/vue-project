export default {
  // options로 다국어 데이터를 받는다.
  install: (app, options) => {
    // 1. 컴포넌트에서 $translate로 접근하여 사용할 수 있다. 사용할 때마다 호출됨
    app.config.globalProperties.$translate = key => {
      const toks = key.split('.')

      /* reduce 함수 정리 */
      const initialValue = options // reduce 함수 두 번째 인자, callback의 최초 호출에서 첫 번째 인수에 제공하는 값, 인자를 사용하지 않으면 배열의 첫 번째 요소를 사용, 빈 배열에서는 필수
      const callback = function(accumulator, currentValue, currentIndex, array) { // reduce 함수 첫 번째 인자 '누산기', 배열 각 요소에 대해 실행할 함수
        /* 누산기 인자 정리 */
        console.log('currentIndex: ' + currentIndex) // 요소의 인덱스, initialValue 제공 시 0, 아니면  부터 시작
        console.log('array: ' + array) // reduce를 호출한 배열
        console.log('accumulator: ') // callback의 이전 반환 값, 첫 호출 시 initialValue 값이 있으면 그 값은 이미 누적되어 있다.
        if (typeof accumulator === 'object') {
          for (const [key, value] of Object.entries(accumulator)) {
            if (typeof value === 'object') {
              console.log(`\t\t${key}`)
              for (const [k, v] of Object.entries(value)) {
                console.log(`\t\t\t\t${k}: ${v}`)
              }
            } else {
              console.log(`\t\t${key}: ${value}`)
            }
          }
        } else {
          console.log('\t\t' + accumulator)
        }
        console.log('currentValue: ' + currentValue) // 현재 요소
        console.log('')

        if (accumulator) {
          return accumulator[currentValue]
        }
      }

      return toks.reduce(callback, initialValue)
    }

    // 2. 플러그인 설치 시에 한 번 provide 등록, 컴포넌트에서 inject를 이용하여 i18n 키로 얻은 후 사용할 수 있다.
    app.provide('i18n', options)
  }
}

<template>
  <modal-layout>
    <template v-slot:header>
      <h1>팝업 타이틀</h1>
    </template>
    <template #default>
      <p>팝업 컨텐츠1</p>
      <p>팝업 컨텐츠2</p>
    </template>
    <template #footer>
      <button type="button">닫기</button>
    </template>
  </modal-layout>
</template>
<script>
import ModalLayout from './SlotModalLayout.vue'

export default {
  components: {
    ModalLayout
  }
}
</script>

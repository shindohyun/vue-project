<template>
  <div class="about">
    <h1>This is an about page</h1>
    <use-modal-layout></use-modal-layout>
    <one-slot-modal>TITLE</one-slot-modal>
  </div>
</template>
<script>
import UseModalLayout from './SlotUseModalLayout.vue'
import OneSlotModal from './OneSlotModalLayout.vue'

export default {
  components: {
    UseModalLayout,
    OneSlotModal
  }
}
</script>

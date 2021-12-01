<template>
  <div>
    <h2>{{ $translate("ko.hi") }}</h2>
    <h2>{{ i18n.en.hi }}</h2>
  </div>
</template>
<script>
export default {
  inject: ['i18n']
}
</script>

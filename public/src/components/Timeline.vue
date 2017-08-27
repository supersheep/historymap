<template lang="pug">
  .timeline
    .items
      .item(v-for='item in items') {{item.name}}
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('map', ['items'])
}
</script>

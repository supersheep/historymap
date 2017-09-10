<template lang="pug">
  .home
    mapbox
    timeline
</template>

<script>
import Mapbox from '../components/Mapbox'
import Timeline from '../components/Timeline'
import { mapActions } from 'vuex'

export default {
  components: {
    Mapbox,
    Timeline
  },
  mounted () {
    this.load()
  },
  methods: {
    ...mapActions('map', ['load'])
  }
}
</script>

<style lang="less">

html, body, #app {
  width: 100%;
  height: 100%;
}

.mapbox {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>

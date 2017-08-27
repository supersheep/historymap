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
.mapbox {
  position: fixed;
  top: 0;
  bottom: 100px;
  width: 100%;
}
.timeline {
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
}
</style>

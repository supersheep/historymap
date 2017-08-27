<template lang="pug">
  .home
    mapbox
    timeline
</template>

<script>
import Mapbox from '../components/Mapbox'
import Timeline from '../components/Timeline'

export default {
  components: {
    Mapbox,
    Timeline
  }
}
</script>

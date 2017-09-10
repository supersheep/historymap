<template lang="pug">
  .mapbox#mapbox
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapState } from 'vuex'
export default {
  watch: {
    items () {
      if (this.markers) {
        this.markers.forEach((marker) => {
          marker.remove()
        })
      }
      var markers = []
      this.items.forEach((item) => {
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '40px';
        el.style.height = '40px';
        el.innerHTML = item.name
        if (item.location) {
          let marker = new mapboxgl.Marker(el)
            .setLngLat([
              item.location.longitude,
              item.location.latitude
            ])
            .addTo(this.map)
          markers.push(marker)
        }
      })
      this.markers = markers
    }
  },
  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGlhb25pdS1tb2JpbGUiLCJhIjoiY2l6bnhtcmU3MDNuajJxdGoxaGEwZnFjMiJ9.zOEvjNU_wyd-UGmk4HAtVw';
    this.map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      zoom: 1,
      attributionControl: false
    });
  },
  computed: mapState('map', ['items'])
}
</script>

<style>
.mapboxgl-ctrl-logo{
  display: none !important;
}
</style>

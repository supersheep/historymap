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
      this.items.forEach(() => {
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://placekitten.com/g/40/40/)';
        el.style.width = '40px';
        el.style.height = '40px';
        var marker = new mapboxgl.Marker(el)
          .setLngLat([
            -63.29223632812499,
            -18.28151823530889
          ])
          .addTo(this.map)
        markers.push(marker)
      })
      this.markers = markers
    }
  },
  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGlhb25pdS1tb2JpbGUiLCJhIjoiY2l6bnhtcmU3MDNuajJxdGoxaGEwZnFjMiJ9.zOEvjNU_wyd-UGmk4HAtVw';
    this.map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      zoom: 1
    });
  },
  computed: mapState('map', ['items'])
}
</script>

<template lang="pug">
  .mapbox#mapbox
</template>

<script>
// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapState } from 'vuex'
export default {
  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGlhb25pdS1tb2JpbGUiLCJhIjoiY2l6bnhtcmU3MDNuajJxdGoxaGEwZnFjMiJ9.zOEvjNU_wyd-UGmk4HAtVw';
    var map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      zoom: 1
    });
  },
  computed: mapState('map', ['items'])
}
</script>

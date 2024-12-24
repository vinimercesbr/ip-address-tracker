<template>
  <div id="map">
    <p hidden>
      {{base}}
    </p>
  </div>
</template>
<script>
import maplibre from 'maplibre-gl';
import {API_KEY} from './config.js';

export default {
  name: 'MapComponent',
  props: {
    base: {
      type: Array,
      required: true
    }
  },
  updated() {
    this.initMap();
  },
  methods:{
    initMap(){
      new maplibre.Map({
        container:'map', // Map container id
        style:`https://api.maptiler.com/maps/basic-v2/style.json?key=${API_KEY}`,
        center:this.base,//Coordinates of the center of the map
        zoom:10// Initial zoom level
      });
    }
  }
};
</script>
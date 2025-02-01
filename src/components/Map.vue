<template>
  <div id="map" class="w-screen h-screen sm:fixed lg:static touch-none">
  </div>
</template>
<script>
import maplibre from 'maplibre-gl';
import { API_KEY } from './config.js';

export default {
  name: 'Map',
  props: {
    base: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      map: null,
      mapCenter: this.base
    };
  },
  watch: {
    base(mapCenter) {
      if (this.map) {
        this.map.setCenter(mapCenter);
      } else {
        this.initMap(mapCenter);
      }
    }
  },
  updated() {
    this.initMap(this.mapCenter);
  },
  methods: {
    initMap(mapCenter) {
      if (!this.map) {
        this.createMap(mapCenter);
      }
    },
    createMap(center) {
      try {
        this.map = new maplibre.Map({
          container: 'map',
          style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${API_KEY.MAP}`,
          center: center,
          zoom: 10, 
          attributionControl:false
        });
      } catch (error) {
        this.handleMapError(error);
      }
    },
    handleMapError(error) {
      console.error('Error initializing map:', error);
    }
  }
};
</script>
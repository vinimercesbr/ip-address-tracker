<template>
  <div id="card" class="lg:absolute lg:bg-white rounded-xl lg:-mt-4  p-4 lg:min-h-[12%] lg:inline-flex">
    <div class="manager">
      <a>IP ADDRESS</a>
      <strong class="break-all">
        {{ ipData.ip }}
      </strong>
    </div>
    <div class="manager">
      <a class="border-custom">LOCATION</a>
      <strong class="border-custom">
        {{ ipData.city }}, 
        {{ ipData.region }}
        {{ ipData.cep}}
      </strong>
    </div>
    <div class="manager">
      <a class="border-custom">TIMEZONE</a>
      <strong class="border-custom">
        <p>UTC{{ ipData.timezone }}</p>
        
      </strong>
    </div>
    <div class="manager">
      <a class="border-custom">ISP</a>
      <strong class="border-custom">
        {{ ipData.isp }}
      </strong>
    </div>
  </div>
  <core :base="center"/>
</template>
<script>
import core from './Map.vue';
import { API_KEY} from './config.js';

export default {
  components: {
    core
  },
  props: {
    search: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ipData: {},
      center: [],
      currentSearch: this.search
    };
  },
  watch: {
    search(newSearch) {
      this.fetchIpData(newSearch);
    }
  },
  mounted(){
    this.fetchIpData(this.currentSearch);
  },
  methods: {
    async fetchIpData(newSearch) {
      try {
        let data = await this.getIpData(newSearch);
        this.center = [data.longitude, data.latitude];
        this.ipData = {
          ip: data.ip,
          timezone: data.time_zone.offset,
          cep: data.zipcode,
          isp: data.isp,
          city: data.city,
          region: data.state_prov
        };
      } catch (error) {
        this.handleFetchError(error);
      }
    },
    async getIpData(search) {
      let response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY.IP}&ip=${search}&lang=en`);
      return await response.json();
    },
    handleFetchError(error) {
      console.error('Error fetching IP data: ', error);
    }
  }
};
</script>
<style>

.manager{
  @apply  sm:flex sm:flex-col sm:p-2 sm:items-center;
}/*
.manager a{
  @apply
}
.manager strong{
  @apply
}*/
</style>
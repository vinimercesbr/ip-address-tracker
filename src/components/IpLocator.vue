<template>
  <div id="card">
    <div class="manager">
      <a>IP ADDRESS</a>
      <strong>
        {{ ipData.ip }}
      </strong>
    </div>
    <div class="manager">
      <a>LOCATION</a>
      <strong>
        {{ ipData.city }}, 
        {{ ipData.region }}
        {{ ipData.cep}}
      </strong>
    </div>
    <div class="manager">
      <a>TIMEZONE</a>
      <strong>
        {{ ipData.timezone }}
      </strong>
    </div>
    <div class="manager">
      <a>ISP</a>
      <strong >
        {{ ipData.isp }}
      </strong>
    </div>
  </div>
  <core :base="center"/>
</template>

<script>
import core from './Map.vue';


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
        this.center = [data.lon, data.lat];
        this.ipData = {
          ip: data.query,
          timezone: data.timezone,
          cep: data.zip,
          isp: data.isp,
          city: data.city,
          region: data.region
        };
      } catch (error) {
        this.handleFetchError(error);
      }
    },
    async getIpData(search) {
      let response = await fetch(`http://ip-api.com/json/${search}`);
      return await response.json();
    },
    handleFetchError(error) {
      console.error('Error fetching IP data: ', error);
    }
  }
};
</script>
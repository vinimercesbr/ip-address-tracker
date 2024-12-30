<template>
  <div id="card" class="m-8 ml-3 -mr-2 -mt-9 min-[375px]:flex absolute p-1 bg-white  rounded-xl items-center justify-items-center font-semibold text-center max-h-[60vh]  min-w-[80%] touch-none">
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
<style>
  
    .manager {
        @apply flex text-center justify-items-center p-3 m-1 text-xs flex-col;
    };

    .manager strong {
        @apply pt-1 text-center font-[650] break-all text-base;
    };

    .manager a {
        @apply text-sm -ml-1 pt-1 text-[11px] whitespace-pre text-[350] text-[#969696];
    };
</style>
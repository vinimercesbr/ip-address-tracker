<template>
  <div id="banner" class="items-center text-center touch-none p-6 max-[375px]:p-3 m-0 min-[1440px]:h-full min-[1440px]:w-full  bg-[url('/pattern-bg-desktop.png')] max-[375px]:bg-[url('/pattern-bg-mobile.png')]">
    <h1 class="text-white p-3 max-[375px]:p-5 text-center font-semibold text-[25px] touch-none">IP Address Tracker</h1>
    <form class="search-form text-center flex  min-[1440px]:w-[70%] min-[1440px]:h-[25%] pt-0 ml-2 min-[1440px]:m-2 min-[1440px]:inline-flex mt-2 p-5 mb-5" @submit.prevent="submitForm">
      <input type="text" class="search-form__box p-2 rounded-l-xl focus:outline-none min-w-[65%] inline-flex h-[55px] min-[1440px]:w-full -ml-2 mb-5 min-[1440px]:m-4 touch-none;" v-model="ipInput" placeholder="Search for any IP address or domain">
      <button class="search-form__button rounded-r-xl stroke-2 mr-1 h-[55px] p-4 bg-black" type="submit">
        <img src="/icon-arrow.svg" alt="enviar">
      </button>
    </form>
  </div>
  <DisplayComponent :search="ip"/>
</template>

<script>
import DisplayComponent from './IpLocator.vue';

export default {
  components: {
    DisplayComponent
  },
  data() {
    return {
      ipInput: '',
      ip: ''
    };
  },
  methods: {
    submitForm() {
      if (this.isValidIP(this.ipInput)) {
        this.ip = this.ipInput;
      } else {
        this.ip = '';
        alert('Invalid IP!');
      }
      this.resetForm();
    },
    isValidIP(ip) {
      const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return regex.test(ip);
    },
    resetForm() {
      this.ipInput = '';
    }
  }
};
</script>
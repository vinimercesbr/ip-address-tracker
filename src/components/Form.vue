<template>
  <div id="banner" class="bg-cover text-center -mt-2 bg-[url('/pattern-bg-mobile.png')] lg:bg-[url('/pattern-bg-desktop.png')]">
    <h1 class="text-white p-3 mt-2 sm:p-5 text-center  font-semibold text-[25px] touch-none">IP Address Tracker</h1>
    <form class="search-form text-center flex min-w-[70%] lg:h-[25%] pt-0 ml-2 lg:m-2 sm:inline-flex mt-2 p-5 mb-5" @submit.prevent="submitForm">
      <input type="text" class="search-form__box p-2 rounded-l-xl focus:outline-none max-w-[65%] min-w-[74%] inline-flex h-[55px] lg:w-full ml-1 mb-5 lg:m-4 touch-none;" v-model="ipInput" placeholder="Search for any IP address or domain">
      <button class="search-form__button rounded-r-xl stroke-2 -mr-7 focus:outline-none lg:-ml-4  lg:mt-4 h-[55px] p-4 bg-black" type="submit">
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
<!--
const dnsChecker=/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(?:\/.*)?$/;-->
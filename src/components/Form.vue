<template>
  <div class="banner">
    <h1>IP Address Tracker</h1>
    <form class="search-form" @submit.prevent="submitForm">
      <input type="text" class="search-form__box" v-model="ipInput" placeholder="Search for any IP address or domain">
      <button class="search-form__button" type="submit">
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
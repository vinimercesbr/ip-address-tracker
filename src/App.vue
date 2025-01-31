<script>
import Form from './components/Form.vue';
import IpLocator from './components/IpLocator.vue';
import Map from './components/Map.vue';

export default{
  name: 'App',
  components: {
    Form,
    IpLocator,
    Map
  }
};
</script>
<template>
  <div id="app" class="relative p-0 m-0 touch-none">
    <div id="banner">
      <Form/>
    </div>
    <div id="card">
    </div>
    <div id="map">
    </div>
  </div>
</template>
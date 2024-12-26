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
  <div id="app">
    <div id="banner">
      <Form/>
    </div>
    <div id="card">
      <IpLocator/>
    </div>
    <div id="map">
      <Map/>
    </div>
  </div>
</template>
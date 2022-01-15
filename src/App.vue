<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import {
  mapActions,
} from 'vuex';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  methods: {
    ...mapActions([
      'modifyTickets',
      'saveComments',
    ]),
  },
  created() {
    this.modifyTickets();
    this.saveComments();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

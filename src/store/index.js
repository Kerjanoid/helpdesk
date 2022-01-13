import Vue from 'vue';
import Vuex from 'vuex';
import ticketModule from '@/store/ticketModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post: ticketModule,
  },
});

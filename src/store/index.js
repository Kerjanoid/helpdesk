import Vue from 'vue';
import Vuex from 'vuex';
import ticketModule from '@/store/ticketModule';
import commentsModule from '@/store/commentsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ticket: ticketModule,
    comments: commentsModule,
  },
});

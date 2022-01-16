import Vue from 'vue';
import Vuex from 'vuex';
import ticketModule from '@/store/ticketModule';
import newTicketModule from '@/store/newTicketModule';
import commentsModule from '@/store/commentsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ticket: ticketModule,
    newTicket: newTicketModule,
    comments: commentsModule,
  },
});

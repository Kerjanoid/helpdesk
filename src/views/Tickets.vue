<template>
  <div>
    <b-container fluid="md">
      <h2 class="tickets__header">Tickets</h2>
      <b-form-input
        class="search"
        placeholder="Enter search text"
        :model-value="searchQuery"
        @update="setSearchQuery"/>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="All" active>
            <Ticket
              v-for="ticket in searchedTickets"
              :ticket="ticket"
              :key="ticket.id"/>
          </b-tab>
          <b-tab title="Opened">
            <Ticket
              v-for="ticket in openedTickets"
              :ticket="ticket"
              :key="ticket.id"/>
          </b-tab>
          <b-tab title="Closed">
            <Ticket
              v-for="ticket in closedTickets"
              :ticket="ticket"
              :key="ticket.id"/>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} from 'vuex';
import Ticket from '@/components/Ticket.vue';

export default {
  name: 'Tickets',
  components: {
    Ticket,
  },
  methods: {
    ...mapMutations([
      'setSearchQuery',
    ]),
    ...mapActions([
      'modifyTickets',
    ]),
  },
  computed: {
    ...mapState({
      tickets: (state) => state.post.tickets,
      searchQuery: (state) => state.post.searchQuery,
    }),
    ...mapGetters([
      'searchedTickets',
      'openedTickets',
      'closedTickets',
    ]),
  },
  mounted() {
    this.modifyTickets();
  },
};
</script>

<style scoped>
.tickets__header {
  margin: 30px 0;
  font-weight: 600;
}
.search {
  margin-bottom: 20px;
}
</style>

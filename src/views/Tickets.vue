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
              :key="ticket.id"
            />
          </b-tab>
          <b-tab title="Opened">
            <Ticket
              v-for="ticket in openedTickets"
              :ticket="ticket"
              :key="ticket.id"
            />
          </b-tab>
          <b-tab title="Closed">
            <Ticket
              v-for="ticket in closedTickets"
              :ticket="ticket"
              :key="ticket.id"
            />
          </b-tab>
          <div class="pagination">
            <button class="pagination__button" @click="clg">12</button>
            <button class="pagination__button" @click="clg">12</button>
            <button class="pagination__button" @click="clg">12</button>
            <button class="pagination__button" @click="clg">12</button>
          </div>
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
  // mapActions,
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
    clg() {
      console.log('object');
    },
    // ...mapActions([
    //   'modifyTickets',
    // ]),
  },
  computed: {
    ...mapState({
      tickets: (state) => state.ticket.tickets,
      searchQuery: (state) => state.ticket.searchQuery,
    }),
    ...mapGetters([
      'searchedTickets',
      'openedTickets',
      'closedTickets',
    ]),
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

.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.pagination__button {
  width: 40px;
  height: 40px;
}
</style>

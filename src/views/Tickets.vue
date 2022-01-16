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
          <div class="pagination" v-if="totalPages > 1">
            <button
              class="pagination__button"
              :class="{
                'pagination__button_current-page': currentPage === page
              }"
              @click="changePage(page)"
              v-for="page of totalPages"
              :key="page"
            >{{ page }}</button>
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
      'setCurrentPage',
    ]),
    changePage(pageNumber) {
      this.setCurrentPage(pageNumber);
      this.modifyTickets();
    },
    ...mapActions([
      'modifyTickets',
    ]),
  },
  computed: {
    ...mapState({
      tickets: (state) => state.ticket.tickets,
      searchQuery: (state) => state.ticket.searchQuery,
      totalPages: (state) => state.ticket.totalPages,
      currentPage: (state) => state.ticket.currentPage,
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
  margin-right: 2px;
  width: 35px;
  height: 35px;
  border: 1px solid rgba(0, 80, 150, .8);
  color: rgba(0, 40, 125, .7);
  background-color: white;
  border-radius: 25%;
  font-weight: 600;
  transition: ease .3s;
  outline: none;
}

.pagination__button:hover {
  opacity: .7;
}

.pagination__button_current-page {
  border: 2px solid rgba(0, 80, 150, .8);
}
</style>

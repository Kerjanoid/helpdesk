<template>
  <div>
    <b-container fluid="md">
      <h2 class="tickets__header">Tickets</h2>
      <b-form-input class="search" placeholder="Enter search text"></b-form-input>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="All" active>
            <Ticket
              v-for="ticket in tickets"
              :ticket="ticket"
              :key="ticket.id"/>
          </b-tab>
          <b-tab title="Opened">
            <Ticket
              v-for="ticket in tickets.filter(item => item.isOpened)"
              :ticket="ticket"
              :key="ticket.id"/>
          </b-tab>
          <b-tab title="Closed">
            <Ticket
              v-for="ticket in tickets.filter(item => !item.isOpened)"
              :ticket="ticket"
              :key="ticket.id"/>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Ticket from '@/components/Ticket.vue';

export default {
  name: 'Tickets',
  components: {
    Ticket,
  },
  data() {
    return {
      tickets: [],
    };
  },
  methods: {
    async getTickets() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
          return response.json();
        } return Promise.reject(new Error(`Error ${response.status}.`));
      } catch (error) {
        return error;
      }
    },
  },
  mounted() {
    this.getTickets().then((res) => {
      // eslint-disable-next-line array-callback-return
      res.map((item) => {
        const random = Math.random() < 0.3;
        // eslint-disable-next-line no-param-reassign
        item.isOpened = random;
      });
      this.tickets = res;
    // eslint-disable-next-line no-console
    }).catch((err) => console.log(err));
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

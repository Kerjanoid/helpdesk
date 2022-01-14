<template>
  <b-container fluid="md">
    <div class="ticket__wrapper">
      <h2 class="ticket__title">{{ foundTicket.title }}</h2>
      <h4 v-if="foundTicket.isOpened" class="ticket__subtitle">Ticket is opened</h4>
      <h4 v-else class="ticket__subtitle ticket__subtitle_closed">Ticket is closed</h4>
      <p class="ticket__text">{{ foundTicket.body }}</p>
    </div>

    <b-list-group>
      <h4 class="comments__title">Comments:</h4>
      <b-list-group-item
        class="text-align"
        v-for="comment in comments"
        :ticket="comment"
        :key="comment.id">
        {{ comment.body }}
      </b-list-group-item>
    </b-list-group>

    <CommentForm />
  </b-container>
</template>

<script>
import {
  mapState,
  mapGetters,
  // mapMutations,
  mapActions,
} from 'vuex';
import CommentForm from '@/components/CommentForm.vue';

export default {
  name: 'ViewTicket',
  components: {
    CommentForm,
  },
  methods: {
    // ...mapMutations([
    //   'setSearchQuery',
    // ]),
    ...mapActions([
      'saveComments',
    ]),
    ticket() {
      return this.tickets.find((i) => i.id === 1);
    },
  },
  computed: {
    foundTicket() {
      return this.tickets.find((i) => i.id === 1);
    },
    ...mapState({
      comments: (state) => state.comments.comments,
      tickets: (state) => state.ticket.tickets,
    }),
    ...mapGetters([
      'searchedTickets',
      'openedTickets',
      'closedTickets',
    ]),
  },
  mounted() {
    this.saveComments();
  },
};
</script>

<style scoped>
.ticket__wrapper {
  margin: 10px 0;
  padding: 15px 5px;
  border: 2px solid gray;
  border-radius: 10px;
}

.ticket__title {
  font-weight: 600;
  font-size: 26px;
  margin: 10px 5%;
  text-transform: uppercase;
}

.ticket__subtitle {
  margin: 10px 0;
  color: rgba(23, 102, 221, 0.856);
}

.ticket__subtitle_closed {
  color: rgba(187, 0, 0, 0.856);
}

.ticket__text {
  margin: 20px 10px;
  font-size: 22px;
}

.comments__title {
  margin: 5px 10px;
  font-size: 22px;
  text-align: left;
}

.text-align {
  text-align: left;
}

</style>

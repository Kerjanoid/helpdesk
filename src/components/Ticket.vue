<template>
  <b-button
    block
    variant="success"
    v-if="ticket.isOpened"
    @click="showTicket"
  >
    {{ ticket.title }}
  </b-button>
  <b-button
    block
    variant="outline-secondary"
    v-else
    @click="showTicket"
  >
    {{ ticket.title }}
  </b-button>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showTicket() {
      this.$router.push({ path: `/tickets/${this.ticket.id}` });
    },
  },
};
</script>

<style scoped>

</style>

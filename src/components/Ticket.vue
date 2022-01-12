<template>
  <div>
    <b-alert
      show
      variant="success"
      v-if="ticket.isOpened"
    >
      {{ ticket.title }}
    </b-alert>
    <b-alert
      show
      variant="secondary"
      v-else
    >
      {{ ticket.title }}
    </b-alert>
  </div>
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
  // data() {
  //   return {
  //       title: '',
  //     },
  //   };
  // },
  // methods: {
  //   },
  // },
};
</script>

<style scoped>

</style>

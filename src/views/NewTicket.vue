<template>
  <div>
    <b-container fluid="md">
      <h2 class="new-ticket__header">Please fill out the form:</h2>
      <Form />
    </b-container>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
  name: 'NewTicket',
  components: {
    Form,
  },
  methods: {

  },
};
</script>

<style scoped>
.new-ticket__header {
  margin: 30px 0;
  font-weight: 600;
}
</style>

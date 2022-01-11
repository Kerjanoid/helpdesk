<template>
  <div>
    <b-container fluid="md">
      <h2 class="tickets__header">Tickets</h2>
      <b-form-input class="search" placeholder="Enter search text"></b-form-input>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="All" active>
            <b-alert
              show
              variant="success"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf1
            </b-alert>
            <b-alert
              show
              variant="success"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf2
            </b-alert>
            <b-alert
              show
              variant="success"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf3
            </b-alert>
            <b-alert
              show
              variant="secondary"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf1
            </b-alert>
            <b-alert
              show
              variant="secondary"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf2
            </b-alert>
            <b-alert
              show
              variant="secondary"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf3
            </b-alert>
          </b-tab>
          <b-tab title="Opened">
            <b-alert
              show
              variant="success"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf1
            </b-alert>
            <b-alert
              show
              variant="success"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf2
            </b-alert>
            <b-alert
              show
              variant="success"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf3
            </b-alert>
          </b-tab>
          <b-tab title="Closed">
            <b-alert
              show
              variant="secondary"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf1
            </b-alert>
            <b-alert
              show
              variant="secondary"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf2
            </b-alert>
            <b-alert
              show
              variant="secondary"
            >
              Lorem ipsum dolor sit amet, consectetur aa avvdvadva asaf3
            </b-alert>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
// import Form from '@/components/Form.vue';

export default {
  name: 'Tickets',
  components: {

  },
  methods: {

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

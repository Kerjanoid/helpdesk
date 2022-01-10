<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container fluid="md">
        <b-navbar-brand href="/tickets">HelpDesk</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="position-right">
            <b-nav-item href="/">New ticket</b-nav-item>
            <b-nav-item href="/tickets">My tickets</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.position-right {
  margin-left: auto;
}
</style>

<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container fluid="md">
        <b-navbar-brand>HelpDesk</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="position-right">
            <b-nav-item
              @click="changePath('/')"
              :active="checkPath('/')">New ticket</b-nav-item>
            <b-nav-item
              @click="changePath('/tickets')"
              :active="checkPath('/tickets')">My tickets</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    changePath(path) {
      return this.$router.push(path).catch(() => { });
    },
    checkPath(path) {
      return (this.$route.path === path);
    },
  },
};
</script>

<style>
.position-right {
  margin-left: auto;
}
</style>

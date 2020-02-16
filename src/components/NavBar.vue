<template>
  <b-navbar
    type="red"
    variant="red"
  >
    <b-navbar-nav>
      <b-nav-item>
        <router-link
          class="nav-link"
          to="/"
        >
          Home
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link
          class="nav-link"
          to="favoris"
        >
          Favoris
        </router-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
</style>
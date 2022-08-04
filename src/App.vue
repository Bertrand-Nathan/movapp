<template>
<!-- nos routes se déclare ici  -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/search">Search</router-link>
  </nav>
  <router-view/>
</template>
<script>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  background-color: #2c3e50;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: rgb(255, 199, 1);
}

</style>

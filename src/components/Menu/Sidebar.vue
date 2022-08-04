<template>
  <router-link class="ul-genres" :to="{ name: 'genres', params: { movieortv: movieortv, id: id } }">
    <li> {{ name }} </li>
  </router-link>
</template>
<script>

export default {
  name: 'SideBar',
  props: ['id', 'name', 'movieortv']
}
</script>

<style>
  li {
    width: 150px;
    list-style: none;
    padding: 10px;
    background-color: grey;
    color: white;
  }
  li:hover {
    background-color: rgb(68, 68, 68);
  }
</style>

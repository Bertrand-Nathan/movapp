<template>
<!-- props variables des composents -->
  <router-link :to="{ name: 'movie', params: { id: id } }">
    <div class="hello">
        <h1>{{ title }}</h1>
        <img :src="'https://image.tmdb.org/t/p/w500' + poster_path" alt="lol" >
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ListByGenre',
  props: ['id', 'title', 'poster_path']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

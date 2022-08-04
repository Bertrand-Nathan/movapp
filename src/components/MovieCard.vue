<template>
  <div class="hello">
    <h1>{{ id }}</h1>
    <h1>{{ title }}</h1>
    <p>{{ overview }}</p>
    <img :src="'https://image.tmdb.org/t/p/w500' + poster_path" alt="lol" >
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['id', 'title', 'overview', 'poster_path']
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

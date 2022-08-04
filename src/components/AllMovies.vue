<template>
<!-- props variables des composents -->
  <div v-if="title" class="card">
    <router-link class="card-movie" :to="{ name: 'movie', params: { id: id } }">
      <div>
          <h2>{{ title }}</h2>
          <img :src="'https://image.tmdb.org/t/p/w500' + poster_path" alt="lol" >
      </div>
    </router-link>
  </div>
  <div v-else class="card">
    <router-link :to="{ name: 'tv', params: { id: id } }">
      <div>
          <h1>{{ name }}</h1>
          <img :src="'https://image.tmdb.org/t/p/w500' + poster_path" alt="lol" >
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AllMovies',
  props: ['id', 'title', 'overview', 'poster_path', 'name']
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
.card {
  width: 20%;
  display: flex;
  justify-content: center;
  background-color: rgb(77, 77, 77);
  border: solid 1px rgb(90, 3, 2);
  margin: 5px;
  box-shadow: 5px 5px 10px -2px black;
  color: aliceblue;
}
.card > a > div > img {
  width: 100%;
}
</style>

<template>
  <div class="home">
    <input placeholder="Rechercher votre film" @input="search = $event.target.value" />
    <div class="allmovies" v-if="data !== null">
      <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :poster_path="item.poster_path"></AllMovies>
    </div>
  </div>
</template>

<script>
import AllMovies from '@/components/AllMovies.vue'
import ApiService from '@/service/ApiServices.js'

const apiService = new ApiService()

export default {
  name: 'SearchView',
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      search: 'code'
    }
  },
  BeforeMount () {
    this.searchMovies(this.search)
  },
  // regarde se que l'utilisateur marque
  watch: {
    search () {
      this.searchMovies(this.search)
      console.log(this.data)
    }
  },
  methods: {
    async searchMovies (search) {
      const res = await apiService.getSearch(search)
      const movies = await res.json()
      this.data = movies.results
    }
  }
}

</script>

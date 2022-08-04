<template>
  <div class="home">
    <AllMovies v-for="item in data_mg" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :poster_path="item.poster_path"></AllMovies>
  </div>
</template>

<script>
import AllMovies from '@/components/AllMovies.vue'
import ApiService from '@/service/ApiServices.js'

const apiService = new ApiService()

export default {
  name: 'ListByGenreView',
  components: {
    AllMovies
  },
  data () {
    return {
      data_mg: null,
      id: this.$route.params.id
    }
  },
  mounted () {
    if (this.$route.params.movieortv === 'movie') {
      this.listMovieByGenres(this.id)
    } else {
      this.listTvByGenres(this.id)
    }
  },
  methods: {
    async listMovieByGenres (id) {
      const res = await apiService.getMovieByGenre(id)
      const movieGenre = await res.json()
      this.data_mg = movieGenre.results
      console.log(this.data_mg)
    },
    async listTvByGenres (id) {
      const res = await apiService.getTvByGenre(id)
      const movieGenre = await res.json()
      this.data_mg = movieGenre.results
      console.log(this.data_mg)
    }
  }
}

</script>

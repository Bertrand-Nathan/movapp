<template>
  <div class="content-info">
    <img :src="'https://image.tmdb.org/t/p/w500' + data.poster_path" alt="lol" >
    <div class="info">
      <h1>{{ data.name }}</h1>
      <div>
        <p>{{ data.overview }}</p>
        <p>{{ data.release_date}}</p>
        <p>{{ data.vote_average}} /10</p>
      </div>
    </div>
  </div>
</template>

<script>
// import MovieCard from '@/components/MovieCard.vue'
import ApiService from '@/service/ApiServices.js'

const apiService = new ApiService()

export default {
  name: 'infoView',
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.infoTv(this.id)
  },
  methods: {
    async infoTv (id) {
      const res = await apiService.getTv(id)
      const movie = await res.json()
      this.data = movie
      console.log(res)
    }
  }
}

</script>
<style>
  .content-info{
    display: flex;
  }
  .info {
    display: column;
    padding: 10px;
    background-color: rgb(233, 232, 229);
  }
  .info > p, .info > h1, .info > div {
    width: 70%;
    margin: auto;
  }
  .info > p {
    margin-bottom: 10px;
  }
  .info > h1 {
    background-color: rgb(15, 22, 28);
    border-radius: 25px;
    margin-bottom: 20px;
    color: antiquewhite;
  }
  .info > div {
    background-color: rgb(233, 230, 229);
    box-shadow: black 12px 8px 30px -10px;
  }
</style>

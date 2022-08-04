<template>
  <Burger v-on:click="showListGenre" />
  <div id="content-btn">
    <button v-on:click="Switch" value="false" id="btn">Oui</button>
  </div>
  <!-- mettre mon écouteur Switch ici !!!! -->
  <div class="home">
    <!-- v-for crée une boucle -->
    <ul id="ul-sideBar">
      <Sidebar v-for="item in data_g" :key="item.id" :name="item.name" :id="item.id" :movieortv="genre_type"></Sidebar>
    </ul>
      <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :name="item.name" :overview="item.overview" :poster_path="item.poster_path"></AllMovies>
  </div>
</template>

<script>

// @ is an alias to /src
import AllMovies from '@/components/AllMovies.vue'
import ApiService from '@/service/ApiServices.js'
import Burger from '@/components/Menu/Burger.vue'
import Sidebar from '@/components/Menu/Sidebar.vue'

const apiService = new ApiService()

// export du composents
export default {
  name: 'HomeView',
  components: {
    AllMovies,
    Burger,
    Sidebar
  },
  data () {
    return {
      data: null,
      page: 1,
      data_g: null,
      genre_type: 'movie'
    }
  },
  // hook mounted au montage du composent il appel la fonction
  mounted () {
    this.AllMovies(this.page, this.btn)
    this.listGenres()
    this.Switch(this.btn)
  },
  methods: {
    // peu pas utilisé await sans l'async
    async AllMovies (page) {
      const btn = document.getElementById('btn').value
      const res = await apiService.getMovies(page, btn)
      const movies = await res.json()
      this.data = movies.results
      console.log(this.data)
    },
    async listGenres () {
      const btn = document.getElementById('btn').value
      const res = await apiService.getGenres(btn)
      const genres = await res.json()
      this.data_g = genres.genres
    },
    Switch () {
      const btn = document.getElementById('btn')
      document.getElementById('content-btn').classList.toggle('active')
      console.log(this.genre_type)
      if (btn.value === 'true') {
        btn.value = 'false'
        btn.innerHTML = 'Tv'
        this.AllMovies()
        this.listGenres()
        this.genre_type = 'tv'
      } else {
        btn.value = 'true'
        btn.innerHTML = 'Film'
        this.AllMovies()
        this.listGenres()
        this.genre_type = 'movie'
      }
    },
    showListGenre () {
      const listGenres = document.getElementById('ul-sideBar')
      listGenres.classList.toggle('show')
    }
  }
}
</script>
<style>
  .home {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .home > a {
    text-decoration: none;
  }
  .menu {
    width: 100%;
  }
  #content-btn {
    width: 100px;
    height: 40px;
    margin: auto;
    position: relative;
    background-color: rgb(169, 223, 242);
    border-radius: 15px;
    transition: ease 1s;
    box-shadow: 0px 2px 10px -2px black;
  }
  #content-btn.active {
    background-color: rgb(109, 0, 38);
  }
  #content-btn > button {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    left: -5px;
    transition: ease 1s;
    background-color: rgb(109, 0, 38);
    color: white;
    border: none;
    box-shadow: 0px 0px 9px -3px white;
  }
  #content-btn.active > button {
    left: 50px;
    transform: rotateZ(-360deg);
    background-color: rgb(169, 223, 242);
    color: black;
  }
  #ul-sideBar {
    width: 100px;
    position: absolute;
    left: -40px; top: 50px;
    display: none;
  }
  #ul-sideBar > a {
    text-decoration: none;
  }
  .show{
    display: block !important;
  }
</style>

<template>
  <div class="menu">
    <!-- v-for crée une boucle -->
    <Burger />
    <div id="content-btn">
      <button v-on:click="Switch" value="false" id="btn">Oui</button>
    </div>
    <ul class="ul-sideBar">
      <Sidebar v-for="item in data_g" :key="item.id" :name="item.name" :id="item.id"></Sidebar>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiService from '@/service/ApiServices.js'
import Burger from '@/components/Menu/Burger.vue'
import Sidebar from '@/components/Menu/Sidebar.vue'

const apiService = new ApiService()
// export du composents
export default {
  name: 'MenuView',
  components: {
    Burger,
    Sidebar
  },
  data () {
    return {
      data: null,
      page: 1,
      data_g: null
    }
  },
  // hook mounted au montage du composent il appel la fonction
  mounted () {
    this.listGenres()
    this.Switch2(this.btn)
  },
  methods: {
    // peu pas utilisé await sans l'async
    async listGenres () {
      const btn = document.getElementById('btn').value
      const res = await apiService.getGenres(btn)
      const genres = await res.json()
      this.data_g = genres.genres
    },
    async Switch () {
      const btn = document.getElementById('btn')
      document.getElementById('content-btn').classList.toggle('active')
      if (btn.value === 'true') {
        btn.value = 'false'
        btn.innerHTML = 'Film'
        this.AllMovies()
        this.listGenres()
      } else {
        btn.value = 'true'
        btn.innerHTML = 'Tv'
        this.AllMovies()
        this.listGenres()
      }
    },
    Switch2 () {
      this.$root.$emit('HomeView.vue')
    }
  }
}
</script>
<style>
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
  .ul-sideBar {
    width: 100px;
    position: absolute;
    left: -40px; top: 50px;
  }
  .ul-sideBar > a {
    text-decoration: none;
  }
</style>

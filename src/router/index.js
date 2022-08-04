import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import SearchView from '../views/SearchView.vue'
import InfoView from '../views/InfoView.vue'
import ListByGenresView from '../views/ListByGenreView.vue'
import InfoTv from '../views/InfoTv.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: InfoView
  },
  {
    path: '/tv/:id',
    name: 'tv',
    component: InfoTv
  },
  {
    path: '/genre/:movieortv/:id',
    name: 'genres',
    component: ListByGenresView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

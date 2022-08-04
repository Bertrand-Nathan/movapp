export default class ApiService {
  getMovies (page, btn) {
    // on utilise les `` pour les variables
    if (btn === 'true') {
      return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9387500ea70ccb66e78501523ae83273&page=${page}`)
    } else {
      return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=9387500ea70ccb66e78501523ae83273&language=fr-FR&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
    }
  }

  getSearch (search) {
    return fetch(`https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=9387500ea70ccb66e78501523ae83273&query=${search}&include_adult=false`)
  }

  getMovie (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9387500ea70ccb66e78501523ae83273&language=fr-FR`)
  }

  getTv (id) {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=9387500ea70ccb66e78501523ae83273&language=fr-Fr`)
  }

  getGenres (btn) {
    if (btn === 'true') {
      return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=9387500ea70ccb66e78501523ae83273&language=fr-FR')
    } else {
      return fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=9387500ea70ccb66e78501523ae83273&language=fr-FR')
    }
  }

  getMovieByGenre (id) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9387500ea70ccb66e78501523ae83273&language=fr-FR&include_adult=false&include_video=false&page=1&with_genres=${id}`)
  }

  getTvByGenre (id) {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=9387500ea70ccb66e78501523ae83273&language=fr-FR&include_adult=false&include_video=false&page=1&with_genres=${id}`)
  }
}

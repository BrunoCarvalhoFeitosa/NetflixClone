
const API_KEY = '1eb0d1f6f6696d3219f416585fa5dcc5';
const API_BASE = 'https://api.themoviedb.org/3';

const fetchSearch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// eslint-disable-next-line
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await fetchSearch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await fetchSearch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await fetchSearch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await fetchSearch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await fetchSearch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await fetchSearch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await fetchSearch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ];
  },
  
  getMovieSpecs: async (movieId, type) => {
    let specs = {};

    if(movieId) {
      switch(type) {
        case 'movie': 
          specs = await fetchSearch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;
        case 'tv':
          specs = await fetchSearch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;
        default:
        break;
      }
    }

    return specs;
  },

  getMovies: async (tv_id) => {
      let video = await fetchSearch(`/tv/${tv_id}/videos?&language=pt-BR&&api_key=${API_KEY}`);
      
      return video;
  },
}
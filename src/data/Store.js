import { reactive } from 'vue';
export const store = reactive({
    Url: {
        base: 'https://api.themoviedb.org/3',
        imgThumb: 'https://image.tmdb.org/t/p/w342/',
    },
    endPoint: {
        popular: '/trending/movie/day?',
        movie: '/search/movie',
        series: '/search/tv'
    },
    key: 'api_key=2010639fc959155bb3be029b450b5c82',
    showTrend: [],
    movies: [],
    series: [],
    params: {
        api_key: '2010639fc959155bb3be029b450b5c82',//inserire la mia key
        query: 'a'
    },

})

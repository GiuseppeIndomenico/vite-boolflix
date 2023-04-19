import { reactive } from 'vue';

export const store = reactive({
    Url: {
        base: 'https://api.themoviedb.org/3',
        imgThumb: 'https://image.tmdb.org/t/p/w500/',
    },
    endPoint: {
        popular: '/trending/all/day?'
    },
    key: 'api_key=2010639fc959155bb3be029b450b5c82',
    movieTrend: [],
})

//Key API: 2010639fc959155bb3be029b450b5c82

//

//https://api.themoviedb.org/3/movie/550?api_key=2010639fc959155bb3be029b450b5c82
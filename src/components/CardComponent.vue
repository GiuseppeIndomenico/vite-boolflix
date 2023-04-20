<template>
    <div class="row">
        <div class="col">card</div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/Store';
export default {
    data() {
        return {
            store,

        }
    },
    methods: {
        GetPopular() {
            axios.get(store.Url.base + store.endPoint.popular + store.key).then(res => {
                //console.log(res.data.results);
                const infos = res.data.results;

                for (let i = 0; i < infos.length; i++) {
                    const element = infos[i];
                    const infoMovies = {
                        id: element.id,
                        title: element.title,
                        name:element.name,
                        largeImg: element.backdrop_path,
                        posterImg: element.poster_path,
                        overview: element.overview,
                    };
                    store.movieTrend.push(infoMovies);
                };
                console.log(store.movieTrend);
            })
        },


    },
    mounted() {
        this.GetPopular()
    }
    
    
}
</script>

<style lang="scss" scoped></style>
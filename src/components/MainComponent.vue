<template>
    <main class="container">
        <h1 class="my-4"> Movies</h1>
        <div class="row">

            <CardComponent v-for="item in store.movies" :key="item.id" :title="item.title" :vote="item.vote_average"
                :release="item.release_date" :language="item.original_language" :image="item.poster_path" />
        </div>

        <h1 class="my-4"> tv Series</h1>
        <div class="row">

            <CardComponent v-for="item in store.series" :key="item.id" :title="item.name" :vote="item.vote_average"
                :release="item.release_date" :language="item.original_language" :image="item.poster_path" />
        </div>

    </main>
</template>

<script>
import { store } from "../data/Store";
import axios from 'axios'
import CardComponent from "./CardComponent.vue";
export default {
    components: {
        CardComponent
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getPopular() {
            const urlTrend = store.Url.base + store.key;
            axios.get(urlTrend).then(res => {
                store.showTrend = res.data.results;
                console.log(store.showTrend);
            })
        },//da rivedere
        getMovies() {
            const urlMovies = store.Url.base + store.endPoint.movie;
            const options = {
                params: store.params
            };
            axios.get(urlMovies, options).then((res) => {
                store.movies = res.data.results;
                console.log(store.movies);

            })
        },
        getSeries() {
            const urlSeries = store.Url.base + store.endPoint.series;
            const options = {
                params: store.params
            };
            axios.get(urlSeries, options).then((res) => {
                store.series = res.data.results;
                console.log(store.series);

            })
        },

        getShow() {
            this.getMovies(),
                this.getSeries()
        }



    },
    mounted() {
        this.getShow()
    }


}
</script>

<style lang="scss" scoped></style>
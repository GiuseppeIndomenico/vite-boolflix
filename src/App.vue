<template>
  <div class="wrapper bg-dark-subtle">
    <SearchComponent @on-search="getShow()" />

    <MainComponent />
  </div>
</template>

<script>
import { store } from "./data/Store";
import axios from 'axios';
import SearchComponent from './components/SearchComponent.vue';
import CardComponent from './components/CardComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  components: {
    SearchComponent,
    CardComponent,
    MainComponent
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



  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

}
</style>
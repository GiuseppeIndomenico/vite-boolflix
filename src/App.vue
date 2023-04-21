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
    starClass(index, rating) {
      if (index <= rating) {
        return 'fas fa-star';
      } else if (index - rating <= 0.5) {
        return 'fas fa-star-half-alt';
      } else {
        return 'far fa-star';
      }
    },
    getMovies() {
      const urlMovies = store.Url.base + store.endPoint.movie;
      const options = {
        params: store.params
      };
      axios.get(urlMovies, options).then((res) => {
        store.movies = res.data.results;
        // console.log(store.movies);
        this.starClass()
      })

    },
    getSeries() {
      const urlSeries = store.Url.base + store.endPoint.series;
      const options = {
        params: store.params
      };
      axios.get(urlSeries, options).then((res) => {
        store.series = res.data.results;
        // console.log(store.series);

      })
    },


    getShow() {
      this.store.loaders.movie = true;
      this.store.loaders.series = true;
      this.getMovies();
      this.getSeries();

    }



  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

}
</style>
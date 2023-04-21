<template>
  <div class="wrapper bg-dark-subtle position-relative">
    <SearchComponent @on-search="getShow()" />
    <carouselComponent v-for="pop in store.showTrend" :key="pop.id" :image="pop.backdrop_path" :title="pop.title" />

    <MainComponent />
  </div>
</template>

<script>
import { store } from "./data/Store";
import axios from 'axios';
import SearchComponent from './components/SearchComponent.vue';
import CardComponent from './components/CardComponent.vue';
import MainComponent from './components/MainComponent.vue';
import carouselComponent from "./components/carouselComponent.vue";
export default {
  components: {
    SearchComponent,
    CardComponent,
    MainComponent,
    carouselComponent,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getPopular() {
      const urlTrend = store.Url.base + store.endPoint.popular + store.key;
      axios.get(urlTrend).then(res => {
        store.showTrend = res.data.results;
        console.log(store.showTrend);
      })
    },
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
      }).finally(() => {
        this.store.loaders.movie = false
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

      }).finally(() => {
        this.store.loaders.series = false
      })
    },
    getShow() {
      this.store.loaders.movie = true;
      this.store.loaders.series = true;
      this.getMovies();
      this.getSeries();

    },
  },
  mounted() { this.getPopular() }

}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

}
</style>
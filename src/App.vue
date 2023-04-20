<template>
  <div class="wrapper bg-dark-subtle">
    <SearchComponent />

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

}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

}
</style>
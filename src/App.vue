<template>
  <div class="wrapper bg-dark-subtle">
    <SearchComponent/>
    <MainComponent/>
  </div>
  </template>
<script>
import SearchComponent from './components/SearchComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from'axios'
export default {
components:{
  SearchComponent,
  MainComponent,
}
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;

}
</style>
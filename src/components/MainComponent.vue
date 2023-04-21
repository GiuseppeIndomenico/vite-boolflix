<template>
    <main class="container ">
        <h1 class="my-4"> Movies</h1>

        <div class="load d-flex align-items-center justify-content-center" v-if="store.loaders.movie">
            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
        <div class="row">

            <CardComponent v-for="item in store.movies" :key="item.id" :title="item.title" :vote="item.vote_average"
                :release="item.release_date" :language="item.original_language" :image="item.poster_path" :id="item.id" />
        </div>
        <h1 class="my-4"> tv Series</h1>
        <div class="row">

            <CardComponent v-for="item in store.series" :key="item.id" :title="item.name" :vote="item.vote_average"
                :release="item.release_date" :language="item.original_language" :image="item.poster_path" :id="item.id" />
        </div>

    </main>
</template >

<script>
import { store } from "../data/Store";
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

}
</script>

<style lang="scss" scoped>
.load {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    z-index: 1000;

    .fa-spinner {
        font-size: 10rem;
    }
}
</style>

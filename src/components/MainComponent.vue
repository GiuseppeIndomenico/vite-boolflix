<template>
    <main class="container">
        <h1 class="my-4"> Movies</h1>
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

<style lang="scss" scoped></style>

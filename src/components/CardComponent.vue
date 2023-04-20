<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 position-relative p-0 gi-div">
        <img class="img-fluid" :src="store.Url.imgThumb + image" :alt="title">
        <div class="gi-card">
            <p>{{ title }}</p>
            <p>{{ release }}</p>
            <p>{{ vote }}</p>
            <p> {{ language }}</p>
        </div>

    </div>
</template>

<script>
import { store } from '../data/Store';
export default {
    props: [
        'title', 'language', 'vote',
        'release', 'image', 'id'
    ],
    data() {
        return {
            store,

        }
    },

}
</script>

<style lang="scss" scoped>
.gi-div {


    .gi-card {
        position: absolute;
        top: 60%;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.6);
        opacity: 0;
        transition: all 0.5s;
        padding: 1rem;

    }

    &:hover .gi-card {
        opacity: 1;
    }
}
</style>
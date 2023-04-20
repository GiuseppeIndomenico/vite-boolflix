<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="store.Url.imgThumb + image" alt="">
        <p>{{ title }}</p>
        <p>{{ release }}</p>
        <p>{{ vote }}</p>
        <p> {{ language }}</p>

    </div>
</template>

<script>
import { store } from '../data/Store';
export default {
    props: [
        'title', 'language', 'vote',
        'release', 'image'
    ],
    data() {
        return {
            store,

        }
    },

}
</script>

<style lang="scss" scoped></style>
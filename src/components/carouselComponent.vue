<template>
    <div class=" gi-car-pick">
        <h4>
            {{ title }}
        </h4>
        <div class="gi-img-pick">
            <img class="img-fluid" :src="store.Url.imgOriginal + image" :alt="title">
        </div>

    </div>
</template>

<script>
import { store } from '../data/Store';
export default {
    props: [
        'id', 'image', 'title'
    ],
    data() {
        return {
            store
        }
    },

}
</script>

<style lang="scss" scoped>
.gi-img-pick {
    width: 100%;
    height: calc(100vh - 57.29px);
}
</style>
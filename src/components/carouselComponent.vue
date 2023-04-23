<template>
    <div class=" gi-car-pick position-relative">
        <div class="gi-img-pick">
            <img class="img-fluid" :src="store.Url.imgOriginal + image" :alt="id">
        </div>

        <div class="gi-text-pick  text-light px-4">
            <h4 class="p-2">
                {{ title }}
            </h4>
            <p>
                data di uscita: <br>
                <span v-if="release">{{ release }} </span>
                <span v-else>Non disponibile</span>
            </p>
            <p>{{ overview }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../data/Store';
export default {
    props: [
        'id', 'image', 'title',
        'overview', 'release'
    ],
    data() {
        return {
            store
        }
    },

}
</script>

<style lang="scss" scoped>
.gi-car-pick {

    .gi-img-pick {
        width: 100%;
        height: 100vh;

    }

    .gi-text-pick {
        position: absolute;
        top: 80%;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.6);

    }
}
</style>
<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 position-relative p-0 gi-div">
        <div v-if="image">
            <img class="img-fluid" :src="store.Url.imgThumb + image" :alt="title">
        </div>
        <div class="bg-dark" v-else>
            <img class="img-fluid" src="/images/spallucce.jpg" alt="non disponibile">
        </div>
        <div class="gi-card text-light pt-1 pb-4">
            <h5>{{ title }}</h5>
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <p class="m-0">valutazione:</p>
                    <div class="mb-2" v-if="vote">
                        <StarComponent :rating="(vote / 2)" />
                    </div>

                    <p>data di uscita: <br> <span v-if="release">{{ release }} </span>
                        <span v-else>Non disponibile</span>
                    </p>
                </div>
                <div class="d-flex flex-column align-items-end">
                    <p class="text-center">lingua originale:</p>
                    <div class="gi-flag me-2">
                        <img class="img-fluid" :src="'/images/' + checkFlag + '.png'" :alt="language">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarComponent from './StarComponent.vue';
import { store } from '../data/Store';
export default {
    props: [
        'title', 'language', 'vote',
        'release', 'image', 'id'
    ],
    components: {
        StarComponent
    },
    data() {
        return {
            store,
            aviableFlags: [
                'ar', 'de',
                'en', 'es',
                'fr', 'hi',
                'it', 'ja',
                'ko', 'zh',
            ]
        }
    },
    computed: {
        checkFlag() {
            if (this.aviableFlags.includes(this.language)) {
                return this.language;
            } else {
                return 'wrld'
            }
        }

    }



}
</script>

<style lang="scss" scoped>
.gi-div {
    transition: all 0.5s;

    .gi-flag {
        width: 30px;


    }

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

    &:hover {
        scale: 1.2;
        z-index: 2;

        .gi-card {


            opacity: 1;
        }
    }
}
</style>
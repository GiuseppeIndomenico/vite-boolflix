<template>
    <header class="gi-bg fixed-top">
        <div class="px-5 py-2 d-flex align-items-center justify-content-between">
            <div>
                <h3 class="text-danger fw-bold"><a href="#">BoolFlix</a></h3>
            </div>
            <div>
                <div class="input-group">
                    <input @keyup.enter="$emit('on-search')" v-model="store.params.query" placeholder="Cerca..."
                        type="text">
                    <button @click="$emit('on-search')" class="btn btn-outline-danger">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../data/Store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.gi-bg {
    background: rgb(20, 20, 20);
    background: linear-gradient(0deg, rgba(20, 20, 20, 1) 9%, rgba(33, 37, 41, 1) 78%);
}

a {
    text-decoration: none;
    color: #e23946;

    &:hover {
        color: #771f27;
    }
}
</style>
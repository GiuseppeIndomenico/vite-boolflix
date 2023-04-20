<template>
    <div>
        <div v-for="i in 5" :key="i" :class="starClass(i, rating)"></div>
    </div>
</template>
  
<script>
export default {
    name: 'StarRating',
    props: {
        rating: {
            type: Number,
            required: true
        }
    },
    methods: {
        starClass(index, rating) {
            if (index <= rating) {
                return 'fas fa-star';
            } else if (index - rating <= 0.5) {
                return 'fas fa-star-half-alt';
            } else {
                return 'far fa-star';
            }
        }
    }
}
</script>
  
<style>
.fas.fa-star,
.fas.fa-star-half-alt {
    color: gold;
}
</style>
  
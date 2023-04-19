<template>
    <div class="row">
        <div class="col">card</div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/Store';
export default {
    data() {
        return {
            store,
          
        }
    },
    methods: {
        GetPopular() {
            axios.get(store.Url.base + store.endPoint.popular + store.key).then(res=>{
                console.log(res.data.results);
                
                //sono un cretino...mancava uno slash
                    


            })
        }
    },mounted(){
        this.GetPopular()
    }

}

</script>

<style lang="scss" scoped></style>
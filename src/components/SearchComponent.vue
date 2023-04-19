<template>
    <header class="gi-bg">
        <div class="px-5 py-2 d-flex align-items-center justify-content-between">
            <div>
                <h3 class="text-danger fw-bold">BoolFlix</h3>
            </div>
            <div>
                <div class="input-group">
                    <input placeholder="Cerca..." type="text">  <button class="btn btn-outline-danger"> <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
        </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
 .gi-bg{
    background: rgb(20,20,20);
background: linear-gradient(0deg, rgba(20,20,20,1) 9%, rgba(33,37,41,1) 78%);
 }
</style>
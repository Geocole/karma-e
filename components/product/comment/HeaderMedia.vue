<template>
    <div class="media">
        <div class="d-flex">
            <img :src="img" alt="">
        </div>
        <div class="media-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderMedia",
        props: {
            img: {
                type: String,
                default:  require('~/assets/img/product/review-1.png')
            }
        }
    }
</script>

<style scoped>

</style>
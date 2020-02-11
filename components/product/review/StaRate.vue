<template functional>
    <a href="#">
        {{ props.stars }} Star
        <i class="fa fa-star" v-for="i in props.stars" :key="i"></i>
        {{ props.count }}
    </a>
</template>

<script>
    export default {
        name: "StaRate",
        props: {
            stars: Number,
            count: Number
        }
    }
</script>

<style scoped>

</style>
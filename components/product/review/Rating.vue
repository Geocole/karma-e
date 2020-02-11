<template functional>
    <ul class="list">
        <li v-for="i in props.count" :key="i"><a href="#"><i class="fa fa-star"></i></a></li>
    </ul>
</template>

<script>
    export default {
        name: "Rating",
        props: {
            count: Number
        }
    }
</script>

<style scoped>

</style>
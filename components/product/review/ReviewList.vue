<template>
    <div class="review_list">
        <review-item v-for="i in 4" :key="i">
            <template slot="header">
                <div>
                    <h4>Blake Ruiz</h4>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </template>
        </review-item>
    </div>
</template>

<script>
    import ReviewItem from "../comment/ReviewItem";
    export default {
        name: "ReviewList",
        components: {ReviewItem}
    }
</script>

<style scoped>

</style>
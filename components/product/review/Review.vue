<template>
    <div class="row">
        <div class="col-lg-6">
            <rate></rate>
            <review-list></review-list>
        </div>
        <div class="col-lg-6">
            <review-box>
                <div slot="header">
                    <h4>Add a Review</h4>
                    <p>Your Rating:</p>
                    <rating :count=5></rating>
                    <p>Outstanding</p>
                </div>
            </review-box>
        </div>
    </div>
</template>

<script>
    import Rate from "./Rate";
    import ReviewList from "./ReviewList";
    import ReviewBox from "../comment/ReviewBox";
    import Rating from "./Rating";
    export default {
        name: "Review",
        components: {Rating, ReviewBox, ReviewList, Rate}
    }
</script>

<style scoped>

</style>
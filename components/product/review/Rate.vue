<template>
    <div class="row total_rate">
        <div class="col-6">
            <div class="box_total">
                <h5>Overall</h5>
                <h4>4.0</h4>
                <h6>(03 Reviews)</h6>
            </div>
        </div>
        <div class="col-6">
            <div class="rating_list">
                <h3>Based on 3 Reviews</h3>
                <ul class="list">
                    <li v-for="(count, star) in stars">
                        <sta-rate :stars="+star" :count="+count"></sta-rate>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import StaRate from "./StaRate";
    export default {
        name: "Rate",
        components: {StaRate},
        data() {
            return {
                stars: {
                    5: 25,
                    4: 38,
                    3: 45,
                    2: 10,
                    1: 3
                }
            }
        }
    }
</script>

<style scoped>

</style>
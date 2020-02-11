<template>
    <aside class="single_sidebar_widget author_widget">
        <img class="author_img rounded-circle" :src="author.profile" alt="">
        <h4>{{ author.name }}</h4>
        <p>{{ author.title }}</p>
        <div class="social_icon">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
            <a href="#"><i class="fa fa-behance"></i></a>
        </div>
        <p>{{ author.description }}</p>
        <div class="br"></div>
    </aside>
</template>

<script>
    export default {
        name: "AuthorWidget",
        data(){
            return {
                author: {
                    profile: require("~/assets/img/blog/author.png"),
                    name: "Charlie Barber",
                    title: "Senior blog writer",
                    description: "Boot camps have its supporters andit sdetractors. Some people do not understand why you\n" +
                        "            should have to spend money on boot camp when you can get. Boot camps have itssuppor\n" +
                        "            ters andits detractors."
                }
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <aside class="single_sidebar_widget popular_post_widget">
        <h3 class="widget_title">Popular Posts</h3>
        <media-post v-for="(post, index) in popularPosts" :blog-post="post" :key="index"></media-post>
        <div class="br"></div>
    </aside>
</template>

<script>
    import MediaPost from "../MediaPost";
    export default {
        name: "PopularPost",
        components: {MediaPost},
        data(){
            return {
                popularPosts: [
                    {
                        img: require("~/assets/img/blog/popular-post/post1.jpg"),
                        title: "Space The Final Frontier",
                        date: "02 Hours ago"
                    },
                    {
                        img: require("~/assets/img/blog/popular-post/post2.jpg"),
                        title: "The Amazing Hubble",
                        date: "02 Hours ago"
                    },
                    {
                        img: require("~/assets/img/blog/popular-post/post3.jpg"),
                        title: "Astronomy Or Astrology",
                        date: "02 Hours ago"
                    },
                    {
                        img: require("~/assets/img/blog/popular-post/post4.jpg"),
                        title: "Asteroids telescope",
                        date: "02 Hours ago"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
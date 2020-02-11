<template>
  <section class="blog_categorie_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="(post, index) in posts" :key="index">
          <post :blog-post="post"></post>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Post from "./Post";
export default {
  name: "CategorieArea",
  components: { Post },
  data() {
    return {
      posts: [
        {
          img: require("~/assets/img/blog/cat-post/cat-post-3.jpg"),
          title: "Social Life",
          description: "Enjoy your social life together"
        },
        {
          img: require("~/assets/img/blog/cat-post/cat-post-2.jpg"),
          title: "Politics",
          description: "Be a part of politics"
        },
        {
          img: require("~/assets/img/blog/cat-post/cat-post-1.jpg"),
          title: "Food",
          description: "Let the food be finished"
        }
      ]
    };
  }
};
</script>

<style scoped></style>

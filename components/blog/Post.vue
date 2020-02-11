<template functional>
  <div class="categories_post">
    <img :src="props.blogPost.img" alt="post" />
    <div class="categories_details">
      <div class="categories_text">
        <a href="blog-details.html">
          <h5>{{ props.blogPost.title }}</h5>
        </a>
        <div class="border_line"></div>
        <p>{{ props.blogPost.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    blogPost: {
      type: Object,
      default() {
        return {
          img: require("~/assets/img/blog/cat-post/cat-post-3.jpg"),
          title: "Social Life",
          description: "Enjoy your social life together"
        };
      }
    }
  }
};
</script>

<style scoped></style>

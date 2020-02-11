<template>
  <div class="media post_item">
    <img :src="blogPost.img" alt="post" />
    <div class="media-body">
      <a href="#">
        <h3>{{ blogPost.title }}</h3>
      </a>
      <p>{{ blogPost.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaPost",
  props: {
    blogPost: {
      type: Object,
      default() {
        return {
          img: require("~/assets/img/blog/popular-post/post1.jpg"),
          title: "Space The Final Frontier",
          date: "02 Hours ago"
        };
      }
    }
  }
};
</script>

<style scoped></style>

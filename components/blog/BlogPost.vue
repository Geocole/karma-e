<template>
  <div class="blog_post">
    <img :src="blog.img" alt="" />
    <div class="blog_details">
      <a href="#">
        <h2>{{ blog.title }}</h2>
      </a>
      <p>{{ blog.description }}</p>
      <nuxt-link
        :to="{ name: 'blog-id', params: { id: 1 } }"
        class="white_bg_btn"
        >View More</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    blog: {
      type: Object,
      default() {
        return {
          img: require("~/assets/img/blog/cat-post/cat-post-3.jpg"),
          title: "Astronomy Binoculars A Great Alternative",
          description:
            "MCSE boot camps have its supporters and its detractors. Some people do not\n" +
            "                understand why you should have to spend money on boot camp when you can get\n" +
            "                the MCSE study materials yourself at a fraction.",
          tags: ["Food", "Technology", "Politics", "Lifestyle"],
          meta: {
            user: "Mark wiens",
            date: "12 Dec, 2018",
            views: "1.2M",
            comments: 18
          }
        };
      }
    }
  }
};
</script>

<style scoped></style>

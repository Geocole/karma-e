<template>
  <section class="blog_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="blog_left_sidebar">
            <blog-item v-for="i in 4" :key="i"></blog-item>
            <blog-pagination></blog-pagination>
          </div>
        </div>

        <div class="col-lg-4">
          <blog-side-bar></blog-side-bar>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogItem from "./BlogItem";
import BlogPagination from "./BlogPagination";
import BlogSideBar from "./BlogSideBar";
export default {
  name: "BlogArea",
  components: { BlogSideBar, BlogPagination, BlogItem }
};
</script>

<style scoped></style>

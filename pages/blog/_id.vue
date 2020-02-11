<template>
  <div class="row">
    <div class="col-lg-12">
      <base-banner title="Blog Page">
        <base-banner title="Blog">
          <template slot="breadcumbs">
            <nav class="d-flex align-items-center">
              <nuxt-link to="/"
                >Home<span class="lnr lnr-arrow-right"></span
              ></nuxt-link>
              <nuxt-link to="blog">Blog</nuxt-link>
            </nav>
          </template>
        </base-banner>
      </base-banner>
      <!--================Blog Area =================-->
      <section class="blog_area single-post-area section_gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 posts-list">
              <single-post></single-post>
              <navigation-area></navigation-area>
              <comment-area></comment-area>
              <comment-form></comment-form>
            </div>
            <div class="col-lg-4">
              <blog-side-bar></blog-side-bar>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BlogSideBar from "../../components/blog/BlogSideBar";
import SinglePost from "../../components/blog/SinglePost";
import NavigationArea from "../../components/blog/NavigationArea";
import CommentArea from "../../components/blog/CommentArea";
import CommentForm from "../../components/blog/CommentForm";
import BaseBanner from "../../components/BaseBanner";
export default {
  name: "_id",
  components: {
    BaseBanner,
    CommentForm,
    CommentArea,
    NavigationArea,
    SinglePost,
    BlogSideBar
  }
};
</script>

<style scoped></style>

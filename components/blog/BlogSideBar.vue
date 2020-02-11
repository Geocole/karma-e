<template>
  <div class="blog_right_sidebar">
    <search-widget></search-widget>
    <author-widget></author-widget>
    <popular-post></popular-post>
    <aside class="single_sidebar_widget ads_widget">
      <a href="#"
        ><img class="img-fluid" src="~/assets/img/blog/add.jpg" alt=""
      /></a>
      <div class="br"></div>
    </aside>
    <post-categorie-widget></post-categorie-widget>
    <newletter-widget></newletter-widget>
    <aside class="single-sidebar-widget tag_cloud_widget">
      <h4 class="widget_title">Tag Clouds</h4>
      <ul class="list">
        <li><a href="#">Technology</a></li>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Architecture</a></li>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Food</a></li>
        <li><a href="#">Technology</a></li>
        <li><a href="#">Lifestyle</a></li>
        <li><a href="#">Art</a></li>
        <li><a href="#">Adventure</a></li>
        <li><a href="#">Food</a></li>
        <li><a href="#">Lifestyle</a></li>
        <li><a href="#">Adventure</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
import SearchWidget from "./sidebar/SearchWidget";
import AuthorWidget from "./sidebar/AuthorWidget";
import PopularPost from "./sidebar/PopularPost";
import PostCategorieWidget from "./sidebar/PostCategorieWidget";
import NewletterWidget from "./sidebar/NewletterWidget";
export default {
  name: "BlogSideBar",
  components: {
    NewletterWidget,
    PostCategorieWidget,
    PopularPost,
    AuthorWidget,
    SearchWidget
  }
};
</script>

<style scoped></style>

<template>
  <div class="row">
    <div class="col-lg-12">
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
      <categorie-area></categorie-area>
      <blog-area></blog-area>
    </div>
  </div>
</template>

<script>
import BaseBanner from "../../components/BaseBanner";
import CategorieArea from "../../components/blog/CategorieArea";
import BlogArea from "../../components/blog/BlogArea";
export default {
  name: "index",
  components: { BlogArea, CategorieArea, BaseBanner }
};
</script>

<style scoped></style>

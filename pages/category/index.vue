<template>
  <div class="row">
    <div class="col-lg-12">
      <base-banner title="Shop Category page">
        <template slot="breadcumbs">
          <nav class="d-flex align-items-center">
            <nuxt-link to="/"
              >Home<span class="lnr lnr-arrow-right"></span
            ></nuxt-link>
            <a href="#">Shop<span class="lnr lnr-arrow-right"></span></a>
            <a href="category.html">Fashon Category</a>
          </nav>
        </template>
      </base-banner>

      <div class="container">
        <div class="row mb-4 mt-3">
          <div class="col-xl-3 col-lg-4 col-md-5">
            <category-sidebar></category-sidebar>
            <category-filter></category-filter>
          </div>
          <div class="col-xl-9 col-lg-8 col-md-7">
            <filter-bar sorting></filter-bar>
            <category-products></category-products>
            <filter-bar></filter-bar>
          </div>
        </div>
      </div>

      <related-products-area class="section_gap"></related-products-area>
    </div>
  </div>
</template>

<script>
import BaseBanner from "~/components/BaseBanner";
import Logo from "~/components/Logo.vue";
import CategorySidebar from "~/components/sidebar/CategorySidebar";
import CategoryFilter from "~/components/sidebar/CategoryFilter";
import RelatedProductsArea from "~/components/RelatedProductsArea";
import FilterBar from "~/components/category/FilterBar";
import CategoryProducts from "~/components/category/CategoryProducts";

export default {
  components: {
    BaseBanner,
    CategorySidebar,
    CategoryFilter,
    RelatedProductsArea,
    FilterBar,
    CategoryProducts
  },
  mounted() {
    $(".sorting-select").niceSelect();
  }
};
</script>

<style scoped></style>

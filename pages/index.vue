<template>
  <div class="row">
    <div class="col-lg-12">
      <banner-area></banner-area>

      <features-area></features-area>

      <categorise-area></categorise-area>

      <!-- start product Area -->
      <product-area></product-area>
      <!-- end product Area -->

      <!-- Start brand Area -->
      <brand-area></brand-area>
      <!-- End brand Area -->

      <!-- Start related-product Area -->
      <related-products-area></related-products-area>
      <!-- End related-product Area -->
    </div>
  </div>
</template>

<script>
import BannerArea from "~/components/BannerArea";
import FeaturesArea from "~/components/FeaturesArea";
import CategoriseArea from "~/components/CategoriseArea";
import ProductArea from "../components/ProductArea";
import BrandArea from "~/components/BrandArea";
import RelatedProductsArea from "~/components/RelatedProductsArea";

export default {
  components: {
    ProductArea,
    BannerArea,
    FeaturesArea,
    CategoriseArea,
    BrandArea,
    RelatedProductsArea
  },
};
</script>

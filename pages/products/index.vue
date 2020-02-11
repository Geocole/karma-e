<template>
  <div class="row">
    <div class="col-lg-12">
      <base-banner title="Product Details Page">
        <template slot="breadcumbs">
          <nav class="d-flex align-items-center">
            <nuxt-link to="/"
              >Home<span class="lnr lnr-arrow-right"></span
            ></nuxt-link>
            <a href="#">Shop<span class="lnr lnr-arrow-right"></span></a>
            <nuxt-link to="products">product-details</nuxt-link>
          </nav>
        </template>
      </base-banner>

      <product-image-area></product-image-area>

      <product-description-area></product-description-area>

      <related-products-area></related-products-area>
    </div>
  </div>
</template>

<script>
import BaseBanner from "~/components/BaseBanner";
import ProductImageArea from "~/components/product/ProductImageArea";
import ProductDescriptionArea from "~/components/product/ProductDescriptionArea";
import RelatedProductsArea from "../../components/RelatedProductsArea";

export default {
  name: "index",
  components: {
    RelatedProductsArea,
    BaseBanner,
    ProductImageArea,
    ProductDescriptionArea
  }
};
</script>

<style scoped></style>

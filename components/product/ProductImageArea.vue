<template>
  <div class="product_image_area">
    <div class="container">
      <div class="row s_product_inner">
        <div class="col-lg-6">
          <single-carousel></single-carousel>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <product-text></product-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleCarousel from "./SingleCarousel";
import ProductText from "./ProductText";
export default {
  name: "ProductImageArea",
  components: {
    ProductText,
    SingleCarousel
  }
};
</script>

<style scoped></style>

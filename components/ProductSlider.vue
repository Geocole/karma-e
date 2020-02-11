<template>
  <div class="single-product-slider">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <div class="section-title">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- single product -->
        <div
          class="col-lg-3 col-md-6"
          v-for="(product, index) in products"
          :key="index"
        >
          <product
            :p-image="product.img"
            :p-title="product.title"
            :p-promo-price="product.promo"
            :p-price="product.price"
          ></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "ProductSlider",
  props: {
    title: String,
    description: String,
    products: Array
  },
  components: {
    product: Product
  }
};
</script>

<style scoped></style>

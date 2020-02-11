<template>
  <section class="lattest-product-area pb-40 category-list">
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
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
  </section>
</template>

<script>
import Product from "../Product";
import { CategoryProducts } from "~/mixins/category-products";

export default {
  name: "CategoryProducts",

  mixins: [CategoryProducts],

  components: {
    product: Product
  }
};
</script>

<style scoped></style>

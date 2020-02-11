<template>
  <section class="related-product-area section_gap_bottom">
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
        <div class="col-lg-9">
          <div class="row">
            <div
              class="col-lg-4 col-md-4 col-sm-6 mb-20"
              v-for="(product, index) in products"
              :key="index"
            >
              <r-product
                :img="product.img"
                :title="product.title"
                :promo="product.promo"
                :price="product.price"
              >
              </r-product>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ctg-right">
            <a href="#" target="_blank">
              <img class="img-fluid d-block mx-auto" :src="righImg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RelatedProduct from "./RelatedProduct";
import { RProducts } from "../mixins/related-products";

export default {
  name: "RelatedProductsArea",
  components: {
    "r-product": RelatedProduct
  },
  mixins: [RProducts],
  data() {
    return {
      title: "Deals of the Week",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  },
  computed: {
    righImg() {
      return require("../assets/img/category/c5.jpg");
    }
  }
};
</script>

<style scoped></style>

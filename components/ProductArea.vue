<template>
  <section class="owl-carousel active-product-area section_gap">
    <product-slider
      v-for="(slider, index) in slides"
      :key="index"
      :title="slider.title"
      :description="slider.description"
      :products="slider.products"
    >
    </product-slider>
  </section>
</template>

<script>
import { Products } from "../mixins/products";
import ProductSlider from "./ProductSlider";
export default {
  name: "ProductArea",
  components: {
    "product-slider": ProductSlider
  },
  mixins: [Products],
  mounted() {
    /*=================================
        Javascript for product area carousel
        ==================================*/
    $(".active-product-area").owlCarousel({
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      loop: true,
      nav: true,
      navText: [
        "<img src='../assets/img/product/prev.png'>",
        "<img src='../assets/img/product/next.png'>"
      ],
      dots: false
    });
  }
};
</script>

<style scoped></style>

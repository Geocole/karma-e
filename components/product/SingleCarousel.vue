<template functional>
  <div id="s_p_carousel">
    <div
      class="single-prd-item"
      v-for="(img, index) in props.pImages"
      :key="index"
    >
      <img class="img-fluid" :src="img" :key="index" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCarousel",
  props: {
    pImages: {
      type: Array,
      default() {
        return [require("~/assets/img/category/s-p1.jpg")];
      }
    }
  },
  mounted() {
    $("#s_p_carousel").owlCarousel({
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      loop: true,
      nav: false,
      dots: true
    });
  }
};
</script>

<style scoped></style>

<template>
  <section class="brand-area section_gap">
    <div class="container">
      <div class="row">
        <a
          class="col single-img"
          href="#"
          v-for="(brand, index) in brands"
          :key="index"
        >
          <img class="img-fluid d-block mx-auto" :src="brand" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BrandArea",
  data() {
    return {
      brands: [
        require("../assets/img/brand/1.png"),
        require("../assets/img/brand/2.png"),
        require("../assets/img/brand/3.png"),
        require("../assets/img/brand/4.png"),
        require("../assets/img/brand/5.png")
      ]
    };
  }
};
</script>

<style scoped></style>

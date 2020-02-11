<template functional>
  <div class="single-related-product d-flex">
    <a href="#"><img :src="props.img" alt=""/></a>
    <div class="desc">
      <a href="#" class="title">props.title</a>
      <div class="price">
        <h6>${{ props.promo }}</h6>
        <h6 class="l-through">${{ props.price }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelatedProduct",
  props: {
    img: String,
    title: String,
    promo: Number,
    price: Number
  }
}
</script>

<style scoped></style>

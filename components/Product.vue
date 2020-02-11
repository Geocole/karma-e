<template>
  <div class="single-product">
    <img class="img-fluid" :src="pImage" alt="" />
    <div class="product-details">
      <h6>{{ pTitle }}</h6>
      <div class="price">
        <h6>{{ pPromoPrice | currency }}</h6>
        <h6 class="l-through">{{ pPrice | currency }}</h6>
      </div>
      <div class="prd-bottom">
        <a href="" class="social-info">
          <span class="ti-bag"></span>
          <p class="hover-text">add to bag</p>
        </a>
        <a href="" class="social-info">
          <span class="lnr lnr-heart"></span>
          <p class="hover-text">Wishlist</p>
        </a>
        <a href="" class="social-info">
          <span class="lnr lnr-sync"></span>
          <p class="hover-text">compare</p>
        </a>
        <a href="" class="social-info">
          <span class="lnr lnr-move"></span>
          <p class="hover-text">view more</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    }
  },
  props: {
    pImage: String,
    pTitle: String,
    pPrice: Number,
    pPromoPrice: {
      type: Number,
      default: undefined
    }
  }
};
</script>

<style scoped></style>

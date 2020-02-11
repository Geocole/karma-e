<template>
  <div class="row">
    <div class="col-lg-12">
      <base-banner title="Shopping Card">
        <template slot="breadcumbs">
          <nav class="d-flex align-items-center">
            <nuxt-link to="/"
              >Home<span class="lnr lnr-arrow-right"></span
            ></nuxt-link>
            <nuxt-link to="shopping-card">Cart</nuxt-link>
          </nav>
        </template>
      </base-banner>

      <cart-area></cart-area>
    </div>
  </div>
</template>

<script>
import BaseBanner from "../../components/BaseBanner";
import CartArea from "../../components/cart/CartArea";
export default {
  name: "index",
  components: { CartArea, BaseBanner }
};
</script>

<style scoped></style>

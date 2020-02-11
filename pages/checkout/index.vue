<template>
  <div class="row">
    <div class="col-lg-12">
      <base-banner title="Checkout">
        <template slot="breadcumbs">
          <nav class="d-flex align-items-center">
            <nuxt-link to="/"
              >Home<span class="lnr lnr-arrow-right"></span
            ></nuxt-link>
            <nuxt-link to="checkout">Checkout</nuxt-link>
          </nav>
        </template>
      </base-banner>

      <section class="checkout_area section_gap">
        <div class="container">
          <returning-customer></returning-customer>

          <coupon></coupon>

          <billing-details></billing-details>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BaseBanner from "../../components/BaseBanner";
import ReturningCustomer from "../../components/checkout/ReturningCustomer";
import Coupon from "../../components/checkout/Coupon";
import BillingDetails from "../../components/checkout/BillingDetails";

export default {
  name: "index",
  components: {
    BillingDetails,
    Coupon,
    ReturningCustomer,
    BaseBanner
  },
  mounted() {
    $(".contact_form select").niceSelect();
  }
};
</script>

<style scoped></style>

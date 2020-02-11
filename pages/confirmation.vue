<template>
  <div class="row">
    <div class="col-lg-12">
      <base-banner title="Shopping Card">
        <template slot="breadcumbs">
          <nav class="d-flex align-items-center">
            <nuxt-link to="/"
              >Home<span class="lnr lnr-arrow-right"></span
            ></nuxt-link>
            <nuxt-link to="confirmation">Confirmation</nuxt-link>
          </nav>
        </template>
      </base-banner>

      <section class="order_details section_gap">
        <div class="container">
          <h3 class="title_confirmation">
            Thank you. Your order has been received.
          </h3>
          <order></order>
          <order-details></order-details>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BaseBanner from "../components/BaseBanner";
import Order from "../components/confirmation/Order";
import OrderDetails from "../components/confirmation/OrderDetails";

export default {
  name: "confirmation",
  components: { OrderDetails, Order, BaseBanner }
};
</script>

<style scoped></style>

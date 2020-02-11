<template>
  <div class="billing_details">
    <div class="row">
      <div class="col-lg-8">
        <h3>Billing Details</h3>
        <billing-form></billing-form>
      </div>

      <div class="col-lg-4">
        <order-box></order-box>
      </div>
    </div>
  </div>
</template>

<script>
import BillingForm from "./BillingForm";
import OrderBox from "./OrderBox";
export default {
  name: "BillingDetails",
  components: { OrderBox, BillingForm }
};
</script>

<style scoped></style>

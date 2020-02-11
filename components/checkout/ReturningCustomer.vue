<template>
  <div class="returning_customer">
    <div class="check_title">
      <h2>Returning Customer? <a href="#">Click here to login</a></h2>
    </div>
    <p>
      If you have shopped with us before, please enter your details in the boxes
      below. If you are a new customer, please proceed to the Billing & Shipping
      section.
    </p>

    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactForm from "./ContactForm";
export default {
  name: "ReturningCustomer",
  components: { ContactForm }
};
</script>

<style scoped></style>

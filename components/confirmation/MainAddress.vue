<template>
  <div class="details_item">
    <slot name="header"></slot>
    <ul class="list">
      <li>
        <a href="#"><span>Street</span> : {{ addr.street }}</a>
      </li>
      <li>
        <a href="#"><span>City</span> : {{ addr.city }}</a>
      </li>
      <li>
        <a href="#"><span>Country</span> : {{ addr.country }}</a>
      </li>
      <li>
        <a href="#"><span>Postcode </span> : {{ addr.postcode }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Address",
  props: {
    addr: {
      type: Object,
      default() {
        return {
          street: "56/8",
          city: "Los Angeles",
          country: "United States",
          postcode: "36952"
        };
      }
    }
  }
};
</script>

<style scoped></style>

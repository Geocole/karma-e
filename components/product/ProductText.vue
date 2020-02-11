<template>
  <div class="s_product_text">
    <h3>{{ name }}</h3>
    <h2>${{ price }}</h2>
    <ul class="list">
      <li>
        <nuxt-link to="/category" class="active" href="#"
          ><span>Category</span> : {{ category }}</nuxt-link
        >
      </li>
      <li>
        <a href="#"><span>Availibility</span> : {{ availability }}</a>
      </li>
    </ul>
    <p>{{ description }}</p>
    <product-count></product-count>
    <add-to-cart></add-to-cart>
  </div>
</template>

<script>
import ProductCount from "./ProductCount";
import AddToCart from "./AddToCart";
export default {
  name: "ProductText",
  props: {
    name: {
      type: String,
      default: "Faded SkyBlu Denim Jeans"
    },
    price: {
      type: Number,
      default: 199
    },
    category: {
      type: String,
      default: "Household"
    },
    availability: {
      type: String,
      default: "In Stock"
    },
    description: {
      type: String,
      default:
        "Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
    }
  },
  components: {
    ProductCount,
    AddToCart
  }
};
</script>

<style scoped></style>

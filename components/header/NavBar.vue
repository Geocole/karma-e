<template>
  <nav class="navbar navbar-expand-lg navbar-light main_box">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <nuxt-link class="navbar-brand logo_h" to="index"
        ><img src="~assets/img/logo.png" alt=""
      /></nuxt-link>

      <nav-toggle></nav-toggle>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <supported-content></supported-content>
    </div>
  </nav>
</template>

<script>
import NavToggle from "./Toggler";
import SupportedContent from "./SupportedContent";
export default {
  name: "NavBar",
  components: { SupportedContent, NavToggle }
};
</script>

<style scoped></style>

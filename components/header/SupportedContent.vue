<template>
  <div id="navbarSupportedContent" class="collapse navbar-collapse offset">
    <ul class="nav navbar-nav menu_nav ml-auto">
      <li class="nav-item " :class="isActive('index')">
        <a class="nav-link" href="index.html">Home</a>
      </li>
      <li
        class="nav-item submenu dropdown"
        :class="isActive(['category', 'products', 'checkout'])"
      >
        <a
          href="#"
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          >Shop</a
        >
        <ul class="dropdown-menu">
          <li class="nav-item" :class="isActive('category')">
            <nuxt-link to="/category" class="nav-link">Shop Category</nuxt-link>
          </li>
          <li class="nav-item" :class="isActive('products')">
            <nuxt-link to="/products" class="nav-link"
              >Product Details</nuxt-link
            >
          </li>
          <li class="nav-item" :class="isActive('checkout')">
            <nuxt-link class="nav-link" to="checkout">
              Product Checkout
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="shopping-card"
              >Shopping Cart</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="confirmation"
              >Confirmation</nuxt-link
            >
          </li>
        </ul>
      </li>
      <li class="nav-item submenu dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          >Blog</a
        >
        <ul class="dropdown-menu">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="blog">Blog</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="single-blog.html">Blog Details</a>
          </li>
        </ul>
      </li>
      <li class="nav-item submenu dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          >Pages</a
        >
        <ul class="dropdown-menu">
          <li class="nav-item">
            <a class="nav-link" href="login.html">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tracking.html">Tracking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="elements.html">Elements</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li class="nav-item">
        <a href="#" class="cart"><span class="ti-bag"></span></a>
      </li>
      <li class="nav-item">
        <button class="search">
          <span id="search" class="lnr lnr-magnifier"></span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SupportedContent",
  methods: {
    isActive(link) {
      if (typeof link === "object") {
        let active = false;

        link.forEach(l => {
          if (this.$route.name === l) {
            active = true;
          }
        });

        return active ? "active" : "";
      } else {
        if (this.$route.name === link) return "active";
      }
    }
  }
};
</script>

<style scoped></style>

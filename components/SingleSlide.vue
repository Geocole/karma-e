<template>
  <div class="row single-slide align-items-center d-flex">
    <div class="col-lg-5 col-md-6">
      <div class="banner-content">
        <slot name="header">
          <h1>Nike New <br />Collection!</h1>
        </slot>

        <slot name="body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </slot>
        <slot name="footer">
          <div class="add-bag d-flex align-items-center">
            <a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
            <span class="add-text text-uppercase">Add to Bag</span>
          </div>
        </slot>
      </div>
    </div>
    <div class="col-lg-7">
      <div class="banner-img">
        <img class="img-fluid" :src="backgrnd" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleSlide",
  props: {
    backgrnd: {
      type: String,
      default: require("~assets/img/banner/banner-img.png")
    }
  }
};
</script>

<style scoped></style>

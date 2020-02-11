<template>
  <section class="features-area section_gap">
    <div class="container">
      <div class="row features-inner">
        <!-- single features -->
        <div
          class="col-lg-3 col-md-6 col-sm-6"
          v-for="(feature, index) in features"
          :key="index"
        >
          <single-feature
            :img-src="feature.icon"
            :title="feature.title"
            :description="feature.description"
          >
          </single-feature>
        </div>
        <!-- single features -->
      </div>
    </div>
  </section>
</template>

<script>
import SingleFeature from "~/components/SingleFeature";

export default {
  name: "FeaturesArea",
  components: { SingleFeature },
  component: {
    SingleFeature
  },
  data() {
    return {
      features: [
        {
          icon: "f-icon1.png",
          title: "Free Delivery",
          description: "Free Shipping on all order"
        },
        {
          icon: "f-icon2.png",
          title: "Return Policy",
          description: "Free Shipping on all order"
        },
        {
          icon: "f-icon3.png",
          title: "24/7 Support",
          description: "Free Shipping on all order"
        },
        {
          icon: "f-icon4.png",
          title: "Secure Payment",
          description: "Free Shipping on all order"
        }
      ]
    };
  }
};
</script>

<style scoped></style>

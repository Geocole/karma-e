<template>
  <div class="sidebar-filter mt-50">
    <div class="top-filter-head">Product Filters</div>
    <div class="commons-filter">
      <common-filter head="Brands">
        <brand-list></brand-list>
      </common-filter>

      <common-filter head="Color">
        <color-filter></color-filter>
      </common-filter>

      <common-filter head="Price">
        <div class="price-range-area">
          <div id="price-range"></div>
          <div class="value-wrapper d-flex">
            <div class="price">Price:</div>
            <span>$</span>
            <div id="lower-value"></div>
            <div class="to">to</div>
            <span>$</span>
            <div id="upper-value"></div>
          </div>
        </div>
      </common-filter>
    </div>
  </div>
</template>

<script>
import CommonFilter from "~/components/sidebar/CommonFilter";
import BrandList from "~/components/sidebar/BrandList";
import ColorFilter from "~/components/sidebar/ColorFilter";

export default {
  name: "CategoryFilter",
  components: {
    CommonFilter,
    BrandList,
    ColorFilter
  },
  mounted() {
    let nonLinearSlider = document.getElementById("price-range");

    noUiSlider.create(nonLinearSlider, {
      connect: true,
      behaviour: "tap",
      start: [500, 4000],
      range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        min: [0],
        "10%": [500, 500],
        "50%": [4000, 1000],
        max: [10000]
      }
    });

    let nodes = [
      document.getElementById("lower-value"), // 0
      document.getElementById("upper-value") // 1
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    nonLinearSlider.noUiSlider.on("update", function(
      values,
      handle,
      unencoded,
      isTap,
      positions
    ) {
      nodes[handle].innerHTML = values[handle];
    });
  }
};
</script>

<style scoped>
.commons-filter {
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 10px 10px rgba(153, 153, 153, 0.1);
}
</style>

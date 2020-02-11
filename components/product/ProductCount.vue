<template>
  <div class="product_count">
    <label for="qty">Quantity:</label>
    <input
      type="text"
      name="qty"
      id="sst"
      maxlength="12"
      v-model="quantity"
      title="Quantity:"
      class="input-text qty"
    />
    <button @click="increase" class="increase items-count" type="button">
      <i class="lnr lnr-chevron-up"></i>
    </button>
    <button @click="reduced" class="reduced items-count" type="button">
      <i class="lnr lnr-chevron-down"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductCount",
  data() {
    return {
      quantity: 1
    };
  },

  methods: {
    increase() {
      this.quantity++;
    },
    reduced() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    }
  },
  watch: {
    quantity() {
      this.$emit("quantity", this.quantity);
    }
  }
};
</script>

<style scoped></style>

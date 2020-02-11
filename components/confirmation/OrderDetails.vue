<template>
  <div class="order_details_table">
    <h2>Order Details</h2>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td>
              <p>{{ order.product }}</p>
            </td>
            <td>
              <h5>x {{ order.quantity }}</h5>
            </td>
            <td>
              <p>${{ order.total }}.00</p>
            </td>
          </tr>

          <tr>
            <td>
              <h4>Subtotal</h4>
            </td>
            <td>
              <h5></h5>
            </td>
            <td>
              <p>${{ subtotal }}.00</p>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Shipping</h4>
            </td>
            <td>
              <h5></h5>
            </td>
            <td>
              <p>Flat rate: ${{ flatRate }}.00</p>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Total</h4>
            </td>
            <td>
              <h5></h5>
            </td>
            <td>
              <p>${{ total }}.00</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetails",
  props: {
    orders: {
      type: Array,
      default() {
        return [
          {
            product: "Pixelstore fresh Blackberry",
            quantity: 15,
            total: 500
          },
          {
            product: "Pixelstore fresh Blackberry",
            quantity: 15,
            total: 500
          },
          {
            product: "Pixelstore fresh Blackberry",
            quantity: 15,
            total: 500
          }
        ];
      }
    }
  },
  data() {
    return {
      flatRate: 50
    };
  },
  computed: {
    subtotal() {
      let sbt = 0;
      this.orders.forEach(order => {
        sbt += order.total;
      });

      return sbt;
    },
    total() {
      return this.subtotal + this.flatRate;
    }
  }
};
</script>

<style scoped></style>

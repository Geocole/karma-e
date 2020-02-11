<template>
  <div class="row order_d_inner">
    <div class="col-lg-4">
      <div class="details_item">
        <h4>Order Info</h4>
        <ul class="list">
          <li>
            <a href="#"
              ><span>Order number</span> : {{ order.info.orderNumber }}</a
            >
          </li>
          <li>
            <a href="#"
              ><span>Date</span> :
              {{ $moment.utc(order.info.date).format("MMMM Do YYYY") }}</a
            >
          </li>
          <li>
            <a href="#"><span>Total</span> : USD {{ order.info.total }}</a>
          </li>
          <li>
            <a href="#"
              ><span>Payment method</span> : {{ order.info.paymentMethod }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4">
      <main-address :addr="order.billing">
        <template slot="header">
          <h4>Billing Address</h4>
        </template>
      </main-address>
    </div>
    <div class="col-lg-4">
      <main-address>
        <template slot="header">
          <h4>Shipping Address</h4>
        </template>
      </main-address>
    </div>
  </div>
</template>

<script>
import MainAddress from "./MainAddress";
export default {
  name: "Order",
  props: {
    order: {
      type: Object,
      default() {
        return {
          info: {
            orderNumber: 60235,
            date: new Date(),
            total: 2210,
            paymentMethod: "Check payments"
          },
          address: {
            billing: {
              street: "56/8",
              city: "Los Angeles",
              country: "United States",
              postcode: "36952"
            },
            shipping: {
              street: "56/8",
              city: "Los Angeles",
              country: "United States",
              postcode: "36952"
            }
          }
        };
      }
    }
  },
  components: {
    MainAddress
  }
};
</script>

<style scoped></style>

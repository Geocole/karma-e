<template>
  <div class="order_box">
    <h2>Your Order</h2>
    <ul class="list">
      <li>
        <a href="#">Product <span>Total</span></a>
      </li>
      <li>
        <a href="#"
          >Fresh Blackberry <span class="middle">x 02</span>
          <span class="last">$720.00</span></a
        >
      </li>
      <li>
        <a href="#"
          >Fresh Tomatoes <span class="middle">x 02</span>
          <span class="last">$720.00</span></a
        >
      </li>
      <li>
        <a href="#"
          >Fresh Brocoli <span class="middle">x 02</span>
          <span class="last">$720.00</span></a
        >
      </li>
    </ul>
    <ul class="list list_2">
      <li>
        <a href="#">Subtotal <span>$2160.00</span></a>
      </li>
      <li>
        <a href="#">Shipping <span>Flat rate: $50.00</span></a>
      </li>
      <li>
        <a href="#">Total <span>$2210.00</span></a>
      </li>
    </ul>
    <div class="payment_item">
      <div class="radion_btn">
        <input type="radio" id="f-option5" name="selector" />
        <label for="f-option5">Check payments</label>
        <div class="check"></div>
      </div>
      <p>
        Please send a check to Store Name, Store Street, Store Town, Store State
        / County, Store Postcode.
      </p>
    </div>
    <div class="payment_item active">
      <div class="radion_btn">
        <input type="radio" id="f-option6" name="selector" />
        <label for="f-option6">Paypal </label>
        <img src="~assets/img/product/card.jpg" alt="" />
        <div class="check"></div>
      </div>
      <p>
        Pay via PayPal; you can pay with your credit card if you don’t have a
        PayPal account.
      </p>
    </div>
    <div class="creat_account">
      <input type="checkbox" id="f-option4" name="selector" />
      <label for="f-option4">I’ve read and accept the </label>
      <a href="#">terms & conditions*</a>
    </div>
    <a class="primary-btn" href="#">Proceed to Paypal</a>
  </div>
</template>

<script>
export default {
  name: "OrderBox"
};
</script>

<style scoped></style>

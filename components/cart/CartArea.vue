<template>
  <section class="cart_area">
    <div class="container">
      <div class="cart_inner">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <header-media :img="require('~/assets/img/cart.jpg')">
                    <p>Minimalistic shop for multipurpose use</p>
                  </header-media>
                </td>
                <td>
                  <h5>$360.00</h5>
                </td>
                <td>
                  <product-count></product-count>
                </td>
                <td>
                  <h5>$720.00</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <header-media :img="require('~/assets/img/cart.jpg')">
                    <p>Minimalistic shop for multipurpose use</p>
                  </header-media>
                </td>
                <td>
                  <h5>$360.00</h5>
                </td>
                <td>
                  <product-count></product-count>
                </td>
                <td>
                  <h5>$720.00</h5>
                </td>
              </tr>
              <tr class="bottom_button">
                <td>
                  <a class="gray_btn" href="#">Update Cart</a>
                </td>
                <td></td>
                <td></td>
                <td>
                  <coupon-text></coupon-text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <h5>Subtotal</h5>
                </td>
                <td>
                  <h5>$2160.00</h5>
                </td>
              </tr>
              <tr class="shipping_area">
                <td></td>
                <td></td>
                <td>
                  <h5>Shipping</h5>
                </td>
                <td>
                  <shipping-box></shipping-box>
                </td>
              </tr>
              <tr class="out_button_area">
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div class="checkout_btn_inner d-flex align-items-center">
                    <a class="gray_btn" href="#">Continue Shopping</a>
                    <a class="primary-btn" href="#">Proceed to checkout</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderMedia from "../product/comment/HeaderMedia";
import ProductCount from "../product/ProductCount";
import CouponText from "./CouponText";
import ShippingBox from "./ShippingBox";
export default {
  name: "CartArea",
  components: { ShippingBox, CouponText, ProductCount, HeaderMedia }
};
</script>

<style scoped></style>

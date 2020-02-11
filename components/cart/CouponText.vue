<script>
const links = [
  {
    class: "primary-btn",
    text: "Apply"
  },
  {
    class: "gray_btn",
    text: "Close Coupon"
  }
];

export default {
  name: "CouponText",
  functional: true,
  render(h) {
    return h(
      "div",
      {
        class: ["cupon_text", "d-flex", "align-items-center"]
      },
      [
        h("input", {
          attrs: {
            type: "text",
            placeholder: "Coupon Code"
          }
        }),

        links.map(link => {
          return h("a", { class: link.class }, link.text);
        })
      ]
    );
  }
};
</script>

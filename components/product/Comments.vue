<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="comment_list">
        <review-item v-for="i in 3" :key="i" :is-reply="i % 2 === 0">
          <template slot="header">
            <div>
              <h4>Geocole Geo</h4>
              <h5>
                {{ $moment().format("MMMM Do YYYY, h:mm:ss a") }}
              </h5>
              <a class="reply_btn" href="#">Reply</a>
            </div>
          </template>
        </review-item>
      </div>
    </div>
    <div class="col-lg-6">
      <review-box>
        <h4 slot="header">
          Post a comment
        </h4>
      </review-box>
    </div>
  </div>
</template>

<script>
import HeaderMedia from "./comment/HeaderMedia";
import ReviewItem from "./comment/ReviewItem";
import ReviewBox from "./comment/ReviewBox";
export default {
  name: "Comments",
  components: { ReviewBox, ReviewItem, HeaderMedia },
  props: {
    product: Object
  },
  data() {
    return {
      comments: [{}]
    };
  }
};
</script>

<style scoped></style>

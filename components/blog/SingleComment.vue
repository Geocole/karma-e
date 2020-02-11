<template>
  <div class="single-comment justify-content-between d-flex">
    <div class="user justify-content-between d-flex">
      <div class="thumb">
        <img :src="comment.img" alt="" />
      </div>
      <div class="desc">
        <h5>
          <a href="#">{{ comment.user }}</a>
        </h5>
        <p class="date">
          {{ $moment(new Date()).format("MMMM Do YYYY, h:mm:ss a") }}
        </p>
        <p class="comment">
          {{ comment.comment }}
        </p>
      </div>
    </div>
    <div class="reply-btn">
      <a href="" class="btn-reply text-uppercase">reply</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleComment",
  props: {
    comment: {
      type: Object,
      default() {
        return {
          img: require("~/assets/img/blog/c3.jpg"),
          user: "Annie Stephens",
          date: new Date(),
          comment: "Never say goodbye till the end comes!"
        };
      }
    }
  }
};
</script>

<style scoped></style>

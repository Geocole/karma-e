<template>
  <div class="comments-area">
    <h4>05 Comments</h4>
    <div class="comment-list">
      <single-comment></single-comment>
    </div>
    <div class="comment-list left-padding">
      <single-comment></single-comment>
    </div>
    <div class="comment-list left-padding">
      <single-comment></single-comment>
    </div>
    <div class="comment-list">
      <single-comment></single-comment>
    </div>
    <div class="comment-list">
      <single-comment></single-comment>
    </div>
  </div>
</template>

<script>
import SingleComment from "./SingleComment";
export default {
  name: "CommentArea",
  components: { SingleComment }
};
</script>

<style scoped></style>

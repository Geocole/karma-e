<template functional>
  <div class="single-deal">
    <div class="overlay"></div>
    <img class="img-fluid w-100" :src="props.previewImg" alt="" />
    <a :href="props.mainImg" class="img-pop-up" target="_blank">
      <div class="deal-details">
        <h6 class="deal-title">{{ props.title }}</h6>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Categorise",
  props: {
    previewImg: String,
    mainImg: String,
    title: String
  }
};
</script>

<style scoped></style>

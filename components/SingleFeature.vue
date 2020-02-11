<template>
  <div class="single-features">
    <div class="f-icon">
      <img :src="imgUrl" alt="" />
    </div>
    <h6>{{ title }}</h6>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "SingleFeature",
  props: {
    imgSrc: String,
    title: String,
    description: String
  },
  computed: {
    imgUrl() {
      if (!this.imgSrc) {
        return;
      }

      return require(`../assets/img/features/${this.imgSrc}`); // the module request
    }
  }
};
</script>

<style scoped></style>

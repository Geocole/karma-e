<template>
  <section class="banner-area organic-breadcrumb">
    <div class="container">
      <div
        class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end"
      >
        <div class="col-first">
          <h1>{{ title }}</h1>
          <nav class="d-flex align-items-center">
            <slot name="breadcumbs"></slot>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseBanner",
  props: {
    title: String
  }
};
</script>

<style scoped></style>

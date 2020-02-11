<template functional>
  <div class="common-filter">
    <div class="head">{{ props.head }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CommonFilter",
  props: {
    head: String
  }
};
</script>

<style scoped></style>

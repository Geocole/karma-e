<template functional>
  <ul class="blog_meta list">
    <li>
      <a href="#">{{ props.meta.user }}<i class="lnr lnr-user"></i></a>
    </li>
    <li>
      <a href="#">{{ props.meta.date }}<i class="lnr lnr-calendar-full"></i></a>
    </li>
    <li>
      <a href="#">{{ props.meta.views }} Views<i class="lnr lnr-eye"></i></a>
    </li>
    <li>
      <a href="#"
        >{{ props.meta.comments }} Comments<i class="lnr lnr-bubble"></i
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BlogMeta",
  props: {
    meta: {
      type: Object,
      default() {
        return {
          user: "Mark wiens",
          date: "12 Dec, 2018",
          views: "1.2M",
          comments: 18
        };
      }
    }
  }
};
</script>

<style scoped></style>

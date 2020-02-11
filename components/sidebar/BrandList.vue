<template>
  <form action="#">
    <ul>
      <li class="filter-list" v-for="(brand, index) in brands" :key="index">
        <input
          class="pixel-radio"
          type="radio"
          :id="brand.title.toLowerCase()"
          name="brand"
        />
        <label :for="brand.title.toLowerCase()">
          {{ brand.title }}
          <span>({{ brand.count }})</span>
        </label>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  name: "BrandList",
  data() {
    return {
      brands: [
        {
          title: "Apple",
          count: 29
        },
        {
          title: "Asus",
          count: 10
        },
        {
          title: "Gionee",
          count: 29
        },
        {
          title: "Micromax",
          count: 19
        },
        {
          title: "Samsung",
          count: 19
        }
      ]
    };
  }
};
</script>

<style scoped></style>

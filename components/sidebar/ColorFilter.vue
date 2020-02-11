<template>
  <form action="#">
    <ul>
      <li class="filter-list" v-for="(color, index) in colors" :key="index">
        <input
          class="pixel-radio"
          type="radio"
          :id="formatName(color.name)"
          name="color"
        />
        <label :for="formatName(color.name)">
          {{ color.name }}
          <span>({{ color.count }})</span>
        </label>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  name: "ColorFilter",
  data() {
    return {
      colors: [
        {
          name: "Black",
          count: 29
        },
        {
          name: "Black Leather",
          count: 20
        },
        {
          name: "Black with red",
          count: 15
        },
        {
          name: "Gold",
          count: 29
        },
        {
          name: "Spacegrey",
          count: 19
        }
      ]
    };
  },

  methods: {
    formatName(name) {
      return name.replace(" ", "").toLowerCase();
    }
  }
};
</script>

<style scoped></style>

<template>
  <div class="filter-bar d-flex flex-wrap align-items-center">
    <div class="sorting" v-if="sorting">
      <select class="sorting-select">
        <option
          v-for="(sort, index) in filters"
          :value="sort.value"
          :key="index"
        >
          {{ sort.title }}
        </option>
      </select>
    </div>
    <div class="sorting mr-auto">
      <select class="sorting-select">
        <option v-for="(show, index) in shows" :value="show" :key="index"
          >Show {{ show }}
        </option>
      </select>
    </div>
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from "./Pagination";
export default {
  name: "FilterBar",
  props: {
    sorting: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Pagination
  },

  data() {
    return {
      shows: [10, 20, 30],
      filters: [
        {
          title: "Default sorting",
          value: 1
        },
        {
          title: "Default sorting 2",
          value: 2
        },
        {
          title: "Default sorting 3",
          value: 3
        }
      ]
    };
  }
};
</script>

<style scoped></style>

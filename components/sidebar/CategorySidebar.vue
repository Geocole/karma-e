<template>
  <div class="sidebar-categories">
    <div class="head">Browse Categories</div>
    <ul class="main-categories">
      <li
        class="main-nav-list"
        v-for="(category, index) in categories"
        :key="index"
      >
        <a
          v-b-toggle="category.main.replace(' ', '')"
          aria-expanded="false"
          aria-controls="fruitsVegetable"
          class="_cursor"
        >
          <span class="lnr lnr-arrow-right"></span>
          {{ category.main }}
          <span class="number">({{ category.count }})</span>
        </a>
        <b-collapse :id="category.main.replace(' ', '')">
          <ul>
            <li
              class="main-nav-list child"
              v-for="(_sub, i) in category.subs"
              :key="index + '-' + i"
            >
              <a href="#">
                {{ _sub.name }}
                <span class="number">({{ _sub.count }})</span>
              </a>
            </li>
          </ul>
        </b-collapse>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategorySidebar",
  data() {
    return {
      categories: [
        {
          main: "Fruits and Vegetables",
          count: 55,
          subs: [
            {
              name: "Frozen Fish",
              count: 25
            },
            {
              name: "Dried Fish",
              count: 15
            },
            {
              name: "Fresh Fish",
              count: 58
            },
            {
              name: "Meat Alternatives",
              count: 17
            },
            {
              name: "Meat",
              count: 25
            }
          ]
        },
        {
          main: "Meat and Fish",
          count: 89,
          subs: [
            {
              name: "Frozen Fish",
              count: 25
            },
            {
              name: "Dried Fish",
              count: 15
            },
            {
              name: "Fresh Fish",
              count: 58
            },
            {
              name: "Meat Alternatives",
              count: 17
            },
            {
              name: "Meat",
              count: 25
            }
          ]
        },
        {
          main: "Beverages",
          count: 29,
          subs: [
            {
              name: "Frozen Fish",
              count: 25
            },
            {
              name: "Dried Fish",
              count: 15
            },
            {
              name: "Fresh Fish",
              count: 58
            },
            {
              name: "Meat Alternatives",
              count: 17
            },
            {
              name: "Meat",
              count: 25
            }
          ]
        },
        {
          main: "Home and Cleaning",
          count: 59,
          subs: [
            {
              name: "Frozen Fish",
              count: 25
            },
            {
              name: "Dried Fish",
              count: 15
            },
            {
              name: "Fresh Fish",
              count: 58
            },
            {
              name: "Meat Alternatives",
              count: 17
            },
            {
              name: "Meat",
              count: 25
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
._cursor {
  cursor: pointer;
}
</style>

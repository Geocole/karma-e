<template>
  <section class="category-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div
              v-for="(categorie, index) in categories"
              :key="index"
              :class="categorie.divClass"
            >
              <categorise
                :preview-img="categorie.previewImg"
                :main-img="categorie.mainImg"
                :title="categorie.title"
              ></categorise>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <categorise
            :preview-img="mainCategorise.previewImg"
            :main-img="mainCategorise.mainImg"
            :title="mainCategorise.title"
          >
          </categorise>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Categorise from "./Categorise";

export default {
  name: "CategoriseArea",

  components: {
    categorise: Categorise
  },

  data() {
    return {
      categories: [
        {
          previewImg: require("../assets/img/category/c1.jpg"),
          mainImg: require("../assets/img/category/c1.jpg"),
          title: "Sneaker for Sports",
          divClass: "col-lg-8 col-md-8"
        },
        {
          previewImg: require("../assets/img/category/c2.jpg"),
          mainImg: require("../assets/img/category/c2.jpg"),
          title: "Sneaker for Sports",
          divClass: "col-lg-4 col-md-4"
        },
        {
          previewImg: require("../assets/img/category/c3.jpg"),
          mainImg: require("../assets/img/category/c3.jpg"),
          title: "Product for Couple",
          divClass: "col-lg-4 col-md-4"
        },
        {
          previewImg: require("../assets/img/category/c4.jpg"),
          mainImg: require("../assets/img/category/c4.jpg"),
          title: "Sneaker for Sports",
          divClass: "col-lg-8 col-md-8"
        }
      ],
      mainCategorise: {
        previewImg: require("../assets/img/category/c5.jpg"),
        mainImg: require("../assets/img/category/c5.jpg"),
        title: "Sneaker for Sports",
        divClass: "col-lg-8 col-md-8"
      }
    };
  },
  mounted() {
    $(".img-pop-up").magnificPopup({
      type: "image",
      gallery: {
        enabled: true
      }
    });
  }
};
</script>

<style scoped></style>

<template>
  <article class="row blog_item">
    <div class="col-md-3">
      <blog-info :blog="blog"></blog-info>
    </div>
    <div class="col-md-9">
      <blog-post :blog="blog"></blog-post>
    </div>
  </article>
</template>

<script>
import BlogInfo from "./BlogInfo";
import BlogPost from "./BlogPost";
import { DefaultTags } from "../../utils/defaultTags";

export default {
  name: "BlogItem",
  components: { BlogPost, BlogInfo },
  props: {
    blog: {
      type: Object,
      default() {
        return {
          img: require(`~/assets/img/blog/main-blog/m-blog-1.jpg`),
          title: "Astronomy Binoculars A Great Alternative",
          description:
            "MCSE boot camps have its supporters and its detractors. Some people do not\n" +
            "                understand why you should have to spend money on boot camp when you can get\n" +
            "                the MCSE study materials yourself at a fraction.",
          tags: DefaultTags,
          meta: {
            user: "Mark wiens",
            date: "12 Dec, 2018",
            views: "1.2M",
            comments: 18
          }
        };
      }
    }
  }
};
</script>

<style scoped></style>

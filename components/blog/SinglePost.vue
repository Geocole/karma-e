<template>
  <div class="single-post row">
    <div class="col-lg-12">
      <div class="feature-img">
        <img class="img-fluid" :src="blog.img" alt="" />
      </div>
    </div>
    <div class="col-lg-3  col-md-3">
      <blog-info>
        <ul class="social-links">
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-github"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-behance"></i></a>
          </li>
        </ul>
      </blog-info>
    </div>

    <div class="col-lg-9 col-md-9 blog_details">
      <h2>{{ blog.title }}</h2>
      <div v-html="blog.content"></div>
    </div>
    <div class="col-lg-12" v-html="blog.otherContent"></div>
  </div>
</template>

<script>
import BlogInfo from "./BlogInfo";
export default {
  name: "SinglePost",
  components: { BlogInfo },
  props: {
    blog: {
      type: Object,
      default() {
        return {
          img: require("~/assets/img/blog/feature-img1.jpg"),
          title: "Astronomy Binoculars A Great Alternative",
          content:
            "<div>\n" +
            '                <p class="excert">\n' +
            "                    MCSE boot camps have its supporters and its detractors. Some people do not understand\n" +
            "                    why you should have to spend money on boot camp when you can get the MCSE study\n" +
            "                    materials yourself at a fraction.\n" +
            "                </p>\n" +
            "                <p>\n" +
            "                    Boot camps have its supporters and its detractors. Some people do not understand why\n" +
            "                    you should have to spend money on boot camp when you can get the MCSE study materials\n" +
            "                    yourself at a fraction of the camp price. However, who has the willpower to actually\n" +
            "                    sit through a self-imposed MCSE training. who has the willpower to actually sit through\n" +
            "                    a self-imposed\n" +
            "                </p>\n" +
            "                <p>\n" +
            "                    Boot camps have its supporters and its detractors. Some people do not understand why\n" +
            "                    you should have to spend money on boot camp when you can get the MCSE study materials\n" +
            "                    yourself at a fraction of the camp price. However, who has the willpower to actually\n" +
            "                    sit through a self-imposed MCSE training. who has the willpower to actually sit through\n" +
            "                    a self-imposed\n" +
            "                </p>\n" +
            "            </div>",
          otherContent:
            '<div class="col-lg-12">\n' +
            '            <div class="quotes">\n' +
            "                MCSE boot camps have its supporters and its detractors. Some people do not understand\n" +
            "                why you should have to spend money on boot camp when you can get the MCSE study\n" +
            "                materials yourself at a fraction of the camp price. However, who has the willpower to\n" +
            "                actually sit through a self-imposed MCSE training.\n" +
            "            </div>\n" +
            '            <div class="row">\n' +
            '                <div class="col-6">\n' +
            '                    <img class="img-fluid" src="~/assets/img/blog/post-img1.jpg" alt="">\n' +
            "                </div>\n" +
            '                <div class="col-6">\n' +
            '                    <img class="img-fluid" src="~/assets/img/blog/post-img2.jpg" alt="">\n' +
            "                </div>\n" +
            '                <div class="col-lg-12 mt-25">\n' +
            "                    <p>\n" +
            "                        MCSE boot camps have its supporters and its detractors. Some people do not\n" +
            "                        understand why you should have to spend money on boot camp when you can get the\n" +
            "                        MCSE study materials yourself at a fraction of the camp price. However, who has\n" +
            "                        the willpower.\n" +
            "                    </p>\n" +
            "                    <p>\n" +
            "                        MCSE boot camps have its supporters and its detractors. Some people do not\n" +
            "                        understand why you should have to spend money on boot camp when you can get the\n" +
            "                        MCSE study materials yourself at a fraction of the camp price. However, who has\n" +
            "                        the willpower.\n" +
            "                    </p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>"
        };
      }
    }
  }
};
</script>

<style scoped></style>

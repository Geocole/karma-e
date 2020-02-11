<script>
import Tag from "./Tag";
import BlogMeta from "./BlogMeta";
import { DefaultTags } from "../../utils/defaultTags";

export default {
  name: "BlogInfo",
  //components: {BlogMeta, Tag},
  props: {
    blog: {
      type: Object,
      default() {
        return {
          img: require("~/assets/img/blog/cat-post/cat-post-3.jpg"),
          title: "Social Life",
          description: "Enjoy your social life together",
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
  },
  functional: true,

  render(h, { props, children }) {
    const tags = props.blog.tags;
    const meta = props.blog.meta;

    return h("div", { class: ["blog_info", "text-right"] }, [
      h(Tag, { props: { tags } }),

      h(BlogMeta, { props: { meta } }),

      children
    ]);
  }
};
</script>

<style scoped></style>

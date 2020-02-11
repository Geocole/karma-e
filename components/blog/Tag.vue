<script>
import { DefaultTags } from "../../utils/defaultTags";

export default {
  name: "Tag",
  functional: true,
  props: {
    tags: {
      type: Array,
      default() {
        return DefaultTags;
      }
    }
  },
  render(h, { props }) {
    const tags = props.tags;
    return h(
      "div",
      { class: "post_tag" },
      tags.map(tag => {
        return h(
          "a",
          {
            attrs: {
              href: "#"
            },
            class: {
              active: tag.active
            }
          },
          tag.name + ", "
        );
      })
    );
  }
};
</script>

<style scoped></style>

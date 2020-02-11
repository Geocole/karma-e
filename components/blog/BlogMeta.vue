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
                    }
                }
            }
        },
        render(h) {
            return (
                <ul class="blog_meta list">
                    <li><a href="#">{{this.meta.user}}<i class="lnr lnr-user"></i></a></li>
                    <li><a href="#">{{this.meta.date}}<i class="lnr lnr-calendar-full"></i></a></li>
                    <li><a href="#">{{this.meta.views}} Views<i class="lnr lnr-eye"></i></a></li>
                    <li><a href="#">{{this.meta.comments}} Comments<i class="lnr lnr-bubble"></i></a></li>
                </ul>

            )
        }
    }
</script>

<style scoped>

</style>
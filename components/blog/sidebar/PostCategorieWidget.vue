<template>
    <aside class="single_sidebar_widget post_category_widget">
        <h4 class="widget_title">Post Catgories</h4>
        <ul class="list cat-list">
            <li v-for="(category, index) in categories" :key="index">
                <a href="#" class="d-flex justify-content-between">
                    <p>{{ category.title}}</p>
                    <p>{{ category.count }}</p>
                </a>
            </li>
        </ul>
        <div class="br"></div>
    </aside>
</template>

<script>
    export default {
        name: "PostCategorieWidget",
        data(){
            return {
                categories: [
                    {
                        title: "Technology",
                        count: 25
                    },
                    {
                        title: "Lifestyle",
                        count: 44
                    },
                    {
                        title: "Fashion",
                        count: 59
                    },
                    {
                        title: "Art",
                        count: 29
                    },
                    {
                        title: "Food",
                        count: 29
                    },
                    {
                        title: "Architecture",
                        count: 9
                    },
                    {
                        title: "Adventure",
                        count: 15
                    }

                ]
            }
        }
    }
</script>

<style scoped>

</style>
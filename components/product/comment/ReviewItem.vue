<template>
    <div class="review_item" :class="{'reply': isReply}">
        <header-media :img="comment.user.img">
            <slot name="header"></slot>
        </header-media>
        <p>{{ comment.text }}</p>
    </div>
</template>

<script>

    import HeaderMedia from "./HeaderMedia";
    export default {
        name: "ReviewItem",
        components: {HeaderMedia},
        props: {
            comment: {
                type: Object,
                default() {
                    return {
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                            "            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n" +
                            "            commodo",
                        user: {
                            img:  require('~/assets/img/product/review-1.png')
                            ,
                            userName:"Blake Ruiz"
                            ,
                            date: new Date()
                        }
                    }
                },
            },
            isReply: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>

</style>
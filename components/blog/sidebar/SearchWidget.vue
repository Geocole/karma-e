<template>
    <aside class="single_sidebar_widget search_widget">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search Posts" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button"><i class="lnr lnr-magnifier"></i></button>
            </span>
        </div><!-- /input-group -->
        <div class="br"></div>
    </aside>
</template>

<script>
    export default {
        name: "SearchWidget"
    }
</script>

<style scoped>

</style>
<template functional>
    <div class="search_input" id="search_input_box">
        <div class="container">
            <form class="d-flex justify-content-between">
                <input
                        class="form-control"
                        id="search_input"
                        placeholder="Search Here"
                        type="text"
                />
                <button class="btn" type="submit"></button>
                <span
                        class="lnr lnr-cross"
                        id="close_search"
                        title="Close Search"
                ></span>
            </form>
        </div>
        l
    </div>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style scoped>

</style>
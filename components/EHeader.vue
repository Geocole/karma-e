<template>
  <header
    class="header_area sticky-header"
    style="max-height: 80px !important;"
  >
    <div class="main_menu">
      <NavBar></NavBar>
    </div>
    <search-bar/>
  </header>
</template>

<script>
import NavBar from "./header/NavBar";
import SearchBar from "./header/SearchBar";
export default {
  name: "EHeader",
  components: { SearchBar, NavBar }
};
</script>

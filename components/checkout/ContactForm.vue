<template>
  <form
    class="row contact_form"
    action="#"
    method="post"
    novalidate="novalidate"
  >
    <div class="col-md-6 form-group p_star">
      <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        v-model="name"
      />
      <span class="placeholder" data-placeholder="Username or Email"></span>
    </div>
    <div class="col-md-6 form-group p_star">
      <input
        type="password"
        class="form-control"
        id="password"
        name="password"
        v-model="password"
      />
      <span class="placeholder" data-placeholder="Password"></span>
    </div>
    <div class="col-md-12 form-group">
      <button type="submit" value="submit" class="primary-btn">login</button>
      <div class="creat_account">
        <input
          type="checkbox"
          id="f-option"
          name="selector"
          v-model="selector"
        />
        <label for="f-option">Remember me</label>
      </div>
      <a class="lost_pass" href="#">Lost your password?</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      password: "",
      selector: ""
    };
  }
};
</script>

<style scoped></style>

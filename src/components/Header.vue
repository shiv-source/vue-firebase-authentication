<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand ml-5">DemoApp </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link active">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active"
              >About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active"
              >Contact-Us
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="navbar-nav mr-auto mr-left">
          <li class="nav-item" v-if=!this.$store.state.isLoggedin>
            <router-link to="/signup" class="nav-link active"
              >Signup
            </router-link>
          </li>
          <li class="nav-item" v-if=!this.$store.state.isLoggedin>
            <router-link to="/login" class="nav-link active"
              >Login
            </router-link>
          </li>

          <li class="nav-item" v-if=this.$store.state.isLoggedin>
            <a class="nav-link active"
              >{{ this.$store.state.loggedinUserName }}
            </a>
          </li>
          <li class="nav-item" v-if=this.$store.state.isLoggedin>
            <button @click="signOut" class="btn btn-secondary">Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    signOut() {
      this.$store.dispatch("userSignOut");
    },
  },
};
</script>

<style scoped>
</style>
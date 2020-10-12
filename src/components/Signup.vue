<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
        <div class="card">
          <div class="card-title text-center"><h2>Signup Form</h2></div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="email"> Email </label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Email..."
                  v-model="email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password"> Password </label>
                <input
                  type="password"
                  placeholder="Password..."
                  id="password"
                  class="form-control"
                  v-model="password"
                  required
                />
              </div>
              <div class="text-center">
                <button class="btn btn-primary btn-lg btn-block">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      let credential = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("signupWithEmailAndPassword", credential);
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  top: 130px;
  left: 350px;
  font-family: "Sansita Swashed", cursive;
  background-color: lightgray;
}
</style>
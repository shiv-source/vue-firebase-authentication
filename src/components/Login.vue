<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
        <div class="card">
          <div class="card-title text-center"><h2>Login Form</h2></div>
          <div class="card-body">
            <form @submit="submitLogin">
              <div class="form-group">
                <label for="email"> Email </label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Email..."
                  v-model="email"
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
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg btn-block">
                  Login
                </button>
              </div>
            </form>
            <div class="text-center"><span> or </span></div>
            <div class="mt-2">
              <button
                @click="logInWithGoogle"
                class="btn btn-block btn-social btn-google"
              >
                <span class="fa fa-google"></span> Sign in with Google
              </button>
            </div>
            <div class="mt-2">
              <button @click="logInWithFacebook" class="btn btn-block btn-social btn-facebook">
                <span class="fa fa-facebook"></span> Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    submitLogin(e) {
      e.preventDefault();
      let credential = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("userLoginWithEmailAndPassword", credential);
    },

    logInWithGoogle() {
      this.$store.dispatch("googleLogin");
    },
    logInWithFacebook() {
      this.$store.dispatch("facebookLogin");
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  top: 90px;
  left: 350px;
  font-family: "Sansita Swashed", cursive;
  background-color: lightgray;
}
</style>
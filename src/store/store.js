import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedin: false,
    loggedinUserName: null,
    isSignup: false,
    signUpUser: null,
  },
  mutations: {
    SIGN_UP_USER(state, data) {
      state.isSignup = true;
      state.signUpUser = data;
    },
    LOGGED_IN_USER(state, data) {
      state.isLoggedin = true;
      state.loggedinUserName = data;
    },
    USER_LOG_OUT(state) {
      state.isLoggedin = false;
      state.isSignup = false;
      state.loggedinUserName = null;
      state.signUpUser = null;
    },
  },
  actions: {
    userLoginWithEmailAndPassword({ commit }, credential) {
      let email = credential.email;
      let password = credential.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          let data = res.user.email;
          alert("You are loggedin successfully");
          commit("LOGGED_IN_USER", data);
        })
        .catch((err) => console.log(err));
    
    },

    signupWithEmailAndPassword({ commit }, credential) {
      let email = credential.email;
      let password = credential.password;

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          console.log(res.user.email);
          let data = res.user.email;
          alert("Your account created successfully");
          commit("SIGN_UP_USER", data);
        })
        .catch((err) => console.log(err));
    },

    userSignOut({ commit }) {
      commit("USER_LOG_OUT");
      alert("You are successfully Logged Out ");
    },

    googleLogin({ commit }) {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res.user.displayName);
          let data = res.user.displayName;
          commit("LOGGED_IN_USER", data);
          alert("You are loggedin successfully");
        })
        .catch((err) => console.log(err));
    },

    facebookLogin() {
      var provider = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res);
          alert("You are loggedin successfully");
          // let data = res.user.displayName;
          // commit("LOGGED_IN_USER", data);
        })
        .catch((err) => console.log(err));
    },
  },
});

export default store;

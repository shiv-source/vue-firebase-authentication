import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import 'font-awesome/css/font-awesome.css'
import router from './routes/router';
import "bootstrap-social/bootstrap-social.css";
import store from './store/store';
import * as firebase from 'firebase';
import { firebaseEnv } from './config/firebase';




Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(Vuex);




  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: firebaseEnv.apiKey,
    authDomain: firebaseEnv.authDomain ,
    databaseURL: firebaseEnv.databaseURL,
    projectId: firebaseEnv.projectId,
    storageBucket: firebaseEnv.storageBucket ,
    messagingSenderId: firebaseEnv.messagingSenderId,
    appId: firebaseEnv.appId
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

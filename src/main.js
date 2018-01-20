// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import {sync} from 'vuex-router-sync'
import Vuefire from 'vuefire'
import firebase from './services/firebase'
import * as actions from './store/actionsTypes'
import { mapActions } from 'vuex'
import Vuetify from 'vuetify'
require('vuetify/dist/vuetify.min.css');

Vue.use(Vuefire);
Vue.use(Vuetify);
Vue.config.productionTip = false;

sync(store,router);


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  methods: {
    ...mapActions([
      actions.initializeRestaurants
    ])
  },
  created: function () {
    this.initializeRestaurants()
  },
  components: {App}
});

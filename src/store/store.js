import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './gettersTypes';
import {restaurantsModule} from './modules/restaurantsModule'
import * as routeNames from '../router/routeNames';


Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    restaurants: restaurantsModule
  },
  getters:{
    [getters.currentRestaurant](state) {
      if(state.route.name === routeNames.RESTAURANT_DETAILS){
        return state.restaurants.restaurants
          .filter((restaurant) => restaurant.id === Number(state.route.params.id))[0];
      }
    }
  }
});

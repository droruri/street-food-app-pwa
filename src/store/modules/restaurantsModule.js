import * as arrayFunctions from '../../functions/functions';
import * as _ from 'lodash';
import * as mutations from '../mutationTypes';
import * as getters from '../gettersTypes';
import * as actions from '../actionsTypes';
import * as firebase from 'firebase';
import Restaurant from "../../classes/Restaurant";

export const restaurantsModule = {
  state: {
    restaurants: []
  },
  getters: {
    [getters.restaurants](state) {
      return state.restaurants
    }
  },
  mutations: {
    [mutations.ADD_RESTAURANT](state, restaurant) {
      state.restaurants.push(restaurant);
    },
    [mutations.EDIT_RESTAURANT](state, restaurant) {
      const index = _.findIndex(state.restaurants, (arrayRestaurant) => arrayRestaurant.id === restaurant.id)
      arrayFunctions.updateObjectInArrayByIndex(restaurant, state.restaurants, index);
    },
    [mutations.DELETE_RESTAURANT](state, restaurant) {
      const index = _.findIndex(state.restaurants, (arrayRestaurant) => arrayRestaurant.id === restaurant.id)
      arrayFunctions.deleteObjectFromArrayByIndex(state.restaurants, index);
    },
    [mutations.INITIALIZE_RESTAURANTS](state, restaurants) {
      state.restaurants = _.clone(restaurants);
    }
  },
  actions: {
    [actions.addRestaurant]({commit}, restaurant) {
      let newRestaurant = firebase.database().ref('restaurant').push(restaurant);
      restaurant.id = newRestaurant.key;
      commit(mutations.ADD_RESTAURANT, restaurant);
    },
    [actions.editRestaurant]({commit}, restaurant) {
      commit(mutations.EDIT_RESTAURANT, restaurant);
    },
    [actions.deleteRestaurant]({commit}, restaurnat) {
      commit(mutations.DELETE_RESTAURANT, restaurnat)
    },
    [actions.initializeRestaurants]({commit}) {
      console.log(this);
      firebase.database().ref('restaurant').once('value')
        .then((data) => {
          let restaurants = [];
          const obj = data.val();
          for (let key in obj) {
            restaurants.push(
              new Restaurant(key, obj[key].name, obj[key].description, obj[key].displayPhoto, obj[key].address)
            )
          }
          commit(mutations.INITIALIZE_RESTAURANTS, restaurants)
        });
    },
  }
};

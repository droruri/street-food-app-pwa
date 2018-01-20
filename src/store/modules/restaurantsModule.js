import * as arrayFunctions from '../../functions/functions';
import * as _ from 'lodash';
import * as mutations from '../mutationTypes';
import * as getters from '../gettersTypes';
import * as actions from '../actionsTypes';
import * as firebase from 'firebase';


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
      arrayFunctions.addObjectToArray(restaurant, state.restaurants);
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
      commit(mutations.ADD_RESTAURANT, restaurant);
    },
    [actions.editRestaurant]({commit}, restaurant) {
      commit(mutations.EDIT_RESTAURANT, restaurant);
    },
    [actions.deleteRestaurant]({commit}, restaurnat) {
      commit(mutations.DELETE_RESTAURANT, restaurnat)
    },
    [actions.initializeRestaurants]({commit}) {
      console.log(this.$parent);
      firebase.database().ref('restaurant').once('value')
        .then((data) => {
          commit(mutations.INITIALIZE_RESTAURANTS, data.val())
        });
    },
  }
};

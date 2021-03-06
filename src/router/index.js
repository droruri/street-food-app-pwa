import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '@/components/MainScreen'
import RestaurantDetails from '@/components/RestaurantDetails'
import AddRestaurant from '@/components/AddRestaurant'
import CameraView from '@/components/CameraView'
import * as routeNames from './routeNames';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: routeNames.MAIN_SCREEN,
      component: MainScreen
    },
    {
      path: '/restaurant-details/:id',
      name: routeNames.RESTAURANT_DETAILS,
      component: RestaurantDetails
    },
    {
      path: '/add-restaurant',
      name: routeNames.ADD_RESTAURANT,
      component: AddRestaurant
    },
    {
      path:'/camera',
      name:routeNames.CAMERA,
      component:CameraView
    }
  ]
})

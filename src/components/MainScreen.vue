<template>
    <v-layout row wrap>
       <v-flex sm6 xs12 v-for="restaurant in restaurants" :key="restaurant['.key']">
        <v-card>
          <v-card-media :src="restaurant.displayPhoto" height="500px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ restaurant.name }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">הוסף ביקורת</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  import {mapGetters} from 'vuex'
  import * as getters from '../store/gettersTypes';

  export default {
    computed: {
      ...mapGetters([
        getters.restaurants
      ])
    },
    methods:{
      getRestaurantDetails(id){
        this.$router.push({path: `/restaurant-details/${id}`});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

<template>
    <v-layout row wrap>
      <v-flex sm6 offset-sm3>
        <v-card v-for="restaurant in restaurants" :key="restaurant.id">
          <v-card-media :src="restaurant.displayPhoto" height="200px" width="200px">
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
      },
      onDialogOpen(){
        console.log(this.$refs);
      },
      onAccept(){
        console.log('bla');
      },
      onDecline(){
        console.log('bla');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

<template>
  <v-layout column wrap>
    <v-form v-model="valid">
      <v-flex xs12 sm6 md4>
        <v-text-field
          name="restaurant-name"
          label="שם המסעדה"
          v-model="restaurant.name"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-text-field
          label="תיאור"
          v-model="restaurant.description"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md4 dir="rtl">
        <vuetify-google-autocomplete
          id="add-restaurant"
          classname="form-control"
          label="כתובת"
          @placechanged="getAddressData"
        >
        </vuetify-google-autocomplete>
      </v-flex>
      <v-flex xs12 sm6 md4 dir="rtl">
        <v-btn to="/camera" fab dark small color="red">
          <v-icon dark>camera</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 md4 dir="rtl">
        <v-btn color="primary" @click="submit()">הוסף מסעדה</v-btn>
      </v-flex>
    </v-form>
  </v-layout>
</template>

<script>
  import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
  import {mapActions} from 'vuex'
  import * as actionTypes from '../store/actionsTypes'
  import Restaurant from "../classes/Restaurant";

  export default {
    components: {
      VuetifyGoogleAutocomplete
    },
    data() {
      return {
        valid: false,
        restaurant:{
          name:'',
          description:'',
          address:''
        }
      }
    },
    methods:{
      ...mapActions([
        actionTypes.addRestaurant
      ]),
      getAddressData(addressData, placeResultData) {
        this.restaurant.address = addressData;
      },
      submit(){
        this.addRestaurant(new Restaurant(null, this.restaurant.name,
          this.restaurant.description, null, this.restaurant.address));
      }
    }
  };
</script>

<style scoped>

</style>

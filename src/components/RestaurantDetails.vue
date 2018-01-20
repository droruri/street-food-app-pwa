<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-tablet">
      <h4 style="font-weight: bold"></h4>
      <h6>אודות המסעדה</h6>
      <p>{{currentRestaurant.description}}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as getters from '../store/gettersTypes';

  export default {
      computed: {
        ...mapGetters([
          getters.currentRestaurant
        ])
      }
    };
</script>

<style scoped>

</style>

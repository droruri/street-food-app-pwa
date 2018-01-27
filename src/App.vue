<template>
  <v-app id="app">
    <v-navigation-drawer app class="hidden-md-and-up" fixed v-model="drawer" right>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-content>
            <v-list-tile-title>מסך ראשי</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/add-restaurant">
          <v-list-tile-content>
            <v-list-tile-title>הוסף מסעדה</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-content>
            <v-list-tile-title>מפה</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue" fixed dark app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>אוכל רחוב יא חביבי</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">מסך ראשי</v-btn>
        <v-btn flat to="/add-restaurant">הוסף מסעדה</v-btn>
        <v-btn flat>מפה</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container grid-list-lg fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    drawer: null
  }),
}
</script>

<style>

body {
  margin: 0;
}

#app {

}


</style>

import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyB8EKIbcz6kbKgBour5uzFt2oNMRwqxbLo",
  authDomain: "street-food-app-pwa.firebaseapp.com",
  databaseURL: "https://street-food-app-pwa.firebaseio.com",
  storageBucket: "street-food-app-pwa.appspot.com",
  messagingSenderId: "1068304173521"
};
firebase.initializeApp(config);

export default {
  database: firebase.database()
}

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBv6JgAJxubRB51Hs_KyE0CBLZIK4OmRYo",
    authDomain: "projectplanreact.firebaseapp.com",
    databaseURL: "https://projectplanreact.firebaseio.com",
    projectId: "projectplanreact",
    storageBucket: "",
    messagingSenderId: "483608695138",
    appId: "1:483608695138:web:7c6960028e9f069e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;
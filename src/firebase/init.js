import firebase from 'firebase'
import 'firebase/analytics';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCHxHov5FzKnKK_dQ09_CT0ymDogkA70eY",
  authDomain: "phoenixsmoothies-yousmoothie.firebaseapp.com",
  databaseURL: "https://phoenixsmoothies-yousmoothie.firebaseio.com",
  projectId: "phoenixsmoothies-yousmoothie",
  storageBucket: "phoenixsmoothies-yousmoothie.appspot.com",
  messagingSenderId: "779439282118",
  appId: "1:779439282118:web:8c3ac55dad88e2c93e84c7",
  measurementId: "G-7Q21FCX0K5"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

firebase.analytics();

export default firebaseApp.firestore()
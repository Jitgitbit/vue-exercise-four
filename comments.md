vue init webpack vue-exercise-four

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

<script>
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

npm install firebase --save

npm install slugify --save

firebase login

firebase init

firebase deploy
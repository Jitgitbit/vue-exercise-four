vue init webpack vue-exercise-four

npm run dev

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

____________________________________________________________________
NOTE:
for making sure all is well protecting the environments folder:
add a line in .gitignore saying: firebase/
git rm -r --cached src/firebase
git add .
git commit -m 'Removed the now ignored directory "firebase"'
git push origin master
_____________________________________________________________________

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "###############################",
    authDomain: "phoenixsmoothies-yousmoothie.firebaseapp.com",
    databaseURL: "https://phoenixsmoothies-yousmoothie.firebaseio.com",
    projectId: "phoenixsmoothies-yousmoothie",
    storageBucket: "phoenixsmoothies-yousmoothie.appspot.com",
    messagingSenderId: "###########",
    appId: "#:###########:###:################",
    measurementId: "#-#########"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

npm install firebase --save

npm install slugify --save

firebase login

firebase init

npm run build

firebase deploy

npm install slugify
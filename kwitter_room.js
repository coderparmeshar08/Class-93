var firebaseConfig = {
      apiKey: "AIzaSyCEzMbRTvSY6d9BZ3PLMrPsndxL6tM5zTc",
      authDomain: "kwitter-6d579.firebaseapp.com",
      databaseURL: "https://kwitter-6d579-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d579",
      storageBucket: "kwitter-6d579.appspot.com",
      messagingSenderId: "822624067609",
      appId: "1:822624067609:web:b7551a44199e83c8600a88"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
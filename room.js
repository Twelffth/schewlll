// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAi3pDk0ls1v89lDaYwAZtggeaRmNyyGLI",
    authDomain: "whsaaaaaaaaaa.firebaseapp.com",
    databaseURL: "https://whsaaaaaaaaaa-default-rtdb.firebaseio.com",
    projectId: "whsaaaaaaaaaa",
    storageBucket: "whsaaaaaaaaaa.appspot.com",
    messagingSenderId: "503144677412",
    appId: "1:503144677412:web:1ed460ddc4d8cfe02e58b1"
  };

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
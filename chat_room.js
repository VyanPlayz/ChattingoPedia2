// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBEpaol-TylW3eio0tKgX1t3IGKrrzzjkY",
    authDomain: "letschat-web-app-ae6ee.firebaseapp.com",
    databaseURL: "https://letschat-web-app-ae6ee-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-ae6ee",
    storageBucket: "letschat-web-app-ae6ee.appspot.com",
    messagingSenderId: "697370552038",
    appId: "1:697370552038:web:1e4cc064e577970c517d27"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
      document.getElementById("wlcm_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("roomname",room_name);
        
            window.location = "chat_page.html";

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
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRJgTKozOp0UQUPmvsl_cz1O2WqhFq7iY",
  authDomain: "kwitter-167f0.firebaseapp.com",
  databaseURL: "https://kwitter-167f0-default-rtdb.firebaseio.com",
  projectId: "kwitter-167f0",
  storageBucket: "kwitter-167f0.appspot.com",
  messagingSenderId: "808477619916",
  appId: "1:808477619916:web:ce2e1a3c69d3d0b205f469"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room-code",room_name);
window.location="kwitter_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name -"+ Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room-code" ,name);
window.location="kwitter_page.html"
} 

function logout(){
 localStorage.removeItem("room-code");
localStorage.removeItem("user_name");
window.location="index.html"
}
const firebaseConfig = {
    apiKey: "AIzaSyCRJgTKozOp0UQUPmvsl_cz1O2WqhFq7iY",
    authDomain: "kwitter-167f0.firebaseapp.com",
    databaseURL: "https://kwitter-167f0-default-rtdb.firebaseio.com",
    projectId: "kwitter-167f0",
    storageBucket: "kwitter-167f0.appspot.com",
    messagingSenderId: "808477619916",
    appId: "1:808477619916:web:ce2e1a3c69d3d0b205f469"
  };
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room-code");


  function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
   name:user_name,
   message:msg,
   like:0  
  });
 document.getElementById("msg").value="";     
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
    firebase_message_id = childKey;
     message_data = childData;
//start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up '>Like: "+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//end code
} }); }); }
getData();

function updatelike(message_id){
  console.log("clicked on like button "+message_id );
  button_id=message_id;
 likes=document.getElementById(button_id).value;
 updatedlikes=Number(likes)+1;
 console.log(updatedlikes);
 
 firebase.database().ref(room_name).child(message_id).update({
 like:updatedlikes  
 });
}

  function logout(){
    localStorage.removeItem("room-code");
   localStorage.removeItem("user_name");
   window.location="index.html"
   }
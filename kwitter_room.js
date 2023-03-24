firebaseConfig = {
    apiKey: "AIzaSyC_W5GKjksZ9ZNy_rWOewpfZuGvzBERo0E",
    authDomain: "project-893c4.firebaseapp.com",
    projectId: "project-893c4",
    storageBucket: "project-893c4.appspot.com",
    messagingSenderId: "1086392269098",
    appId: "1:1086392269098:web:2dd5b0898ad21886748653",
    measurementId: "G-XR36QLJVW7"
  };

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    Room_name = document.getElementById("Room_name").value;
    firebase.database().ref("/").child(Room_name).update({
         purpose : "adding room name",
         }); 
   localStorage.setItem("Room_name", Room_name);
    window.location = "kwitter_page.html"; 
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
    {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
   { 
childKey = childSnapshot.key; 
Room_names = childKey;

        console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row; 
        });
    });
}
getData();

function redirectToRoomName(name) { 
    console.log(name); 
    localStorage.setItem("Room_name", name);
    window.location = "kwitter_page.html"; 
}

function logout() { 
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("Room_name"); 
    window.location = "index.html";
}


// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDNac_5oM4YOaCDa6RApkEmrWCiX0OjECs",
    authDomain: "let-s-chat-web-app-79a7b.firebaseapp.com",
    projectId: "let-s-chat-web-app-79a7b",
    storageBucket: "let-s-chat-web-app-79a7b.appspot.com",
    messagingSenderId: "711658472064",
    appId: "1:711658472064:web:a849b5ad4c336d65d49c65",
    measurementId: "G-7QFXGVRZ4Q"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




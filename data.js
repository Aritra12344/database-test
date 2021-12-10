var firebaseConfig = {
    apiKey: "AIzaSyBPiDrV_hD-d8qTi5m_S5nEjmQ7kMhwkzs",
    authDomain: "need-electronics.firebaseapp.com",
    databaseURL: "https://need-electronics-default-rtdb.firebaseio.com",
    projectId: "need-electronics",
    storageBucket: "need-electronics.appspot.com",
    messagingSenderId: "450397395955",
    appId: "1:450397395955:web:44cf4c610a95ef0bec1086",
    measurementId: "${config.measurementId}"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
  
  
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBpZ1H4PyiNAwg6i-tEVOw0F3mffQOQ_gE",
    authDomain: "sign-up-fd3cb.firebaseapp.com",
    projectId: "sign-up-fd3cb",
    storageBucket: "sign-up-fd3cb.appspot.com",
    messagingSenderId: "37605475750",
    appId: "1:37605475750:web:b94005a30dc8eb4b6d3b67",
    measurementId: "G-5KZMWRQCSS"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize variables
const auth = firebase.auth();
const database = firebase.database();

// set up our register function

function login(){
    email= document.getElementById('login_email').value
    password = document.getElementById('login_password').value
}

// validate input field

if(validate_email(email) == false  || validate_password(password) == false){
    alert('Email or password is Outta Line');
    return 
}

// move on to auth 

auth.signInWithEmailAndPassword(email,password)
.then(function(){

    var user = auth.currentUser

    // Add this to firebase database

    var database_ref = database.ref()
    
    // create user data
    var user_data = {
        email : email, 
        password : password,

        last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user_data)

    alert('user created');
})

.catch(function(error){
    var error_code = error.code
    var error_message = error.message

    alert(error_message)

})



function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/

    if(expression.test(email) == true){
        return true;
    }else{
        return false;
    }
}

function validate_password(password){
    if(password < 6){
        return false;
    }
    else{
        return true;
    }
}


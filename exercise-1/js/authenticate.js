// JavaScript authentication file
$(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAXw7Fqzj9Kcq8XMXv2cUtMPvqZMwl2YWA",
        authDomain: "my-awesome-project-2-c5409.firebaseapp.com",
        databaseURL: "https://my-awesome-project-2-c5409.firebaseio.com",
        storageBucket: "my-awesome-project-2-c5409.appspot.com",
        messagingSenderId: "959791294379"
    };
    
    firebase.initializeApp(config);

    $('#signupform').submit(function(event) {
        event.preventDefault();
        signUp();
    });

    $('#signin-form').submit(function(event) {
        event.preventDefault();
        signIn();
    });

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $("#email").val();
        var password = $("#password").val();
        var displayName = $("#displayName").val();

        // Create user, then set the user's display name
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
            // Set display name
            console.log("Test")
            user.updateProfile({
                'displayName': displayName,
                //'photoURL':'PHOTO/URL/HERE'
            }).then(function() {
                // Do something after the user's profile has been updated!
                // window.location = 'index.html';
            });
        }).catch(function (error) {
            console.log(error);
        });
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $("#email").val();
        var password = $("#password").val();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function() {
                window.location = 'index.html';
                
            })
            .catch(function(error) {
                // Alert your error to your user
                Alert('boo');
            });

        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});

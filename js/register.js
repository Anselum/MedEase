const firebaseConfig = {
    apiKey: "AIzaSyDxXaWu2pmgm92k7_3Ve9hMbKHFoIxhHok",
    authDomain: "login-page-7a92e.firebaseapp.com",
    databaseURL: "https://login-page-7a92e-default-rtdb.firebaseio.com",
    projectId: "login-page-7a92e",
    storageBucket: "login-page-7a92e.appspot.com",
    messagingSenderId: "50824922252",
    appId: "1:50824922252:web:f21ec36a861c104f0167a9",
    measurementId: "G-JGGJZJD4TN"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

function register() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value


    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                email: email,
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).set(user_data)

            alert('User Created!!')
        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}




// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

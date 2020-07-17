
// $(document).ready(function() {
//           $('.forgot').click(function(){
//               alert("verification is sent to your mail");
//           });
//
//         });
//


//password verification
// var userlist=[
//  {
//   email: "admin@beehyv.com" ,
//   password: "Admin1@beehyv"
//   },
//   {
//   email: "vineetks@beehyv.com" ,
//   password: "Admin2@beehyv"
//   },
//   {
//   email: "sreejith@beehyv.com" ,
//   password: "Admin3@beehyv"
//   },
//   {
//   email: "ramu@beehyv.com" ,
//   password: "Admin4@beehyv"
//   },
//   {
//   email: "rohith@beehyv.com" ,
//   password: "Admin5@beehyv"
//   }
// ]
//
// var myJSON= JSON.stringify(userlist);
//
//
// function getinfo(){
//
//   var email= document.getElementById("emaillg");
//   var password= document.getElementById("passwordlg");
//
//   var check= JSON.parse(myJSON);
//
//   for(i=0; i< userlist.length ; i++){
//     if( username.value == check[i].username && password.value == check[i].password ){
//       // window.location = "file:///C:/Users/Sreejith%20K/Desktop/Shopping%20Cart/Main_page/main.html"
//       alert("you are signed in");
//       break;
//     }
//
//   }
//
//   alert("check your username or password");
// }
//


//end of password verification




// password validation js code
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

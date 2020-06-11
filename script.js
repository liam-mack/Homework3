
// Assignment Code
var generateBtn = document.querySelector("#generate");
var promptBtn = document.querySelector("#initiate");
var length = document.getElementById("charlen");
var lwr = document.getElementById("lwr");
var upr = document.getElementById("upr");
var num = document.getElementById("num");
var spec = document.getElementById("spec");

var arr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arr2 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var arr3 = ['1','2','3','4','5','6','7','8','9','0'];
var arr4 = ['!','@','#','$','%','^','&','*'];
var pwarr = [];

// Write password to the #password input
function writePassword() {
  var passwordtext = document.getElementById("password");

  passwordtext.value = localStorage.getItem("randpw");
}
// Gather password profile name
function prmpt(){
  var nameh = document.getElementById("userhd");
  var name = prompt("Please enter a Profile name for your password (Twitter, Facebook, etc.)");
    if (name == null){
      return;
    }
    if(name === ""){
      nameh.textContent = ("Default")
    }else{
      nameh.textContent = name
    }
  
  var profile = nameh.textContent;
  localStorage.setItem("Profile",profile);
  unHide();
}

// Unhide Password Criteria Form
function unHide() {
  var pwcrit = document.getElementById("pwcrit");

  if (pwcrit.style.display === "none") {
    pwcrit.style.display = "block";
  } else {pwcrit.style.display = "block";
  }
}

// Unhide buttons for saved passwords
function bttns(){
    var x = document.getElementById("buttons")
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Function to check user inputted password criteria
function getCrit(){
  var tlength = document.getElementById("charlen");
  var check = document.getElementsByClassName("crit");
  
  if (tlength.value > 7 && tlength.value < 129){
    i = 1;
    x = 0;
    while (i < 5){
      if (check[i].checked === true){
        checker(i);
        i += 1;
      }else{
        i += 1;
      }
    }
    var total = tlength.value;

    localStorage.setItem("length",total);
    generatePassword();
  }else{alert("Please try again. To avoid this in the future, please select a number between 8 and 128.");
  }
}

// Assess criteria and create matching array
function checker (i){
    if(i === 1){
        pwarr = pwarr.concat(arr1);
    }
    else if (i === 2){
        pwarr = pwarr.concat(arr2);
    }
    else if (i === 3){
        pwarr = pwarr.concat(arr3);
    }
    else{
        pwarr = pwarr.concat(arr4);
    }
}

// Generate password from established array
function generatePassword(){
  var t = localStorage.getItem("length");
  var pass = "";
  var randomchar = pwarr[Math.floor(Math.random() * pwarr.length)];

      while (pass.length < t){
        pass = pass + randomchar;
        var randomchar = pwarr[Math.floor(Math.random() * pwarr.length)];
      } 

  localStorage.setItem("randpw", pass);
}

writePassword()
promptBtn.addEventListener("click", prmpt);
generateBtn.addEventListener("click",getCrit);

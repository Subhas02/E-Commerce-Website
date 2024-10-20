/*Side Navbar*/

var sidenav = document.querySelector(".side-navbar");

function shownavbar() {
  sidenav.style.left = "0";
}
function closenavbar() {
  sidenav.style.left = "-60%";
}

/*Contact Form*/

function inputvalue() {
  var nametext = document.getElementById("nametext");
  var name = nametext.value;
  console.log(name);
}

function emailid() {
  var emailtext = document.getElementById("emailtext");
  var email = emailtext.value;
  console.log(email);
}

function description() {
  var destext = document.getElementById("destext");
  var des = destext.value;
  console.log(des);
}

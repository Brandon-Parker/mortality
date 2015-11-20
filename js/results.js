var username = localStorage.hiphopopotamus;
var madLib = localStorage.rhymenoceros;
var greeting = document.getElementById("greeting");
var madLibSection = document.getElementById("madLib");
var goBack = document.getElementById("goBack");

//changed hell to Hello, mad lib to Mad Lib//
greeting.innerHTML =  "Hello, " + username + ". Here is your Mad Lib!";
madLibSection.innerHTML = madLib;

goBack.addEventListener("click", function() {
  localStorage.removeItem("hiphopopotamus");
  localStorage.removeItem("rhymenoceros");
  window.location = "mortality/index.html";
});

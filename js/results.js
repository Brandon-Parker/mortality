var username = localStorage.hiphopopotamus;
var madLib = localStorage.rhymenoceros;
var greeting = document.getElementById("greeting");
var madLibSection = document.getElementById("madLib");
var goBack = document.getElementById("goBack");

greeting.innerHTML =  "hello, " + username + ". Here is your mad lib!";
madLibSection.innerHTML = madLib;

goBack.addEventListener("click", function() {
  localStorage.removeItem("hiphopopotamus");
  localStorage.removeItem("rhymenoceros");
  window.location = "../html/index.html";
});

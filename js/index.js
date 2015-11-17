function storeData() {
  var inputEl = document.getElementById("input").value;
  localStorage.setItem("name", JSON.stringify(inputEl));
  console.log(inputEl);
}

function getDataOut() {
  var fill = document.getElementById("getUserInput");
  var getData = localStorage.getItem("name");
  var parsedData = JSON.parse(getData);
  console.log(parsedData);
  fill.textContent = parsedData;
}

var buttonAction = document.getElementById("button");
buttonAction.addEventListener("click", storeData);

// var noun1 = [];
// var noun2 = [];
// var noun3 = [];
// var adjective1 = [];
// var adjective2 = [];
// var adjective3 = [];
// var verb1 = [];
// var verb2 = [];
// var verb3 = [];

getDataOut();
var nouns = [];
var adjectives = [];
var verbs = [];

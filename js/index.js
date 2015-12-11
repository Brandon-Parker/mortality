var stories = {} //Needs to be populated from JSON

function getSelectedMood() {
  var radios = document.getElementsByName("mood");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return stories[radios[i].id];
    }
  }
}

function getUserChoices() {
  var choices = {
    nouns: [],
    adjectives: [],
    verbs: []
  };

  var userNouns = document.getElementsByClassName("noun");
  for (var i = 0; i < userNouns.length; i++) {
    choices.nouns.push(userNouns[i].value);
  }

  var userAdjectives = document.getElementsByClassName("adj");
  for (var i = 0; i < userAdjectives.length; i++) {
    choices.adjectives.push(userAdjectives[i].value);
  }

  var userVerbs = document.getElementsByClassName("verb");
  for (var i = 0; i < userVerbs.length; i++) {
    choices.verbs.push(userVerbs[i].value);
  }

  return choices;
}

function plugInMadLibs (mood, listOfChoices) {
  mood = mood.replace(/\[verb1\]/g, "<span class=\"choice\">" + listOfChoices.verbs[0] + "</span>");
  mood = mood.replace(/\[verb2\]/g, "<span class=\"choice\">" + listOfChoices.verbs[1] + "</span>");
  mood = mood.replace(/\[verb3\]/g, "<span class=\"choice\">" + listOfChoices.verbs[2] + "</span>");
  mood = mood.replace(/\[noun1\]/g, "<span class=\"choice\">" + listOfChoices.nouns[0] + "</span>");
  mood = mood.replace(/\[noun2\]/g, "<span class=\"choice\">" + listOfChoices.nouns[1] + "</span>");
  mood = mood.replace(/\[noun3\]/g, "<span class=\"choice\">" + listOfChoices.nouns[2] + "</span>");
  mood = mood.replace(/\[adj1\]/g, "<span class=\"choice\">" + listOfChoices.adjectives[0] + "</span>");
  mood = mood.replace(/\[adj2\]/g, "<span class=\"choice\">" + listOfChoices.adjectives[1] + "</span>");
  mood = mood.replace(/\[adj3\]/g, "<span class=\"choice\">" + listOfChoices.adjectives[2] + "</span>");

  return mood;
}

document.getElementById("resultsForm").addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.setItem("hiphopopotamus", document.getElementById("username").value);
  var mood = getSelectedMood();
  var choices = getUserChoices();
  var completedMadLib = plugInMadLibs(mood, choices);
  localStorage.setItem("rhymenoceros", completedMadLib);
  window.location = "html/results.html";
});

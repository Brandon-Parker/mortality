var madLib = {};
madLib.stories = [];
madLib.getStories = function() {
  $.getJSON('js/stories.json', madLib.buildStoryArray)
    .fail(function(){
      console.log('Failed to get stories.json');
    });
};
madLib.buildStoryArray = function(storyJSON) {
  storyJSON.forEach(function(item){
    var story = new Story(item);
    madLib.stories.push(story);
  });
  console.log(madLib.stories);
};

// function getSelectedMood() {
//   var radios = document.getElementsByName('mood');
//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       return stories[radios[i].id];
//     }
//   }
// }
//
// function getUserChoices() {
//   var choices = {
//     nouns: [],
//     adjectives: [],
//     verbs: []
//   };
//
//
// function plugInMadLibs (mood, listOfChoices) {
//   mood = mood.replace(/\[verb1\]/g, "<span class=\"choice\">" + listOfChoices.verbs[0] + "</span>");
//   mood = mood.replace(/\[verb2\]/g, "<span class=\"choice\">" + listOfChoices.verbs[1] + "</span>");
//   mood = mood.replace(/\[verb3\]/g, "<span class=\"choice\">" + listOfChoices.verbs[2] + "</span>");
//   mood = mood.replace(/\[noun1\]/g, "<span class=\"choice\">" + listOfChoices.nouns[0] + "</span>");
//   mood = mood.replace(/\[noun2\]/g, "<span class=\"choice\">" + listOfChoices.nouns[1] + "</span>");
//   mood = mood.replace(/\[noun3\]/g, "<span class=\"choice\">" + listOfChoices.nouns[2] + "</span>");
//   mood = mood.replace(/\[adj1\]/g, "<span class=\"choice\">" + listOfChoices.adjectives[0] + "</span>");
//   mood = mood.replace(/\[adj2\]/g, "<span class=\"choice\">" + listOfChoices.adjectives[1] + "</span>");
//   mood = mood.replace(/\[adj3\]/g, "<span class=\"choice\">" + listOfChoices.adjectives[2] + "</span>");
//
//   return mood;
// }
//
// document.getElementById("resultsForm").addEventListener("submit", function(event) {
//   event.preventDefault();
//   localStorage.setItem("hiphopopotamus", document.getElementById("username").value);
//   var mood = getSelectedMood();
//   var choices = getUserChoices();
//   var completedMadLib = plugInMadLibs(mood, choices);
//   localStorage.setItem("rhymenoceros", completedMadLib);
//   window.location = "html/results.html";
// });

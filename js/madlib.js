var madLib = {};
madLib.stories = [];

madLib.userName = '';
madLib.mood = '';
madLib.nouns = [];
madLib.adjs = [];
madLib.verbs = [];

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

madLib.watchForm = function() {
  $('#inputForm').on('change', 'input', madLib.getValues);
};

madLib.getValues= function() {
  madLib.userName = $('#username').val();
  madLib.mood = $('input[name="mood"]:checked').val();
  var noun1 = $('#nounOne').val();
  var noun2 = $('#nounTwo').val();
  var noun3 = $('#nounThree').val();
  var adj1 = $('#adjOne').val();
  var adj2 = $('#adjTwo').val();
  var adj3 = $('#adjThree').val();
  var verb1 = $('#verbOne').val();
  var verb2 = $('#verbTwo').val();
  var verb3 = $('#verbThree').val();

  madLib.nouns = [noun1, noun2, noun3];
  madLib.adjs = [adj1, adj2, adj3];
  madLib.verbs = [verb1, verb2, verb3];

  console.log(madLib.mood);
  console.log(madLib.nouns);
};


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


madLib.handleSubmit = function() {
  $('#buttonGetMyResults').on('click', function(event) {
    event.preventDefault();
    console.log('Hi!!!');
    console.log(madLib);
    madLibString = JSON.stringify(madLib);
    console.log(madLibString);
    localStorage.setItem('madLib', madLibString);
    window.location = 'results.html';
  });
};

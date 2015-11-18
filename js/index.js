function storeData() {
  var inputEl = document.getElementById("input").value;
  localStorage.setItem("name", JSON.stringify(inputEl));
  console.log(inputEl);

  var theStory = document.getElementById("resultForm");
  theStory.innerHTML = plugInMadLibs(getSelectedStory(),getUserChoices());
}

function getDataOut() {
  var fill = document.getElementById("getUserInput");
  var getData = localStorage.getItem("name");
  var parsedData = JSON.parse(getData);
  console.log(parsedData);
  //fill.textContent = parsedData;
}

function getSelectedStory() {
  //http://stackoverflow.com/questions/9618504/get-radio-button-value-with-javascript
  var radios = document.getElementsByName('mood');

  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          // return the selected story without madlibs plugged in
          return stories[radios[i].id];

          // only one radio can be logically checked, don't check the rest
          break;
      }
  }
}

function getUserChoices() {

  var listOfChoices = {
    nounList: [],
    adjectiveList: [],
    verbList: []
  }

  var nouns = document.getElementsByClassName("noun");
  for (var i = 0; i < nouns.length; i++) {
    listOfChoices.nounList.push( nouns[i].value );
  }

  var adjectives = document.getElementsByClassName("adj");
  for (var i = 0; i < adjectives.length; i++) {
    listOfChoices.adjectiveList.push( adjectives[i].value );
  }

  var verbs = document.getElementsByClassName("verb");
  for (var i = 0; i < verbs.length; i++) {
    listOfChoices.verbList.push( verbs[i].value );
  }

  return listOfChoices;
}

function plugInMadLibs (story, listOfChoices) {
  story.replace("[verb1]",listOfChoices.verbList[0]);
  story.replace("[verb2]",listOfChoices.verbList[1]);
  story.replace("[verb3]",listOfChoices.verbList[2]);
  story.replace("[noun1]",listOfChoices.nounList[0]);
  story.replace("[noun2]",listOfChoices.nounList[1]);
  story.replace("[noun3]",listOfChoices.nounList[2]);
  story.replace("[adj1]",listOfChoices.adjectiveList[0]);
  story.replace("[adj2]",listOfChoices.adjectiveList[1]);
  story.replace("[adj3]",listOfChoices.adjectiveList[2]);
  return story;
}

var buttonAction = document.getElementById("button");
buttonAction.addEventListener("click", storeData);

getDataOut();

//Business Logic

//wordCounter
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  
  return wordCount;
}

//numberofOccurancesInText

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

//boldpassage function

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}
// UI Logic




$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $('#bolded-passage').html(boldPassage(word, passage))
  });
});

//utility logic 
function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length) === 0);
}


// const word = "zoinks"
// const text = "paragraph info zoinks"
// function excludeOffensiveWords(word, text) {
//   // let wordCount = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) {
//     let changedArray = wordArray.filter(element => e ); {
//       return changedArray;
      
//     };
//   });
// };

//examples of usable functions for practice extending business logic

inputText = 'hey zoinks whats loopdaloop up muppeter'

function omitsBadWords(inputText, badWord) {
  // ['hey', 'there'...]
  const arrayOfInputText = inputText.split(" ");
  let newArrayOfInputText = []
  arrayOfInputText.forEach(function(text){
    if (badWord.includes(text.toLowerCase())=== false){
      newArrayOfInputText.push(text)
    }
    
    
  
});
return newArrayOfInputText.join(' ');
};





function removeBadWords(textWeWantToSearch){
  const wordArray = textWeWantToSearch.split(" "); //created array from textWeWantToSearch
  let arrayPostitionCounter = 0;
  wordArray.forEach(function(element){
    arrayPostitionCounter++;
    if ("biffaroni" === element){
      wordArray[arrayPostitionCounter-1] = "";
    }
    else if ("zoinks" === element){
      wordArray[arrayPostitionCounter-1] = "";
    }
    else if ("muppeteer" === element){
      wordArray[arrayPostitionCounter-1] = "";
    }
    else if("loopdaloop" === element) {
      wordArray[arrayPostitionCounter -1] = "";
    }
  });
  return wordArray.join(" ");

}

let textWeWantToSearch = "this is a bad word: biffaroni it has been deleted zoinks muppeteer loopdaloop";
removeBadWords(textWeWantToSearch);

function omitOffensiveWords(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let goodtext = []
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!offensiveWords.includes(element.toLowerCase())) {
      goodtext.push(element);
    }
  });

  return goodtext;
}
const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
omitOffensiveWords(offensiveWords, "hi how loopdaloop you Zoinks zoinks ZOINKS are you a muppeteer");
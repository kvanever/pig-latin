// backend logic
var pigLatin = function(string) {
  if (checkCase(string.charAt(0))) {
    var upperCase = true;
    string = firstToLowerCase(string);
  }

  if (vowel(string.charAt(0))) {
    string += "ay";
  }
  else {

    for (var firstVowelIndex = 0; vowel(string.charAt(firstVowelIndex)) === false; firstVowelIndex++) {
    }

    if (string.charAt(firstVowelIndex-1) === "q" && string.charAt(firstVowelIndex) === "u") {
      string = string.substr(firstVowelIndex + 1) + string.substr(0, firstVowelIndex + 1) + "ay";
    }
    else {
      string = string.substr(firstVowelIndex) + string.substr(0, firstVowelIndex) + "ay";
    }
  }

  if (upperCase === true) {
    string = firstToUpperCase(string);
  }

  return string;
}

var vowel = function(letter) {
  return (/^[aeiou]$/i).test(letter);
}

var checkCase = function(letter) {
  if (letter == letter.toUpperCase()) {
  return true;
  }
}

function firstToUpperCase(string) {
    string = string.substr(0, 1).toUpperCase() + string.substr(1);
    return string;
}

function firstToLowerCase(string) {
  string = string.charAt(0).toLowerCase() + string.slice(1);
  return string;
}

var pigLatinSentence = function(string) {
  var array = string.split(' ');
  for(i=0; i<array.length; i++)  {
    if (checkNumber(array[i].charAt(0))===false)  {
      if (checkPunctuation(array[i].charAt(array[i].length-1))) {
        var punctuation = array[i].charAt(array[i].length-1);
        array[i] = array[i].slice(0, array[i].length -1);
        array[i] = pigLatin(array[i]);
        array[i] += punctuation;
      }
      else {
      array[i]=pigLatin(array[i]);
      }
    }
  }
  var output = array.join(" ");
  return output;
}

var checkPunctuation = function(symbol){
  return (/^[!@#$%^&*(),.?':;]$/i).test(symbol)
}

var checkNumber = function(symbol){
  return (/^[1234567890]$/i).test(symbol)
}

// frontend logic
$(document).ready(function(){
  $("form").submit(function(event) {
    var input = $("input").val();
    var output = pigLatinSentence(input);
    alert(output);
    event.preventDefault();
  })
})

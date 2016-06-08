// backend logic
var pigLatin = function(string) {
  debugger;
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
  return string;
  }
}

var vowel = function(letter) {
  return (/^[aeiou]$/i).test(letter);
}

// frontend logic
$(document).ready(function(){
  $("form").submit(function(event) {
    var string = $("input").val();
    string = pigLatin(string);
    alert(string);
    event.preventDefault();
  })
})

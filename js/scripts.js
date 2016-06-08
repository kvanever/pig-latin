// backend logic
var pigLatin = function(string) {
  if (vowel(string.charAt(0))) {
    string += "ay";
  } else {
    var num = 1;
    string = string.substr(num) + string.substr(0, num) + ("ay");
  }
  return string;
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

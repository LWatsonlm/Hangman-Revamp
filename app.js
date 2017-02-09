
// declaration function
function buttonClicked() {
  var secretWord = document.getElementById("secretWord").value
  var wordSplit = secretWord.split("")
  console.log(secretWord);
  console.log(wordSplit);
  didItWork()
}

function didItWork() {
  // out of scope example
  console.log(wordSplit);
}

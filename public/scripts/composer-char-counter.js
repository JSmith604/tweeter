$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    let charactersLeft = 140 - this.value.length;
    let charCounter = $('#char-counter');
    charCounter.text(charactersLeft);
    if(charactersLeft < 0) {
      charCounter.css('color', 'red');
    } else {
      charCounter.css('color', '#545149');
    }
  })
});



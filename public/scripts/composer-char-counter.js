$(document).ready(function() {
  $("#tweet-text").on('keypress', function() {
    console.log(this);
  })
});


// A non jquery solution:

// window.addEventListener("load", (event) => {
//   const updateCharacterCounter = (parentQuerySelector) => {
//   document
//     .querySelector(parentQuerySelector)
//     .addEventListener("input", function(event) {
//       const remainingCharacters = 140 - this.value.length;
//       const counter = document.querySelector("counter");
//       if (remainingCharacters >= 0) {
//         counter.classList.remove("over-characters");
//       } else {
//         counter.classList.add("over-characters");
//       }
//       counter.value = remainingCharacters.toString();
//     });
//   };
//     updateCharacterCounter(#tweet-text");
// });
const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
const text = "Welcome to my website";
let index = 0;

function typeText() {
  document.getElementById("typing-text").innerHTML = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
  setTimeout(typeText, 50);
}

typeText();

$(document).ready(function() {
    $('#myElement').fadeIn(1000);
});
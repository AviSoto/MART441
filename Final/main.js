const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
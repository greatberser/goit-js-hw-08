import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

function updateLocalStorage() {
  const feedbackData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
}

function setFormValuesFromLocalStorage() {
  const savedFeedbackData = localStorage.getItem('feedback-form-state');
  if (savedFeedbackData) {
    const feedbackData = JSON.parse(savedFeedbackData);
    emailInput.value = feedbackData.email;
    messageTextarea.value = feedbackData.message;
  }
}

setFormValuesFromLocalStorage();

emailInput.addEventListener('input', throttle(updateLocalStorage, 500));
messageTextarea.addEventListener('input', throttle(updateLocalStorage, 500));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });

  emailInput.value = '';
  messageTextarea.value = '';
});

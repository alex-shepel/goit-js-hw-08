const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const formStateStored = JSON.parse(localStorage.getItem('feedback-form-state'));
const formStateCurrent = formStateStored ? formStateStored : {};

const onInput = e => {
  formStateCurrent[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formStateCurrent));
};

const onSubmit = e => {
  e.preventDefault();
  console.log('formStateCurrent :>> ', formStateCurrent);
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
};

if (formStateStored) {
  refs.input.value = formStateStored.email;
  refs.textarea.value = formStateStored.message;
}

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

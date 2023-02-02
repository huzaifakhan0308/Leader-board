import './style.css';
import Object from './modules/object.js';
import * as API from './modules/Api.js';
import element from './modules/element.js';

document.querySelector('.refresh-button').addEventListener('click', (async () => {
  const data = await API.get();
  element(data);
}));

const userInput = document.querySelector('input[type="text"]');
const scoreInput = document.querySelector('input[type="number"]');

document.querySelector('.form-submit-button').addEventListener('click', (() => {
  if (userInput.value !== '' && scoreInput.value !== '') {
    const object = new Object(userInput.value, scoreInput.value);
    API.post(object);
    userInput.value = '';
    scoreInput.value = '';
  }
}));
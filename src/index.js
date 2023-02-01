import './style.css';
import Function from './modules/function.js';

const functions = new Function();

document.querySelector('.form-submit-button').addEventListener('click', (() => {
  functions.add();
}));
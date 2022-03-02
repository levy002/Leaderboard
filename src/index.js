import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import addScore from './modules/addScore.js';
import { createGame } from './modules/createGame.js';
import getScoresData from './modules/getData.js';

const userName = document.getElementById('userName');
const score = document.getElementById('score');
const form = document.getElementById('form');
const refreshButton = document.getElementById('refresh-btn');

createGame('foootball');
form.addEventListener('submit', () => {
  addScore(userName.value, score.value);
  form.reset();
});

refreshButton.addEventListener('click', () => {
  getScoresData();
});
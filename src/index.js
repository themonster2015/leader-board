import './style.css';
import fetchScores from './fetchScores';
import postScore from './postScore';
import fillData from './fillData';

const refresh = document.getElementById('refreshScores');
const submitScore = document.querySelector('form');
const user = document.getElementById('name');
const score = document.getElementById('score');

refresh.addEventListener('click', async () => {
  fillData(await fetchScores());
});

submitScore.addEventListener('submit', (e) => {
  e.preventDefault();
  postScore(user.value, Number(score.value));
  user.value = '';
  score.value = '';
});

window.onload = async () => fillData(await fetchScores());

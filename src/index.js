import './style.css';
import fetchScores from './fetchScores';
import postScore from './postScore';
import fillData from './fillData';

const refresh = document.getElementById('refreshScores');
const submitScore = document.querySelector('form');
const name = document.getElementById('name');
const score = document.getElementById('score');

refresh.addEventListener('click', async () => {
  fillData(await fetchScores());
});

submitScore[0].addEventListener('click', (e) => {
  e.preventDefault();
  postScore(name.value, score.value);
  name.value = '';
  score.value = '';
});

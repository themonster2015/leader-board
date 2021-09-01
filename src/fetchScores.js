const fetchScores = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WyWIaxHGGQkxp04ftWLN/scores')
    .then((res) => res.json())
    .then((data) => data.result);
  return data;
};

export default fetchScores;
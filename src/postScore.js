const postScore = (user, score) => {
  const data = { user, score };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WyWIaxHGGQkxp04ftWLN/scores',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default postScore;
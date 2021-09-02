const fillData = (scores) => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  scores.forEach((score) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML = `${score.user} - ${score.score}`;
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
};

export default fillData;
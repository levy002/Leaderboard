const allScores = document.getElementById('allScores');
const quote = document.getElementById('quote');
const noRecents = document.getElementById('no_recent');
const recents = document.getElementById('recent');

const populate = (data) => {
  allScores.replaceChildren();
  data.sort((a, b) => b.score - a.score);
  if (data.length !== 0) {
    allScores.style.display = 'block';
    quote.style.display = 'none';
    noRecents.style.display = 'none';
    recents.style.display = 'block';
  } else {
    recents.style.display = 'none';
  }
  data.map((s) => {
    const scoreInfo = document.createElement('li');
    scoreInfo.id = 'scoreInfo';

    const username = document.createElement('p');
    username.id = 'name';
    username.textContent = s.user;
    scoreInfo.appendChild(username);

    const userscore = document.createElement('p');
    userscore.id = 'score';
    userscore.textContent = s.score;
    scoreInfo.appendChild(userscore);

    allScores.appendChild(scoreInfo);
    return s;
  });
};

export default populate;

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
    allScores.style.display = 'block';
    quote.style.display = 'none';
    noRecents.style.display = 'none';
    const noScores = document.createElement('h3');
    noScores.className = 'align-self-center text-warning text-center';
    noScores.textContent = 'No Recent Scores!!';
    allScores.appendChild(noScores);
  }
  data.map((s) => {
    const scoreInfo = document.createElement('li');
    scoreInfo.id = 'scoreInfo';

    const userDiv = document.createElement('div');
    userDiv.className = 'pos-name';

    const userPosition = document.createElement('p');
    userPosition.textContent = `${data.indexOf(s) + 1}.`;
    userDiv.appendChild(userPosition);

    const username = document.createElement('p');
    username.id = 'name';
    username.textContent = s.user;
    userDiv.appendChild(username);

    scoreInfo.appendChild(userDiv);

    const userscore = document.createElement('p');
    userscore.id = 'score';
    userscore.textContent = s.score;
    scoreInfo.appendChild(userscore);

    allScores.appendChild(scoreInfo);
    return s;
  });
};

export default populate;

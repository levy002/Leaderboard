const scoresSection = document.getElementById('scores-section');

const populate = (data) => {
  scoresSection.replaceChildren();
  data.map((s) => {
    const scoreInfo = document.createElement('li');
    scoreInfo.id = 'scoreInfo';

    const username = document.createElement('p');
    username.id = 'name';
    username.textContent = `${s.user} :`;
    scoreInfo.appendChild(username);

    const userscore = document.createElement('p');
    userscore.id = 'score';
    userscore.textContent = s.score;
    scoreInfo.appendChild(userscore);

    scoresSection.appendChild(scoreInfo);
    return s;
  });
};

export default populate;

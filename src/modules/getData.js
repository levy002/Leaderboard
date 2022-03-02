import populate from './displayScores.js';

const getScoresData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/el-1/scores/';
  let data = await fetch(url);
  data = await data.json();
  populate(data.result);
};

export default getScoresData;
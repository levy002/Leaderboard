import populate from './displayScores.js';

const getScoresData = async (id) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
  let data = await fetch(url);
  data = await data.json();
  populate(data.result);
};

export default getScoresData;
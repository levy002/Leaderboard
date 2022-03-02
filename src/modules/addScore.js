import { url } from './createGame.js';

const gameId = 'el-1';
const addScore = async (name, score) => {
  const response = await fetch(`${url}/${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export default addScore;
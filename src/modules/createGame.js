const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const createGame = async (gameName) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({ name: gameName }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export { url, createGame };

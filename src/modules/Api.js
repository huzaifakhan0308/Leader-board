const post = async (object) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZEkSj3aHvfo77HaUbGSz/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    })
    .then((res) => res.json())
    .catch((error) => error);
  return response;
};

const get = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZEkSj3aHvfo77HaUbGSz/scores/',
    {
      method: 'GET',
    });
  const data = await res.json();
  return data.result;
};

export { post, get };

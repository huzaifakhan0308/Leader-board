export const setItem = (array) => {
  localStorage.setItem('leaderboard', JSON.stringify(array));
};

export const getItem = () => JSON.parse(localStorage.getItem('leaderboard'));
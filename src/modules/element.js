const element = (data) => {
  document.querySelector('.ul').innerHTML = '';
  data.forEach((element) => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    h1.innerHTML = `name: ${element.user}`;
    const h2 = document.createElement('h2');
    h2.innerHTML = `score: ${element.score}`;
    li.append(h1, h2);
    document.querySelector('.ul').appendChild(li);
  });
};

export default element;
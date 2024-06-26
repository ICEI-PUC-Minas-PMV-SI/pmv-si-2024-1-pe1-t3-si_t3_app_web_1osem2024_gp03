import { menuActive, retriveArticles } from './utils.js';
setTimeout(menuActive, 100);

const renderArticles = async (articlesArr) => {
  const articleContainer = document.querySelector('.articleContainer');
  while (articleContainer.firstChild) {
    articleContainer.removeChild(articleContainer.firstChild);
  }

  const articles = await articlesArr;
  articles.forEach((article) => {
    const card = document.createElement('div');
    card.className = 'card me-5';

    // Create the image element
    const img = document.createElement('img');
    img.src = article.img;
    img.className = 'card-img-top';
    img.alt = '...';

    // Create the card body element
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create the card title element
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = article.title;

    // Create the card text element
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = article.summary;

    // Create the button element
    const button = document.createElement('a');
    button.href = 'artigo-item.html';
    button.className = 'article__button btn btn-success';
    button.textContent = 'Ler mais';
    button.dataset.id = article.id;

    // Append all elements to their respective parents
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);

    // Append the card to the article container
    const articleContainer = document.querySelector('.articleContainer');
    articleContainer.appendChild(card);
  });

  setIdOnButtons();
};
renderArticles(retriveArticles());

const setIdOnButtons = () => {
  const buttons = document.querySelectorAll('.article__button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = event.target.dataset.id;
      localStorage.setItem('articleSelected', id);
      window.open('artigo.html', '_self');
    });
  });
};

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

const findArticle = async () => {
  const search = document.querySelector('.search').value.toLowerCase();
  const articles = await retriveArticles();
  const result = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search) ||
      article.summary.toLowerCase().includes(search) ||
      article.text.toLowerCase().includes(search) ||
      article.tags.some((e) => e.toLowerCase().includes(search))
  );

  renderArticles(result);
};

const search = document.querySelector('.search');
search.addEventListener('keyup', debounce(findArticle, 150));

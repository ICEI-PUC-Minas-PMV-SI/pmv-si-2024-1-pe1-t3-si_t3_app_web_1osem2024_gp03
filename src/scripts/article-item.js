import { menuActive, getData, retriveArticles } from './utils.js';
setTimeout(menuActive, 100);

const articleId = getData('articleSelected');

const findAndRetriveSelectedArticle = async (articleId) => {
  const articles = await retriveArticles();

  return articles.filter((e) => e.id === +articleId)[0];
};

const renderArticle = async () => {
  const article = await findAndRetriveSelectedArticle(articleId);

  const title = document.querySelector('.tittle__header');
  title.innerHTML = article.title;

  const img = document.querySelector('.img__header');
  img.src = article.img;

  const tag = document.querySelector('.tag');
  article.tags.forEach((element) => {
    const newElement = document.createElement('span');
    newElement.className = 'badge rounded-pill text-bg-light';
    newElement.textContent = element;
    tag.appendChild(newElement);
  });

  const content = document.querySelector('.content');
  content.innerHTML = article.text;

  const source = document.querySelector('.source');
  source.innerHTML = `Fonte: ${article.source}`;
};
renderArticle();

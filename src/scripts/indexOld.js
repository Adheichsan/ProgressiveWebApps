import '../styles/main.css';
import '../styles/responsive.css';

// console.log('Hello Coders! :)');
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});
hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});
main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

import('../DATA.json').then(({ default: jsonData }) => {
  // console.log(jsonData)
  const datas = jsonData.restaurants;
  let dataList = '';
  datas.forEach((data) => {
    dataList += `
        <div class="list_item" tabindex="0">
            <img class="list_item_thumb" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
            <div class="city">${data.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : ${data.rating}
                </p>
                <h1 class="list_item_title"><a href="#">${data.name}</a></h1>
                <div class="list_item_desc">${data.description.slice(0, 150)}...</div>
            </div>
        </div>
        `;
  });
  document.querySelector('#tes').innerHTML = dataList;
});

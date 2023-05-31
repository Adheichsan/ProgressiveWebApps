import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Favorites = {
  async render() {
    return `
      <main id="content" tabindex="0">
        <section class="content">
            <div class="latest">  
                <h1>Restaurant favourite</h1>
                <div class="list" id="list"></div>
            </div>
        </section>
      </main>
  `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#list');
    const mainContainer = document.querySelector('#content');

    if (!restaurants.length) {
      mainContainer.innerHTML += `
        <div class="latest">
          <h1>belum ada restaurant favorit</h1>
        </div>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;

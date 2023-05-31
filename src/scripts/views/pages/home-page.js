import RestaurantSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const homePage = {
  async render() {
    return `
      <div class="hero">
        <div class="heroinner">
          <h1 class="hero-h1">For Fine Dine</h1>
          <h3 class="hero-h3">Best Place, Best Service</h3>
          <p class="hero-tagline">We will happy to see you in Our Restaurant</p>
          <h2 class="hero-btn">Get Started</h2>
        </div>
      </div>

      <main id="content">
          <section class="content">
              <div class="latest">  
                  <h1>Restaurant List</h1>
                  <div class="list" id="list"></div>
              </div>
          </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    // console.log(restaurants)
    const restaurantsContainer = document.querySelector('#list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default homePage;

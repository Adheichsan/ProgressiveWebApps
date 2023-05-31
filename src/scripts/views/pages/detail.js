import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-source';
import LikeButtonInitiator from '../../utils/like-button-intiator';
import { createRestaurantDetailTemplate } from '../templates/templates-creator';

const detail = {
  async render() {
    return `
      <main id="content" >
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      <main>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
      },
    });
  },
};

export default detail;

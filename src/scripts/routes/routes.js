import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import homePage from '../views/pages/home-page';

const routes = {
  '/': homePage, // default page
  '/homePage': homePage,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;

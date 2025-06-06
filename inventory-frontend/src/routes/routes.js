// src/routes/routes.js
import Dashboard from '../pages/Dashboard/Dashboard';
import ItemList from '../pages/Items/ItemList';

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/items",
    name: "Items",
    component: ItemList,
  },
];

export default routes;

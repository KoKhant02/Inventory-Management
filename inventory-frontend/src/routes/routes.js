// src/routes/routes.js
import ABCAnalysis from '../pages/ABCAnalysis/ABCAnalysisList';
import Categories from '../pages/Categories/CategoryList';
import Dashboard from '../pages/Dashboard/Dashboard';
import Departments from '../pages/Departments/DepartmentList';
import Inventory from '../pages/Inventory/InventoryItemList';
import ItemList from '../pages/Items/ItemList';
import Locations from '../pages/Locations/LocationList';
import Orders from '../pages/Orders/OrderList';
import Suppliers from '../pages/Suppliers/SupplierList';
import Users from '../pages/Users/UserList';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory,
  },
  {
    path: '/items',
    name: 'Items',
    component: ItemList,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/abc-analysis',
    name: 'ABC Analysis',
    component: ABCAnalysis,
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: Suppliers,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/departments',
    name: 'Departments',
    component: Departments,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
  },
];

export default routes;

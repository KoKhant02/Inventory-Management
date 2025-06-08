// src/routes/routes.js
import ABCAnalysis from '../pages/ABCAnalysis/ABCAnalysisList';
import Categories from '../pages/Categories/CategoryList';
import Dashboard from '../pages/Dashboard/Dashboard';
import Departments from '../pages/Departments/DepartmentList';
import Inventory from '../pages/Inventory/InventoryItemList';
import AddItem from '../pages/Items/AddItem';
import AddReceivedItem from '../pages/Items/AddReceivedItem';
import ItemList from '../pages/Items/ItemList';
import ItemProductDetails from '../pages/Items/ProductDetail';
import ItemProductEdit from '../pages/Items/ProductEdit';
import ItemProducts from '../pages/Items/ProductList';
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
    path: '/items',
    name: 'Items',
    component: ItemList,
  },
  {
    path: '/items/add',
    name: 'Add Item',
    component: AddItem,
  },
  {
    path: '/items/:itemId/products',
    name: 'Item Products',
    component: ItemProducts,
  },
  {
    path: '/items/:itemId/products/add',
    name: 'Add Item Product',
    component: AddReceivedItem,
  },
  {
    path: '/items/:itemId/products/:productId',
    name: 'Item Product Details',
    component: ItemProductDetails,
  },
  {
    path: '/items/:itemId/products/:productId/edit',
    name: 'Edit Item Product',
    component: ItemProductEdit,
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory,
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

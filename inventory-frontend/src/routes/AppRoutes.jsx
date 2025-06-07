// src/routes/AppRoutes.jsx
import { Navigate, Route, Routes } from 'react-router-dom';
import ABCAnalysis from '../pages/ABCAnalysis/ABCAnalysisList';
import Login from '../pages/Auth/Login';
import Categories from '../pages/Categories/CategoryList';
import Dashboard from '../pages/Dashboard/Dashboard';
import Departments from '../pages/Departments/DepartmentList';
import Inventory from '../pages/Inventory/InventoryItemList';
import ItemList from '../pages/Items/ItemList';
import Locations from '../pages/Locations/LocationList';
import Orders from '../pages/Orders/OrderList';
import Suppliers from '../pages/Suppliers/SupplierList';
import Users from '../pages/Users/UserList';

const isLoggedIn = true;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {isLoggedIn ? (
        <Route path="/*" element={<MainLayoutRoutes />} />
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

const MainLayoutRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/items" element={<ItemList />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/users" element={<Users />} />
    <Route path="/abc-analysis" element={<ABCAnalysis />} />
    <Route path="/suppliers" element={<Suppliers />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/departments" element={<Departments />} />
    <Route path="/locations" element={<Locations />} />
  </Routes>
);


export default AppRoutes;

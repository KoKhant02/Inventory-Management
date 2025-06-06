// src/routes/AppRoutes.jsx
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import ItemList from '../pages/Items/ItemList';

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
    <Route path="/items" element={<ItemList />} />
    {/* Add more routes here */}
  </Routes>
);


export default AppRoutes;

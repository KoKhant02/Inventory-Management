// src/routes/AppRoutes.jsx
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Auth/Login';
import routes from './routes';

const isLoggedIn = true;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {isLoggedIn ? (
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          {routes.map(({ path, name, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component page={name} />}
            />
          ))}
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

export default AppRoutes;

import { Col, Container, Row } from 'react-bootstrap';
import { matchPath, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getPageName = (path) => {
    const routes = [
      { path: '/dashboard', name: 'Dashboard' },
      { path: '/inventory', name: 'Inventory' },
      { path: '/items', name: 'Items' },
      { path: '/items/add', name: 'Add Item' },
      { path: '/items/:itemId/products', name: 'Item Products' },
      { path: '/items/:itemId/products/add', name: 'Add Item Product' },
      { path: '/items/:itemId/products/:productId', name: 'Item Product Details' },
      { path: '/items/:itemId/products/:productId/edit', name: 'Edit Item Product' },
      { path: '/orders', name: 'Orders' },
      { path: '/users', name: 'Users' },
      { path: '/abc-analysis', name: 'ABC Analysis' },
      { path: '/suppliers', name: 'Suppliers' },
      { path: '/categories', name: 'Categories' },
      { path: '/departments', name: 'Departments' },
      { path: '/locations', name: 'Locations' },
    ];

    for (const route of routes) {
      if (matchPath({ path: route.path, end: true }, path)) {
        return route.name;
      }
    }
    return '';
  };

  const currentPage = getPageName(currentPath);

  return (
    <div>
      <Header page={currentPage} />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <Sidebar page={currentPage} />
          </Col>
          <Col md={10} className="p-4">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainLayout;

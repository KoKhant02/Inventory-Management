// src/layouts/MainLayout.jsx
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Optional: Use route mapping to get page name if not passed via props
  const pageNames = {
    '/dashboard': 'Dashboard',
    '/inventory': 'Inventory',
    '/items': 'Items',
    '/orders': 'Orders',
    '/users': 'Users',
    '/abc-analysis': 'ABC Analysis',
    '/suppliers': 'Suppliers',
    '/categories': 'Categories',
    '/departments': 'Departments',
    '/locations': 'Locations',
  };

  const currentPage = pageNames[currentPath] || '';

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

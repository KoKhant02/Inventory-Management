import {
    Activity,
    Box,
    Building,
    Home,
    LayoutGrid,
    MapPin,
    PackageSearch,
    Share2,
    ShoppingCart,
    Users,
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ page }) => {
  const isActive = (name) => page === name;

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Company Name</h1>

      <div className="sidebar__section">
        <p className="sidebar__label">Discover</p>
        <a href="#" className={`sidebar__link ${isActive('Dashboard') ? 'sidebar__link--active' : ''}`}>
          <Home size={16} />
          <span>Dashboard</span>
        </a>
        <a href="#" className={`sidebar__link ${isActive('Items') ? 'sidebar__link--active' : ''}`}>
          <Box size={16} />
          <span>Items</span>
        </a>
        <a href="#" className={`sidebar__link ${isActive('Inventory') ? 'sidebar__link--active' : ''}`}>
          <PackageSearch size={16} />
          <span>Inventory</span>
        </a>
        <a href="#" className={`sidebar__link ${isActive('Orders') ? 'sidebar__link--active' : ''}`}>
          <ShoppingCart size={16} />
          <span>Orders</span>
        </a>
      </div>

      <div className="sidebar__section">
        <p className="sidebar__label">Admin</p>
        <a href="#" className={`sidebar__link ${isActive('Users') ? 'sidebar__link--active' : ''}`}>
          <Users size={16} />
          <span>Users</span>
        </a>
        <a href="#" className={`sidebar__link ${isActive('ABC Analysis') ? 'sidebar__link--active' : ''}`}>
          <Activity size={16} />
          <span>ABC Analysis</span>
        </a>
        <a href="#" className={`sidebar__link ${isActive('Suppliers') ? 'sidebar__link--active' : ''}`}>
          <Building size={16} />
          <span>Suppliers</span>
        </a>
        <a href="#" className={`sidebar__link ${isActive('Categories') ? 'sidebar__link--active' : ''}`}>
          <LayoutGrid size={16} />
          <span>Categories</span>
        </a>
        <a href="#" className={`sidebar__link ${isActive('Departments') ? 'sidebar__link--active' : ''}`}>
          <Share2 size={16} />
          <span>Departments</span>
        </a>
        <a href="#" className={`sidebar__link ${isActive('Locations') ? 'sidebar__link--active' : ''}`}>
          <MapPin size={16} />
          <span>Locations</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
